import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoEditor from './pages/VideoEditor/VideoEditor';
import YoutubeVideoList from './pages/YoutubeVideoList/YoutubeVideoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoEditor />} />
        <Route path="/youtubevideolist" element={<YoutubeVideoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
