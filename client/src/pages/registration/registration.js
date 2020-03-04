import React, { Component } from "react";
import "./style.css";

class Registration extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <div className="wrapper">
          <form>
            <div class="form-row">
              <div class="form-group col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                ></input>
              </div>
              <div class="form-group col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                ></input>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                ></input>
              </div>
              </div>
              <div class="form-row">
              <div class="form-group col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                ></input>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
