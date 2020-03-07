import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./pages/home/";
import API from "./utils/API";
import Login from "./pages/Login";
import "./App.css";
import Header from "./components/header";
import Register from "./pages/Register";
import Nav from "./components/nav";




class App extends Component {
  state = {
    authorized: false,
    isAdmin: true
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.setState({ authorized: false });
        } else {
          this.setState({ authorized: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home logout={this.logout} authorized={this.state.authorized} />

            </Route>

            <Route exact path="/admin">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Register isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
        <Nav logout={this.logout} />
    
      </div>
    );
  }
}

export default App;
