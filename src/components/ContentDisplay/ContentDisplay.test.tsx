import { fireEvent, render, screen } from '../../test/vitest-setup';
import ContentDisplay from './ContentDisplay';
import { cleanChannelOnline, rawChannels } from '../../test/testData';
import { describe, expect, it, vi } from 'vitest';

vi.mock('axios', () => ({
  get: vi.fn().mockResolvedValue({ data: rawChannels }),
}));

vi.mock('../Sidebar/Sidebar', () => ({
  __esModule: true,
  default: ({ setChannel }: { setChannel: (channel: any) => void }) => (
    <div data-testid="sidebar">
      <button
        type="button"
        data-testid="channel-list"
        onClick={() => setChannel(cleanChannelOnline)}
      >
        Select Channel
      </button>
    </div>
  ),
}));

describe('ContentDisplay Component', () => {
  it('should render without error', async () => {
    expect(() =>
      render(
        <ContentDisplay
          isSidebarOpen={false}
          setDrawerOpenState={() => {}}
        />,
      ),
    ).not.toThrow();
  });

  it('should render Sidebar component', async () => {
    render(
      <ContentDisplay
        isSidebarOpen={false}
        setDrawerOpenState={() => {}}
      />,
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('should render ChannelDisplay component', async () => {
    render(
      <ContentDisplay
        isSidebarOpen={false}
        setDrawerOpenState={() => {}}
      />,
    );
    const channelDisplay = screen.getByTestId('channel-display');
    expect(channelDisplay).toBeInTheDocument();
  });

  it('should handle setDrawerOpenState function', async () => {
    const mockSetDrawerOpenState = vi.fn();
    render(
      <ContentDisplay
        isSidebarOpen={false}
        setDrawerOpenState={mockSetDrawerOpenState}
      />,
    );
    expect(mockSetDrawerOpenState).not.toHaveBeenCalled();
  });

  it('should update channel detail state', async () => {
    render(
      <ContentDisplay
        isSidebarOpen={false}
        setDrawerOpenState={() => {}}
      />,
    );
    const list = screen.getByTestId('channel-list');
    expect(list).toBeInTheDocument();

    fireEvent.click(list);
    expect(screen.getByText(cleanChannelOnline.name)).toBeInTheDocument();
    expect(screen.getByText(cleanChannelOnline.status)).toBeInTheDocument();
    expect(screen.getByText(/starcraft ii/i)).toBeInTheDocument();
  });
});
