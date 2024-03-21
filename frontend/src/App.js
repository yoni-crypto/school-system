import { Route, Routes } from 'react-router';
import './App.css';
import First from './components/First';
// import AdminLogin from './components/AdminRegister';
import Choose from './components/Choose';
import StudentLogin from './components/StudentLogin';
import AdminRegister from './components/AdminRegister';
import TeacherLogin from './components/TeacherLogin';
import AdminLogin from './components/AdminLogin';
import Admin from './pages/Adminpage/admin';
import AdminDashboard from './pages/Adminpage/adminDashboard';
import AdminTeacher from './pages/Adminpage/adminTeacher';
import OtherDash from './pages/Adminpage/otherDashboard';
import NoticeBoard from './pages/Adminpage/adminNotice';
import StudentTable from './pages/Adminpage/adminStudents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={First} />
        <Route path='/adminlogin' Component={AdminLogin} />
        <Route path='/signup' Component={AdminRegister} />
        <Route path='/choose' Component={Choose} />
        <Route path='/teacherLogin' Component={TeacherLogin} />
        <Route path='/studentLogin' Component={StudentLogin} />
        <Route path='/Admin' Component={Admin} />
        <Route path='' Component={AdminDashboard} />
        <Route path='/admin/admin-student' Component={StudentTable} />
        <Route path='/admin/admin-teacher' Component={AdminTeacher} />
        {/* <Route path='/admin/adminClasses' Component={AddClassForm} /> */}
        <Route path='admn/admin' Component={Admin} />
        <Route path='/admin/other-dash' Component={OtherDash} />
        <Route path='/admin/notices' Component={NoticeBoard} />

      </Routes>
    </div>
  );
}

export default App;
