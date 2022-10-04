import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
import { useHistory } from 'react-router-dom';

const history = useHistory();

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // register the user

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};