import logo from '../../../styles/img/storm-logo-notext.png';
import React,{ Component } from 'react';
import './Header.css';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    primary: {
      main : '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
}
});
class Header extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log("curr : " + value);
    this.setState({ value });
  };

    render() {

      return (
          <div className="title-bar">
              <img src={logo} className="title-bar logo" alt="logo"/>
              <Clock className="clock" format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />

          
          <Paper square className="MuiPaper-elevation2-5"> 
          <MuiThemeProvider theme={theme}>
            <Tabs 
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
            >
              <Tab label="메 인" component={Link} to="/main" className="color"/>
              <Tab label="알 림"  component={Link} to="/notice"/>
              <Tab label="통계예측" component={Link} to="/data"/>
              <Tab label="좌표관리" component={Link} to="/map"/>
              <Tab label="고객관리" component={Link} to="/customer"/>
            </Tabs>
            </MuiThemeProvider>
            </Paper>
          </div>
      );
    }
  }
  
  export default Header;
  