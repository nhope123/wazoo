import Sidebar from './Sidebar';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent,  render, screen,  waitFor } from '../../test/vitest-setup';
import { cleanChannelOffline, cleanChannelOnline } from '../../test/testData';


// vi.mock('axios');

const mockSetChannel = vi.fn();
const mockSetSidebarOpen = vi.fn();

const renderSidebar = (props = {}) => {
  const defaultProps = {
    isSidebarOpen: true,
    setChannel: mockSetChannel,
    setSidebarOpen: mockSetSidebarOpen,
    selectedChannel: cleanChannelOnline.name,
    ...props,
  };

  return render(<Sidebar {...defaultProps} />);
};

vi.mock('./fetchChannels', () => {
  return {
    default: vi.fn().mockImplementation(async () => Promise.resolve([cleanChannelOnline, cleanChannelOffline])),
  }
});

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();

  });

  it('should close sidebar on mobile view', () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    renderSidebar({ isSidebarOpen: true });

    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('drawer'));

    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('should fetch data and update state', async () => {
    renderSidebar();

    await waitFor(() => {
      expect(mockSetChannel).toHaveBeenCalled();
    });
  });

  it.skip('should filter channels based on filter and search state', async () => {
    window.innerWidth = 1500;
    window.dispatchEvent(new Event('resize'));
    

    renderSidebar();
    screen.logTestingPlaygroundURL();

    const search = screen.getAllByTestId('SearchRoundedIcon')[0];
    const input = search.parentElement?.querySelector('input');

    expect(input).toBeInTheDocument()
    fireEvent.change(input as HTMLElement, {
      target: { value: 'ESL' },
    });

    expect(input).toHaveDisplayValue('ESL');



    // expect(screen.getByRole('button', {name: 'All'})).toBeInTheDocument()
    // expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    // expect(screen.queryByText('OgamingSC2')).not.toBeInTheDocument();
  });

  it.skip('should update search state on handleSearch', () => {
    renderSidebar();

    const search = screen.getAllByTestId('SearchRoundedIcon')[0];
    const input = search.parentElement?.querySelector('input');

    expect(input).toBeInTheDocument()
    fireEvent.change(input as HTMLElement, {
      target: { value: 'ESL' },
    });

    expect(input).toHaveDisplayValue('ESL');

  });

  it.skip('should update selected channel and close sidebar on handleChannelSelected', () => {
    const channel = { name: 'ESL_SC2', online: true };

    renderSidebar({ isSidebarOpen: true });

    fireEvent.click(screen.getByText('ESL_SC2'));

    expect(mockSetChannel).toHaveBeenCalledWith(channel);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it.skip('should display all channels when filter is set to "All"', () => {
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

  it.skip('should display only online channels when filter is set to "Online"', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.click(screen.getByText('Online'));

    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
    expect(screen.queryByText('OgamingSC2')).not.toBeInTheDocument();
  });

  it.skip('should display only offline channels when filter is set to "Offline"', () => {
    const channels = [
      { name: 'ESL_SC2', online: true },
      { name: 'OgamingSC2', online: false },
    ];

    renderSidebar({ channels });

    fireEvent.click(screen.getByText('Offline'));

    expect(screen.queryByText('ESL_SC2')).not.toBeInTheDocument();
    expect(screen.getByText('OgamingSC2')).toBeInTheDocument();
  });

  it.skip('should filter channels based on filter and search state', () => {
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

  it.skip('should update selected channel and close sidebar on handleChannelSelected', () => {
    const channel = { name: 'ESL_SC2', online: true };

    renderSidebar({ isSidebarOpen: true });

    fireEvent.click(screen.getByText('ESL_SC2'));

    expect(mockSetChannel).toHaveBeenCalledWith(channel);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });
});
