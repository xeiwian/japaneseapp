import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class QuestionPage extends Component {

    state = {
      content: '',
      correctAnswer: '',
      possibleAnswer: ''
    }

    // componentDidMount = () => {
    //   this.fetchData();
    // }

    // fetchData = () => {
    //   fetch('api/question')
    //   .then(res => res.json())
    //   .then(parsedJSON => console.log(parsedJSON.map(questions => (
    //     {
    //       content: `${questions.content}`,
    //       correctAnswer: `${questions.correctAnswer}`,
    //       possibleAnswer: `${questions.possibleAnswer}`
    //     }
    //   ))))
    //   .then(questions => this.setState(
    //     {
    //       questions
    //     }
    //   ))
    //   .catch(error => console.log('parsing failed', error))
    // }

    componentDidMount = async () => {
      const url = 'api/question';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({content: data.content, correctAnswer: data.correctAnswer, possibleAnswer: data.possibleAnswer})
    }

    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
    render() {
        const { classes } = this.props;

        return (
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
          >
          <Grid item xs={3}>
            <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">{this.state.content}</FormLabel>
              <RadioGroup 
                row
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup 
              row
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
        </Grid>

        <Grid item xs={3}>
          <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup 
              row
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
        </Grid>
        
        </Grid>
        )
    };

}

export default withStyles(styles)(QuestionPage);
