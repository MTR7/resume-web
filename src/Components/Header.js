import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { isBrowser, BrowserView, MobileView } from "react-device-detect";
import data from '../../public/resumeData.json';
import '../Styles/Header.css';
import { Typography, List, Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

class Header extends Component {

  // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, mobileView: false };
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
          <BrowserView>
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
          </BrowserView>
          <MobileView>
          <div className="Tabs">
            <ExpansionPanel expanded={this.state.mobileView} onChange={() => this.setState({mobileView: !this.state.mobileView})}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6">Owen Parkins' Resume</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List style={{width: "100%"}}>
                  <ListItem>
                    <Button href="#home" onClick={() => this.setState({mobileView: false})} color="inherit">Home</Button>
                  </ListItem>
                  <ListItem button>
                    <Button href="#about" onClick={() => this.setState({mobileView: false})} color="inherit">About</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#education" onClick={() => this.setState({mobileView: false})} color="inherit">Education</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#skills" onClick={() => this.setState({mobileView: false})} color="inherit">Skills</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#cyberActivities" onClick={() => this.setState({mobileView: false})} color="inherit">Cyber Security Activities</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#work" onClick={() => this.setState({mobileView: false})} color="inherit">Work</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#projects" onClick={() => this.setState({mobileView: false})} color="inherit">Projects</Button>
                  </ListItem>
                  <ListItem>
                    <Button href="#volunteering" onClick={() => this.setState({mobileView: false})} color="inherit">Volunteering</Button>
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          </MobileView>
          <Typography className="NameHeader" variant={this.getHeaderSize()} style={{marginTop: this.state.height/2 - this.getAdjustmentSize()}}>I'm {data.main.name}</Typography>
          <Typography className="DescriptionText" variant="subtitle1" style={{marginTop: this.state.height/2}}>{data.main.description}</Typography>
          <div className="Icons" style={{marginTop: this.state.height/2 + 40, width: "100%"}}>
            <a href="https://github.com/oparkins"><img src="./github.png" alt="GitHub" style={{width:"36px", paddingRight: "1em"}}/></a>
            <a href="https://keybase.io/oparkins"><img src="./keybase.svg" alt="Keybase" style={{width:"36px"}}/></a>
          </div>
          
          <img className="HeaderImage" src="./header-background.webp" alt="Scenary" style={{width: this.state.width, height: this.state.height, objectFit: "cover"}} />
        </div>
    );
  }
}

export default Header;