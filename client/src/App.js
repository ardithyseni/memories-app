import React, { } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from './components/Footer';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
        <BrowserRouter>
        <GoogleOAuthProvider clientId="1066946270031-54glln1vrs9fmai8mnh561u6oas000b9.apps.googleusercontent.com">
            <Container maxWidth="xl">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts"/>)} />
                </Switch>
            </Container>
            </GoogleOAuthProvider>
        </BrowserRouter>
        <Footer />
        </>
    );
}

export default App;