import React from 'react'
import { Box, Button, Container, Grid, Stack, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles'
import ActionAreaCard from './ActionAreaCard'

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            height: '7px'
        },
        "& .MuiFormLabel-root": {
            top: '-5px'
        }
    }
});

function Content(props) {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="sm">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, height: '40px' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={props.HandleSearch}
                >
                    <Stack flexDirection="row" justifyContent="space-between" style={{ gap: '10px' }}>
                        <TextField
                            className={classes.root}
                            id="outlined-basic"
                            label="Name"
                            type="search"
                            placeholder="Search for an manga..."
                            variant="outlined"
                            value={props.search}
                            onChange={e => props.SetSearch(e.target.value)}
                            fullWidth
                        />
                        <Button variant="contained" color="primary" onClick={props.HandleSearch}>Search</Button>
                    </Stack>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {props.mangaList.map(manga => (
                        <ActionAreaCard
                            manga={manga}
                            key={manga.mal_id} />
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Content;
