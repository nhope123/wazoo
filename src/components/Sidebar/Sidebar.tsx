import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import SidebarContent from './components/SearchFilter/SidebarContent';
import fetchChannels from './helpers/fetchChannels';
import {  ChannelDetail, ChannelFilter, SidebarProps } from './types';


const Sidebar: FC<SidebarProps> = (props) => {
  const { isSidebarOpen, setChannel, setSidebarOpen, selectedChannel } = props;
  const [channels, setChannels] = useState<ChannelDetail[]>([]);
  const [filter, setFilter] = useState<ChannelFilter>('All');
  const [search, setSearch] = useState<string>('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      setSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen, setSidebarOpen, theme.breakpoints]);

  useEffect(() => {
    (async() => { await fetchChannels().then((data) => {
      console.log('data', data);
      
      setChannels(data);
      setChannel(data[0]);
    }).catch((err) => console.log(`error: ${err}`));
  })();
  }, [setChannel]);

  const visibleChannels = useMemo(() => {
    
    let result: ChannelDetail[] = channels;
    if (filter !== 'All') {
      result = channels.filter((channel) =>
        filter === 'Online' ? channel.online : !channel.online,
      );
    }
    
    if (!search) return result;
    return result.filter((channel) =>
      channel.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [channels, filter, search]);

  const handleSearch = useCallback((search: string = '') => {
    setSearch(search);
  }, []);

  const handleChannelSelected = useCallback(
    (selection: ChannelDetail) => {
      setChannel(selection);
      if (isSidebarOpen) setSidebarOpen(false);
    },
    [isSidebarOpen, setChannel, setSidebarOpen],
  );  

  return (
    <>
      <SidebarContent
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={handleSearch}
        selectedChannel={selectedChannel}
        channels={visibleChannels}
        setSelectedChannel={setChannel}
        sx={{ display: { xs: 'none', md: 'block' } }}
      />

      <Drawer
        data-testid="drawer"
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        PaperProps={{
          sx: {
            mt: 7,
            borderRadius: '0 4px 0 0',
            maxWidth: (theme) => theme.spacing(43),
            width: '80%',
            backgroundColor: 'background.paper',
          },
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <SidebarContent
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={handleSearch}
          selectedChannel={selectedChannel}
          channels={visibleChannels}
          setSelectedChannel={handleChannelSelected}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
