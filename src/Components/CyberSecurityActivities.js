import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'

class CyberSecurityActivities extends Component {
  render() {

    return (
      <Card className="ResumeSection">
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <h1 className="MainHeader">Cyber Security Activities</h1>
              </Grid>
              {
                data.resume.cyber_activities.map(function(act, index) {
                  return <Grid item key={"cyberActivities" + index}>
                          <Typography variant="body1">
                            {act.title}
                          </Typography>
                          <Typography variant="body2">
                            {act.years} <br/>
                          </Typography>
                          {act.description.map(function(desc, index) {
                            return  <Typography variant="body2" key={index}>
                                      {desc} <br/>
                                    </Typography>
                          })}
                        </Grid>
                })
              }
            </Grid>
          </CardContent>
        </Card>
    );
  }
}

export default CyberSecurityActivities;