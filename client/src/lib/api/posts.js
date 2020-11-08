import axios from 'axios';
import qs from 'qs';

export const writePost = ({ title, body, tags }) =>
    axios.post(`http://localhost:5000/api/write`, { title, body, tags }, { withCredentials: true });

export const readPost = (id) => axios.get(`http://localhost:5000/api/write/${id}`, { withCredentials: true });

export const listPosts = ({ page, username, tag }) => {
    const queryString = qs.stringify({
        page,
        username,
        tag,
    });
    return axios.get(`http://localhost:5000/api/list?${queryString}`, { withCredentials: true });
};
