import React, { useEffect } from "react";
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";

const Paginate = ({ page }) => {

    const { numberOfPages } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        if (page) dispatch(getPosts(page));
    }, [page]); // run it everytime a page changes

    return (
        <Pagination
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;