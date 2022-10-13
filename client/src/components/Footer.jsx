import { Container, Grid, Link, Item, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


export default function Footer() {

    return <footer style={{ marginTop: 'calc(10% + 10px)' }}>
        <Box >
            <Paper sx={{ height: '100px', alignItems: 'center' }}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made by Ardit Hyseni
                </Typography>

                <Grid container alignItems='center' justifyContent='center' alignContent='center' spacing={2}>

                    <Grid item style={{ textAlign: "center" }} xs={1} md={1}>
                        <Typography>
                            <Link href="https://www.github.com/ardithyseni" underline="hover">
                            GitHub
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} xs={1} md={1}>
                        <Typography>
                            <Link href="https://www.linkedin.com/in/ardit-hyseni" underline="hover">
                            LinkedIn
                            </Link>
                        </Typography>
                    </Grid>

                </Grid>

            </Paper>
        </Box>
    </footer>

};