import axios from 'axios';

export const writePost = ({ title, body, tags }) =>
    axios.post(`http://localhost:5000/api/write`, { title, body, tags }, { withCredentials: true });

export const readPost = (id) => axios.get(`http://localhost:5000/api/write/${id}`, { withCredentials: true });

export const getEditorList = () => axios.get(`http://localhost:5000/api/list`, { withCredentials: true });
