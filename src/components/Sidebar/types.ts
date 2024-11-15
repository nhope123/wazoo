export interface Stream {
  _id: string;
  viewers: number;
  channel: {
    url: string;
    status: string;
    display_name: string;
    views: number;
    followers: number;
    logo: string;
    banner: string | null;
  };
  game: string;
}

export interface Links {
  channel: string;
}

export interface ChannelData {
  _links: Links;
  stream: Stream | null;
}

export interface ChannelDetail {
  id: string;
  online: boolean;
  name: string;
  link: string;
  live_viewers?: number;
  status?: string;
  game?: string;
  views?: number;
  followers?: number;
  logo?: string;
  banner?: string;
}
