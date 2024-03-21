// TeacherForm.js
import React, { useState } from 'react';

function AdminTeacher({ classId }) {
    const [teacherName, setTeacherName] = useState('');

    const handleTeacherSubmit = (e) => {
        e.preventDefault();
        // Make an API call to associate teacher with teacherName to the specified class
        // Example: axios.post(`/api/classes/${classId}/teachers`, { name: teacherName });
        console.log(`Adding teacher: ${teacherName} to class ${classId}`);
        // Reset form after submission
        setTeacherName('');
    };

    return (
        <div>
            <h2>Add a New Teacher</h2>
            <form onSubmit={handleTeacherSubmit}>
                <input
                    type="text"
                    placeholder="Enter teacher name"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                />
                <button type="submit">Add Teacher</button>
            </form>
        </div>
    );
}

export default AdminTeacher;
