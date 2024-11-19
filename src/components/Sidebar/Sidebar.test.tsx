import Sidebar from './Sidebar';
import { beforeEach, describe, expect, it, vi, Mocked } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../test/vitest-setup';
import { cleanChannelOnline, rawChannels } from '../../test/testData';
import axios from 'axios';

vi.mock('axios');

const mockSetChannel = vi.fn();
const mockSetSidebarOpen = vi.fn();

const renderSidebar = (props = {}) => {
  const defaultProps = {
    isSidebarOpen: true,
    setChannel: mockSetChannel,
    setSidebarOpen: mockSetSidebarOpen,
    selectedChannel: '',
    ...props,
  };

  return render(<Sidebar {...defaultProps} />);
};

vi.mock('./helpers/mapChannelToDetail', () => ({
  __esModule: true,
  default: () => cleanChannelOnline,
}));

const mockedAxios = axios as Mocked<typeof axios>;

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // axios.get = vi.fn().mockResolvedValue(rawChannels);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderSidebar();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should close sidebar on mobile view', () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    renderSidebar({ isSidebarOpen: true });

    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('should fetch data and update state', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: rawChannels }));
    renderSidebar();

    await waitFor(() => {
      expect(mockSetChannel).toHaveBeenCalled();
    });
  });

  it('should filter channels based on filter and search state', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'ESL' },
    });

    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    expect(screen.queryByText('OgamingSC2')).not.toBeInTheDocument();
  });

  it('should update search state on handleSearch', () => {
    renderSidebar();

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'test' },
    });

    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('should update selected channel and close sidebar on handleChannelSelected', () => {
    const channel = { name: 'ESL_SC2', online: true };

    renderSidebar({ isSidebarOpen: true });

    fireEvent.click(screen.getByText('ESL_SC2'));

    expect(mockSetChannel).toHaveBeenCalledWith(channel);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('should display all channels when filter is set to "All"', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: '' },
    });

    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    expect(screen.getByText('OgamingSC2')).toBeInTheDocument();
  });

  it('should display only online channels when filter is set to "Online"', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.click(screen.getByText('Online'));

    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    expect(screen.queryByText('OgamingSC2')).not.toBeInTheDocument();
  });

  it('should display only offline channels when filter is set to "Offline"', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.click(screen.getByText('Offline'));

    expect(screen.queryByText('ESL_SC2')).not.toBeInTheDocument();
    expect(screen.getByText('OgamingSC2')).toBeInTheDocument();
    });


  it('should filter channels based on filter and search state', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'ESL' },
    });

    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    expect(screen.queryByText('OgamingSC2')).not.toBeInTheDocument();
  });

  it('should update search state on handleSearch', () => {
    renderSidebar();

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'test' },
    });

    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('should update selected channel and close sidebar on handleChannelSelected', () => {
    const channel = { name: 'ESL_SC2', online: true };

    renderSidebar({ isSidebarOpen: true });

    fireEvent.click(screen.getByText('ESL_SC2'));

    expect(mockSetChannel).toHaveBeenCalledWith(channel);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });
});
