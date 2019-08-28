import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'

class Volunteering extends Component {
  render() {

    return (
      <Card className="ResumeSection"> 
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
          <Typography variant="h2">Volunteering</Typography>
          </Grid>

          {
            data.resume.volunteering.map(function(proj, index) {
              return <Grid item key={"volunteering" + index}>
                      <Typography variant="body1" style={{fontWeight: "bold"}}>
                        {proj.title}
                      </Typography>
                      <Typography variant="body2">
                        {proj.years} <br/>
                        </Typography>
                        <ul>
                        {proj.description.map(function(desc, index) {
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

export default Volunteering;