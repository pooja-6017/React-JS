import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function TeacherForm() {

    const [teacher, setTeacher] = useState("");
    const [teacherPass, setTeacherPass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(teacher === "teacher" && teacherPass === "teacherpass"){
            window.location.href = 'studform/teacher';
        }
        else{
            alert("Invalid Username");
        }
    }

  return (
    <>
    <h3 className='container center my-5 col-3' >User Authentication</h3>
    <div className='container mb-3 col-3'>
       
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Teacher Login ID</label>
            <input type="email" value={teacher} onChange={(e) => setTeacher(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={teacherPass} onChange={(e) => setTeacherPass(e.target.value)} className="form-control" id="exampleInputPassword1"/>
        </div>

        <Link type="submit" className="btn btn-primary my-5 mx-5" onClick = {handleSubmit} to="student">Submit</Link>
        <Link type="submit" className="btn btn-primary" to="/">BACK</Link>
      </form>

    </div>
    </>
  )
}
