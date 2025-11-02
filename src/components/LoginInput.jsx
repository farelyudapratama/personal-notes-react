import React, { useState } from "react";

function LoginInput({ login = () => {} }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({
            email,
            password,
        });
    };

    return (
        <form onSubmit={onSubmitHandler} className="login-input">
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                autoComplete="current-password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button>Login</button>
        </form>
    );
}

export default LoginInput;