import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postActions';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'

const App = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">

            <AppBar sx={{
                position: 'static',
                color: 'inherit',
                backgroundColor: 'lightblue',
                borderRadius: 15,
                margin: '30px 0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Typography sx={{color: 'rgba(0,183,255, 1)', variant: 'h2', align: 'center'}}>Memories</Typography>
                <img src={memories} style={{ marginLeft: 15 }} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid sx={{display: 'flex', flexDirection: {xs: 'column-reverse', sm: 'row'}}} container justify='space-between' alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;