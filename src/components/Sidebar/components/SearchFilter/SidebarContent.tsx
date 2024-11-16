import Grid2 from '@mui/material/Grid2';
import { SidebarContentProps } from './types';
import SearchFilter from './SearchFilter';
import ChannelList from '../../../ChannelList/ChannelList';
import { SxProps, Theme } from '@mui/material/styles';

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
      size={4}
      sx={{ ...rootSx, ...(sx as SxProps<Theme>) }}
    >
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
    </Grid2>
  );
};

export default SidebarContent;
