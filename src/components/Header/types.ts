export interface HeaderProps {
  isDrawerStateOpen: boolean;
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  setDrawerOpenState: () => void;
}
