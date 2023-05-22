import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Navbar() {
    const [data, setData] = useState('');
    const [type, settype] = useState('');
    useEffect(async () => {
        var data = Cookies.get('user');
        var type = Cookies.get('type');
        setData(data);
        settype(type);
    }, []);
const logout = async () => {
    Cookies.remove('user');
    Cookies.remove('type');
    window.location.href = '/';
}
    return (
        <>
            <header id="header" class="fixed-top" style={{ backgroundColor: 'blue' }}>
                <div class="container d-flex align-items-center justify-content-between">
                    <h1 class="logo"><a href="/">Online Quiz</a></h1>

                    <nav id="navbar" class="navbar py-0">
                        {(data != undefined && type != undefined) ? 
                            (type === 'student'?
                            <ul>
                                <li><a class="nav-link scrollto" href="/AllQuizPage">Select Quiz</a></li>
                                <li class="dropdown"><a class="getstarted scrollto" href="#"><span>{data}</span> <i class="bi bi-chevron-down"></i> </a>

                                    <ul>
                                        {/* <li><a href="/shelf">My Shelf</a></li>
                                        <li><a href="/cpass">Change Password</a></li> */}
                                        <li><a href="/"  onClick={logout}>Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                            :<ul>
                            <li><a class="nav-link scrollto" href="/AddNewQuiz">Add New Quiz</a></li>
                            <li><a class="nav-link scrollto" href="/TeacherViewNew">Add New Question</a></li>
                            <li><a class="nav-link scrollto" href="/TeacherViewUpdate">Update Question</a></li>
                            <li class="dropdown"><a class="getstarted scrollto" href="#"><span>{data}</span> <i class="bi bi-chevron-down"></i> </a>

                                <ul>
                                    {/* <li><a href="/shelf">My Shelf</a></li>
                                    <li><a href="/cpass">Change Password</a></li> */}
                                   <li><a href="/"  onClick={logout}>Log Out</a></li>
                                </ul>
                            </li>
                        </ul>)
                            : <ul>
                                <li><a class="nav-link scrollto" href="/studentLogin">Student login</a></li>
                                <li><a class="nav-link scrollto" href="/facultyLogin">Faculty login</a></li>
                                <li><a class="nav-link scrollto" href="/register">Register</a></li>
                            </ul>}

                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

        </>
    );
}

export default Navbar;