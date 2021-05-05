import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.stage.api.itau.loomi.com.br',
});
