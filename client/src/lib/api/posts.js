import axios from 'axios';

export const writePost = ({ title, body, tags }) => axios.post(`http://localhost:5000/write`, { title, body, tags });

export const readPost = (id) => axios.get(`http://localhost:5000/write/${id}`);

// export const listPosts = ({ page, _id, tag }) => {
//     const queryString = qs.stringify({
//         page,
//         _id,
//         tag,
//     });
//     return axios.get(`http://localhost:5000/write`);
// };
