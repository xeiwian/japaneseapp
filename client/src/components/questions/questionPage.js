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
      emotionContent: '',
      correctEmotionAnswer: '',
      possibleEmotionAnswer: '',
      familyContent: '',
      correctFamilyAnswer: '',
      possibleFamilyAnswer: '',
      foodContent: '',
      correctFoodAnswer: '',
      possibleFoodAnswer: '',
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
      this.setState({emotionContent: data.content, correctEmotionAnswer: data.correctAnswer, possibleEmotionAnswer: data.possibleAnswer})
    } 

    fetchFamilyQuestion = async () => {
      const url = 'api/question/family';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({familyContent: data.content, correctFamilyAnswer: data.correctAnswer, possibleFamilyAnswer: data.possibleAnswer})
    } 

    fetchFoodQuestion = async () => {
      const url = 'api/question/food';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({foodContent: data.content, correctFoodAnswer: data.correctAnswer, possibleFoodAnswer: data.possibleAnswer})
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
              <FormLabel component="legend">{this.state.emotionContent}</FormLabel>
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
            <FormLabel component="legend">{this.state.familyContent}</FormLabel>
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
            <FormLabel component="legend">{this.state.foodContent}</FormLabel>
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
        
        </Grid>
        )
    };

}

export default withStyles(styles)(QuestionPage);
