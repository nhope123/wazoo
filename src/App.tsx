import { Header } from '@components';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
};

const App = () => {
  return (
    <Box sx={rootSx}>
      <Header />
      <ContentDisplay />
    </Box>
  );
};

export default App;
