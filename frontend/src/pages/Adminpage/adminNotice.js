import React, { useState } from 'react';

function NoticeBoard({ notices, addNotice, editNotice, deleteNotice }) {
    const [editedNotice, setEditedNotice] = useState('');


    const [newNotice, setNewNotice] = useState('');

    const handleAddNotice = () => {
        // Make an API call or update state to add the new notice
        addNotice(newNotice);
        setNewNotice('');
        const editNotice = (index) => {
            const editedContent = notices[index]; // Get the notice content
            setEditedNotice(editedContent); // Set the edited notice
        };


    };
    const handleSaveNotice = (editedContent) => {
        // Make an API call or update state to save the edited notice
        // For example:
        // editNotice(index, editedContent);
        // where `index` is the index of the notice being edited
        // and `editedContent` is the updated notice content
        // Then reset the editedNotice state:
        setEditedNotice('');
    };


    return (
        <div>
            <h2>Notice Board</h2>
            {notices.map((notice, index) => (
                <div key={index} className="notice">
                    <p>{notice}</p>
                    <button onClick={() => editNotice(index)}>Edit</button>
                    <button onClick={() => deleteNotice(index)}>Delete</button>
                </div>
            ))}
            <textarea
                placeholder="Add New Notice"
                value={newNotice}
                onChange={(e) => setNewNotice(e.target.value)}
                rows={4}
                cols={50}
            />
            <button onClick={handleAddNotice}>Add Notice</button>

            {/* New Save button */}
            {editedNotice && (
                <button onClick={() => handleSaveNotice(editedNotice)}>Save</button>
            )}

            <button onClick={handleAddNotice}>Add Notice</button>
        </div>
    );
}

export default NoticeBoard;
