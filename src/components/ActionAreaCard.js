import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Accordion, AccordionDetails, AccordionSummary, CardActionArea } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        padding: 0,
        "&:last-child": {
            paddingBottom: '0'
        },
    }
});

function ActionAreaCard({ manga }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} container>
            <Card>
                <CardActionArea href={manga.url} target="_blank">
                    <CardMedia
                        component="img"
                        height="600"
                        image={manga.images.jpg.image_url}
                    />
                </CardActionArea>
                <CardContent className={classes.root}>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                        {manga.title}
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Description</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography gutterBottom variant="p" component="div" sx={{ fontSize: '14px' }}>
                                {manga.synopsis}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>

            </Card>
        </Grid>
    );
}

export default ActionAreaCard