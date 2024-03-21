// App.js (or any other parent component)
import React, { useState } from 'react';
import NoticeBoard from './adminNotice.js'; // Adjust the path based on your project structure

function OtherDash() {
    const [notices, setNotices] = useState([]);

    // Function to add a new notice
    const addNotice = (newNotice) => {
        setNotices([...notices, newNotice]);
    };

    // Function to edit a notice (you can implement this as needed)
    const editNotice = (index, updatedNotice) => {
        // Update the notice at the specified index
        const updatedNotices = [...notices];
        updatedNotices[index] = updatedNotice;
        setNotices(updatedNotices);
    };

    // Function to delete a notice
    const deleteNotice = (index) => {
        const updatedNotices = notices.filter((_, i) => i !== index);
        setNotices(updatedNotices);
    };

    return (
        <div className="OtherDash">
            <h1>My Notice Board OtherDash</h1>
            <NoticeBoard
                notices={notices}
                addNotice={addNotice}
                editNotice={editNotice}
                deleteNotice={deleteNotice}
            />
        </div>
    );
}

export default OtherDash;
