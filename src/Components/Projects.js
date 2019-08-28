import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'

class Projects extends Component {
  render() {

    return (
        <Card className="ResumeSection"> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">Projects</h1>
              </Grid>

              {
                data.resume.projects.map(function(proj) {
                  return <Grid item>
                          <Typography variant="body1">
                            {proj.title}
                          </Typography>
                          <Typography variant="body2">
                            {proj.description} <br/>
                            {proj.url} <br/>
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

export default Projects;