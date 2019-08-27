import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import data from '../../public/resumeData.json';
import "../Styles/Cards.css";

class About extends Component {
  render() {

    return (
      <Paper className="Cards">
        <h1>About Me</h1>
        <p>{data.main.bio}</p>
        
        <h1>Contact Details</h1>
        <p>{data.main.name} <br/>
           {data.main.address.street} <br/>
           {data.main.address.city}, {data.main.address.state} {data.main.address.zip}<br/>
           {data.main.phone}<br/>
           {data.main.email}</p>
      </Paper>
    );
  }
}

export default About;