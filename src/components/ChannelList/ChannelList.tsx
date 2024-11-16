import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { SxProps, Theme } from '@mui/material/styles';
import { ChannelDetail } from '../Sidebar/types';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { formatNumber } from '../Sidebar/helpers/numberHelpers';

export interface ChannelListProps {
  channels: ChannelDetail[];
  selectedChannel: string;
  setSelectedChannel: (channel: ChannelDetail) => void;
}

const listItemSx: SxProps<Theme> = {
  borderRadius: 2,
  height: (theme) => theme.spacing(7),
};

const viewerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

const iconSx: SxProps<Theme> = {
  fontSize: 'medium',
};

const activeSx: SxProps<Theme> = {
  backgroundColor: 'primary.light',
  color: 'primary.contrastText',
  '& .MuiSvgIcon-root': {
    color: 'primary.contrastText',
  },
  '& .MuiTypography-caption': {
    color: 'primary.contrastText',
  },
  '&:hover': {
    backgroundColor: 'primary.main',
  },
};

const SecondaryText = (props: ChannelDetail & { active: boolean }) => {
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
        <VideocamOffOutlinedIcon
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

const ChannelList = (props: ChannelListProps) => {
  const { channels, selectedChannel, setSelectedChannel } = props;

  return (
    <List sx={{ overflowY: 'auto' }}>
      {channels.map((channel) => (
        <ListItemButton
          key={channel?.id}
          sx={{
            ...listItemSx,
            ...(selectedChannel === channel?.name ? activeSx : {}),
          }}
          onClick={() => setSelectedChannel(channel)}
        >
          <ListItemAvatar>
            <Avatar
              src={channel.logo}
              sx={{
                width: (theme) => theme.spacing(4),
                height: (theme) => theme.spacing(4),
              }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ height: (theme) => theme.spacing(5), m: 0 }}
            primary={channel.name}
            secondary={
              <SecondaryText
                {...channel}
                active={selectedChannel === channel?.name}
              />
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ChannelList;
