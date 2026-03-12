import { Paper, Stack, Typography, type PaperProps } from "@mui/material";
import type { Photo } from "../../types/CommonTypes";

type PhotoCardComponentProps = {
    item: Photo;
    customProps?: PaperProps;
};

const PhotoCardComponent = ({ item, ...customProps }: PhotoCardComponentProps) => {
    return(
        <Paper 
            sx={{ height: '450px' }}
            {... customProps }>
            <Stack
                padding={1}
                spacing={2}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <img
                    width={240}
                    src={'https://picsum.photos/200/300'}
                    alt={item.title} />
                <Typography
                    variant='body1'
                    align='center'>
                    {item.title}
                </Typography>
            </Stack>
        </Paper>
    );
};

export default PhotoCardComponent;