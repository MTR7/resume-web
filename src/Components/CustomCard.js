import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button } from '@material-ui/core';

class CustomCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data = props.data,
        actions = props.actions
      };
    }

  render() {

    return (
        <Card> 
          <CardContent>
            <Grid container spacing={2} direction="column">
              {
                this.state.data.map(function(i) {
                  console.log('test');
                  return  <div>
                            <Grid item>
                              <h1 className="MainHeader">{i.header}</h1>
                            </Grid>
                            <Grid item>
                              <Typography variant="body1">
                              {i.body}
                              </Typography>
                            </Grid> 
                          </div>
                })
              }
              <Grid item>
                <h1 className="MainHeader">About Me</h1>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                {data.main.bio}
                </Typography>
              </Grid>

              <Grid item>
                <h1 className="MainHeader">Contact Details</h1>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                {data.main.contactInfo}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button href={data.main.email}>Email Me</Button>
          </CardActions>
        </Card>
      );
    }
  }
  
  export default CustomCard;