import React from 'react'
import { Box, Container, Grid, TextField } from '@mui/material';
import ActionAreaCard from './ActionAreaCard'

function Content(props) {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '80%' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={props.HandleSearch}
            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    type="search"
                    placeholder="Search for an manga..."
                    variant="outlined"
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                />
            </Box>
            <Container>
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
