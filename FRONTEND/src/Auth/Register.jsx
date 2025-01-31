import React from "react";
import Header from "../DashboardHeader/DashboardHeader";

import "./Register.css";

const Register = () => {
    return (
        <>
            <header className="dashboard-header" />
            <Header />

            <div className="reg-body">
                <div className="wrapper">
                    <h1>Create Account</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Phone Number" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Address" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <button type="submit" className="btn">Register</button>
                </div>
            </div>
        </>
    );
}

export default Register;
