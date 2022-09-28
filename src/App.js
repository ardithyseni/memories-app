import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postActions';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'
// import useStyles from './styles';
// import { styled } from '@mui/material/styles';
// import { CustomizedAppBar, CustomizedHeading } from './styles.js';
// import styled from 'styled-components';


const App = () => {
    // const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

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
                    <Grid container justify='space-between' alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;