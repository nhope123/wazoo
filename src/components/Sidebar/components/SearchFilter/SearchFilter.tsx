import SearchRounded from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SearchFilterProps } from './types';
import { SxProps, Theme } from '@mui/material/styles';
import { Badge, Button, ButtonGroup } from '@mui/material';
import { ChannelFilter } from '../../types';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const buttonSx: SxProps<Theme> = {
  '& .MuiBadge-badge': {
    border: `1px solid`,
    backgroundColor: 'common.white',
    color: 'primary.main',
  },
};

const FILTER_OPTIONS: ChannelFilter[] = ['All', 'Online', 'Offline'];

const SearchFilter = (props: SearchFilterProps) => {
  const { filter, setFilter, search, setSearch, channelCount } = props;

  return (
    <Box sx={rootSx}>
      <TextField
        fullWidth
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: <SearchRounded color="primary" />,
          },
        }}
      />
      <ButtonGroup fullWidth>
        {FILTER_OPTIONS.map((option) => (
          <Button
            color={'primary'}
            key={option}
            onClick={() => setFilter(option)}
            variant={filter === option ? 'contained' : 'outlined'}
            sx={buttonSx}
          >
            {filter === option ? (
              <Badge badgeContent={channelCount}>{option}</Badge>
            ) : (
              option
            )}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default SearchFilter;
