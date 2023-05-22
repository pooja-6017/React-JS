// import logo from './logo.svg';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import StudForm from './Component/StudForm';
import { BrowserRouter, Routes, Route }from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Student  from './Component/Student';
import TeacherForm from './Component/TeacherForm';
import Teacher from './Component/Teacher';




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar title="Online Quiz" home="Home" about="About"/>
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route exact path='studform' element={<StudForm />} />
          <Route exact path = 'about' element={<About/>} />
          <Route exact path = 'studform/student' element = {<Student/>} />
          <Route exact path = 'teacherform' element = {<TeacherForm/>} />
          <Route exact path = 'studform/teacher' element = {<Teacher/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
