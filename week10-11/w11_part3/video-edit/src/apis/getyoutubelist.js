import axios from 'axios';
import { youtubeapikey } from '../configs/config';


const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: youtubeapikey, // 여기에 발급받은 API 키를 넣어주세요.
    videoDuration: 'short', // 영상 길이가 짧은 동영상만 가져오도록 설정
    type: 'video', // 비디오 타입으로 검색
  },
});

export default instance;