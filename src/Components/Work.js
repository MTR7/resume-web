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
                <Typography variant="h2">Work</Typography>
              </Grid>
              {
                data.resume.work.map(function(work, index) {
                  return <Grid item key={"work" + index}>
                          <Typography variant="body1" style={{fontWeight: "bold"}} >
                            {work.company}
                          </Typography>
                          <Typography variant="body2" style={{fotStyle: "italic"}}>
                            {work.title} <br/>
                          </Typography>
                          <Typography variant="body2">
                            {work.years} <br/>
                          </Typography>
                          <ul>
                          {work.description.map(function(desc, index) {
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

export default Work;