import { SxProps, Theme } from '@mui/material/styles';
import { ChannelFilter } from '../../types';
import { ChannelListProps } from '../../../ChannelList/types';

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
