import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import memories from '../../images/memories.png';
import './styles.css';

const NavBar = () => {

    const user = null;

    return (
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography component={Link} to="/" sx={{ color: 'rgba(0,183,255, 1)', variant: 'h2', align: 'center', textDecoration: 'none' }}>Memories</Typography>
                <img src={memories} style={{ marginLeft: 15 }} alt="memories" height="60" />
            </div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', width: { xs: 'auto', sm: 'auto', md: '400px' } }}>
                {user ? (
                    <div className="profile"  >
                        <Avatar 
                            className="purple" 
                            alt={user.result.name} 
                            src={user.result.imageUrl} 
                        >{user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className="userName" variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" sx={{ marginLeft: '20px' }} color="secondary" >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;