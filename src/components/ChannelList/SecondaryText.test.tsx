import { cleanChannelOffline, cleanChannelOnline } from '../../test/testData';
import { describe, expect, render, screen, test } from '../../test/vitest-setup';
import SecondaryText from './SecondaryText';

describe('SecondaryText Component', () => {  
  test('renders "Offline" text when online is false', () => {
    render(<SecondaryText {...cleanChannelOffline} />);
    expect(screen.getByText('Offline')).toBeInTheDocument();
  });

  test('renders "Live: 0 viewers" text when online is true and live_viewers is 0', () => {
    render(<SecondaryText {...{...cleanChannelOnline, live_viewers: 0 }} />);
    expect(screen.getByText('Live: 0 viewers')).toBeInTheDocument();
  });

  test('renders "Live: 1.0k viewers" text when online is true and live_viewers is 1000', () => {
    render(<SecondaryText {...{...cleanChannelOnline, live_viewers:1000 }} />);
    expect(screen.getByText('Live: 1.0k viewers')).toBeInTheDocument();
  });

  test('renders success icon when online is true', () => {
    render(<SecondaryText {...{...cleanChannelOnline, live_viewers:1000 }} />);    
   
    expect(screen.getByTestId('VideocamOutlinedIcon')).toHaveClass('MuiSvgIcon-colorSuccess');
  });

  test('renders error icon when online is false', () => {
    render(<SecondaryText {...cleanChannelOffline} />);
    expect(screen.getByTestId('VideocamOutlinedIcon')).toHaveClass('MuiSvgIcon-colorError');
  });

  test('renders correctly with no live_viewers prop', () => {
    render(<SecondaryText {...cleanChannelOnline} />);
    expect(screen.getByText('Live: 344 viewers')).toBeInTheDocument();
  });

  test('renders correctly with undefined live_viewers prop', () => {
    render(<SecondaryText {...{...cleanChannelOnline, live_viewers: undefined }} />);
    expect(screen.getByText('Live: 0 viewers')).toBeInTheDocument();
  });
});