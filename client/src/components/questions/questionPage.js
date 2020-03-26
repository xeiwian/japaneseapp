import React, { Component } from 'react';
import quizQuestions from '../questions';
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
      earlyscore: 0,
      disabled: true,
      isEnd: false,
      emotioncounter: 0,
      emotionscore: 0,
      myEmotionAnswer: '',
      emotionQuestion: '',
      possibleEmotionAnswer: [],
      correctEmotionAnswer: '',
      familycounter: 3,
      familyscore: 0,
      myFamilyAnswer: '',
      familyQuestion: '',
      possibleFamilyAnswer: [],
      correctFamilyAnswer: '',
      foodcounter: 6,
      foodscore: 0,
      myFoodAnswer: '',
      foodQuestion: '',
      possibleFoodAnswer: [],
      correctFoodAnswer: ''
    }

    // get user info if user exists
    getStudent = async (id) => {
      return await fetch(`api/userlogin/${id}`);
    };

    // update new student score 
    updateStudent = async (id, data) => {
      console.log(data);
      return await fetch(`api/userlogin/${id}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify(data)  
      });
    };

    getThreeEmotionWords = async () => {
      return await fetch(`api/question/emotionthree`);
    }

    addEmotionwords = async (id, data) => {
      console.log(data);
      return await fetch(`api/userlogin/addwords/${id}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify(data)  
      });
    }

    componentDidMount = () => {   
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

    handleOnChangeEmotion(e) {
      console.log('selected option', e.target.value);
      this.setState({ myEmotionAnswer: e.target.value});
    }

    handleOnChangeFamily(e) {
      console.log('selected option', e.target.value);
      this.setState({ myFamilyAnswer: e.target.value});
    }

    handleOnChangeFood(e) {
      console.log('selected option', e.target.value);
      this.setState({ myFoodAnswer: e.target.value});
    }

    nextQuestionHandler = () => {
      const { myEmotionAnswer, correctEmotionAnswer, myFamilyAnswer, correctFamilyAnswer, myFoodAnswer, correctFoodAnswer } = this.state;
  
      if (myEmotionAnswer === correctEmotionAnswer) {
        this.state.earlyscore += 1;
        this.state.emotionscore += 1
      }

      if (myFamilyAnswer === correctFamilyAnswer) {
        this.state.earlyscore += 1;
        this.state.familyscore += 1
      }

      if (myFoodAnswer === correctFoodAnswer) {
        this.state.earlyscore += 1;
        this.state.foodscore += 1
      }
      console.log(this.state.earlyscore, this.state.emotionscore, this.state.familyscore, this.state.foodscore);
  
      this.setState({
        emotioncounter: this.state.emotioncounter + 1,
        familycounter: this.state.familycounter + 1,
        foodcounter: this.state.foodcounter + 1,
      });
    };

    finishHandler = async () => {
      const { myEmotionAnswer, correctEmotionAnswer, myFamilyAnswer, correctFamilyAnswer, myFoodAnswer, correctFoodAnswer } = this.state;
  
      if (myEmotionAnswer === correctEmotionAnswer) {
        this.state.earlyscore += 1;
        this.state.emotionscore += 1
      }

      if (myFamilyAnswer === correctFamilyAnswer) {
        this.state.earlyscore += 1;
        this.state.familyscore += 1
      }

      if (myFoodAnswer === correctFoodAnswer) {
        this.state.earlyscore += 1;
        this.state.foodscore += 1
      }
      console.log(this.state.earlyscore, this.state.emotionscore, this.state.familyscore, this.state.foodscore);
  
      this.setState({
        emotioncounter: this.state.emotioncounter + 1,
        familycounter: this.state.familycounter + 1,
        foodcounter: this.state.foodcounter + 1,
      });

      if (this.state.emotioncounter >= 2) {
        this.setState({
          isEnd: true
        });
      }

      let userscoreData = {
        earlyscore: this.state.earlyscore,
        emotionscore: this.state.emotionscore,
        familyscore: this.state.familyscore,
        foodscore: this.state.foodscore
      }

      // update user data 
      try {
        let userData = await this.getStudent(this.props.id);
        let data = await userData.json();
        if ( data['name'] === this.props.name && data['_id'] ) {
              this.updateStudent(this.props.id, userscoreData);
              // console.log('tryna update', data);
        } else {
          console.log('not happening', data['name'], this.props.name, this.props.id);
        }
      } catch (e) {
        console.log(e);
      } 
    }

    practiceHandler = async () => {
      try {
        let userData = await this.getStudent(this.props.id);
        let data = await userData.json();
        console.log('i am data', data);

        if (data['emotionscore'] === 3) {
          let words = await this.getThreeEmotionWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
          // let insertedwordsjson = {
          //   words: wordsjson
          // }
          // this.updateStudent(this.props.id, insertedwordsjson);
          this.addEmotionwords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

      } catch (e) {
        console.log(e);
      }
    }

    // wordsHandler = async (data) => {
    //   try {
    //     if (data['emotionscore'] === 3) {
    //       let words = await this.getThreeEmotionWords();
    //       console.log('i am words', words);
    //       this.updateStudent(this.props.id, words);
    //       console.log('tryna update words:', words);
    //     } else {
    //       console.log('wordsHandler not working')
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

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
        const { classes, id } = this.props;
        const { isEnd } = this.state;

        if (isEnd) {
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
                      I AM EARLY SCORE: {this.state.earlyscore}
                  </Typography>
                  <Typography>
                      I AM EMOTION SCORE: {this.state.emotionscore}
                  </Typography>
                  <Typography>
                      I AM FAMILY SCORE: {this.state.familyscore}
                  </Typography>
                  <Typography>
                      I AM FOOD SCORE: {this.state.foodscore}
                  </Typography>
                  <Typography>
                      I AM ID: {id}
                  </Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.formItems}
                    onClick={this.practiceHandler}
                    >
                      Update DB
                  </Button>
              </Grid>
          )
        } else {
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
                  onChange={(value) => this.handleOnChangeEmotion(value)}
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
                  onChange={(value) => this.handleOnChangeFamily(value)}
                  // onChange={this.handleChange}
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
                  onChange={(value) => this.handleOnChangeFood(value)}
                >
                  <FormControlLabel value={this.state.possibleFoodAnswer[0]} control={<Radio />} label={this.state.possibleFoodAnswer[0]}/>
                  <FormControlLabel value={this.state.possibleFoodAnswer[1]} control={<Radio />} label={this.state.possibleFoodAnswer[1]}/>
                  <FormControlLabel value={this.state.possibleFoodAnswer[2]} control={<Radio />} label={this.state.possibleFoodAnswer[2]}/>
                </RadioGroup>
              </Grid> <br/>
            
            {this.state.emotioncounter < 2 && (
              <Button
              color="primary"
              variant="contained"
              className={classes.formItems}
              onClick={this.nextQuestionHandler}
              >
                Continue
              </Button>
            )}

            {this.state.emotioncounter >= 2 && (
              <Button
              color="primary"
              variant="contained"
              className={classes.formItems}
              onClick={this.finishHandler}
              >
                Finish
              </Button>
            )}

          </Grid>
          )
        }
    };

}

export default withStyles(styles)(QuestionPage);
