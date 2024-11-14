import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import theme from '../customTheme';
import { TestWrapperProps } from './types';

const TestWrapper: FC<TestWrapperProps> = (props) => {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default TestWrapper;
