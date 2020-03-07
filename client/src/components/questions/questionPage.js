import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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
      emotionQuestion: '',
      correctEmotionAnswer: '',
      possibleEmotionAnswer: '',
      familyQuestion: '',
      correctFamilyAnswer: '',
      possibleFamilyAnswer: '',
      foodQuestion: '',
      correctFoodAnswer: '',
      possibleFoodAnswer: '',
    }

    componentDidMount = () => {
      this.fetchEmotionQuestion();
      this.fetchFamilyQuestion();
      this.fetchFoodQuestion();
    }

    fetchEmotionQuestion = async () => {
      const url = 'api/question/emotion';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({emotionQuestion: data.question, correctEmotionAnswer: data.correctAnswer, possibleEmotionAnswer: data.possibleAnswer})
    } 

    fetchFamilyQuestion = async () => {
      const url = 'api/question/family';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({familyQuestion: data.question, correctFamilyAnswer: data.correctAnswer, possibleFamilyAnswer: data.possibleAnswer})
    } 

    fetchFoodQuestion = async () => {
      const url = 'api/question/food';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({foodQuestion: data.question, correctFoodAnswer: data.correctAnswer, possibleFoodAnswer: data.possibleAnswer})
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
            <Typography>
            Please answer these 3 questions and select the next button to continue
            </Typography>
            <Grid item xs={3}>
              <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">{this.state.emotionQuestion}</FormLabel>
                  <RadioGroup 
                    row
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value={this.state.possibleEmotionAnswer[0]} control={<Radio />} label={this.state.possibleEmotionAnswer[0]} />
                    <FormControlLabel value={this.state.possibleEmotionAnswer[1]} control={<Radio />} label={this.state.possibleEmotionAnswer[1]} />
                    <FormControlLabel value={this.state.possibleEmotionAnswer[2]} control={<Radio />} label={this.state.possibleEmotionAnswer[2]} />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">{this.state.familyQuestion}</FormLabel>
                  <RadioGroup 
                    row
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value={this.state.possibleFamilyAnswer[0]} control={<Radio />} label={this.state.possibleFamilyAnswer[0]} />
                    <FormControlLabel value={this.state.possibleFamilyAnswer[1]} control={<Radio />} label={this.state.possibleFamilyAnswer[1]} />
                    <FormControlLabel value={this.state.possibleFamilyAnswer[2]} control={<Radio />} label={this.state.possibleFamilyAnswer[2]}/>
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>

          <Grid item xs={3}>
            <div className={classes.root}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{this.state.foodQuestion}</FormLabel>
                <RadioGroup 
                  row
                  aria-label="Gender"
                  name="gender1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value={this.state.possibleFoodAnswer[0]} control={<Radio />} label={this.state.possibleFoodAnswer[0]} />
                  <FormControlLabel value={this.state.possibleFoodAnswer[1]} control={<Radio />} label={this.state.possibleFoodAnswer[1]} />
                  <FormControlLabel value={this.state.possibleFoodAnswer[2]} control={<Radio />} label={this.state.possibleFoodAnswer[2]} />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Button
            component={ Link } to="/learning"
            color="primary"
            variant="contained"
            className={classes.formItems}
          >
            Next
          </Button>
        </Grid>
        )
    };

}

export default withStyles(styles)(QuestionPage);
