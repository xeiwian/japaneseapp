import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Result extends Component {
    render() {
        return (
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '60vh' }}
            >
                <Typography variant="headline" component="h1">
                    Early Result
                </Typography> <br/>
                <Typography>
                    I AM SCORE: {this.props.score}
                </Typography>
            </Grid>
        )
    };
}

// export default EarlyResult;
export default class EarlyResult extends Component {
    render() {
      return (        
        <Result score={6} />
      );
    }
}