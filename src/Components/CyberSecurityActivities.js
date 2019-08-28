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
                <Typography variant="h2">Cyber Security Activities</Typography>
              </Grid>
              {
                data.resume.cyber_activities.map(function(act, index) {
                  return <Grid item key={"cyberActivities" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}}>
                            {act.title}
                          </Typography>
                          <Typography variant="body2">
                            {act.years} <br/>
                          </Typography>
                          <ul>
                          {act.description.map(function(desc, index) {
                              return  <li key={index}>
                                        <Typography variant="body2">
                                          {desc}
                                        </Typography>
                                      </li>
                            })}
                          </ul>
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