import { useEffect, useState } from 'react';
import { 
  Typography,
  Grid,
  Box
} from '@mui/material';
import { getPhotos } from '../api/API';
import type { Photo } from '../types/CommonTypes';
import PhotoCardComponent from './components/PhotoCardComponent';

const MainPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const pageNumber = 1;

  const updatePhotoArray = async () => {
    const fetchedPhotos = await getPhotos(pageNumber);
    setPhotos(fetchedPhotos);
  }

  useEffect(() => {
      const fetchData = async() => {
          return updatePhotoArray();
      };

      if (!photos.length) {
        fetchData();
      };
  }, []);

  useEffect(() => {
      const fetchData = async() => {
          return updatePhotoArray();
      }
      fetchData();
  }, [pageNumber]);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Grid size={12}>
          <Typography variant='h3'>
            Photo Browser App
          </Typography>
        </Grid>
        <Grid 
          container 
          size={9} 
          columns={{ 
            xs: 4, 
            sm: 8, 
            md: 12 }}>
            { photos.length > 0 && photos.map((photo: Photo) => {
              return (
                <Grid key={photo.id} size={{ xs: 12, md: 4, lg: 3 }}>
                  <PhotoCardComponent item={photo} />
                </Grid> )
            })}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainPage;
