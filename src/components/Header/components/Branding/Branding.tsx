import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { logo } from '@assets';

const rootSx: SxProps<Theme> = {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  gap: 2,
  justifyContent: 'flex-start',
};

const appNameSx: SxProps<Theme> = {
  fontFamily: 'Shrikhand',
};

const APP_NAME = import.meta.env.VITE_APP_NAME;
const IMAGE_SIZE = 32;

const Branding: FC = () => {
  return (
    <Box sx={rootSx}>
      <img
        src={logo}
        alt="logo"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <Typography
        color="primary"
        variant="h5"
        sx={appNameSx}
      >
        {APP_NAME}
      </Typography>
    </Box>
  );
};

export default Branding;
