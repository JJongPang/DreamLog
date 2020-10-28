import axios from 'axios';

export const writePost = ({ title, body, tags }) => axios.post(`http://localhost:5000/write`, { title, body, tags });

export const readPost = (id) => axios.get(`http://localhost:5000/write/${id}`);
