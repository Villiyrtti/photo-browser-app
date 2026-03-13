import { useEffect, useState } from 'react';
import { Button, Grid } from "@mui/material"
import { getPhotos } from '../../../api/API';

import PhotoCardComponent from './PhotoCardComponent';
import type { Photo } from '../../../types/CommonTypes';

const PhotoListComponent = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const fetchPhotos = async(pageNumber: number) => {
        return await getPhotos(pageNumber);
    };

    const fetchMorePhotos = async() => {
        const newPageNumber = pageNumber +1
        setPageNumber(newPageNumber);
        const fetchedPhotos = await fetchPhotos(newPageNumber);
        const newList: Photo[] = [...photos, ...fetchedPhotos];
        setPhotos(newList);
    };

    useEffect(() => {
        const fetchData = async() => {
            const fetchedPhotos = await fetchPhotos(pageNumber);
            setPhotos(fetchedPhotos);
        };

        if (!photos.length) {
            fetchData();
        };
    }, []);

    return(
        <Grid 
            container 
            size={9} 
            columns={{ 
                xs: 4, 
                sm: 8, 
                md: 12 }}
            rowSpacing={1}
            columnSpacing={1}>
            { photos.length > 0 && photos.map((photo: Photo) => {
              return (
                <Grid key={photo.id} size={{ xs: 12, md: 4, lg: 3 }}>
                  <PhotoCardComponent item={photo} />
                </Grid> )
            })}
            <Grid size={12}>
                <Button onClick={() => fetchMorePhotos()}>
                    Load More
                </Button>
            </Grid>
        </Grid>
    );
};

export default PhotoListComponent;