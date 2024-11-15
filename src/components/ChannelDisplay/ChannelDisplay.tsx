import Grid2 from '@mui/material/Grid2';
import { SxProps, Theme } from '@mui/material/styles';
import { FC } from 'react';

const rootSx: SxProps<Theme> = {
  height: '100%',
  border: '1px solid red',
};
const ChannelDisplay: FC = () => {
  return (
    <Grid2
      size={8}
      sx={rootSx}
    >
      ChannelDisplay Place Holder
    </Grid2>
  );
};

export default ChannelDisplay;
