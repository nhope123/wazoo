import CloseRounded from '@mui/icons-material/CloseRounded';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuRounded from '@mui/icons-material/MenuRounded';
import NightlightRounded from '@mui/icons-material/NightlightRounded';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { SxProps, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import Branding from './components/Branding/Branding';
import { HeaderProps } from './types';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

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

const SOCIALS = [
  { title: 'GitHub', url: 'https://github.com/nhope123/wazoo', icon: <GitHub /> },
  {
    title: 'Linkedin',
    url: ' https://www.linkedin.com/in/nialhope/',
    icon: <LinkedIn />,
    color: 'info',
  },
];

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
            {SOCIALS.map((social) => (
              <IconButton
                color={social?.color as IconButtonProps['color']}
                key={social.title}
                href={social.url}
                target="_blank"
                title={`Visit ${social.title}`}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
