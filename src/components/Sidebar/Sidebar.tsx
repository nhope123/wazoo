import Grid2 from '@mui/material/Grid2';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, useEffect, useState } from 'react';
import { SearchFilter } from './components/SearchFilter';
import ChannelList from '../ChannelList/ChannelList';
import axios from 'axios';
import mapChannelToDetail from './mapChannelToDetail';
import { ChannelDetail } from './types';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  height: '100%',
  p: 2,
};

const userList = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas',
];
const TWITCH_URL =
  'https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/';

const Sidebar: FC = () => {
  const [channels, setChannels] = useState<ChannelDetail[]>([]);

  useEffect(() => {
    const data: ChannelDetail[] = [];
    userList.forEach((username) => {
      axios(`${TWITCH_URL}${username}`)
        .then((response) => {
          data.push(mapChannelToDetail(response.data));
        })
        .catch((err) => console.log(`error: ${err}`));
    });
    console.log(data);
    setChannels(data);
  }, []);

  return (
    <Grid2
      size={4}
      sx={rootSx}
    >
      <SearchFilter />
      <ChannelList channels={channels} />
    </Grid2>
  );
};

export default Sidebar;
