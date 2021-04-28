import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.231.190.153:3000/',
});