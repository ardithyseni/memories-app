import { Container, Grid, Link, Item, Paper, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";


export default function Footer() {

    return <footer style={{ marginTop: 'calc(10% + 10px)' }}>
        <Box >
            <Paper sx={{ height: '120px', alignItems: 'center' }}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made by Ardit Hyseni
                </Typography>

                <Grid container='true' direction="column" style={{display: 'flex', flexGrow: 'grow', flexDirection: {xs: 'column', sm: 'column'}}} alignItems='center' justifyContent='center' alignContent='center' spacing={2}>

                    <Grid item style={{ textAlign: "center" }} xs={1} md={1}>
                        <Typography style={{ display: 'flex', alignItems: 'center' }}>
                            <GitHubIcon />
                            <Link marginLeft='3px' href="https://www.github.com/ardithyseni" underline="hover">
                            GitHub
                            </Link>
                        </Typography>
                    </Grid>
                    {/* <Divider /> */}
                    <Grid item style={{ textAlign: "center" }} xs={1} md={1}>
                        <Typography style={{ display: 'flex', alignItems: 'center' }}>
                            <LinkedInIcon/>
                            <Link marginLeft='3px' href="https://www.linkedin.com/in/ardit-hyseni" underline="hover">
                            LinkedIn
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>

            </Paper>
        </Box>
    </footer>

};