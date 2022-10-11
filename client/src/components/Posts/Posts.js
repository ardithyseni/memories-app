import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);

    console.log(posts, isLoading);

    if (!posts.length && !isLoading) return 'No posts';

    return (
        isLoading ? <CircularProgress sx={{ display: 'flex', alignItems: 'center', margin: '0 auto' }} color="primary" size={150}/> : 
        (
            <Grid container alignItems="stretch" spacing={3}>
                {
                     posts.map((post) => (
                        <Grid key={post._id} item lg={4} md={6} xs={12} sm={12}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;