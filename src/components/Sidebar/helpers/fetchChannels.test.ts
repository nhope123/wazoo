import { describe, expect, it, Mock, vi } from 'vitest';
import axios from 'axios';
import fetchChannels from './fetchChannels';
import { userList } from '../constants';
import mapChannelToDetail from './mapChannelToDetail';
import { ChannelDetail } from '../types';

// FILE: src/components/Sidebar/helpers/fetchChannels.test.ts

vi.mock('axios');
vi.mock('../constants', () => ({
  TWITCH_URL: 'https://api.twitch.tv/helix/users?login=',
  userList: ['user1', 'user2'],
}));
vi.mock('./mapChannelToDetail');

describe('fetchChannels', () => {
  it('should fetch and map channel details successfully', async () => {
    const mockResponse = { data: { id: '123', name: 'test_channel' } };
    (axios as unknown as Mock)
      .mockResolvedValueOnce(mockResponse)
      .mockResolvedValueOnce(mockResponse);
    const mockChannelDetail: ChannelDetail = {
      id: '123',
      name: 'test_channel',
      online: false,
      link: '',
    };

    (mapChannelToDetail as Mock).mockReturnValue(mockChannelDetail);

    const result = await fetchChannels();

    expect(result).toEqual([mockChannelDetail, mockChannelDetail]);
    expect(axios).toHaveBeenCalledTimes(userList.length);
    expect(mapChannelToDetail).toHaveBeenCalledTimes(userList.length);
  });

  it('should handle errors during fetch', async () => {
    (axios as unknown as Mock).mockRejectedValueOnce(
      new Error('Network Error'),
    );

    const consoleSpy = vi.spyOn(console, 'log');

    const result = await fetchChannels();

    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('error: Error: Network Error');
  });
});
