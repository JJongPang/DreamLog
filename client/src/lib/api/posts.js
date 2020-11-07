import axios from 'axios';

export const writePost = ({ title, body, tags }) =>
    axios.post(`http://localhost:5000/write`, { title, body, tags }, { withCredentials: true });

export const readPost = (id) => axios.get(`http://localhost:5000/write/${id}`, { withCredentials: true });

export const getEditorList = () => axios.get(`http://localhost:5000/list`, { withCredentials: true });
