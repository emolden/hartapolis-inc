import React, { useState } from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     await login(username, password);
    //     console.log(username, password);
    //     navigate('/');
    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage(''); 
        
        try {
            await login(username, password);
            //console.log(username, password);

            navigate('/');
        } catch (error) {
            setErrorMessage('Invalid username or password. Please try again');
        }
    };

    return (
        <>
            <div className="container">
            <form onSubmit={handleLogin} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                     {/* displays error message, i think */}
                    <div className="alert alert-danger mt-3">
                        {errorMessage}
                    </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

        </>
    );
};

export default Login;