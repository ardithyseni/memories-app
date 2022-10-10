import React from "react";
import { Container, Grow, Grid, Paper, AppBar, Button, TextField, Chip, Autocomplete, createFilterOptions } from "@mui/material";
import { useState, useEffect } from "react";

import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/postActions';
import { useHistory, useLocation } from "react-router-dom";
import Paginate from "../Pagination";
// import TagsInput from "./TagsInput";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function handleSelecetedTags(items) {
    console.log(items);
}

const Home = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const tage = ['spooky', 'haha', 'ropt'];

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }

    const handleAddTag = (tag) => setTags([...tags, tag]);

    console.log(tags);

    const handleDeleteTag = (tagToDelete) => setTags([tags.filter((tag) => tag !== tagToDelete)]);

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    };

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' } }} container justify='space-between' alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar
                            position="static"
                            color="inherit"
                            sx={{
                                borderRadius: 4,
                                marginBottom: '1rem',
                                display: 'flex',
                                padding: '16px'
                            }}>
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                onKeyDown={handleKeyDown}
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={tags}
                                onChange={async (event, tag) => {
                                    handleAddTag(tag)
                                }}
                                // defaultValue={[top100Films[13].title]}
                                freeSolo
                                // getOptionLabel={(tags) => tags}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} onDelete={handleDeleteTag} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Search Tags"
                                        placeholder="Search Tags"
                                    />
                                )}
                            />

                            <Button onClick={searchPost} color="primary" variant="contained">Search</Button>

                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )

}

export default Home;