import { describe, expect, it, render } from '../../../.../../../test/vitest-setup';
import Branding from './Branding';

describe('Branding Component', () => {
  // it('should not throw an error', async () => {
  //   expect(() => render(<Branding />)).not.toThrowError();
  // });

  it('should render the logo', () => {
    const { getByRole } = render(<Branding />);

    const logo = getByRole('img', { name: 'logo' });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo'));
  });

  it('should render the app name', () => {
    const { getByText } = render(<Branding />);
    const appName = getByText(import.meta.env.VITE_APP_NAME);
    expect(appName).toBeInTheDocument();
    expect(appName).toHaveStyle('font-family: Shrikhand');
  });
});
