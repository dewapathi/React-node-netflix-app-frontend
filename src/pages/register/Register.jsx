import React, { useRef, useState } from 'react'
import "../register/register.scss"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async () => {
        const currentUsername = usernameRef.current.value;
        const currentPassword = passwordRef.current.value;
        setPassword(currentPassword);
        setUsername(currentUsername);
        try {
            await axios.post("auth/register", { email, username: currentUsername, password: currentPassword });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className='register'>
                <div className="top">
                    <div className="wrapper">
                        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                        {/* <Link to="/login">
                            <button className="loginButton">Sign In</button>
                        </Link> */}
                    </div>
                </div>
                <div className="container">
                    <Link to="/login">
                        <button className="loginButton">Sign In</button>
                    </Link>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    {!email ? (
                        <div className="input">
                            <input type="email" placeholder='Enter your email address' ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <div className="input">
                            <input type="username" placeholder='Enter your username' ref={usernameRef} />
                            <input type="password" placeholder='Enter your password' ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};
