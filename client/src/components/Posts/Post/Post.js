import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from "../../../actions/postActions";

const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.jti || user?.result?._id)) 
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card raised elevation={6} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative'
        }}>
            <CardMedia
                sx={{
                    height: 0,
                    paddingTop: '56.25%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundBlendMode: 'darken'
                }}
                image={post.selectedFile}
                title={post.tile}
            />
            <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {(user?.result?.jti === post?.creator || user?.result?._id === post?.creator) && (

            <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'white' }}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="large" />
                </Button>
            </div>

            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <Typography sx={{ padding: '0 16px' }} variant="h5" gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>

            <CardActions sx={{ padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <Likes />
                </Button>
                {(user?.result?.jti === post?.creator || user?.result?._id === post?.creator) && (
                <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize="small" />
                    &nbsp;Delete
                </Button>
                )}
            </CardActions>

        </Card>
    );
}

export default Post;