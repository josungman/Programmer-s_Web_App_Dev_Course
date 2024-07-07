import axios from 'axios';

const downloadApi = axios.create({
  baseURL: 'https://www.sungman.store',
  //baseURL: 'http://127.0.0.1:9770',
  responseType: 'blob',
});

export default downloadApi;