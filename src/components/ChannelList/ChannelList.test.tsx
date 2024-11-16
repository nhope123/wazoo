import { cleanChannelOffline, cleanChannelOnline } from '../../test/testData';
import {
  describe,
  expect,
  fireEvent,
  it,
  render,
  screen,
  vi,
} from '../../test/vitest-setup';
import ChannelList from './ChannelList';
import { ChannelListProps } from './types';

const renderComponent = (props: Partial<ChannelListProps> = {}) => {
  const defaultProps: ChannelListProps = {
    channels: [cleanChannelOnline, cleanChannelOffline],
    selectedChannel: cleanChannelOnline.name,
    setSelectedChannel: vi.fn(),
    ...props,
  };

  return render(<ChannelList {...defaultProps} />);
};

describe('ChannelList', () => {
  it('renders the list of channels', () => {
    renderComponent();

    expect(screen.getByText(/esl_sc2/i)).toBeInTheDocument();
    expect(screen.getByText(/storbeck/i)).toBeInTheDocument();
  });

  it('calls setSelectedChannel when a channel is clicked', () => {
    const setSelectedChannel = vi.fn();
    renderComponent({ setSelectedChannel });

    fireEvent.click(screen.getByText(/storbeck/i));
    expect(setSelectedChannel).toHaveBeenCalledWith(cleanChannelOffline);
  });

  it('applies active styles to the selected channel', () => {
    renderComponent({ selectedChannel: cleanChannelOnline.name });

    expect(screen.getByRole('button', { name: /esl_sc2/i })).toHaveStyle(
      'background-color: rgb(6, 157, 171)',
    );
  });

  it('does not apply active styles to non-selected channels', () => {
    renderComponent();
    expect(screen.getByText(/storbeck/i)).not.toHaveStyle(
      'background-color: rgb(6, 157, 171)',
    );
  });

  it('renders without channels', () => {
    renderComponent({ channels: [] });
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('handles channels with missing properties gracefully', () => {
    const incompleteChannels = [
      {
        id: 23366709968,
        live_viewers: undefined,
        link: '',
        online: true,
        status: undefined,
        name: 'AxelTV',
        game: undefined,
        views: undefined,
        followers: undefined,
        logo: undefined,
        banner: undefined,
      },
    ];
    renderComponent({ channels: incompleteChannels });

    expect(screen.getByText('AxelTV')).toBeInTheDocument();
  });
});
