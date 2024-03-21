import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import First from './components/First';
import Choose from './components/Choose';
import AdminRegister from './components/AdminRegister';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';
import { BrowserRouter } from 'react-router-dom';
import Sidbar from './pages/Adminpage/adminSidebar.js';
import Admin from './pages/Adminpage/admin.js';
import AdminLogin from './components/AdminLogin.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <First /> */}
      {/* <Choose /> */}
      {/* <AdminRegister/> */}
      {/* <Header/> */}
      {/* <StudentLogin /> */}
      {/* <TeacherLogin /> */}
      {/* <Sidbar /> */}
      {/* <Container/> */}
      {/* <AdminLogin /> */}
      <Admin />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
