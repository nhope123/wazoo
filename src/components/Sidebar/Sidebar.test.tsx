import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { cleanChannelOffline, cleanChannelOnline } from '../../test/testData';
import { fireEvent, render, screen, waitFor } from '../../test/vitest-setup';
import fetchChannels from './helpers/fetchChannels';
import Sidebar from './Sidebar';

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

vi.mock('./helpers/fetchChannels', () => ({
  default: vi
    .fn()
    .mockImplementation(() =>
      Promise.resolve([cleanChannelOnline, cleanChannelOffline]),
    ),
}));

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should close sidebar on mobile view', async () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    await waitFor(() => renderSidebar({ isSidebarOpen: true }));

    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('drawer'));

    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('should fetch data and update state', async () => {
    await waitFor(() => {
      renderSidebar();
    });

    expect(mockSetChannel).toHaveBeenCalled();
    expect(mockSetChannel).toHaveBeenCalledWith(cleanChannelOnline);
  });

  it('should filter channels based on search state', async () => {
    window.innerWidth = 1500;
    window.dispatchEvent(new Event('resize'));

    await waitFor(() => {
      renderSidebar();
    });

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();

    const search = screen.getAllByTestId('SearchRoundedIcon')[0];
    const input = search.parentElement?.querySelector('input');

    expect(input).toBeInTheDocument();
    fireEvent.change(input as HTMLElement, {
      target: { value: 'ESL' },
    });

    expect(input).toHaveDisplayValue('ESL');
    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'storbeck Offline' }),
    ).not.toBeInTheDocument();
  });

  it('should update search state on handleSearch', async () => {
    await waitFor(() => {
      renderSidebar();
    });

    const search = screen.getAllByTestId('SearchRoundedIcon')[0];
    const input = search.parentElement?.querySelector('input');

    expect(input).toBeInTheDocument();
    fireEvent.change(input as HTMLElement, {
      target: { value: 'ESL' },
    });

    expect(input).toHaveDisplayValue('ESL');
  });

  it('should update selected channel and close sidebar on handleChannelSelected', async () => {
    await waitFor(() => {
      renderSidebar({ isSidebarOpen: true });
    });

    const button = screen.getByRole('button', {
      name: 'ESL_SC2 Live: 344 viewers',
    });

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(mockSetChannel).toHaveBeenCalledWith(cleanChannelOnline);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('should display all channels when filter is set to "All"', async () => {
    await waitFor(() => {
      renderSidebar();
    });

    fireEvent.click(screen.getByRole('button', { name: 'All 2' }));

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();
  });

  it('should display only online channels when filter is set to "Online"', async () => {
    await waitFor(() => {
      renderSidebar();
    });

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Online' }));

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'storbeck Offline' }),
    ).not.toBeInTheDocument();
  });

  it('should display only offline channels when filter is set to "Offline"', async () => {
    await waitFor(() => {
      renderSidebar();
    });

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Offline' }));

    expect(
      screen.queryByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();
  });

  it('should filter channels based on filter and search state', async () => {
    (fetchChannels as Mock).mockResolvedValue([
      cleanChannelOnline,
      cleanChannelOffline,
      { ...cleanChannelOnline, name: 'ESports', online: false, id: 1 },
    ]);

    await waitFor(() => {
      renderSidebar();
    });

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'storbeck Offline' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'ESports Offline' }),
    ).toBeInTheDocument();

    const search = screen.getAllByTestId('SearchRoundedIcon')[0];
    const input = search.parentElement?.querySelector('input');

    expect(input).toBeInTheDocument();
    fireEvent.change(input as HTMLElement, {
      target: { value: 'ES' },
    });

    expect(input).toHaveDisplayValue('ES');

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'storbeck Offline' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'ESports Offline' }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Online' }));

    expect(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'storbeck Offline' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'ESports Offline' }),
    ).not.toBeInTheDocument();
  });

  it('should update selected channel and close sidebar on handleChannelSelected', async () => {
    await waitFor(() => {
      renderSidebar({ isSidebarOpen: true });
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'ESL_SC2 Live: 344 viewers' }),
    );

    expect(mockSetChannel).toHaveBeenCalledWith(cleanChannelOnline);
    expect(mockSetSidebarOpen).toHaveBeenCalledWith(false);
  });
});
