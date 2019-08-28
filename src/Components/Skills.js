import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'
class Skills extends Component {
  render() {

    return (
      <Card className="ResumeSection">
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h2">Skills</Typography>
                <Typography variant="body2">
                 {data.resume.skillmessage}
               </Typography>
              </Grid>
              

              {
                data.resume.skills.map(function(skill, index) {
                  return <Grid item key={"skills" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}}>
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