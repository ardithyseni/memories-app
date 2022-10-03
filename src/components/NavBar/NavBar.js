import React, { useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import memories from '../../images/memories.png';
import './styles.css';

const NavBar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

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
                {user ? (
                    <div className="profile" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '300px',
                        alignItems: 'center',
                    }}  >
                        <Avatar
                            className="purple"
                            alt={user.decodedToken.name}
                            src={user.decodedToken.picture}
                        >{user.decodedToken.name.charAt(0)}
                        </Avatar>
                        <Typography className="userName" variant="h6">{user.decodedToken.name}</Typography>
                        <Button variant="contained" sx={{ marginLeft: '10px' }} color="secondary" >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;