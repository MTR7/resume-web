import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import data from '../../public/resumeData.json';
import "../Styles/About.css";
import { CardActions, Button } from '@material-ui/core';

class About extends Component {
  render() {

    return (
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

              <Grid item>
                <h1 className="MainHeader">Contact Details</h1>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                {data.main.contactInfo}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button href={data.main.email}>Email Me</Button>
          </CardActions>
        </Card>
    );
  }
}

export default About;