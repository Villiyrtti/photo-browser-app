import { Grid, Typography } from "@mui/material";

const HeaderComponent = () => {
    return(
        <Grid size={12} sx={{ padding: 3, justifyContent: 'center' }}>
            <Typography 
                variant='h3'
                align='center'>
                Photo Browser App
            </Typography>
        </Grid>
    );
};

export default HeaderComponent;