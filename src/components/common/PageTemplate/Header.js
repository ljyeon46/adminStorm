import logo from '../../../styles/img/storm-logo-notext.png';
import React,{ Component } from 'react';
import './Header.css';
import Clock from 'react-live-clock';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    secondary: {
     main:'#FFFFFF',
     textColor: '#FFFFFF'
  }
}
});


class Header extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

    render() {
      return (
          <div className="title-bar">
              <img src={logo} className="title-bar logo" alt="logo"/>
              <Clock className="clock" format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={'KR'} />

          <MuiThemeProvider theme={theme}>
          <Paper square className="MuiPaper-elevation2-5"> 
            <Tabs 
              value={this.state.value}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={this.handleChange}
            >
              <Tab label="메 인"/>
              <Tab label="알 림"/>
              <Tab label="통계예측"/>
              <Tab label="좌표관리"/>
              <Tab label="고객관리"/>
            </Tabs>
          </Paper>
          </MuiThemeProvider>
          </div>
      );
    }
  }
  
  export default Header;
  