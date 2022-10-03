import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from "./Input";

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [isSignup, setIsSignup] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    // const googleSuccess = async (res) => {
    //     console.log(res);
    // };
    // const googleFailure = (error) => {
    //     console.log(error);
    //     console.log("Google Sign In error");
    //     // "You have created a new client application that uses libraries for user authentication or authorization 
    //     // that will soon be deprecated. New clients must use the new libraries instead
    //     // ; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
    // };

    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2
            }} elevation={3}>
                <Avatar sx={{ margin: 1, }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form style={{ width: '100%', marginTop: 3 }} onSubmit={handleSubmit}>
                    <Grid>
                        {
                            isSignup && (
                                <>
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="secondName"
                                        label="Second Name"
                                        handleChange={handleChange}
                                    />
                                </>
                            )
                        }
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"

                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup &&
                            <Input name="confirmPassword"
                                label="Confirm Password"
                                handleChange={handleChange}
                                autoComplete
                                type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}

                        />
                    <Grid container sx={{ justifyContent: 'flex-end', marginTop: 2 }}>
                        <Grid item>
                            <Button onClick={switchMode} sx={{ fontSize: 12 }}>
                                {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container >
    )
}

export default Auth;