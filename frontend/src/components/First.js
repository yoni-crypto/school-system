import { useNavigate } from 'react-router';
import img1 from '../assets/students.svg'
import './First.css'
const First = () => {
    const navigate = useNavigate()
    const log = () => {
        navigate('/signup')
    }
    const adlog = () => {
        navigate('/choose')
    }
    return (
        <div className="firstContainer">
            <div className="firstImage">
                <img src={img1} alt='students'></img>
            </div>
            <div className="details">
                <h1>Welcome to Yoni Academy <br />School Management System</h1>
                <p className='description'>Streamline school management,class organization, and add <br />students and faculity. Seamlessly track attendance, and provide feedback. Acess records,view marks, <br />and communicate effortlessly.</p>
                <button className="btn1" onClick={adlog}>Login</button><br />
                <button className="btn2">LOGIN AS GUEST</button><br />
                <p className="dont">Don't have an account?<span onClick={log}>Sign up</span></p>
            </div>
        </div>
    );
}

export default First;