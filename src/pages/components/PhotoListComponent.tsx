import { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import { getPhotos } from '../../api/API';

import PhotoCardComponent from '../components/PhotoCardComponent';
import type { Photo } from '../../types/CommonTypes';

const PhotoListComponent = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const pageNumber = 1;

    const updatePhotoArray = async () => {
        const fetchedPhotos = await getPhotos(pageNumber);
        setPhotos(fetchedPhotos);
    };

    useEffect(() => {
        const fetchData = async() => {
            return updatePhotoArray();
        };

        if (!photos.length) {
            fetchData();
        };
    }, []);

  // This hook can be utilized when button to bottom of page is implemented
  // useEffect(() => {
  //     const fetchData = async() => {
  //         return updatePhotoArray();
  //     }
  //     fetchData();
  // }, [pageNumber]);
    return(
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
    );
};

export default PhotoListComponent;