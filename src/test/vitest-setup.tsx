import '@testing-library/jest-dom';
import {
  configure,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ReactNode } from 'react';
import { afterEach, beforeEach } from 'vitest';
import Wrapper from './TestWrapper';

configure({ reactStrictMode: true });

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, {
    wrapper: Wrapper,
    ...options,
  }) as RenderResult;
};

// Add any global setup code for your tests here
beforeEach(() => {
  // Setup code before each test
});

afterEach(() => {
  // Cleanup code after each test
});

// eslint-disable-next-line react-refresh/only-export-components
export * from 'vitest';
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
