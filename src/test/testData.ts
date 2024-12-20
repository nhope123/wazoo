const rawChannels = [
  {
    stream: {
      _id: 23366709968,
      game: 'StarCraft II',
      viewers: 344,
      created_at: '2016-10-09T09:25:02Z',
      video_height: 720,
      average_fps: 50,
      delay: 0,
      is_playlist: false,
      _links: {
        self: 'https://api.twitch.tv/kraken/streams/esl_sc2',
      },
      preview: {
        small:
          'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg',
        medium:
          'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg',
        large:
          'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg',
        template:
          'https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg',
      },
      channel: {
        mature: false,
        status:
          'RERUN: StarCraft 2 - Terminator vs. Parting (PvP) - IEM Katowice 2015 - EU Qualifier',
        broadcaster_language: 'en',
        display_name: 'ESL_SC2',
        game: 'StarCraft II',
        language: 'en',
        _id: 30220059,
        name: 'esl_sc2',
        created_at: '2012-05-02T09:59:20Z',
        updated_at: '2016-10-10T22:04:21Z',
        delay: null,
        logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg',
        banner: null,
        video_banner:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg',
        background: null,
        profile_banner:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg',
        profile_banner_background_color: '#050506',
        partner: true,
        url: 'https://www.twitch.tv/esl_sc2',
        views: 60991791,
        followers: 135394,
        _links: {
          self: 'http://api.twitch.tv/kraken/channels/esl_sc2',
          follows: 'http://api.twitch.tv/kraken/channels/esl_sc2/follows',
          commercial: 'http://api.twitch.tv/kraken/channels/esl_sc2/commercial',
          stream_key: 'http://api.twitch.tv/kraken/channels/esl_sc2/stream_key',
          chat: 'http://api.twitch.tv/kraken/chat/esl_sc2',
          subscriptions:
            'http://api.twitch.tv/kraken/channels/esl_sc2/subscriptions',
          editors: 'http://api.twitch.tv/kraken/channels/esl_sc2/editors',
          teams: 'http://api.twitch.tv/kraken/channels/esl_sc2/teams',
          videos: 'http://api.twitch.tv/kraken/channels/esl_sc2/videos',
        },
      },
    },
    _links: {
      self: 'https://api.twitch.tv/kraken/streams/ESL_SC2',
      channel: 'https://api.twitch.tv/kraken/channels/ESL_SC2',
    },
  },
  {
    stream: null,
    _links: {
      self: 'https://api.twitch.tv/kraken/streams/noobs2ninjas',
      channel: 'https://api.twitch.tv/kraken/channels/noobs2ninjas',
    },
  },
];

const cleanChannelOnline = {
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
};

const cleanChannelOffline = {
  online: false,
  name: 'storbeck',
  link: 'https://api.twitch.tv/kraken/channels/storbeck',
  id: 'f40dc064-942e-469c-98c7-b5eb29450b3f',
  banner: '/src/assets/offline_banner.png',
};

export { rawChannels, cleanChannelOnline, cleanChannelOffline };
