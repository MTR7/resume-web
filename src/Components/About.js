import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
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
      <Paper className="Cards">
        <Card> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">About Me</h1>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                {data.main.bio}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>




        <Card>
          <CardContent>
            <h1 className="MainHeader">About Me</h1>
            <p>{data.main.bio}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <h1 className="MainHeader">Contact Details</h1>
            <a href={data.main.email}>Email Me</a>
          </CardContent>
        </Card>
      </Paper>
    );
  }
}

export default About;