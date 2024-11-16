import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Grid2';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, useMemo } from 'react';
import { ChannelDisplayProps } from './types';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const rootSx: SxProps<Theme> = {
  height: '100%',
  p: 2,
  overflowY: 'auto',
};

const contentSx: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
};

const viewerSx: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  justifyContent: 'space-between',
  '& .MuiTypography-root': {
    fontSize: '0.65rem',
  },
};

const cardContentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
};

const formatNumber = (number: number) => {
  if (number < 1000) return number;
  if (number < 1000000) return (number / 1000).toFixed(1) + 'k';
  return (number / 1000000).toFixed(1) + 'm';
};

const ChannelDisplay: FC<ChannelDisplayProps> = (props) => {
  const { channel } = props;

  const viewers = useMemo(() => {
    return [
      { name: 'Followers', value: formatNumber(channel?.followers ?? 0) },
      { name: 'Views', value: formatNumber(channel?.views ?? 0) },
      { name: 'Live', value: formatNumber(channel?.live_viewers ?? 0) },
    ];
  }, [channel]);
  return (
    <Grid2
      size={{ xs: 12, md: 8 }}
      sx={rootSx}
    >
      <Card>
        <CardMedia
          component="img"
          image={channel?.banner}
          title={channel?.name}
          sx={{
            width: '100%',
            aspectRatio: '16 / 9',
          }}
        />
        <CardContent
          sx={cardContentSx}
        >
          <Box sx={contentSx}>
            <Avatar src={channel?.logo} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  component={'a'}
                  href={channel?.link}
                  variant="h6"
                  color="primary"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                  title={`Go to ${channel?.name}'s channel`}
                >
                  {channel?.name}
                </Typography>
                <VerifiedRoundedIcon color="primary" />
              </Box>
              <Typography variant="body2">
                {channel?.online ? channel?.game : 'Offline'}
              </Typography>
            </Box>
            <Box
              sx={{
                visibility: channel?.online ? 'visible' : 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {viewers.map((viewer) => (
                <Box
                  key={viewer?.name}
                  sx={viewerSx}
                >
                  <Typography>{viewer.name}</Typography>
                  <Typography color={'primary'}>{viewer.value}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {channel?.online && (
            <Typography variant="caption">{channel?.status}</Typography>
          )}
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default ChannelDisplay;
