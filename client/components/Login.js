import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if (username.trim() && password.trim()) {
            e.preventDefault();

            console.log({ username, password });
            setUsername('');
            setPassword('');
        }
    };

    return (
        <main className="login">
            <form action="" className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Log into your account</h2>

                <label htmlFor="">Username</label>
                <input type="text" className="username" />

                <label htmlFor="">Password</label>
                <input type="text" className="password" />

                <button className="loginButton"></button>
                <p>Dont have an accout?</p>
            </form>
        </main>
    );
}

export default Login;