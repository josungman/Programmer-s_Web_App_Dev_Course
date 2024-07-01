import axios from 'axios';

const downloadApi = axios.create({
  baseURL: 'http://175.118.61.192:9770',
  //baseURL: 'http://127.0.0.1:9770',
  responseType: 'blob',
});

export default downloadApi;