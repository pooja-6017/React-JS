import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "verdana" }}>
      <div className=" flex-r container" style={{ width: '100%' }}>
        <div className="flex-r login-wrapper">
          <div className="login-text">
            <div className="logo" style={{ textAlign: 'center' }}>
              <span><i className="fab fa-speakap"></i></span>
              <span>Login As Faculty</span>
            </div>
            <form className="flex-c" onSubmit={(event) => {
              event.preventDefault();
              console.log(event.target.facultyId.value);
              axios
                .post("http://localhost:5000/login/faculty", {
                  user_id: event.target.facultyId.value,
                  password: event.target.password.value,
                })
                .then((res) => {
                  Cookies.set("user", event.target.facultyId.value, { expires: 1 / 24 });
                  Cookies.set("type", 'faculty', { expires: 1 / 24 });
                  console.log("Res", res);
                  // window.location.reload();
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
                  <input type="text"  name="facultyId" placeholder="name@abc.com" />
                  <i className="fas fa-at"></i>
                </div>
              </div>

              <div className="input-box">
                <span className="label">Password</span>
                <div className="flex-r input">
                  <input type="password"  name="password" placeholder="8+ (a, A, 1, #)" />
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
    </div>
    // <div style={{ textAlign: "center", fontFamily: "verdana" }}>
    //   <h1 style={{ fontFamily: "verdana" }}>Login As Faculty</h1>
    //   <div className="facultyLogin" style={{ backgroundColor: "#3fb1fc" }}>
    //     <form
    //       onSubmit={(event) => {
    //         event.preventDefault();
    //         console.log(event.target.facultyId.value);
    //         axios
    //           .post("http://localhost:5000/login/faculty", {
    //             user_id: event.target.facultyId.value,
    //             password: event.target.password.value,
    //           })
    //           .then((res) => {
    //             Cookies.set("user",event.target.facultyId.value,{expires:1/24});
    //             console.log("Res", res);
    //             navigate("/TeacherViewNew");
    //           })
    //           .catch((err) => {
    //             alert("Invalid Credentials");
    //             console.log("Err", err);
    //           });
    //       }}
    //     >
    //       <h3 className="facultyLoginH3">Faculty ID :</h3>
    //       <input type="text" name="facultyId" />
    //       <br />
    //       <h3 className="facultyLoginH3">Password</h3>
    //       <input type="password" name="password" />
    //       <br />
    //       <button className="facultyLoginButton" type="submit">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
