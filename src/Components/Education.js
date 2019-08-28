import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'
class Education extends Component {
  render() {

    return (
      <Card className="ResumeSection"> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
              <Typography variant="h2">Education</Typography>
              </Grid>

              {
                data.resume.education.map(function(edu, index) {
                  return <Grid item key={"education" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}}>
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