import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { isBrowser } from "react-device-detect";
import data from '../../public/resumeData.json';
import '../Styles/Header.css';
import { Typography } from '@material-ui/core';

class Header extends Component {

  // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getHeaderSize() {
    if(isBrowser)
    {
      return "h1";
    }
    else
    {
      return "h3";
    }
  }

  getAdjustmentSize() {
    if(isBrowser)
    {
      return "100";
    }
    else
    {
      return "50";
    }
  }

  render() {

    return (
        <div className="Root">
             <Tabs
                className="Tabs"
                indicatorColor="primary"
                textColor="primary"
                centered
                value={false}
              > 
                <Tab href="#home" label="Home"/>
                <Tab href="#about" label="About Me"/>
                <Tab href="#education" label="Education" />
                <Tab href="#skills" label="Skills" />
                <Tab href="#cyberActivities" label="Cyber Activities" />
                <Tab href="#work" label="Work" />
                <Tab href="#projects" label="Projects" />
                <Tab href="#volunteering" label="Volunteering" />
            </Tabs>
            <Typography className="NameHeader" variant={this.getHeaderSize()} style={{marginTop: this.state.height/2 - this.getAdjustmentSize()}}>I'm {data.main.name}</Typography>
            <Typography className="DescriptionText" variant="subtitle1" style={{marginTop: this.state.height/2}}>{data.main.description}</Typography>
            <img className="HeaderImage" src="./header-background.webp" alt="Scenary" style={{width: this.state.width, height: this.state.height, objectFit: "cover"}} />
        </div>
    );
  }
}

export default Header;