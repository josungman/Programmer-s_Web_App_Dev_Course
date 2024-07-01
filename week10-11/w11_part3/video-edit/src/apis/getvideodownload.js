import axios from 'axios';

const downloadApi = axios.create({
  baseURL: 'https://175.118.61.192',
  //baseURL: 'http://127.0.0.1:9770',
  responseType: 'blob',
});

export default downloadApi;