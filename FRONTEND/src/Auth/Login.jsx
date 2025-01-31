import React from "react";

import "./Login.css";
import Header from "../DashboardHeader/DashboardHeader";

const Login = () => {
    return (
        <>
            <header className="dashboard-header" />
            <Header />

            <div className="log-body">
                <div className="wrapper">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button type="submit" className="btn">Login</button>

                    <div className="register">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;