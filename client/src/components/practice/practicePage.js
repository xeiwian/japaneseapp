import React, { Component } from 'react';
import quizQuestions from '../questions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    fontSize: 18
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class PracticePage extends Component {

    state = {
      content: '',
      question: '',
      myAnswer: '',
      possibleAnswer: [],
      correctAnswer: '',
      visible: false,
      correct: false,
      wrong: false,
      cont: false,
      done: false,
      result: false,
      counter: 0,
      score: 0
    }

    // global variable
    chosenwords = [];

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

    doneHandler = () => {
      this.setState({
        done: true
      })
    }

    testHandler = () => {
      const { myAnswer, correctAnswer } = this.state;
      console.log('i am testHandler',myAnswer, correctAnswer);
      if (myAnswer === correctAnswer) {
        this.state.score += 1;
      }
      this.setState({
        result: true
      })
      console.log(this.state.score, this.state.result);
    }

    renderTestQuestion = (num) => {
      const { classes } = this.props;

        return(
          <Grid>      
              <Typography>{this.chosenwords[num].question}</Typography>
      
              <RadioGroup 
                row
                aria-label="Emotion"
                name="emotionQuestion"
                className={classes.group}
                value={this.state.value}
                onChange={(value) => this.handleOnChange(value)}
              >
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[0]} control={<Radio />} label={this.chosenwords[num].possibleAnswer[0]}/>
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[1]} control={<Radio />} label={this.chosenwords[num].possibleAnswer[1]}/>
                <FormControlLabel value={this.chosenwords[num].possibleAnswer[2]} control={<Radio />} label={this.chosenwords[num].possibleAnswer[2]}/>
              </RadioGroup> <br/>
          </Grid>
        )
  }

    renderMessage = () => {
      if (this.state.correct && this.state.visible) {
         return <Typography variant="headline" component="h1"> The answer is correct. </Typography>
      } else if (this.state.wrong && this.state.visible) {
        return <Typography variant="headline" component="h1"> The answer is wrong try again. </Typography>
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
         className={classes.formItems}
         onClick={this.nextPracticeHandler}
         >
           Continue
         </Button>
      } else if ( (this.state.correct && this.state.visible) && (this.state.counter >= 8) ) {
        return <Button
        color="primary"
        variant="contained"
        className={classes.formItems}
        onClick={this.doneHandler}
        >
          Finish
        </Button>
      } else {
        return <Button
        color="primary"
        variant="contained"
        className={classes.formItems}
        onClick={this.checkAnswerHandler}
        >
          Check
        </Button>
      }
    }

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ myAnswer: e.target.value, visible: false, correct: false, wrong: false });
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
        const { cont, done, result } = this.state;

        if (result) {
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
                      Final Result
                  </Typography> <br/>
                  <Typography>
                      Congrats {name}! You have completed your lesson.
                  </Typography>
                  <Typography>
                      FINAL SCORE: {this.state.score}
                  </Typography>
              </Grid>
          )
        }

          if (done) {
            return (
              <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '200vh' }}
              >          
                  <Typography variant="headline" component="h1">
                      Test 
                  </Typography> <br/>
                  <Grid item xs={6}>
                    <div className={classes.root}>
                      { this.renderTestQuestion(0) } <br/>
                      { this.renderTestQuestion(1) } <br/>
                      { this.renderTestQuestion(2) } <br/>
                      { this.renderTestQuestion(3) } <br/>
                      { this.renderTestQuestion(4) } <br/>
                      { this.renderTestQuestion(5) } <br/>
                      { this.renderTestQuestion(6) } <br/>
                      { this.renderTestQuestion(7) } <br/>
                      { this.renderTestQuestion(8) } <br/>
                    </div>
                  </Grid>

                  <Button
                  color="primary"
                  variant="contained"
                  className={classes.formItems}
                  onClick={this.testHandler}
                  >
                    Confirm
                  </Button>

              </Grid>      
            )
          }
      
          if (!cont) {
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
                      Practice {this.state.counter}
                  </Typography> <br/>
                  <Typography className={classes.formControl}>{this.state.content}</Typography>

                  <Button
                        color="primary"
                        variant="contained"
                        className={classes.formItems}
                        onClick={this.contHandler}
                  >
                    Continue
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
                  style={{ minHeight: '60vh' }}
                  >
                      <Typography variant="headline" component="h1">
                          Practice {this.state.counter+1}
                      </Typography> <br/>

                      <Typography className={classes.formControl}>{this.state.question}</Typography>
      
                      <RadioGroup 
                        row
                        aria-label="Emotion"
                        name="emotionQuestion"
                        className={classes.group}
                        value={this.state.value}
                        onChange={(value) => this.handleOnChange(value)}
                        // onChange={this.handleChange}
                      >
                        <FormControlLabel value={this.state.possibleAnswer[0]} control={<Radio />} label={this.state.possibleAnswer[0]}/>
                        <FormControlLabel value={this.state.possibleAnswer[1]} control={<Radio />} label={this.state.possibleAnswer[1]}/>
                        <FormControlLabel value={this.state.possibleAnswer[2]} control={<Radio />} label={this.state.possibleAnswer[2]}/>
                      </RadioGroup> 

                      { this.renderMessage() }
                      <br/>
                      { this.renderButton() }
                      
                  </Grid>
            )
          }
    };
}

// class TestQuestion extends Component {

//   render() {
//     const { classes } = this.props;

//       return (
//           <Grid>      
//               <Typography>{this.chosenwords[this.props.counter].question}</Typography>
      
//               <RadioGroup 
//                 row
//                 aria-label="Emotion"
//                 name="emotionQuestion"
//                 // className={classes.group}
//                 value={this.state.value}
//                 onChange={(value) => this.handleOnChange(value)}
//                 // onChange={this.handleChange}
//               >
//                 <FormControlLabel value={this.chosenwords[this.props.counter].possibleAnswer[0]} control={<Radio />} label={this.chosenwords[this.props.counter].possibleAnswer[0]}/>
//                 <FormControlLabel value={this.chosenwords[this.props.counter].possibleAnswer[1]} control={<Radio />} label={this.chosenwords[this.props.counter].possibleAnswer[1]}/>
//                 <FormControlLabel value={this.chosenwords[this.props.counter].possibleAnswer[2]} control={<Radio />} label={this.chosenwords[this.props.counter].possibleAnswer[2]}/>
//               </RadioGroup> <br/>
//           </Grid>
//       )
//   };
// }

export default withStyles(styles)(PracticePage);   