import { fireEvent, render, screen } from '../../test/vitest-setup';
import Header from './Header';
import { HeaderProps } from './types';
import { describe, expect, it, vi } from 'vitest';

describe('Header Component', () => {
  const mockSetDrawerOpenState = vi.fn();
  const mockSetMode = vi.fn();

  const defaultProps: HeaderProps = {
    isDrawerStateOpen: false,
    setDrawerOpenState: mockSetDrawerOpenState,
    mode: 'light',
    setMode: mockSetMode,
  };

  it('should render the Header component', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should toggle drawer state when icon button is clicked', () => {
    global.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    render(<Header {...defaultProps} />);
    const iconButton = screen.getByTestId('MenuRoundedIcon');
    fireEvent.click(iconButton);
    expect(mockSetDrawerOpenState).toHaveBeenCalled();
  });

  it('should display CloseRounded icon when drawer is open', () => {
    render(
      <Header
        {...defaultProps}
        isDrawerStateOpen={true}
      />,
    );
    expect(screen.getByTestId('CloseRoundedIcon')).toBeInTheDocument();
  });

  it('should display MenuRounded icon when drawer is closed', () => {
    render(
      <Header
        {...defaultProps}
        isDrawerStateOpen={false}
      />,
    );
    expect(screen.getByTestId('MenuRoundedIcon')).toBeInTheDocument();
  });

  it('should toggle mode when mode button is clicked', () => {
    render(<Header {...defaultProps} />);
    const modeButton = screen.getByTestId('LightModeOutlinedIcon');
    fireEvent.click(modeButton);
    expect(mockSetMode).toHaveBeenCalledWith('dark');
  });

  it('should display LightModeOutlinedIcon when mode is light', () => {
    render(
      <Header
        {...defaultProps}
        mode="light"
      />,
    );
    expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
  });

  it('should display NightlightRounded icon when mode is dark', () => {
    render(
      <Header
        {...defaultProps}
        mode="dark"
      />,
    );
    expect(screen.getByTestId('NightlightRoundedIcon')).toBeInTheDocument();
  });
});
