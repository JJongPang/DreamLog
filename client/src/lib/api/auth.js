import axios from 'axios';

export const register = ({ username, password }) => axios.post(`http://localhost:5000/token/register`, { username, password });

export const login = ({ username, password }) => axios.post('http://localhost:5000/token/auth', { username, password });

export const check = () => axios.get(`http://localhost:5000/api/check`);

// export const check = axios({
//     method: 'GET',
//     url: 'http://localhost:5000/api/check',
//     data: {},
//     config: { headers: { 'Content-Type': 'application/json' } },
// })
//     .then(function (response) {
//         //handle success
//         console.log(response);
//     })
//     .catch(function (response) {
//         //handle error
//         console.log(response);
//     });
