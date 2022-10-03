import React, { } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {


    return (
        <BrowserRouter>
        <GoogleOAuthProvider clientId="1066946270031-54glln1vrs9fmai8mnh561u6oas000b9.apps.googleusercontent.com">
            <Container maxWidth="lg">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
            </GoogleOAuthProvider>
        </BrowserRouter>
    );
}

export default App;