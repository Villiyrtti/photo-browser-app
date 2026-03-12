import { 
  Grid,
  Box
} from '@mui/material';

import HeaderComponent from './components/HeaderComponent';
import PhotoListComponent from './components/PhotoListComponent';

const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <HeaderComponent />
        <PhotoListComponent />
      </Grid>
    </Box>
  );
};

export default MainPage;
