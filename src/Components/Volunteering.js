import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Volunteering extends Component {
  render() {

    return (
      <Card> 
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <h1 className="MainHeader">Volunteering</h1>
          </Grid>

          {
            data.resume.volunteering.map(function(proj, index) {
              return <Grid item key={"volunteering" + index}>
                      <Typography variant="body1">
                        {proj.title}
                      </Typography>
                      <Typography variant="body2">
                        {proj.years} <br/>
                        {proj.description} <br/>
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

export default Volunteering;