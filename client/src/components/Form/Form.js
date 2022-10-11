import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/postActions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
    const history = useHistory();

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId === null) {
            dispatch(createPost({ ...postData, name: user?.result?.name }, history));
            
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }

    // if (!user?.result?.name) {
    //     (
    //         <Paper sx={{ p: 2, m: 1 }}>
    //             <Typography variant="h6" align="center">
    //                 Please Sign In to create your own memories and like other memories
    //             </Typography>
    //         </Paper>
    //     )
    // }

    return (

        <Paper sx={{ p: 2, m: 1 }} elevation={6} >
            {user ? (<form style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                <TextField
                    sx={{ m: 1 }}
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    sx={{ m: 1 }}
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={3}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    sx={{ m: 1 }}
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                <div style={{
                    width: '97%',
                    margin: '10px 0'
                }}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button
                    sx={{ mb: 2 }}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={clear}
                    fullWidth
                >Clear
                </Button>
            </form>
            ) : 
            (<Typography variant="h6" align="center">
                Please Sign In to create your own memories and like other memories
            </Typography>)}

        </Paper>
    );
}

export default Form; 