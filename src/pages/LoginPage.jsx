import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../utils/network-data";
import LoginInput from "../components/LoginInput";

function LoginPage({ loginSuccess }) {
    const navigate = useNavigate();
    
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            await loginSuccess(data);
            navigate("/");
        }
    }

    return (
        <section>
            <section className='login-page'>
            <h2>Silakan masuk untuk melanjutkan ...</h2>
            <LoginInput login={onLogin} />
            <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
            </section>
        </section>
    )
}

export default LoginPage;