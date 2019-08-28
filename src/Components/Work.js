import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import data from '../../public/resumeData.json';
import '../Styles/Cards.css'
class Work extends Component {
  render() {

    return (
      <Card className="ResumeSection"> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">Work</h1>
              </Grid>
              {
                data.resume.work.map(function(work, index) {
                  return <Grid item key={"work" + index}>
                          <Typography variant="body1">
                            {work.company}
                          </Typography>
                          <Typography variant="body2">
                            {work.title} <br/>
                            {work.years} <br/>
                            {work.description} <br/>
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

export default Work;