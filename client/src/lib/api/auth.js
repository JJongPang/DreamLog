import axios from 'axios';

export const register = ({ username, password }) =>
    axios.post(`http://localhost:5000/token/register`, { username, password }, { withCredentials: true });

export const login = ({ username, password }) =>
    axios.post('http://localhost:5000/token/auth', { username, password }, { withCredentials: true });

export const check = () => axios.get(`http://localhost:5000/api/check`, { withCredentials: true });

export const logout = () => axios.post('http://localhost:5000/token/remove', { withCredentials: true });

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
