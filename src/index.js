import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
// import Lesson3 from './3/App';
// import Lesson4 from './4/App';
// import Lesson5 from './5';
import Houzing from './Houzing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Lesson3 /> */}
    {/* <Lesson4/> */}
    {/* <Lesson5/> */}
    <Houzing/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
