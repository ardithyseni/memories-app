// this file goes hand to hand with ../controllers/posts.js

import express from 'express';
import { getPosts, getPostsBySearch, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// localhost:5000/posts/

// router.get('/', (req, res) => {
//     res.send('This works!');
// });


router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;