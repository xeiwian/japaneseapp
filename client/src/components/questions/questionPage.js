import React, { Component } from 'react';
import quizQuestions from '../questions';
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
  questionfont: {
    fontSize: 26,
    textAlign: 'center'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class QuestionPage extends Component {

    state = {
      myAnswer: null,
      emotioncounter: 0,
      familycounter: 6,
      foodcounter: 12,
      emotionQuestion: '',
      correctEmotionAnswer: '',
      possibleEmotionAnswer: [],
      familyQuestion: '',
      correctFamilyAnswer: '',
      possibleFamilyAnswer: [],
      foodQuestion: '',
      correctFoodAnswer: '',
      possibleFoodAnswer: [],
      score: 0,
      disabled: true
    }

    componentDidMount = () => {
      this.setState({
        emotionQuestion: quizQuestions[0].question,
        correctEmotionAnswer: quizQuestions[0].correctAnswer,
        possibleEmotionAnswer: quizQuestions[0].possibleAnswer,
        familyQuestion: quizQuestions[6].question,
        correctFamilyAnswer: quizQuestions[6].correctAnswer,
        possibleFamilyAnswer: quizQuestions[6].possibleAnswer,
        foodQuestion: quizQuestions[12].question,
        correctFoodAnswer: quizQuestions[12].correctAnswer,
        possibleFoodAnswer: quizQuestions[12].possibleAnswer,
        disabled: true
      });
    }

    nextQuestionHandler = () => {
      // console.log('test')
      const { myAnswer, EmotionAnswer, score } = this.state;
  
      if (myAnswer === EmotionAnswer) {
        this.setState({
          score: score + 1
        });
      }
  
      this.setState({
        emotioncounter: this.state.emotioncounter + 1,
        familycounter: this.state.familycounter + 1,
        foodcounter: this.state.foodcounter + 1,
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state.emotioncounter !== prevState.emotioncounter) {
        this.setState(() => {
          return {
            disabled: true,
            emotionQuestion: quizQuestions[this.state.emotioncounter].question,
            correctEmotionAnswer: quizQuestions[this.state.emotioncounter].correctAnswer,
            possibleEmotionAnswer: quizQuestions[this.state.emotioncounter].possibleAnswer,

            familyQuestion: quizQuestions[this.state.familycounter].question,
            correctFamilyAnswer: quizQuestions[this.state.familycounter].correctAnswer,
            possibleFamilyAnswer: quizQuestions[this.state.familycounter].possibleAnswer,

            foodQuestion: quizQuestions[this.state.foodcounter].question,
            correctFoodAnswer: quizQuestions[this.state.foodcounter].correctAnswer,
            possibleFoodAnswer: quizQuestions[this.state.foodcounter].possibleAnswer,
          };
        });
      }
    }

    // check answer
    checkAnswer = answer => {
      this.setState({ myAnswer: answer });
    };

    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
    render() {
        const { classes } = this.props;
        const { myAnswer, possibleEmotionAnswer, selected, onChange } = this.state;

        return (
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
          >
            <Typography variant="headline" component="h1">
            Learning
            </Typography> <br/>
            <Typography>
            Please answer these 3 questions and select the next button to continue
            </Typography> <br/>

            <Grid item xs={6}>        
              <Typography className={classes.questionfont}>
                {this.state.emotionQuestion}
              </Typography>
              
              {possibleEmotionAnswer.map((possibleEmotionAnswer, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="vote"
                    value={possibleEmotionAnswer.value}
                    key={index}
                    checked={selected === possibleEmotionAnswer.value}
                    onChange={onChange}
                  />
                  {possibleEmotionAnswer}
                </label>
              ))}
            </Grid>

            <Grid item xs={6}>
              <div >
                <Typography className={classes.questionfont}>
                  {this.state.familyQuestion}
                </Typography>
                <Button variant="contained" color="primary" className={classes.button}>
                  {this.state.possibleFamilyAnswer[0]}
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  {this.state.possibleFamilyAnswer[1]}
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  {this.state.possibleFamilyAnswer[2]}
                </Button>
                </div>
            </Grid>

          <Grid item xs={6}>
                <div >
                  <Typography className={classes.questionfont}>
                    {this.state.foodQuestion}
                  </Typography>
                  <Button variant="contained" color="primary" className={classes.button}>
                    {this.state.possibleFoodAnswer[0]}
                  </Button>
                  <Button variant="contained" color="primary" className={classes.button}>
                    {this.state.possibleFoodAnswer[1]}
                  </Button>
                  <Button variant="contained" color="primary" className={classes.button}>
                    {this.state.possibleFoodAnswer[2]}
                  </Button>
                </div>
          </Grid>
          <br/>
          <Button
            // component={ Link } to="/learning"
            color="primary"
            variant="contained"
            className={classes.formItems}
            onClick={this.nextQuestionHandler}
          >
            Next
          </Button>
        </Grid>
        )
    };

}

export default withStyles(styles)(QuestionPage);
