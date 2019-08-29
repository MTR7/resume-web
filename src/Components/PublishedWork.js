import React, { Component } from 'react';
import data from '../../public/resumeData.json';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Styles/Cards.css'

class PublishedWork extends Component {
  render() {

    return (
      <Card className="ResumeSection"> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h2">Published Work</Typography>
                <Typography variant="body1">A list of posters, presentations, and eventually papers</Typography>
              </Grid>

              {
                data.resume.presentations.map(function(pres, index) {
                  return <Grid item key={"presentations" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}}>
                            {pres.title}
                          </Typography>
                          <Typography variant="body2">
                            {pres.location} <br/>
                            Release ID: {pres.releaseID} <br/>
                            <a href={pres.url}>Presentation Link</a> <br/>
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

export default PublishedWork;