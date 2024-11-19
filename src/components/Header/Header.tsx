import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuRounded from '@mui/icons-material/MenuRounded';
import { HeaderProps } from './types';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Box } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightRounded from '@mui/icons-material/NightlightRounded';
import Branding from './components/Branding/Branding';

const rootSx: SxProps<Theme> = {
  backgroundColor: 'background.paper',
  color: 'text.primary',
  position: 'static',
  boxShadow: 1,
};

const iconSx: SxProps<Theme> = {
  display: { xs: 'inline-block', md: 'none' },
  marginRight: 2,
};

const Header: FC<HeaderProps> = (props) => {
  const { isDrawerStateOpen, setDrawerOpenState, mode, setMode } = props;

  return (
    <AppBar sx={rootSx}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <IconButton
              sx={iconSx}
              onClick={setDrawerOpenState}
            >
              {isDrawerStateOpen ? (
                <CloseRounded color="primary" />
              ) : (
                <MenuRounded color="primary" />
              )}
            </IconButton>

            <Branding />
          </Box>
          <Box sx={{ right: 0 }}>
            <IconButton
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
              {mode === 'light' ? (
                <LightModeOutlinedIcon sx={{ color: 'warning.main' }} />
              ) : (
                <NightlightRounded sx={{ color: '#0cc6d2' }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
