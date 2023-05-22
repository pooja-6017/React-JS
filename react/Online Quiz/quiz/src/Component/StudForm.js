import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function StudForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(username === 'student' && password === 'studpass'){
      localStorage.setItem('authenicated', true);
      // alert(username)
      window.location.href = 'studform/student';
    } else if((username === "faculty" && password === "facultypass")) {
      localStorage.setItem('authenicated', true);
      window.location.href = 'studform/teacher';
    } else {
      alert("Invalid UserName");
    }
  };
  
  return (
    <>
    <h3 className='container center my-5 col-3' >User Authentication</h3>
    <div className='container mb-3 col-3'>
       
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
        </div>

        <Link type="submit" className="btn btn-primary my-5 mx-5" onClick = {handleSubmit} to="student">Submit</Link>
        <Link type="submit" className="btn btn-primary" to="/">BACK</Link>
      </form>

    </div>
    </>
  )
}
