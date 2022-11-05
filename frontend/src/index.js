import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';import Header from './component/Header';
import HeadComponent from './component/HeadComponent';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/Home" element={<Header/>}></Route>
    <Route path="/Head" element={<HeadComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

