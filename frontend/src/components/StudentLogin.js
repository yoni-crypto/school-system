import './StudentLogin.css'

const StudentLogin = () => {
    return ( 
        <div className="StudentloginContainer">
            <form>
                <h1>Student Login</h1>
                <p className='wel'>Welcome back! please enter your details</p>
                <label for='no'>Enter Roll Number</label><br/>
                <input type="number" name='no'placeholder="Enter your Roll Number" /><br/>
                <label for='name'>Name</label><br/>
                <input type="text" placeholder="Enter your name" name="name" /><br />
                <label for='pass'>Password</label>
                <input type='password' placeholder='Password'/>
                <p><a>Forgot password</a></p>
                <button className="btn3">Login</button><br/>
                <button className="btn4">LOGIN AS GUEST</button>
            </form>
        </div>
     );
}
 
export default StudentLogin;