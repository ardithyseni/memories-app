import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getPost } from '../../actions/postActions';


const PostDetails = () => {

    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    // console.log('Post Details');


    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if (!post) return null;

    if (isLoading) {
        return <Paper elevation={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh' }}>
            <CircularProgress color="primary" size={150}/>
        </Paper>
    }

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div style={{
                display: 'flex',
                width: '100%', flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' }, flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }
            }}>
                <div style={{
                    borderRadius: '20px',
                    margin: '10px',
                    // width: '500px',
                    flex: 1
                }}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div style={{ maxHeight: '550px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: { xs: '0', sm: '0', md: '20px', lg: '20px', xl: '20px' } }}>
                    <img style={{
                        borderRadius: '20px',
                        objectFit: 'cover',
                        margin: 'auto',
                        display: 'block',
                        maxHeight: '600px',
                    }} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
        </Paper>
    )
};

export default PostDetails;