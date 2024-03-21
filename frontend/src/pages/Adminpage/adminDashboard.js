import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import './adminDashboard.css';
import StudentTable from './adminStudents';

const AdminDashboard = ({ students }) => {
    const [studentCount, setStudentCount] = useState(0);
    const [numTeachers, setNumTeachers] = useState(0);
    const [numClasses, setNumClasses] = useState(0);
    const [notices, setNotices] = useState([]);
    const [newNotice, setNewNotice] = useState('');
    const [count, setCount] = useState(20000);
    const [notice, setNotice] = useState('Welcome to our school!');
    const [isEditing, setIsEditing] = useState(false);
    const [editedIndex, setEditedIndex] = useState(null);




    const handleEditClick = (index) => {
        setIsEditing(true);
        setNewNotice(notices[index]);
        setEditedIndex(index);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        if (editedIndex !== null) {
            const updatedNotices = [...notices];
            updatedNotices[editedIndex] = newNotice;
            setNotices(updatedNotices);
            setNewNotice('');
            setEditedIndex(null);
        }
    };

    const deleteNotice = (index) => {
        const updatedNotices = [...notices];
        updatedNotices.splice(index, 1);
        setNotices(updatedNotices);
    };

    const addNotice = () => {
        if (newNotice.trim()) {
            setNotices([...notices, newNotice]);
            setNewNotice('');
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 28000) {
                setCount(count + 1);
            }
        }, 1);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="cont">
            <h1 className="txt">Admin Dashboard</h1>
            <div className="cardContainer">
                <div className="card" >
                    <img src={img1} alt="" />
                    <h2>Total Students</h2>
                    <p className="nos">{studentCount}</p>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <h2>Total Classes</h2>
                    <p className="nos">{numClasses}</p>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <h2>Total Teachers</h2>
                    <p className="nos">{numTeachers}</p>
                </div>
                <div className="card">
                    <img src={img4} alt="" />
                    <h2>Fees Collection</h2>
                    <p className="nos">${count}</p>
                </div>
            </div>
            {/* <StudentTable studentCount={studentCount} setStudentCount={setStudentCount} /> */}

            <div className="noticeCard">
                <h2>Notice Board</h2>
                {notices.map((notice, index) => (
                    <div key={index} className="notice">
                        {isEditing && editedIndex === index ? (
                            <textarea
                                value={newNotice}
                                onChange={(e) => setNewNotice(e.target.value)}
                                rows={4}
                                cols={50}
                            />
                        ) : (
                            <p>{notice}</p>
                        )}
                        {isEditing && editedIndex === index ? (
                            <button className='save-btn' onClick={handleSaveClick}>Save</button>
                        ) : (
                            <button className='edit-btn' onClick={() => handleEditClick(index)}>Edit</button>
                        )}
                        <button className='del-btn' onClick={() => deleteNotice(index)}>Delete</button>
                    </div>
                ))}
                <pre>
                    <textarea
                        placeholder="Add New Notice"
                        style={{ marginTop: '20px', position: 'relative', top: '10px' }}
                        onChange={(e) => setNewNotice(e.target.value)}
                        value={newNotice}
                    />
                </pre>
                <button className='add-btn' onClick={addNotice}>Add Notice</button>
            </div>

        </div>
    );
};

export default AdminDashboard;
