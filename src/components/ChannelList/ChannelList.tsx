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

export interface ChannelListProps {
  channels: ChannelDetail[];
}

const listItemSx: SxProps<Theme> = {
  borderRadius: 2,
  boxShadow: 1,
};

const viewerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-end',
  gap: 1,
};

const SecondaryText = (props: ChannelDetail) => {
  const { online, live_viewers } = props;

  const { color, icon, text } = useMemo(() => {
    return {
      text: online ? `Live: ${live_viewers} viewers` : 'Offline',
      color: online ? 'success' : 'text.secondary',
      icon: online ? (
        <VideocamOutlined color="success" />
      ) : (
        <VideocamOffOutlinedIcon color="error" />
      ),
    };
  }, [online, live_viewers]);
  
  return (
    <Box sx={viewerSx}>
      {icon}
      <Typography
        variant="caption"
        color={color}
      >
        {text}
      </Typography>
    </Box>
  );
};

const ChannelList = (props: ChannelListProps) => {
  const { channels } = props;
  return (
    <List>
      {channels.map((channel) => (
        <ListItemButton
          key={channel?.id}
          sx={listItemSx}
        >
          <ListItemAvatar>
            <Avatar src={channel.logo} />
          </ListItemAvatar>
          <ListItemText
            primary={channel.name}
            secondary={<SecondaryText {...channel} />}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ChannelList;
