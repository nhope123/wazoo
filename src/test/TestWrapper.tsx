import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import themes from '../customTheme';
import { TestWrapperProps } from './types';

const TestWrapper: FC<TestWrapperProps> = (props) => {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    </>
  );
};

export default TestWrapper;
