import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>
      <h1 className='container center my-5 ' >Welcome to Online Quiz</h1>
      <div className='container col-3 mb-3'>
        <div className="card my-4" style={{width:"18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Click Button to Login</h5>
            <Link className="btn btn-primary" to="studform">Login</Link>
          </div>
        </div>

        {/* <div className="card" style={{width:"18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Teacher</h5>
            <Link className="btn btn-primary" to="teacherform">Login</Link>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}
