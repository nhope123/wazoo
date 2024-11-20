import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('../Sidebar/Sidebar', () => ({
  __esModule: true,
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));

vi.mock('../ChannelDisplay/ChannelDisplay', () => ({
  __esModule: true,
  default: () => <div data-testid="channel-display">Channel Display</div>,
}));

describe('App component', () => {
  it('should render correctly with initial state', async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /wazoo/i,
        }),
      ).toBeInTheDocument();
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      expect(screen.getByTestId('channel-display')).toBeInTheDocument();
    });
  });

  // TODO: fix this test
  it('should toggle drawer visibility', () => {
    window.innerWidth = 450;
    window.dispatchEvent(new Event('resize'));
    render(<App />);

    expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('MenuRoundedIcon'));

    expect(screen.getByTestId('drawer')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('MenuRoundedIcon'));

    waitFor(() => {
      expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
    });
  });

  it('should change theme mode', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('LightModeOutlinedIcon'));
    expect(screen.getByTestId('NightlightRoundedIcon')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('NightlightRoundedIcon'));
    expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
  });
});
