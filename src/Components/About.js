import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import data from '../../public/resumeData.json';
import "../Styles/About.css";
import "../Styles/Cards.css";

class About extends Component {
  render() {

    return (
        <Card className="ResumeSection"> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h2">About Me</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {data.resume.objective}
                  <br/>
                  <br/>
                  The best way to contact me is through <a href={data.main.email}>email</a>.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    );
  }
}

export default About;