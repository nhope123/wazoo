import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import { FC, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ChannelDisplay from '../ChannelDisplay/ChannelDisplay';
import { SxProps, Theme } from '@mui/material/styles';
import { ChannelDetail } from '../Sidebar/types';
import { ContentDisplayProps } from './types';

const mainSx: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxHeight: '100%',
  maxWidth: '100%',
};

const ContentDisplay: FC<ContentDisplayProps> = (props) => {
  const { isSidebarOpen, setDrawerOpenState } = props;
  const [channelDetail, setChannelDetail] = useState<ChannelDetail>();
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={mainSx}
    >
      <Grid2
        container
        size={12}
        spacing={1}
        sx={[mainSx, { height: '100%' }]}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setDrawerOpenState}
          selectedChannel={channelDetail?.name as string}
          setChannel={setChannelDetail}
        />
        <ChannelDisplay channel={channelDetail} />
      </Grid2>
    </Container>
  );
};

export default ContentDisplay;
