
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EventByBootstrap from './pages/EventByBootstrap';
import Notice from './pages/Notice'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventByBootstrap />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
