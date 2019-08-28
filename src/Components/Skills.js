import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Skills extends Component {
  render() {

    return (
      <Card> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">Skills</h1>
              </Grid>

              {
                data.resume.skills.map(function(skill) {
                  return <Grid item>
                          <Typography variant="body1">
                            {skill.title}
                          </Typography>
                          <Typography variant="body2">
                            {skill.subtext} <br/>
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

export default Skills;