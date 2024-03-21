import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link,Route,Routes } from 'react-router-dom';
import './AdminRegister.css';


const AdminRegister = () => {
  const [valid, setValid] = useState(false);
  // const navigate = useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password1Error, setPassword1Error] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('invalid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('invalid password');
    } else {
      setPasswordError('');
      setValid(true);
    }
  };

  const confirmPassword = () => {
    if (password === password1) {
      setPassword1Error('');
      setValid(true);
    } else {
      setPassword1Error('password must be the same');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
    
        // navigate('/Home');
        
    }
  };

  return (
    <div className="App">
      <div className="container">
              <form onSubmit={handleSubmit}>
                  <h3 style={{ textAlign: 'center',fontSize:'29px' ,marginTop:'-15px',color:'#fff'}}>Admin Register</h3>
                  <p style={{color:'gray',fontFamily:'sans-serif'}}>Create your own school by registering as an admin.</p>
          <label htmlFor="user">Username </label>
          <br />
          <input
            required
            type="text"
            id="user"
            placeholder="Enter username"
          />
          <br />
          <label htmlFor="email">Email </label>
          <br />
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="mail@website.com"
          />
          <br />
          {emailError && <span>{emailError}</span>}
          <br />
          <label htmlFor="password">Password </label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          <br />
          {passwordError && <span>{passwordError}</span>}
          <br />
          <label htmlFor="password1">Confirm Password</label>
          <br />
          <input
            type="password"
            id="password1"
            value={password1}
            placeholder="Confirm password"
            onChange={(e) => setPassword1(e.target.value)}
            onBlur={confirmPassword}
          />
          <br />
          {password1Error && <span>{password1Error}</span>}
          <br />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;