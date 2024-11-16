import { ChannelDetail } from "../Sidebar/types";

export interface ChannelListProps {
  channels: ChannelDetail[];
  selectedChannel: string;
  setSelectedChannel: (channel: ChannelDetail) => void;
}
