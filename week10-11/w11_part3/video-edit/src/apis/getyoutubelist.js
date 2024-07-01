import axios from 'axios';
import { youtubeapikey } from '../configs/config';


const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: youtubeapikey, // 여기에 발급받은 API 키를 넣어주세요.
  },
});

export default instance;