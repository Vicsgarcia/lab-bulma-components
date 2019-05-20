import React from 'react';
import CoolButton from './CoolButton';

const Header = () =>{
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
              <p classname="control">
                <CoolButton>Login</CoolButton>
                </p>
                <p classname="control">
                <CoolButton isDanger>Signup</CoolButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

}
    

export default Header