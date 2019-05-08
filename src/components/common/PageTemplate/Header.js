import logo from '../../../styles/img/storm-logo-notext.png';
import React,{ Component } from 'react';
import './Header.css';
import Clock from 'react-live-clock';

class Header extends Component {
    render() {
      return (
          <div className="title-bar">
              <img src={logo} className="title-bar logo" alt="logo"/>
              <Clock className="clock" format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={'KR'} />
          </div>
      );
    }
  }
  
  export default Header;
  