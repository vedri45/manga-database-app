import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

function ActionAreaCard({ manga }) {
    return (
        <Grid item xs={12} md={4} container>
            <Card>
                <CardActionArea href={manga.url} target="_blank">
                    <CardMedia
                        component="img"
                        height="600"
                        image={manga.image_url}
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                            {manga.title}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            {manga.synopsis}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ActionAreaCard