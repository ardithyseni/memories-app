import React, { useEffect, useLayoutEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../../actions/postActions';
import CommentSection from './CommentSection';


const PostDetails = () => {

    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    // console.log('Post Details');


    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useLayoutEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({
                search: 'none',
                tags: post?.tags.join(',')
            }));
        }
    }, [post])

    if (!post) return null;

    if (isLoading) {
        return <Paper elevation={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh' }}>
            <CircularProgress color="primary" size={170} />
        </Paper>
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => history.push(`/posts/${_id}`);

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div style={{
                display: 'flex',
                width: '100%',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{
                    borderRadius: '20px',
                    margin: '10px',
                    // width: '500px',
                    flex: 1
                }}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography style={{ margin: '20px 0' }} gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <CommentSection post={post} />
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div style={{ maxWidth: '60%', minWidth: '25%', margin: '0 auto', maxHeight: '550px', display: 'flex', flexWrap: {xs: 'wrap', sm: 'wrap'} ,  justifyContent: 'center', alignItems: 'center', marginLeft: { xs: '0', sm: '0', md: '20px', lg: '20px', xl: '20px' } }}>
                    <img style={{
                        borderRadius: '17px',
                        objectFit: 'contain',
                        margin: '0 auto',
                        display: 'block',
                        maxHeight: '100%',
                        minHeight: '40%',
                        maxWidth: '90%',
                        minWidth: '45%'
                    }} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
            {recommendedPosts.length > 0 ? (
                <div style={{ borderRadius: '20px', margin: '10px', flex: 1, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' } }}>
                    <Typography gutterBottom variant="h5">You might also like:</Typography>
                    <Divider />
                    <div style={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row'
                        }
                    }}>
                        {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                            <div style={{ margin: '20px', cursor: 'pointer', maxWidth: '260px' }} onClick={() => openPost(_id)} key={_id} >
                                <Typography gutterBottom variant="h6">{title}</Typography>
                                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                                <img src={selectedFile} width="200px" alt={title} />
                            </div>
                        ))}
                    </div>
                </div>
            ): null}
        </Paper>
    )
};

export default PostDetails;