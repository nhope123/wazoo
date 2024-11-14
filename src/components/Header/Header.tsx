import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>{'Header content'}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
