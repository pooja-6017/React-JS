import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./studentLogin.css";
import Cookies from 'js-cookie';
function StudentLogin() {
    const navigate = useNavigate();
    return (
        <>
            <div className=" flex-r container" style={{ width: '200%' }}>
                <div className="flex-r login-wrapper">
                    <div className="login-text">
                        <div className="logo" style={{ textAlign: 'center' }}>
                            <span><i className="fab fa-speakap"></i></span>
                            <span>Login As Student</span>
                        </div>
                        <form className="flex-c" onSubmit={(event) => {
                            event.preventDefault();
                            console.log(event.target.studentId.value);
                            axios
                                .post("http://localhost:5000/login/student", {
                                    user_id: event.target.studentId.value,
                                    password: event.target.password.value,
                                })
                                .then((res) => {
                                    Cookies.set("user", event.target.studentId.value, { expires: 1 / 24 });
                                    Cookies.set("type", 'student', { expires: 1 / 24 });
                                    console.log("Res", res);
                                    window.location.href = "/";
                                })
                                .catch((err) => {
                                    alert("Invalid Credentials");
                                    console.log("Err", err);
                                });
                        }}>
                            <div className="input-box">
                                <span className="label">E-mail</span>
                                <div className=" flex-r input">
                                    <input type="text" name="studentId" placeholder="name@abc.com" />
                                    <i className="fas fa-at"></i>
                                </div>
                            </div>

                            <div className="input-box">
                                <span className="label">Password</span>
                                <div className="flex-r input">
                                    <input type="password" name="password" placeholder="8+ (a, A, 1, #)" />
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', width: 'inherit' }} >
                                <input className="btn" type="submit" value="Login" />
                            </div>


                            {/* <span className="extra-line" style={{textAlign: 'center'}}>
                                    <span>Already have an account?</span>
                                    <a href="#">Sign In</a>
                                </span> */}
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentLogin;