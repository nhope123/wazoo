import { createTheme, lighten } from '@mui/material/styles';

const components = {
  MuiTextField: {
    defaultProps: {
      variant: 'outlined' as 'outlined',
      fullWidth: true,
      size: 'small' as 'small',
    },
  },
  MuiSelect: {
    defaultProps: {
      variant: 'outlined' as 'outlined',
      fullWidth: true,
      size: 'small' as 'small',
    },
  },
};

const themes = {
  light: createTheme({
    palette: {
      primary: {
        main: '#069dab',
      },
      mode: 'light',
    },

    components,
  }),
  dark: createTheme({
    palette: {
      primary: {
        main: lighten('#069dab', 0.2),
      },
      mode: 'dark',
    },
    components,
  }),
};

export default themes;
