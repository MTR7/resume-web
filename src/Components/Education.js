import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Education extends Component {
  render() {

    return (
      <Card> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">Education</h1>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                {data.resume.skillmessage}
                </Typography>
              </Grid>

              {
                data.resume.education.map(function(edu) {
                  return <Grid item>
                          <Typography variant="body1">
                            {edu.school}
                          </Typography>
                          <Typography variant="body2">
                            {edu.degree} <br/>
                            {edu.graduated} <br/>
                            {edu.description} <br/>
                          </Typography>
                        </Grid>
                })
              }
            </Grid>
          </CardContent>
        </Card>
    );
  }
}

export default Education;