import { describe, expect, fireEvent, it, render, screen, vi, within } from '../../test/vitest-setup';
import ContentDisplay from './ContentDisplay';
import { rawChannels } from '../../test/testData';
import axios from 'axios';

// vi.mock('axios'); // , async (importOriginal) => {
//   const mod = await importOriginal<typeof axios>();
//   return {
//     ...mod,
//     get: vi.fn(),
//   };
// });

// TODO: Fix the test
// 1. Mock the axios.get method
// 2. Simulate a channel selection - mock the Sidebar component
describe('ContentDisplay Component', () => {

  it('should render without error', async () => {
    // vi.spyOn(axios, 'get').mockResolvedValue({ data: rawChannels });
    expect(() => render(<ContentDisplay isSidebarOpen={false} setDrawerOpenState={() => {}} />)).not.toThrow();
  });

  it('should render Sidebar component', async () => {
    render(<ContentDisplay isSidebarOpen={false} setDrawerOpenState={() => {}} />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('should render ChannelDisplay component', async () => {
    render(<ContentDisplay isSidebarOpen={false} setDrawerOpenState={() => {}} />);
    const channelDisplay = screen.getByTestId('channel-display');
    expect(channelDisplay).toBeInTheDocument();
  });

  it('should handle setDrawerOpenState function', async () => {
    const mockSetDrawerOpenState = vi.fn();
    render(<ContentDisplay isSidebarOpen={false} setDrawerOpenState={mockSetDrawerOpenState} />);
    expect(mockSetDrawerOpenState).not.toHaveBeenCalled();
  });

  it('should update channel detail state', async () => {

    render(<ContentDisplay isSidebarOpen={false} setDrawerOpenState={() => { } } />);
    const list = screen.getByTestId('channel-list');
    expect(list).toBeInTheDocument();
    expect(within(list).getAllByRole('button')).toHaveLength(3);
    screen.logTestingPlaygroundURL();
    // fireEvent.click(screen.getByText('test-channel'));
    // Simulate a channel selection
    // Assuming Sidebar component has a method to select a channel
    // sidebar.selectChannel('test-channel');
    // expect(screen.getByText('test-channel')).toBeInTheDocument();
  });
});