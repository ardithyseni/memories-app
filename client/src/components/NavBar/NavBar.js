import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import memories from '../../images/memories.png';
import './styles.css';
import GoogleAuthNavBar from "./GoogleAuthNavBar";
import AuthNavBar from "./AuthNavBar";

const NavBar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    console.log(user);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        // const decodedToken = user?.decodedToken;
        const token = user?.token;


        // JWT...

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    
    const renderCorrectNavBar = () => {
        if (user === null) {
            return <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>;
        } 
        else if (user.result.credential) {
            return <GoogleAuthNavBar user={user} logout={logout} />
        }
        else if (user.result.name) {
            return <AuthNavBar user={user} logout={logout} />
        }
    }
    

    return (
        <AppBar sx={{
            position: 'static',
            color: 'inherit',
            backgroundColor: 'lightblue',
            borderRadius: 15,
            margin: '30px 10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
        }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography component={Link} to="/" sx={{ color: 'rgba(0,183,255, 1)', variant: 'h2', align: 'center', textDecoration: 'none', marginLeft: 5 }}>Memories</Typography>
                <img src={memories} style={{ marginLeft: '15px' }} alt="memories" height="60" />
            </div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', width: { xs: 'auto', sm: 'auto', md: '400px' } }}>
            {renderCorrectNavBar()}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;