import Grid2 from '@mui/material/Grid2';
import { SidebarContentProps } from './types';
import SearchFilter from './SearchFilter';
import ChannelList from '../../../ChannelList/ChannelList';
import { SxProps, Theme } from '@mui/material/styles';
import Card from '@mui/material/Card';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  height: '100%',
  p: 2,
  boxShadow: 5,
};

const SidebarContent = (props: SidebarContentProps) => {
  const {
    filter,
    setFilter,
    setSearch,
    sx,
    setSelectedChannel,
    selectedChannel,
    search,
    channels,
  } = props;

  return (
    <Grid2
      data-testid="sidebar"
      size={4}
      sx={{ height: '100%', ...(sx as SxProps<Theme>) }}
    >
      <Card sx={rootSx}>
        <SearchFilter
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={(d) => setSearch(d ?? '')}
          channelCount={channels.length}
        />
        <ChannelList
          selectedChannel={selectedChannel}
          channels={channels}
          setSelectedChannel={setSelectedChannel}
        />
      </Card>
    </Grid2>
  );
};

export default SidebarContent;
