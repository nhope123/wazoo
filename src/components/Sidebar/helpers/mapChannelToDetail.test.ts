import { rawChannels } from '../../../test/testData';
import { describe, expect, it } from 'vitest';
import { ChannelData } from '../types';
import mapChannelToDetail from './mapChannelToDetail';

describe('mapChannelToDetail', () => {
  it('should map a channel with stream data correctly', () => {
    const result = mapChannelToDetail(rawChannels[0] as ChannelData);
    expect(result).toEqual({
      id: 23366709968,
      live_viewers: 344,
      link: 'https://www.twitch.tv/esl_sc2',
      online: true,
      status:
        'RERUN: StarCraft 2 - Terminator vs. Parting (PvP) - IEM Katowice 2015 - EU Qualifier',
      name: 'ESL_SC2',
      game: 'StarCraft II',
      views: 60991791,
      followers: 135394,
      logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg',
      banner:
        'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg',
    });
  });

  it('should handle a channel without stream data correctly', () => {
    const result = mapChannelToDetail(rawChannels[1] as ChannelData);
    result.id = 'unknown';
    result.banner = '/src/assets/offline_banner.png';
    expect(result).toEqual({
      online: false,
      name: 'noobs2ninjas',
      link: 'https://api.twitch.tv/kraken/channels/noobs2ninjas',
      id: 'unknown',
      banner: '/src/assets/offline_banner.png',
    });
  });

  it('should handle edge cases correctly', () => {
    const modifiedChannel = {
      ...rawChannels[0],
      stream: { ...rawChannels[0].stream, viewers: 0 },
    } as ChannelData;
    const result = mapChannelToDetail(modifiedChannel);
    expect(result.live_viewers).toBe(0);

    const modifiedChannel2 = {
      ...rawChannels[0],
      stream: { ...rawChannels[0].stream, viewers: -1 },
    } as ChannelData;
    const result2 = mapChannelToDetail(modifiedChannel2);
    expect(result2.live_viewers).toBe(-1);
  });
});
