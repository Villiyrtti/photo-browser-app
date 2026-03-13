import { 
    Card, 
    CardActionArea, 
    CardContent,
    CardMedia, 
    Typography, 
    type CardProps 
} from "@mui/material";
import { useNavigate } from "react-router";
import type { Photo } from "../../../types/CommonTypes";

type PhotoCardComponentProps = {
    item: Photo;
    customProps?: CardProps;
};

const PhotoCardComponent = ({ item, ...customProps }: PhotoCardComponentProps) => {
    const navigate = useNavigate();

    return(
        <Card
            sx={{ 
                height: '450px',
                padding: 2
            }}
            {... customProps }>
            <CardActionArea
                onClick={() => navigate({ pathname: `/photos/${item.id}` })}>
                <CardMedia
                    component='img'
                    height='350'
                    image='https://picsum.photos/200/300'
                    alt={item.title}
                    />
                <CardContent>
                    <Typography
                        variant='body1'
                        align='center'>
                        {item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PhotoCardComponent;