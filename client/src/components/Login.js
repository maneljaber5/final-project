import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister, userlogin } from "../JS/userSlice/userSlice";

import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [register, setregister] = useState({
    image:"",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigatee = useNavigate();
  const dispatche = useDispatch();
  return (
    // <div className="form">
    //   <div className="wrapper">
    //     <form onSubmit={(e) => e.preventDefault()} className="form-signin">
    //       <h2 className="form-signin-heading">Please login</h2>
    //       <input
    //         type="text"
    //         class="form-control"
    //         name="username"
    //         placeholder="Email Address"
    //         required=""
    //         autofocus=""
    //         onChange={(e) => setlogin({ ...login, email: e.target.value })}
    //       />
    //       <input
    //         type="text"
    //         class="form-control"
    //         name="Password"
    //         placeholder="Password"
    //         required=""
    //         autofocus=""
    //         onChange={(e) => setlogin({ ...login, password: e.target.value })}
    //       />

    //       <label class="checkbox">
    //         <input
    //           type="checkbox"
    //           value="remember-me"
    //           id="rememberMe"
    //           name="rememberMe"
    //         />{" "}
    //         Remember me
    //       </label>
    //       <button
    //         className="btn btn-lg btn-primary btn-block"
    //         onClick={() => {
    //           setTimeout(() => {
    //             dispatch(userlogin(login));
    //             navigate("/profil");
    //           }, 1000);
    //         }}
    //       >
    //         login
    //       </button>
    //       <h5>
    //         u already have account <Link to="/register">Register now</Link>{" "}
    //       </h5>
    //     </form>
    //   </div>
    // </div>
    <div className="loginn">
    <title>Slide Navbar</title>
    <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
    <div className="main">  	
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text"
            class="form-control"
            name="image"
            placeholder="image"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, image: e.target.value })} />
          <input type="text"
            class="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })} />
            <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
            <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }/>
          <button   className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(register));
              navigate("/");
            }}
            
            >Sign up</button>
        </form>
      </div>
      <div className="login">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, email: e.target.value })}/>
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, password: e.target.value })} />
          <button  className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              setTimeout(() => {
                dispatch(userlogin(login));
                navigate("/");
              }, 1000);
            }}>Login</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;
