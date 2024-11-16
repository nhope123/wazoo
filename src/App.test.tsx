import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('should render correctly with initial state', () => {
    render(<App />);
    expect(screen.getByRole('heading', {
      name: /wazoo/i
    })).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('channel-display')).toBeInTheDocument();
  });

  // TODO: fix this test
  it('should toggle drawer visibility', () => {
    window.innerWidth = 450;
    window.dispatchEvent(new Event('resize'));
    render(<App />);
    
    fireEvent.click(screen.getByTestId('MenuRoundedIcon'));
    screen.logTestingPlaygroundURL();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByText(/drawer is closed/i)).toBeInTheDocument();
  });

  it('should change theme mode', () => {
    render(<App />);
    
    fireEvent.click(screen.getByTestId('LightModeOutlinedIcon'));
    expect(screen.getByTestId('NightlightRoundedIcon')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('NightlightRoundedIcon'));
    expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
  });
});