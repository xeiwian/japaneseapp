import React, { Component } from 'react';
import quizQuestions from '../questions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import PracticePage from '../practice/practicePage';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  questionfont: {
    fontSize: 26,
    textAlign: 'center'
  },
  formControl: {
    // margin: theme.spacing.unit * 3,
    fontSize: 22,
    align: 'center',
    justify: 'center'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 28
  },
  button: {
    marginTop: theme.spacing(3),
    flexGrow: 1,
    background: '#3d5afe',
  },
  earlyResult: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    marginTop: theme.spacing(4)
  }
});

class QuestionPage extends Component {

    state = {
      earlyscore: 0,
      disabled: true,
      isEnd: false,
      gotoPractice: false,
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

    getWords = async (id) => {
      return await fetch(`api/userlogin/getNine/${id}`);
    }

    getThreeEmotionWords = async () => {
      return await fetch(`api/question/emotionthree`);
    }

    getSixEmotionWords = async () => {
      return await fetch(`api/question/emotionsix`);
    }

    getNineEmotionWords = async () => {
      return await fetch(`api/question/emotionnine`);
    }

    getThreeFamilyWords = async () => {
      return await fetch(`api/question/familythree`);
    }

    getSixFamilyWords = async () => {
      return await fetch(`api/question/familysix`);
    }

    getNineFamilyWords = async () => {
      return await fetch(`api/question/familynine`);
    }

    getThreeFoodWords = async () => {
      return await fetch(`api/question/foodthree`);
    }

    getSixFoodWords = async () => {
      return await fetch(`api/question/foodsix`);
    }

    getNineFoodWords = async () => {
      return await fetch(`api/question/foodnine`);
    }

    addWords = async (id, data) => {
      console.log(data);
      return await fetch(`api/userlogin/addwords/${id}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify(data)  
      });
    }

    addChosenWords = async (id, data) => {
      console.log(data);
      return await fetch(`api/userlogin/addchosenwords/${id}`, {
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
   
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['familyscore'] === 3) {
          let words = await this.getThreeFamilyWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);

          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['foodscore'] === 3) {
          let words = await this.getThreeFoodWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
   
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['emotionscore'] === 2) {
          let words = await this.getSixEmotionWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
      
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['familyscore'] === 2) {
          let words = await this.getSixFamilyWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
     
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['foodscore'] === 2) {
          let words = await this.getSixFoodWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
 
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['emotionscore'] === 1 || data['emotionscore'] === 0) {
          let words = await this.getNineEmotionWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
  
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['familyscore'] === 1 || data['familyscore'] === 0) {
          let words = await this.getNineFamilyWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
    
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        if (data['foodscore'] === 1 || data['foodscore'] === 0) {
          let words = await this.getNineFoodWords();
          let wordsjson = await words.json();
          console.log('i am words', wordsjson);
   
          this.addWords(this.props.id, wordsjson);
        } else {
          console.log('wordsHandler not working')
        }

        this.handleWords();

      } catch (e) {
        console.log(e);
      }
    }

    handleWords = async () => {
      try {
        let userWords = await this.getWords(this.props.id);
        let words = await userWords.json();

        let newarray = new Array();
        let array = words.words;
        let counter = 0;

        while (counter < 9) {
          let randomindex = Math.floor(Math.random()*array.length);
          let randomWord = array[randomindex];
          array.splice(randomindex, 1); 
          newarray.push(randomWord);
          counter++;      
        }
  
        console.log('i am newarray words', newarray);
        this.addChosenWords(this.props.id, newarray);
        } catch (e) {
          console.log(e);
        }
        // set gotoPractice to true here to make sure chosenwords array is not empty in practice page
        this.setState({
          gotoPractice: true
        })
    }

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
        const { isEnd, gotoPractice } = this.state;

        if (gotoPractice) {
          return (
            <PracticePage id={this.props.id} name={this.props.name}/>
          )
        }
        
        if (isEnd) {
          return(
            <div>
              <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                style={{  backgroundColor: '#3d5afe', height: 80 }}
              >
                <Typography variant="headline">
                  <Box className={classes.title} color="white" m={0}>
                    Early Result
                  </Box>
                </Typography>
              </Grid> 
              <br/>
              <Grid
              container
              spacing={0}
              direction="column"
              align="center"
              justify="center"
              >
                <Typography variant="headline">
                  <Box className={classes.earlyResult} m={0}>
                    Hi {this.props.name}! Your early score is {this.state.earlyscore} out of 9.
                  </Box>
                  <Box className={classes.earlyResult} m={0}>
                    You scored {this.state.emotionscore} out of 3 for words in Emotion category.
                  </Box>
                  <Box className={classes.earlyResult} m={0}>
                    You scored {this.state.familyscore} out of 3 for words in Family category.
                  </Box>
                  <Box className={classes.earlyResult} m={0}>
                    You scored {this.state.foodscore} out of 3 for words in Food category.
                  </Box>
                  <Box className={classes.earlyResult} m={0}>
                    Your early results are evaluated and now let's begin the lesson that is planned based on your results. 
                    When the lesson is finished, a test will be given to you.
                  </Box>
                </Typography>
              </Grid>
    
              <Grid
              container
              spacing={0}
              direction="column"
              align="center"
              justify="center"
              >
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  onClick={this.practiceHandler}
                  >
                    Proceed to lesson
                </Button>
              </Grid>
            </div>
          )
        } else {
          return(
            <div>
              <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                style={{  backgroundColor: '#3d5afe', height: 80 }}
                >
                  <Typography variant="headline">
                    <Box className={classes.title} color="white" m={0}>
                      Learning
                    </Box>
                  </Typography>
                </Grid> 
                <br/>
                <br/>
                <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.instructions}
                >
                  Please answer these 3 questions and select the next button to continue.
                </Grid> 
                <br/>
                <br/>
                <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                >       
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
                >
                  <FormControlLabel value={this.state.possibleEmotionAnswer[0]} control={<Radio color='primary'/>} label={this.state.possibleEmotionAnswer[0]}/>
                  <FormControlLabel value={this.state.possibleEmotionAnswer[1]} control={<Radio color='primary'/>} label={this.state.possibleEmotionAnswer[1]}/>
                  <FormControlLabel value={this.state.possibleEmotionAnswer[2]} control={<Radio color='primary'/>} label={this.state.possibleEmotionAnswer[2]}/>
                </RadioGroup>
              </Grid> 
              <br/>
              <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.instructions}
              >      
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
                >
                  <FormControlLabel value={this.state.possibleFamilyAnswer[0]} control={<Radio color='primary'/>} label={this.state.possibleFamilyAnswer[0]}/>
                  <FormControlLabel value={this.state.possibleFamilyAnswer[1]} control={<Radio color='primary'/>} label={this.state.possibleFamilyAnswer[1]}/>
                  <FormControlLabel value={this.state.possibleFamilyAnswer[2]} control={<Radio color='primary'/>} label={this.state.possibleFamilyAnswer[2]}/>
                </RadioGroup>
              </Grid> 
              <br/>
              <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.instructions}
              >      
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
                  <FormControlLabel value={this.state.possibleFoodAnswer[0]} control={<Radio color='primary'/>} label={this.state.possibleFoodAnswer[0]}/>
                  <FormControlLabel value={this.state.possibleFoodAnswer[1]} control={<Radio color='primary'/>} label={this.state.possibleFoodAnswer[1]}/>
                  <FormControlLabel value={this.state.possibleFoodAnswer[2]} control={<Radio color='primary'/>} label={this.state.possibleFoodAnswer[2]}/>
                </RadioGroup>
              </Grid> 

              <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
              >   
                {this.state.emotioncounter < 2 && (
                <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
                onClick={this.nextQuestionHandler}
                >
                  Continue
                </Button>
                )}

                {this.state.emotioncounter >= 2 && (
                  <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  onClick={this.finishHandler}
                  >
                    Finish
                  </Button>
                )}
              </Grid>
            </div>
          )
          // return (
          //   <Grid
          //   container
          //   spacing={0}
          //   direction="column"
          //   alignItems="center"
          //   justify="center"
          //   style={{ minHeight: '100vh' }}
          //   >
          //     <Typography variant="headline" component="h1">
          //     Learning
          //     </Typography> <br/>
          //     <Typography>
          //     Please answer these 3 questions and select the button to continue.
          //     </Typography> <br/>

          //     <Grid item xs={12}>        
          //       <Typography className={classes.questionfont}>
          //         {this.state.emotionQuestion}
          //       </Typography>
          //       <RadioGroup 
          //         row
          //         aria-label="Emotion"
          //         name="emotionQuestion"
          //         className={classes.group}
          //         value={this.state.value}
          //         onChange={(value) => this.handleOnChangeEmotion(value)}
          //         // onChange={this.handleChange}
          //       >
          //         <FormControlLabel value={this.state.possibleEmotionAnswer[0]} control={<Radio />} label={this.state.possibleEmotionAnswer[0]}/>
          //         <FormControlLabel value={this.state.possibleEmotionAnswer[1]} control={<Radio />} label={this.state.possibleEmotionAnswer[1]}/>
          //         <FormControlLabel value={this.state.possibleEmotionAnswer[2]} control={<Radio />} label={this.state.possibleEmotionAnswer[2]}/>
          //       </RadioGroup>
          //     </Grid> <br/>

          //     <Grid item xs={12}>        
          //       <Typography className={classes.questionfont}>
          //         {this.state.familyQuestion}
          //       </Typography>
          //       <RadioGroup 
          //         row
          //         aria-label="Family"
          //         name="familyQuestion"
          //         className={classes.group}
          //         value={this.state.value}
          //         onChange={(value) => this.handleOnChangeFamily(value)}
          //         // onChange={this.handleChange}
          //       >
          //         <FormControlLabel value={this.state.possibleFamilyAnswer[0]} control={<Radio />} label={this.state.possibleFamilyAnswer[0]}/>
          //         <FormControlLabel value={this.state.possibleFamilyAnswer[1]} control={<Radio />} label={this.state.possibleFamilyAnswer[1]}/>
          //         <FormControlLabel value={this.state.possibleFamilyAnswer[2]} control={<Radio />} label={this.state.possibleFamilyAnswer[2]}/>
          //       </RadioGroup>
          //     </Grid> <br/>

          //     <Grid item xs={12}>        
          //       <Typography className={classes.questionfont}>
          //         {this.state.foodQuestion}
          //       </Typography>
          //       <RadioGroup 
          //         row
          //         aria-label="Food"
          //         name="foodQuestion"
          //         className={classes.group}
          //         value={this.state.value}
          //         onChange={(value) => this.handleOnChangeFood(value)}
          //       >
          //         <FormControlLabel value={this.state.possibleFoodAnswer[0]} control={<Radio />} label={this.state.possibleFoodAnswer[0]}/>
          //         <FormControlLabel value={this.state.possibleFoodAnswer[1]} control={<Radio />} label={this.state.possibleFoodAnswer[1]}/>
          //         <FormControlLabel value={this.state.possibleFoodAnswer[2]} control={<Radio />} label={this.state.possibleFoodAnswer[2]}/>
          //       </RadioGroup>
          //     </Grid> <br/>
            
          //   {this.state.emotioncounter < 2 && (
          //     <Button
          //     color="primary"
          //     variant="contained"
          //     className={classes.formItems}
          //     onClick={this.nextQuestionHandler}
          //     >
          //       Continue
          //     </Button>
          //   )}

          //   {this.state.emotioncounter >= 2 && (
          //     <Button
          //     color="primary"
          //     variant="contained"
          //     className={classes.formItems}
          //     onClick={this.finishHandler}
          //     >
          //       Finish
          //     </Button>
          //   )}

          // </Grid>
          // )
        }
    };

}

export default withStyles(styles)(QuestionPage);
