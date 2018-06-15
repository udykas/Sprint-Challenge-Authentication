import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Signin from './auth/Signin';
import Jokes from './jokes/Jokes';
import Signup from './auth/Signup';

class App extends Component {

  signout = () => {
    if(localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      this.props.history.push('/');
    }
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
          <Link to='/' className="home">Home</Link>

          <div className="signout">
            {localStorage.getItem('jwt') && (
              <button onClick={this.signout}>Signout</button>
            )}
          </div>
        </header>

        <div className="app-body">
          { this.props.location.pathname === "/" && (
            <div className="links">
              <Link to='/signin' className="link">Sign In</Link>
              <Link to='/signup' className="link">Sign Up</Link>
            </div>)
          }
            
          <Route path="/signin" component={Signin} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
