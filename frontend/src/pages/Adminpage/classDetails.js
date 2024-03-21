// SchoolManagement.js

import React, { useState } from 'react';

function SchoolManagement() {
    const [classes, setClasses] = useState([]);
    const [className, setClassName] = useState('');
    const [selectedClass, setSelectedClass] = useState(null);
    const [subjectInput, setSubjectInput] = useState('');
    const [studentInput, setStudentInput] = useState('');
    const [teacherInput, setTeacherInput] = useState('');

    const addClass = () => {
        if (className.trim() !== '') {
            setClasses([...classes, { name: className, subjects: [], students: [], teachers: [] }]);
            setClassName('');
        }
    };

    const addSubject = () => {
        if (selectedClass !== null && subjectInput.trim() !== '') {
            const updatedClasses = classes.map((c, index) => {
                if (index === selectedClass) {
                    return { ...c, subjects: [...c.subjects, subjectInput] };
                }
                return c;
            });
            setClasses(updatedClasses);
            setSubjectInput('');
        }
    };

    const addStudent = () => {
        if (selectedClass !== null && studentInput.trim() !== '') {
            const updatedClasses = classes.map((c, index) => {
                if (index === selectedClass) {
                    return { ...c, students: [...c.students, studentInput] };
                }
                return c;
            });
            setClasses(updatedClasses);
            setStudentInput('');
        }
    };

    const addTeacher = () => {
        if (selectedClass !== null && teacherInput.trim() !== '') {
            const updatedClasses = classes.map((c, index) => {
                if (index === selectedClass) {
                    return { ...c, teachers: [...c.teachers, teacherInput] };
                }
                return c;
            });
            setClasses(updatedClasses);
            setTeacherInput('');
        }
    };

    return (
        <div>
            <h2>School Management</h2>
            <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Enter class name"
            />
            <button onClick={addClass}>Add Class</button>

            <h3>Classes</h3>
            <ul>
                {classes.map((c, index) => (
                    <li key={index} onClick={() => setSelectedClass(index)}>
                        {c.name}
                    </li>
                ))}
            </ul>

            {selectedClass !== null && (
                <>
                    <h3>Add Subject</h3>
                    <input
                        type="text"
                        value={subjectInput}
                        onChange={(e) => setSubjectInput(e.target.value)}
                        placeholder="Enter subject name"
                    />
                    <button onClick={addSubject}>Add Subject</button>

                    <h3>Add Student</h3>
                    <input
                        type="text"
                        value={studentInput}
                        onChange={(e) => setStudentInput(e.target.value)}
                        placeholder="Enter student name"
                    />
                    <button onClick={addStudent}>Add Student</button>

                    <h3>Add Teacher</h3>
                    <input
                        type="text"
                        value={teacherInput}
                        onChange={(e) => setTeacherInput(e.target.value)}
                        placeholder="Enter teacher name"
                    />
                    <button onClick={addTeacher}>Add Teacher</button>

                    {/* Display Subjects, Students, and Teachers */}
                    {/* ... (similar to previous response) */}
                </>
            )}
        </div>
    );
}

export default SchoolManagement;
