import "./App.css";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import StudentDisplay from "./Components/StudentView/StudentMainView.js";
import Login from "./Components/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllQuizPage from "./Components/StudentView/AllQuizPage";
import Scorecard from "./Components/StudentView/Scorecard";
import TeacherViewNew from "./Components/TeacherViewNew";
import TeacherViewUpdate from "./Components/TeacherViewUpdate";
import StudentLogin from './Components/studentLogin/studentLogin';
import Landing from "./Components/landing/landingPage";
import AddNewQuiz from "./Components/AddNewQuiz";
import Navbar from "./Components/Navbar"
import Register from "./Components/register/register"
import PageNotFound from './404-page'

function App() {

  const [data, setData] = useState('');
  const [type, settype] = useState('');
  useEffect(async () => {
    var data = Cookies.get('user');
    var type = Cookies.get('type');
    setData(data);
    settype(type);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Router>
        <Routes path="/">
          {(data != undefined) ?
            <Route
              exact
              path="/quiz/:quiz_id"
              element={<StudentDisplay />}
            ></Route>
            : null}

          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/studentLogin" element={<StudentLogin />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/facultyLogin" element={<Login />}></Route>
          {(data !== undefined) ? <Route exact path="/AllQuizPage" element={<AllQuizPage />}></Route>
            : null}
          {(data !== undefined) ? <Route exact path="/Scorecard" element={<Scorecard />}></Route>
            : null}
          {(data !== undefined && type === 'faculty') ? <Route
            exact
            path="/TeacherViewUpdate"
            element={<TeacherViewUpdate />}
          ></Route>
            : null}
          {(data !== undefined  && type === 'faculty' ) ? <Route
            exact
            path="/TeacherViewNew"
            element={<TeacherViewNew />}
          ></Route>
            : null}
          {(data !== undefined  && type === 'faculty' ) ? <Route exact path="/AddNewQuiz" element={<AddNewQuiz />}></Route> : null}
          <Route exact path=":page" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
      {/* <AllQuizPage /> */}
    </div>
  );
}

export default App;
