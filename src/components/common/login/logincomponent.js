import React,{ Component } from 'react';
import logo from '../../../styles/img/storm-logo.png';
import './login.css';

// eslint-disable-next-line
class Section extends Component {
  render() {
    return (
        <div className="login">
            <div className="background">
                <div className="container">
                    <img src={logo} className="container-logo" alt="logo"/>
                    <div className="container-form">
                        <ul className="black-input">
                        <li className="inputs">
                            <input type="text" name="login" id="login" className="input-unstyled" placeholder="ID" autoComplete="off"/>
                        </li>
                        <li className="inputs">
                            <input type="password" name="pass" id="pass" className="input-unstyled" placeholder="Password" autoComplete="off"/>
                        </li>                            
                        </ul>
                        <button type="submit" class="button glossy full-width huge">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Section;

