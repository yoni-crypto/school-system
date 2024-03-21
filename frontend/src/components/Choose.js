import { useState } from 'react';
import img2 from '../assets/img2.png'
import './Choose.css'
import { useNavigate } from 'react-router';


const Choose = () => {
    const navigate = useNavigate()
    const adch = () => {
        navigate('/adminlogin')
    }
    const stch = () => {
        navigate('/studentLogin')
    }
    const tech = () => {
        navigate('/teacherLogin')
    }
    return ( 
        <div className="chooseContainer">
            <div className="adminChoose" onClick={adch}>
                <img src={img2} alt="adminlogo" />
                <h1>Admin</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
            <div className="adminChoose" onClick={stch}>
                <img src={img2} alt="adminlogo" />
                <h1>Student</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
            <div className="adminChoose" onClick={tech}>
                <img src={img2} alt="adminlogo" />
                <h1>Teacher</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
            <div className="adminChoose">
                <img src={img2} alt="adminlogo" />
                <h1>Staff</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
            <div className="adminChoose">
                <img src={img2} alt="adminlogo" />
                <h1>Parent</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
            <div className="adminChoose">
                <img src={img2} alt="adminlogo" />
                <h1>IT Leaders</h1>
                <p>Login as an adminstrator to access the <br/>dashboard to manage app data</p>
            </div>
        </div>
     );
}
 
export default Choose;