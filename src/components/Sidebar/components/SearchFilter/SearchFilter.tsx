import SearchRounded from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { SearchFilterProps } from './types';
import { SxProps, Theme } from '@mui/material/styles';
import { Button, ButtonGroup } from '@mui/material';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const FILTER_OPTIONS = ['All', 'Online', 'Offline'];

const SearchFilter = (props: SearchFilterProps) => {
  const {} = props;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

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
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default SearchFilter;
