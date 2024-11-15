import { v4 as uid } from 'uuid';
import { ChannelData, ChannelDetail } from './types';

const defaultBanner =
  'https://s3.envato.com/files/156884535/Game_Background_Emerald_Lake_4270x2135.jpg';

const mapChannelToDetail = (user_data: ChannelData): ChannelDetail => {
  if (!user_data.stream) {
    const channel = user_data._links.channel.split('/');
    const name = channel[channel.length - 1];
    return { online: false, name, link: user_data._links.channel, id: uid() };
  }

  const { stream } = user_data;
  const { channel } = stream;
  return {
    id: stream._id,
    live_viewers: stream.viewers,
    link: channel.url,
    online: true,
    status: channel.status,
    name: channel.display_name,
    game: stream.game,
    views: channel.views,
    followers: channel.followers,
    logo: channel.logo,
    banner: channel.banner || defaultBanner,
  };
};

export default mapChannelToDetail;
