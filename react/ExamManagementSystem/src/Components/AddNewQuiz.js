import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function AddNewQuiz() {
    const [data, setData] = useState('');
    useEffect(async () => {
        require('./AddNewQuiz.css');
        var data = Cookies.get('user');
        setData(data);
    }, []);
    return (
        <>
            <div className="container my-5">
                <div className="form-box">

                    <div className="body-form">
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            console.log("done");
                            axios
                                .post("http://localhost:5000/quiz", {
                                    quiz_id: event.target.quiz_name.value,
                                    quiz_description: event.target.quiz_description.value,
                                    user_id: data,
                                    quiz_password: event.target.password.value,
                                })
                                .then((res) => {
                                    alert("Quiz Created")
                                    console.log("Res", res);
                                })
                                .catch((err) => {
                                    console.log("Err", err);
                                });
                        }}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="quiz name"
                                    name="quiz_name"
                                />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quiz description"
                                    autocomplete="off"
                                    name="quiz_description"
                                />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                </div>
                                <input
                                    type="Password"
                                    className="form-control"
                                    placeholder="Quiz Password"
                                    name="password"
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary btn-block">
                                Add Quiz
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNewQuiz;