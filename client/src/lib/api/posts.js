import axios from 'axios';
import qs from 'qs';

export const writePost = async ({ title, body, tags }) =>
    await axios.post(`http://localhost:5000/api/write`, { title, body, tags }, { withCredentials: true });

export const readPost = async (id) => await axios.get(`http://localhost:5000/api/write/${id}`, { withCredentials: true });

export const listPosts = async ({ page, username, tag }) => {
    const queryString = qs.stringify({
        page,
        username,
        tag,
    });
    return await axios.get(`http://localhost:5000/api/list?${queryString}`, { withCredentials: true });
};

export const updatePost = async ({ id, title, body, tags }) =>
    await axios.put(
        `http://localhost:5000/api/update/${id}`,
        {
            title,
            body,
            tags,
        },
        { withCredentials: true }
    );
