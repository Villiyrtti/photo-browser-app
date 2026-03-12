import { Stack, Typography } from "@mui/material"
import type { Photo } from "../../types/CommonTypes";

type CardInfoComponentProps = {
    photoInfo: Photo
};

const CardInfoComponent = ({ photoInfo }: CardInfoComponentProps) => {
    return(
        <Stack direction={'row'}>
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
    );
};

export default CardInfoComponent;