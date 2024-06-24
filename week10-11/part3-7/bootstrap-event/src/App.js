// 조성만
import React, { useState, useEffect } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EventByBootstrap from './pages/EventByBootstrap';
import EventByAntd from './pages/EventByAntd';
import EventByMui from './pages/EventByMui';

import Home from './pages/Home';
import Notice from './pages/Notice'

import VideoEditor from './pages/VideoEditor/VideoEditor';

import { dummayproductList, filterOptions } from "./util/dummydata";

export const ProductStateContext = React.createContext()
export const FilterOptionsContext = React.createContext()


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(dummayproductList)
  }, []);

  useEffect(() => {
    console.log('appdata : ', data);  // 상태 업데이트 후 로그
  }, [data]);

  return (

    <ProductStateContext.Provider value={data}>
      <FilterOptionsContext.Provider value={filterOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bootstrap" element={<EventByBootstrap />} />
            <Route path="/antd" element={<EventByAntd />} />
            <Route path="/mui" element={<EventByMui />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/videoedit" element={<VideoEditor />} />
          </Routes>
        </BrowserRouter>
      </FilterOptionsContext.Provider>
    </ProductStateContext.Provider>
  );
}

export default App;
