import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidbar from './adminSidebar';
import AdminDashboard from './adminDashboard.js';
import AdminTeacher from './adminTeacher.js';
import AdminStudents from './adminStudents.js';
import AddClassForm from './adminClasses.js';
import OtherDash from './otherDashboard.js';
import NoticeBoard from './adminNotice.js';
import AdminClasses from './adminClasses.js';
import SchoolManagement from './classDetails.js';

const Admin = () => {
    const [selectedLink, setSelectedLink] = useState('');

    return (

        <div className="app" style={{ display: 'flex', padding: '0' }}>
            <div style={{ width: '15%' }}>
                <Sidbar setSelectedLink={setSelectedLink} />
            </div>
            <div className="content" style={{ width: '85%' }}>
                <Routes>
                    {/* <Route path='/abc' element={<div> <Outlet /></div>}>
                        <Route path='' element={<p>from abc root</p>} />
                        <Route path='abc' element={<p>from abc abc</p>} />

                    </Route> */}
                    <Route path='' element={<AdminDashboard />} />
                    <Route path='/admin/admin-student' element={<AdminStudents />} />
                    <Route path='/admin/admin-teacher' element={<AdminTeacher />} />
                    <Route path='/admin/adminClasses' element={<AdminClasses />} />
                    <Route path='admn/admin' element={<Admin />} />
                    <Route path='/admin/other-dash' element={<SchoolManagement />} />
                    <Route path='/admin/notices' element={<NoticeBoard />} />
                </Routes>
            </div>
        </div>

    );
};

export default Admin;
