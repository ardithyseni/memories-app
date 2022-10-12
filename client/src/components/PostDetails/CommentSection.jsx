// import libraries
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
// import action
import { commentPost } from "../../actions/postActions";


const CommentSection = ({ post }) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const [comments, setComments] = useState(post?.comments);
    const commentsRef = useRef();

    // handling new comments
    const handleComment = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    // JSX code
    return (
        <div>
            <div style={{ display: 'flex',justifyContent: 'space-between' }}>
                <div style={{ height: '200px', overflowY: 'auto', marginRight: '30px'}}>
                    <Typography gutterBottom variant="h6">
                        Comments
                    </Typography>
                    {comments?.map((c, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{c.split(": ")[0]}</strong>
                            {c.split(":")[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name  && (
                <div style={{ width: '70%' }}>
                    <Typography gutterBottom variant="h6">
                        Write a comment
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <br />
                    <Button
                        style={{ marginTop: "10px" }}
                        fullWidth
                        disabled={!user && !comment.length}
                        color="primary"
                        variant="contained"
                        onClick={handleComment}
                    >
                        Comment
                    </Button>
                </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;