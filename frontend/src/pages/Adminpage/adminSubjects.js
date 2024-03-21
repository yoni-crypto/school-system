// SubjectForm.js
import React, { useState } from 'react';

function AdminSubjects({ classId }) {
    const [subjectName, setSubjectName] = useState('');

    const handleSubjectSubmit = (e) => {
        e.preventDefault();
        // Make an API call to link subject with subjectName to the specified class
        // Example: axios.post(`/api/classes/${classId}/subjects`, { name: subjectName });
        console.log(`Adding subject: ${subjectName} to class ${classId}`);
        // Reset form after submission
        setSubjectName('');
    };

    return (
        <div>
            <h2>Add a New Subject</h2>
            <form onSubmit={handleSubjectSubmit}>
                <input
                    type="text"
                    placeholder="Enter subject name"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                />
                <button type="submit">Add Subject</button>
            </form>
        </div>
    );
}

export default AdminSubjects;
