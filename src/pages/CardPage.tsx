import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPhotoInformation } from "../api/API";
import type { Photo } from "../types/CommonTypes";
import { Grid, Stack, Typography } from "@mui/material";

const CardPage = () => {
    const { id } = useParams();
    const [photoInfo, setPhotoInfo] = useState<Photo | null >(null);
    
    useEffect(() => {
        const fetchData = async() => {
            if (id) {
                const fetchedData = await fetchPhotoInformation(id);
                setPhotoInfo(fetchedData);
            }
         };
         fetchData();
    }, [id])

    return(
        photoInfo && (
        <Grid 
            size={9}
            sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Stack
                direction={'row'}>
                <img 
                    src='https://picsum.photos/200/300'
                    alt={photoInfo && photoInfo.title || 'default alt text'}/>
                <Stack
                    padding={2}
                    direction={'column'}>
                    <Typography>
                        ID: {photoInfo.id}
                    </Typography>
                    <Typography>
                        Title: {photoInfo.title}
                    </Typography>
                    {/* 
                    /* Would add album name, but this need fetching albums first. This definetly can be something to do in further development
                        <Typography>
                            Album name: {photoInfo.albumName}
                        </Typography> 
                    */}
                    <Typography>
                        Url: {photoInfo.url}
                    </Typography>
                </Stack>
            </Stack>
        

        </Grid>)
    );
};

export default CardPage;