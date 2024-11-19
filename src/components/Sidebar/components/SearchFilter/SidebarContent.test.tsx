import {
  render,
  screen,
  fireEvent,
  within,
} from '../../../../test/vitest-setup';
import { ChannelDetail } from '../../types';
import SidebarContent from './SidebarContent';
import { SidebarContentProps } from './types';
import { describe, expect, it, vi } from 'vitest';

describe('SidebarContent Component', () => {
  const mockSetFilter = vi.fn();
  const mockSetSearch = vi.fn();
  const mockSetSelectedChannel = vi.fn();

  const defaultProps: SidebarContentProps = {
    filter: 'All',
    setFilter: mockSetFilter,
    search: '',
    setSearch: mockSetSearch,
    selectedChannel: 'Channel 1',
    setSelectedChannel: mockSetSelectedChannel,
    channels: [
      { id: 1, name: 'Channel 1' },
      { id: 2, name: 'Channel 2' },
      { id: 3, name: 'Channel 3' },
    ] as ChannelDetail[],
    sx: {},
  };

  it('should render the SidebarContent component', () => {
    render(<SidebarContent {...defaultProps} />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should apply custom styles from sx prop', () => {
    const customSx = { backgroundColor: 'rgb(255, 0, 0)' };
    render(
      <SidebarContent
        {...defaultProps}
        sx={customSx}
      />,
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('should call setFilter when a filter button is clicked', () => {
    render(<SidebarContent {...defaultProps} />);
    const onlineButton = screen.getByText('Online');
    fireEvent.click(onlineButton);
    expect(mockSetFilter).toHaveBeenCalledWith('Online');
  });

  it('should call setSearch when search input changes', () => {
    render(<SidebarContent {...defaultProps} />);
    const searchInput = screen.getByPlaceholderText('Search users');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockSetSearch).toHaveBeenCalledWith('test');
  });

  it('should call setSelectedChannel when a channel is selected', () => {
    render(<SidebarContent {...defaultProps} />);
    const channelButton = screen.getByText('Channel 1');
    fireEvent.click(channelButton);
    expect(mockSetSelectedChannel).toHaveBeenCalledWith({
      id: 1,
      name: 'Channel 1',
    });
  });

  it('should display the correct number of channels', () => {
    render(<SidebarContent {...defaultProps} />);
    const channelList = screen.getByTestId('channel-list');
    expect(within(channelList).getAllByRole('button')).toHaveLength(3);
  });
});
