import React, { useState } from 'react';
import './adminStudent.css'
import Sidbar from './adminSidebar';

const StudentTable = ({ studentCount, setStudentCount }) => {
    const [students, setStudents] = useState([]);
    const [newName, setNewName] = useState('');
    const [newRollNumber, setNewRollNumber] = useState('')
    const [newGradeName, setNewGradeName] = useState('');
    const addStudent = () => {
        const newStudent = {
            name: newName,
            grade: newGradeName,
            rollNumber: newRollNumber,
            password: Math.random().toString(36).substring(7)
        };
        setStudents(prevStudents => [...prevStudents, newStudent]);
        // setStudentCount(prevCount => prevCount + 1);
        setNewName('')
        setNewGradeName('')
        setNewRollNumber('');
    };

    const deleteStudent = index => {
        const updatedStudents = students.filter((student, i) => i !== index);
        setStudents(updatedStudents);
        // setStudentCount(prevCount => prevCount - 1);
    };

    return (
        <div className='studenttableContainer' >
            {/* <div><Sidbar /></div> */}
            <div>
                <h2 className='txt'>Admin Dashboard</h2>
                <div>Students</div>

                <input
                    required
                    type="text"
                    placeholder="Enter Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />

                <select
                    style={{ width: '170px', marginLeft: '30px', height: '45px', padding: '0px 20px' }}
                    required
                    value={newGradeName}
                    onChange={(e) => setNewGradeName(e.target.value)}
                >
                    <option value=''>Select Grade</option>
                    <option value='Nursary'>Nursary</option>
                    <option value='LKG'>LKG</option>
                    <option value='UKG'>UKG</option> 
                    <option value='One'>One</option>
                    <option value='Two'>Two</option>
                    <option value='Three'>Three</option>
                    <option value='Four'>Four</option>
                    <option value='Five'>Five</option>
                    <option value='Six'>Six</option>
                    <option value='Seven'>Seven</option>
                    <option value='Eight'>Eight</option>
                </select>
                <input style={{ width: '140px', paddingRight: '10px' }}
                    required
                    type="number"
                    placeholder="Enter Roll Number"
                    value={newRollNumber}
                    onChange={(e) => setNewRollNumber(e.target.value)}
                />
                <button className='add-btn' onClick={addStudent}>Add Student</button>

                {students.length === 0 ?
                    <p style={{ marginLeft: '50px', marginTop: '30px' }}>No students added. Click the button above to add a student.</p> :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll Number</th>
                                <th>Grade</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td style={{ borderLeft: '1px solid black' }}>{student.name}</td>
                                    <td>{student.rollNumber}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.password}</td>
                                    <td><button className='del-student' onClick={() => deleteStudent(index)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );

};

export default StudentTable;
