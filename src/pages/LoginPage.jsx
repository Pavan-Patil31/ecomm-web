import React, { useContext, useEffect,  useRef,  useState } from "react";
import formIamge from "../assets/formImage.jpg";
import HomePage from "./HomePage";
import './LoginPage.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import {ThemeContext}  from "../hooks/ThemeContext";
// import AuthProvider from "../hooks/AuthContext";

const LoginPage = ({setIsLogin, 
  // setLoggedUser
  
}) => {
  // const inputRef = useRef(null);

  const {theme} = useContext(ThemeContext);  
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggedUser, setLoggedUser] = useState()
    // const [isLoggedIn,setIsLoghgedIn] = useState(false)

const navigate = useNavigate()

    useEffect(()=>{
      const loggedInUser = JSON.parse(localStorage.getItem('user'))
      setLoggedUser(loggedInUser);
    },[])

    // function FocusInput(){

    //   useEffect(()=>{
    //     inputRef.current.focus();
    //   },[]);
    // }

console.log(loggedUser);

function handleFormSubmit(event){
    event.preventDefault();
    if(email == loggedUser.email && password == loggedUser.password){
      toast.success('Yov have logged in suceesfully')
      setIsLogin(true);
      navigate('/home')
    }else{
      toast.error('credentials inValid')
    }

}

const inputRef = useRef(null);
// function goToInput(){

//   inputRef.current.focus();

// }

useEffect(()=>{
  inputRef.current.focus();
},[])
console.log(email, password);
  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <img src={formIamge} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
        <form onSubmit={handleFormSubmit} className={`${theme == 'light'? 'bg-light text-secondary' : 'bg-secondary text-light'}`}>
          {/* <form onSubmit={handleFormSubmit}> */}
            <h3>Login here</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>setEmail(e.target.value)}
                ref={inputRef}
              />
            </div>

            {/* <button onClick={goToInput}>GO To Input</button> */}

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register">If Not Registered</Link>

          </form>
        </div>
      </div>
  
  {/* {isLoggedIn ? <p>logged In</p>    : <p>Please Log in</p>} */}

  <br></br>

  {/* {isLoggedIn && <HomePage />} */}
  <ToastContainer />
    </div>
  );
};

export default LoginPage;