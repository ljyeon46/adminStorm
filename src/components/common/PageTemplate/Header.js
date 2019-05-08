import logo from '../../../styles/img/storm-logo-notext.png';
import React,{ Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
          <div className="title-bar">
              <img src={logo} className="title-bar logo" alt="logo"/>
          </div>
      );
    }
  }
  
  export default Header;
  