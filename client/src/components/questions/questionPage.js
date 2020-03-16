import React, { Component } from 'react';
import quizQuestions from '../questions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
      score: 0,
      disabled: true,
      emotioncounter: 0,
      myAnswer: '',
      myEmotionAnswer: '',
      emotionQuestion: '',
      possibleEmotionAnswer: [],
      correctEmotionAnswer: '',
      familycounter: 6,
      myFamilyAnswer: '',
      familyQuestion: '',
      possibleFamilyAnswer: [],
      correctFamilyAnswer: '',
      foodcounter: 12,
      myFoodAnswer: '',
      foodQuestion: '',
      possibleFoodAnswer: [],
      correctFoodAnswer: ''
    }

    componentDidMount = () => {
        // this.setState({
        //   emotioncounter: this.documentData.emotioncounter,
        //   familycounter: this.documentData.familycounter,
        //   foodcounter: this.documentData.foodcounter,
        // });
   
        this.setState({
          emotionQuestion: quizQuestions[this.state.emotioncounter].question,
          correctEmotionAnswer: quizQuestions[this.state.emotioncounter].correctAnswer,
          possibleEmotionAnswer: quizQuestions[this.state.emotioncounter].possibleAnswer,
          familyQuestion: quizQuestions[this.state.familycounter].question,
          correctFamilyAnswer: quizQuestions[this.state.familycounter].correctAnswer,
          possibleFamilyAnswer: quizQuestions[this.state.familycounter].possibleAnswer,
          foodQuestion: quizQuestions[this.state.foodcounter].question,
          correctFoodAnswer: quizQuestions[this.state.foodcounter].correctAnswer,
          possibleFoodAnswer: quizQuestions[this.state.foodcounter].possibleAnswer,
          disabled: true
        });
    }

    handleOnChange(e) {
      console.log('selected option', e.target.value);
      this.setState({ myAnswer: e.target.value});
    }

    nextQuestionHandler = () => {
      const { myAnswer, correctEmotionAnswer } = this.state;
  
      if (myAnswer === correctEmotionAnswer) {
        this.setState({
          score: this.state.score + 1
        }, () => { console.log('i am score', this.state.score, myAnswer, correctEmotionAnswer); });
      } else {
        console.log('i am score haha', this.state.score, myAnswer, correctEmotionAnswer)
      }
  
      this.setState({
        emotioncounter: this.state.emotioncounter + 1,
        familycounter: this.state.familycounter + 1,
        foodcounter: this.state.foodcounter + 1,
      });
    };

    componentDidUpdate(prevProps, prevState) {
      if (this.state.emotioncounter !== prevState.emotioncounter || this.state.familycounter !== prevState.familycounter || this.state.foodcounter !== prevState.foodcounter) {
        this.setState(() => {
          return {
            // disabled: true,
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
  
    render() {
        const { classes } = this.props;
        // const { myAnswer, possibleEmotionAnswer, selected, onChange } = this.state;

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

            <Grid item xs={12}>        
              <Typography className={classes.questionfont}>
                {this.state.emotionQuestion}
              </Typography>
              <RadioGroup 
                row
                aria-label="Emotion"
                name="emotionQuestion"
                className={classes.group}
                value={this.state.value}
                onChange={(value) => this.handleOnChange(value)}
                // onChange={this.handleChange}
              >
                <FormControlLabel value={this.state.possibleEmotionAnswer[0]} control={<Radio />} label={this.state.possibleEmotionAnswer[0]}/>
                <FormControlLabel value={this.state.possibleEmotionAnswer[1]} control={<Radio />} label={this.state.possibleEmotionAnswer[1]}/>
                <FormControlLabel value={this.state.possibleEmotionAnswer[2]} control={<Radio />} label={this.state.possibleEmotionAnswer[2]}/>
              </RadioGroup>
            </Grid> <br/>

            <Grid item xs={12}>        
              <Typography className={classes.questionfont}>
                {this.state.familyQuestion}
              </Typography>
              <RadioGroup 
                row
                aria-label="Family"
                name="familyQuestion"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel value={this.state.possibleFamilyAnswer[0]} control={<Radio />} label={this.state.possibleFamilyAnswer[0]}/>
                <FormControlLabel value={this.state.possibleFamilyAnswer[1]} control={<Radio />} label={this.state.possibleFamilyAnswer[1]}/>
                <FormControlLabel value={this.state.possibleFamilyAnswer[2]} control={<Radio />} label={this.state.possibleFamilyAnswer[2]}/>
              </RadioGroup>
            </Grid> <br/>

            <Grid item xs={12}>        
              <Typography className={classes.questionfont}>
                {this.state.foodQuestion}
              </Typography>
              <RadioGroup 
                row
                aria-label="Food"
                name="foodQuestion"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel value={this.state.possibleFoodAnswer[0]} control={<Radio />} label={this.state.possibleFoodAnswer[0]}/>
                <FormControlLabel value={this.state.possibleFoodAnswer[1]} control={<Radio />} label={this.state.possibleFoodAnswer[1]}/>
                <FormControlLabel value={this.state.possibleFoodAnswer[2]} control={<Radio />} label={this.state.possibleFoodAnswer[2]}/>
              </RadioGroup>
            </Grid> <br/>

          <Button
            component={ Link } to="/question"
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
