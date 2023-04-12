// import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Login />
      <Navbar/> */}
    </>
  );
}

export default App;
