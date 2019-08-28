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
              <Typography variant="h2">Projects</Typography>
              </Grid>

              {
                data.resume.projects.map(function(proj, index) {
                  return <Grid item key={"projects" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}}>
                            {proj.title}
                          </Typography>
                          <Typography variant="body2">
                            {proj.description} <br/>                    
                            {proj.url}                           
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