import React from 'react'

export const Login = () => {
    return (
        <div>
            <form className="form">
                <div className="login-box">
                    <span className="login-icon"></span>
                    <div className="login-name">Forest-House.Company</div>
                    <h3 className="form-text">Email Address :</h3>
                    <input className="form-control" type="text" name="email" placeholder="example1234@gmail.com" required ></input>
                    <h3 className="text">Password :</h3>
                    <input className="form-control" type="password" name="password" placeholder="Your Password" required></input>
                    <br></br>
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}

