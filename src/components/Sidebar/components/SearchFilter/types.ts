import { SxProps, Theme } from '@mui/material/styles';
import { ChannelListProps } from '../../../ChannelList/ChannelList';
import { ChannelFilter } from '../../types';

export interface SearchFilterProps {
  channelCount: number;
  filter: ChannelFilter;
  search?: string;
  setFilter: (filter: ChannelFilter) => void;
  setSearch: (search?: string) => void;
}

export interface SidebarContentProps
  extends Omit<SearchFilterProps, 'channelCount'>,
    ChannelListProps {
  sx?: SxProps<Theme>;
}
