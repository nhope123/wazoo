import { cleanChannelOnline, cleanChannelOffline } from '../../test/testData';
import { render, screen } from '../../test/vitest-setup';
import ChannelDisplay from './ChannelDisplay';
import { describe, expect, it } from 'vitest';

describe('ChannelDisplay Component', () => {
  it('should render without error', async () => {
    render(<ChannelDisplay channel={cleanChannelOnline} />);
    expect(screen.getByText('ESL_SC2')).toBeInTheDocument();
  });

  it('should display "Offline" when the channel is offline', async () => {
    render(<ChannelDisplay channel={cleanChannelOffline} />);
    expect(screen.getByText('Offline')).toBeInTheDocument();
  });

  it('should display the correct number of followers', async () => {
    render(<ChannelDisplay channel={cleanChannelOnline} />);
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('135.4k')).toBeInTheDocument();
  });

  it('should handle channels with no followers gracefully', async () => {
    render(
      <ChannelDisplay
        channel={{ ...cleanChannelOnline, followers: undefined }}
      />,
    );
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should display the correct number of views', async () => {
    render(<ChannelDisplay channel={cleanChannelOnline} />);
    expect(screen.getByText('Views')).toBeInTheDocument();
    expect(screen.getByText('61.0m')).toBeInTheDocument();
  });

  it('should display the correct number of live viewers when online', async () => {
    render(<ChannelDisplay channel={cleanChannelOnline} />);
    expect(screen.getByText('Live')).toBeInTheDocument();
    expect(screen.getByText('344')).toBeInTheDocument();
  });

  it('should hide live viewers section when the channel is offline', async () => {
    render(<ChannelDisplay channel={cleanChannelOffline} />);
    expect(screen.queryByText('Live')).toHaveStyle({ visibility: 'hidden' });
  });

  it('should display the channel status when online', async () => {
    render(<ChannelDisplay channel={cleanChannelOnline} />);
    expect(screen.getByText(cleanChannelOnline.status)).toBeInTheDocument();
  });
});
