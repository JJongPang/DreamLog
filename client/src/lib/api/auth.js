import Axios from 'axios';
import axios from 'axios';

export const register = ({ username, password }) => axios.post(`http://localhost:5000/register`, { username, password });
