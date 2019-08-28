import React, { Component } from 'react';
import Header from "./Components/Header";
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import CyberSecurityActivities from './Components/CyberSecurityActivities';
import Work from './Components/Work';
import Volunteering from './Components/Volunteering';
import "./Styles/Cards.css";
import { isBrowser, isMobile } from "react-device-detect";
import Snackbar from '@material-ui/core/Snackbar';
import { amber } from '@material-ui/core/colors';

class App extends Component {
  
  getWidth() {
    if(isBrowser)
      return "70%";
    else
      return "100%";
  }

  getPadding() {
    if(isBrowser)
      return "1em";
    else
      return "0em";
  }

  getStyle() {
    return {
      width: this.getWidth(),
      paddingLeft: this.getPadding(),
      paddingRight: this.getPadding(),
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <div className="Content" style={this.getStyle()}>
            <About/>
            <Education/>
            <Skills/>
            <CyberSecurityActivities/>
            <Work/>
            <Projects/>
            <Volunteering/>
          </div>
        <Footer/>
        <Snackbar anchorOrigin={{ vertical: "bottom", horizontal:"center"}}
                  message="This site is under-construction. This is being done in between hw assignments. Please excuse the mess."
                  open={true}
                  style={{backgroundColor: amber}}
                  />
      </div>
    );
  }
}

export default App;
