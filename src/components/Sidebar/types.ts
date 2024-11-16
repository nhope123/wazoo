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
  preview: {
    large: string;
  };
}

export interface Links {
  channel: string;
}

export interface ChannelData {
  _links: Links;
  stream: Stream | null;
}

export interface ChannelDetail {
  id: number | string;
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

export type ChannelFilter = 'All' | 'Online' | 'Offline';

export interface SidebarProps {
  selectedChannel: string;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setChannel: (channel: ChannelDetail) => void;
}
