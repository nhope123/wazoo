import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { alpha, SxProps, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { Branding } from '../../components';

const rootSx: SxProps<Theme> = {
  backgroundColor: (theme) => alpha(`${theme.palette.background.paper}`, 0.001),
  color: 'text.primary',
};
const Header: FC = () => {
  return (
    <AppBar sx={rootSx}>
      <Container maxWidth="lg">
        <Toolbar>
          <Branding />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
