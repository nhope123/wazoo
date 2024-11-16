import Box from '@mui/material/Box';
import { SxProps, Theme, ThemeProvider } from '@mui/material/styles';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import { useCallback, useState } from 'react';
import themes from './customTheme';
import { useLocalStorage } from 'usehooks-ts';
import Header from './components/Header/Header';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: 'background.paper',
};

const App = () => {
  const [isDrawOpen, setIsDrawOpen] = useState<boolean>(false);
  const [mode, setMode] = useLocalStorage<'dark' | 'light'>('mode', 'light');

  const toggleDrawingVisibility = useCallback(() => {
    setIsDrawOpen((d) => !d);
  }, []);

  return (
    <ThemeProvider theme={themes[mode]}>
      <Box sx={rootSx}>
        <Header
          mode={mode}
          setMode={setMode}
          isDrawerStateOpen={isDrawOpen}
          setDrawerOpenState={toggleDrawingVisibility}
        />
        <ContentDisplay
          isSidebarOpen={isDrawOpen}
          setDrawerOpenState={toggleDrawingVisibility}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
