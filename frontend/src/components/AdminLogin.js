import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import path to 'react-router-dom'
// import './AdminLogin.css'; // Assuming you have a CSS file named AdminLogin.css

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'yonidisu111@gmail.com' && password === '111') {
            // Check if email and password match the credentials
            navigate('/admin');
        } else {
            alert('Invalid email or password');
        }
    }

    return (
        <div className="AdminLoginContainer">
            <form onSubmit={handleLogin}>
                <h1>Admin Login</h1>
                <p className='wel'>Welcome back! Please enter your details</p>

                <label htmlFor='email'>Email</label><br />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p><a href="#">Forgot password?</a></p>
                <button type="submit" className="btn3">Login</button><br />
                <button className="btn4">LOGIN AS GUEST</button>
            </form>
        </div>
    );
}

export default AdminLogin;
