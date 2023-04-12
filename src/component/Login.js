import React from 'react'
// import { Link } from 'react'

export default function Login() {
  return (
    <>
      <div class="image-overlay">
        <img src="" alt="Your Image" />
      </div>

      <form>  
        <div className="container">
          <h3>Login Page</h3>
          <div className='text'>
            <div class="form1 mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">Email address</label>
            </div>
            <div class="form2 mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
          </div>
        </div>
      </form>
    </>
  )
}
