import React, { useState } from 'react';
import './adminClasses.css'

function AdminClasses() {
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
        <div className='adminClasses'>
            <h1 className="txt">Admin Dashboard</h1>
            <h2>Add classes</h2>
            <input
                type="text"
                value={className}
                placeholder='Enter Class Name'
                onChange={(e) => setClassName(e.target.value)}
            />
            <button onClick={addClass}>Add Class</button>

            <h2 style={{ color: 'blue' }}>Classes</h2>
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
                    />
                    <button onClick={addSubject}>Add Subject</button>

                    <h3>Add Student</h3>
                    <input
                        type="text"
                        value={studentInput}
                        onChange={(e) => setStudentInput(e.target.value)}
                    />
                    <button onClick={addStudent}>Add Student</button>

                    <h3>Add Teacher</h3>
                    <input
                        type="text"
                        value={teacherInput}
                        onChange={(e) => setTeacherInput(e.target.value)}
                    />
                    <button onClick={addTeacher}>Add Teacher</button>

                    {/* Display Subjects, Students, and Teachers */}
                    <h3>Class Details</h3>
                    <p>Class Name: <strong>{classes[selectedClass].name}</strong></p>
                    <h4>Subjects</h4>
                    <ul>
                        {classes[selectedClass].subjects.map((subject, index) => (
                            <li key={index}>{subject}</li>
                        ))}
                    </ul>
                    <h4>Students</h4>
                    <ul>
                        {classes[selectedClass].students.map((student, index) => (
                            <li key={index}>{student}</li>
                        ))}
                    </ul>
                    <h4>Teachers</h4>
                    <ul>
                        {classes[selectedClass].teachers.map((teacher, index) => (
                            <li key={index}>{teacher}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default AdminClasses;
