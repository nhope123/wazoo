import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { SxProps, Theme } from '@mui/material/styles';
import { ChannelListProps } from './types';
import SecondaryText from './SecondaryText';

const listItemSx: SxProps<Theme> = {
  borderRadius: 2,
  height: (theme) => theme.spacing(7),
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

const ChannelList = (props: ChannelListProps) => {
  const { channels, selectedChannel, setSelectedChannel } = props;

  // console.log('channels', channels);

  return (
    <List
      data-testid="channel-list"
      sx={{ overflowY: 'auto' }}
    >
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
            secondary={<SecondaryText {...channel} />}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ChannelList;
