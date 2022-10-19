import axios from "axios";



if (process.env.NODE_ENV === 'production') {
    var API = axios.create({ baseURL: 'https://travelling-memories.herokuapp.com' });
}
else if (process.env.NODE_ENV === 'development') {
    var API = axios.create({ baseURL: 'http://localhost:5000' });
}

// const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req) => {

    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
}); // function thats going to happen to each request


export const fetchPosts = (page) => API.get(`/post?page=${page}`);
export const fetchPost = (id) => API.get(`/post/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/post/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/post', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const likePost = (id) => API.patch(`/post/${id}/likePost`);
export const comment = (value, id) => API.post(`/post/${id}/commentPost`, { value });


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);