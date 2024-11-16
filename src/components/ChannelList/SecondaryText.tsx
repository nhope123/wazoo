import { SxProps, Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import { formatNumber } from '../Sidebar/helpers/numberHelpers';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChannelDetail } from '../Sidebar/types';

const viewerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

const iconSx: SxProps<Theme> = {
  fontSize: 'medium',
};

const SecondaryText = (props: ChannelDetail) => {
  const { online, live_viewers } = props;

  const { color, icon, text } = useMemo(() => {
    return {
      text: online
        ? `Live: ${formatNumber(live_viewers ?? 0)} viewers`
        : 'Offline',
      color: online ? 'success' : 'text.secondary',
      icon: online ? (
        <VideocamOutlined
          color="success"
          sx={iconSx}
        />
      ) : (
        <VideocamOutlined
          color="error"
          sx={iconSx}
        />
      ),
    };
  }, [online, live_viewers]);

  return (
    <Box
      component={'span'}
      sx={viewerSx}
    >
      {icon}
      <Typography
        variant="caption"
        color={color}
        lineHeight={'normal'}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SecondaryText;
