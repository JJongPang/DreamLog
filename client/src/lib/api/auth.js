import axios from 'axios';

export const register = async ({ username, password }) =>
    await axios.post(`http://localhost:5000/token/register`, { username, password }, { withCredentials: true });

export const login = async ({ username, password }) =>
    await axios.post('http://localhost:5000/token/auth', { username, password }, { withCredentials: true });

export const check = async () => await axios.get(`http://localhost:5000/api/check`, { withCredentials: true });

export const logout = async () => await axios.post('http://localhost:5000/token/remove', { withCredentials: true });
