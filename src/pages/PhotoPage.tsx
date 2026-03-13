import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPhotoInformation } from "../api/API";
import { Box, Grid } from "@mui/material";

import HeaderComponent from "./components/HeaderComponent";
import PhotoInfoComponent from "./components/photopage/PhotoInfoComponent";
import type { Photo } from "../types/CommonTypes";

const PhotoPage = () => {
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
        <Box sx={{ flexGrow: 1 }}>
            <Grid 
                container 
                spacing={2}
                sx={{
                justifyContent: 'center',
                alignItems: 'center'
                }}>
                <HeaderComponent />
                { photoInfo && <PhotoInfoComponent photoInfo={photoInfo} />}
            </Grid>
        </Box>  
    );
};

export default PhotoPage;