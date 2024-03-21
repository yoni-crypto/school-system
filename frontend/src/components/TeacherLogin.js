import './StudentLogin.css'

const TeacherLogin = () => {
    return ( 
        <div className="StudentloginContainer">
            <form>
                <h1>Teacher Login</h1>
                <p className='wel'>Welcome back! please enter your details</p>
              
                <label for='email'>Email</label><br/>
                <input type="email" placeholder="Enter your email" name="email" /><br />
                <label for='pass'>Password</label>
                <input type='password' placeholder='Password'/>
                <p><a>Forgot password?</a></p>
                <button className="btn3">Login</button><br/>
                <button className="btn4">LOGIN AS GUEST</button>
            </form>
        </div>
     );
}
 
export default TeacherLogin;