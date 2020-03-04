import React, { Component } from "react";



class Login extends Component {
  state = {
   
  };

  render() {
    return (
      <div>
     
        <h1>LOGIN</h1> 
        <div className="wrapper">
        <form>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="username" className="form-control"></input>
                <label for="password">Password</label>
                <input type="password" className="form-control"></input>
            </div>

            <div className="form-row">
              <div className="col">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div className="col">
            <div className="form-group">
            <a href="/" className="register" value="register">Register?</a>
            </div>
            </div>
            </div>
        </form>



        </div>
     
      </div>
    );
  }
}

export default Login;
