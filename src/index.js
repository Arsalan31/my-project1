import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Udix from './Udix';
import Akdn from './Akdn';
import Akdn1 from './Akdn1';
import Slack from './Slack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Udix' element={<Udix />} />
      <Route path='/Akdn' element={<Akdn/>} />
      <Route path='/Akdn1' element={<Akdn1/>} />
      <Route path='/rivers-roads' element={<Slack/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals