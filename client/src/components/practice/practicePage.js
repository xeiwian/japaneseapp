import React, { Component } from 'react';
import quizQuestions from '../questions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  testquestion: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(8),
    fontSize: 22
  },
  formControl: {
    marginTop: theme.spacing(2),
    fontSize: 22,
    align: 'center',
    justify: 'center'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  testradio: {
    margin: `${theme.spacing.unit}px 0`,
    marginLeft: theme.spacing(8),
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 28
  },
  card: {
    marginTop: theme.spacing(6),
    borderRadius: 12
  },
  header: {
    textAlign: 'center',
    background: '#536dfe',
    color: '#fff',
    height: 12
  },
  content: {
    fontSize: 22,
    align: 'center',
    justify: 'center'
  },
  container: {
    display: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 350,
    margin: `${theme.spacing(0)} auto`
  },
  button: {
    marginTop: theme.spacing(4),
    flexGrow: 1,
    background: '#3d5afe',
  },
  correctmessage: {
    fontSize: 18,
    color: 'blue'
  },
  wrongmessage: {
    fontSize: 18,
    color: 'red'
  },
  practiceBtn: {
    background: '#3d5afe',
    color: 'white'
  },
  finalresult: {
    fontSize: 22
  }
});

class PracticePage extends Component {

    state = {
      content: '',
      question: '',
      myAnswer: '',
      myTestAnswer1: '',
      myTestAnswer2: '',
      myTestAnswer3: '',
      myTestAnswer4: '',
      myTestAnswer5: '',
      myTestAnswer6: '',
      myTestAnswer7: '',
      myTestAnswer8: '',
      myTestAnswer9: '',
      possibleAnswer: [],
      correctAnswer: '',
      visible: false,
      correct: false,
      wrong: false,
      cont: false,
      done: false,
      donePractice: false,
      result: false,
      counter: 0,
      finalscore: 0
    }

    // global variable
    chosenwords = [];

    // get user info if user exists
    getStudent = async (id) => {
      return await fetch(`api/userlogin/${id}`);
    };

    getChosenWords = async (id) => {
        return await fetch(`api/userlogin/getchosenwords/${id}`);
    }

    handleChosenWords = async () => {
        let data = await this.getChosenWords(this.props.id);
        let datajson = await data.json();
        this.chosenwords = datajson.chosenwords;
        console.log('i am chosenwords data in practice', datajson, this.chosenwords);
    
        this.setState({
          content: this.chosenwords[this.state.counter].content,
          question: this.chosenwords[this.state.counter].question,
          possibleAnswer: this.chosenwords[this.state.counter].possibleAnswer,
          correctAnswer: this.chosenwords[this.state.counter].correctAnswer
        });
    }

    updateScore = async (id, score) => {
      console.log(id, score);
      return await fetch(`api/userlogin/${id}`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify(score)  
      });
    }

    componentDidMount = () => {
        this.handleChosenWords();
    }

    contHandler = () => {
      this.setState({
        cont: true,
        correct: false,
        visible: false
      })
    }

    checkAnswerHandler = () => {
        const { myAnswer, correctAnswer } = this.state;

        if (myAnswer === correctAnswer) {
          this.setState({
            correct: true,
            visible: true
          });
        } else {
          this.setState({
            wrong: true,
            visible: true
          });
        }
    }

    nextPracticeHandler = () => {
      this.setState({
        counter: this.state.counter + 1,
        cont: false
      });
    }

    donePracticeHandler = () => {
      this.setState({
        donePractice: true
      })
    }

    doneHandler = () => {
      this.setState({
        done: true
      })
    }

    testHandler = async () => {
      const { 
        myTestAnswer1, 
        myTestAnswer2, 
        myTestAnswer3, 
        myTestAnswer4, 
        myTestAnswer5, 
        myTestAnswer6, 
        myTestAnswer7, 
        myTestAnswer8,
        myTestAnswer9
      } = this.state;
      
      if (myTestAnswer1 === this.chosenwords[3].correctAnswer) {
        this.state.finalscore += 1;
      }
      
      if (myTestAnswer2 === this.chosenwords[4].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer3 === this.chosenwords[8].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer4 === this.chosenwords[2].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer5 === this.chosenwords[0].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer6 === this.chosenwords[1].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer7 === this.chosenwords[6].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer8 === this.chosenwords[7].correctAnswer) {
        this.state.finalscore += 1;
      }

      if (myTestAnswer9 === this.chosenwords[5].correctAnswer) {
        this.state.finalscore += 1;
      }

      this.setState({
        result: true
      });

      let scoreData = {
        finalscore: this.state.finalscore,
      }

      // update user data 
      try {
        let userData = await this.getStudent(this.props.id);
        let data = await userData.json();
        if ( data['name'] === this.props.name && data['_id'] ) {
            this.updateScore(this.props.id, scoreData);
        } else {
          console.log('not happening', data['name'], this.props.name, this.props.id);
        }
      } catch (e) {
        console.log(e);
      } 
    }

    renderTestQuestion = (num, keyName) => {
      const { classes } = this.props;

        return(
          <Grid>      
              <Typography className={classes.testquestion}>{this.chosenwords[num].question}</Typography>
      
              <RadioGroup 
                column
                aria-label="Emotion"
                name="emotionQuestion"
                className={classes.testradio}
                value={this.state.value}
                onChange={(value) => this.handleOnChangeTest(keyName, value)}
              >
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[0]} control={<Radio color="primary"/>} label={this.chosenwords[num].possibleAnswer[0]}/>
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[1]} control={<Radio color="primary"/>} label={this.chosenwords[num].possibleAnswer[1]}/>
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[2]} control={<Radio color="primary"/>} label={this.chosenwords[num].possibleAnswer[2]}/>
              </RadioGroup> <br/>
          </Grid>
        )
  }

    renderMessage = () => {
      const { classes } = this.props;

      if (this.state.correct && this.state.visible) {
         return <Typography className={classes.correctmessage}> The answer is correct. </Typography>
      } else if (this.state.wrong && this.state.visible) {
        return <Typography className={classes.wrongmessage}> The answer is wrong. Try again. </Typography>
      } else {
        return null;
      }
    }

    renderButton = () => {
      const { classes } = this.props;

      if ( (this.state.correct && this.state.visible) && (this.state.counter < 8) ) {
         return <Button
          color="primary"
          variant="contained"
          className={classes.practiceBtn}
         onClick={this.nextPracticeHandler}
         >
           Continue
         </Button>
      } else if ( (this.state.correct && this.state.visible) && (this.state.counter >= 8) ) {
        return <Button
        color="primary"
        variant="contained"
        className={classes.practiceBtn}
        onClick={this.donePracticeHandler}
        >
          Finish
        </Button>
      } else {
        return <Button
        color="primary"
        variant="contained"
        className={classes.practiceBtn}
        onClick={this.checkAnswerHandler}
        >
          Check
        </Button>
      }
    }

    handleOnChange = (e) => {
        console.log('selected option', e.target.value);
        this.setState({ myAnswer: e.target.value, visible: false, correct: false, wrong: false });
    }

    handleOnChangeTest = (name, e) => {
        this.setState({ [name]: e.target.value});
    }

    componentDidUpdate(prevProps, prevState) {
      if ( this.state.counter !== prevState.counter ) {
        this.setState(() => {
          return {
            // disabled: true,
            content: this.chosenwords[this.state.counter].content,
            question: this.chosenwords[this.state.counter].question,
            possibleAnswer: this.chosenwords[this.state.counter].possibleAnswer,
            correctAnswer: this.chosenwords[this.state.counter].correctAnswer
          };
        });
      }
    }
  
    render() {
        const { classes, name } = this.props;
        const { cont, done, result, donePractice } = this.state;

        if (result) {
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
                    Final Result
                  </Box>
                </Typography>
              </Grid> 
              <br/>
              <br/>
              <br/>
              <br/>
              <Grid
              container
              spacing={0}
              direction="column"
              align="center"
              justify="center"
              >
                <Typography variant="headline">
                  <Box className={classes.finalresult} m={0}>
                    Congratulations {name}! Your final test score is {this.state.finalscore} out of 9. 
                  </Box>
                  <br/>
                  <Box className={classes.finalresult} m={0}>
                    We hope your final test score is better than your early test score. 
                    You can participate in the lesson again by refreshing the page. 
                  </Box>
                </Typography>
              </Grid>
            </div>
          )
        }

          if (done) {
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
                      Final Test
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
                  Now let's test how many words you have learned from the lesson that is prepared for you.
                </Grid> 
                <br/>
                <form className={classes.container}>     

                  { this.renderTestQuestion(3, 'myTestAnswer1') } 
                  { this.renderTestQuestion(4, 'myTestAnswer2') } 
                  { this.renderTestQuestion(8, 'myTestAnswer3') } 
                  { this.renderTestQuestion(2, 'myTestAnswer4') } 
                  { this.renderTestQuestion(0, 'myTestAnswer5') }
                  { this.renderTestQuestion(1, 'myTestAnswer6') } 
                  { this.renderTestQuestion(6, 'myTestAnswer7') } 
                  { this.renderTestQuestion(7, 'myTestAnswer8') } 
                  { this.renderTestQuestion(5, 'myTestAnswer9') } 
                </form>
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
                  onClick={this.testHandler}
                  >
                    Confirm
                  </Button>
                </Grid>
                <br/>
                <br/>
                <br/>
              </div>
            )
          }

          if (donePractice) {
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
                      Lesson
                    </Box>
                  </Typography>
                </Grid> 
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                >
                  <Typography variant="headline">
                  <Box className={classes.finalresult} m={0}>
                    The lesson is over! You have finished rehearsing all the words. 
                  </Box>
                  <br/>
                  <Box className={classes.finalresult} m={0}>
                    Now let's test how many words you have learned from the lesson that is prepared for you.
                  </Box>
                  <br/>
                  <Box className={classes.finalresult} m={0}>
                    Please select the button below to begin the final test.
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
                    onClick={this.doneHandler}
                  >
                    Begin Final Test 
                  </Button>
                </Grid>
              </div>
            )
          }
      
          if (!cont) {
            // render practice word and meaning
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
                      Lesson
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
                  Take your time and learn the word.
                </Grid> 
                <form className={classes.container}>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title={"Practice Word #" + (this.state.counter + 1)} />
                    <CardContent className={classes.content}>
                      {this.state.content}
                    </CardContent>
                  </Card>
                </form>
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
                    onClick={this.contHandler}
                  >
                    Continue
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
                      Lesson
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
                  Pick the correct meaning of the word to continue.
                </Grid> 
                <form className={classes.container}>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title={"Practice Word #" + (this.state.counter + 1)} />
                    <CardContent className={classes.content}>
                      <Typography className={classes.formControl}>{this.state.question}</Typography>
                      <RadioGroup 
                        row
                        aria-label="Emotion"
                        name="emotionQuestion"
                        className={classes.group}
                        value={this.state.value}
                        onChange={(value) => this.handleOnChange(value)}
                      >
                        <FormControlLabel value={this.state.possibleAnswer[0]} control={<Radio color="primary"/>} label={this.state.possibleAnswer[0]}/>
                        <FormControlLabel value={this.state.possibleAnswer[1]} control={<Radio color="primary"/>} label={this.state.possibleAnswer[1]}/>
                        <FormControlLabel value={this.state.possibleAnswer[2]} control={<Radio color="primary"/>} label={this.state.possibleAnswer[2]}/>
                      </RadioGroup> 
                    </CardContent>
                  </Card>
                </form>
                <br/>
                <Container
                align="center"
                >
                  { this.renderMessage() }
                  <br/>
                  { this.renderButton() }
                </Container>
              </div>
            )
          }
    };
}

export default withStyles(styles)(PracticePage);   