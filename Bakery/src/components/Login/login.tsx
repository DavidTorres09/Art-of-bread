import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    
    <div>
    <form className="form">
        <div className="login-box">
       <span className="login-icon"></span> 
       <div className="login-name">Forest-House.Company</div>
    </div>
    <h3 className="form-text">Email Address :</h3>

    <input className="form-control" type="text" name="email" placeholder="example1234@gmail.com" required ></input>
    <h3 className="text">Password :</h3>

    <input className="form-control" type="password" name="password" placeholder="Your Password" required autofocus=""></input>
    <br></br>
    <button type="submit" className="btn">Login</button>
    </form>    
    </div>
  )
}
export default Login