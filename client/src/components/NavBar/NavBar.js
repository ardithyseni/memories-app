import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import memories from '../../images/memories.png';
import './styles.css';
import decode from 'jwt-decode';
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

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        // JWT...

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    
    // const renderCorrectNavBar = () => {
    //     if (user === null) {
    //         return <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>;
    //     } 
    //     else if (user.result.credential) {
    //         return <GoogleAuthNavBar user={user} logout={logout} />
    //     }
    //     else if (user.result.name) {
    //         return <AuthNavBar user={user} logout={logout} />
    //     }
    // }
    

    return (
        <AppBar sx={{
            position: 'static',
            color: 'inherit',
            backgroundColor: 'lightblue',
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            padding: '10px 10px',
            flexDirection: {sm: 'cloumn', xs: 'column', md: 'row', lg: 'row', xl: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ margin: '5px 0px 0px 10px'  }} src={memoriesText} alt="icon" height="40px" />
                <img src={memoriesLogo} style={{ margin: '5px 0px 0px 10px' }} alt="memories" height="40px" />
            </Link>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', width: 'auto' }}>
            {/* {renderCorrectNavBar()} */}
            {user ? (
                    <div className="profile" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '300px',
                        alignItems: 'center',
                    }}  >
                        <Avatar
                            className="purple"
                            alt={user.result.name}
                            src={user.result.picture}
                        >
                        {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className="userName" variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color="secondary" onClick={logout} >Logout</Button>
                    </div>
                ) : (
                    <Button sx={{ marginLeft: '10px' }} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;