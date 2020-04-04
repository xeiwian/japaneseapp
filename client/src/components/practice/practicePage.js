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
      cont: false
    }

    getChosenWords = async (id) => {
        return await fetch(`api/userlogin/getchosenwords/${id}`);
    }

    handleChosenWords = async () => {
        let data = await this.getChosenWords(this.props.id);
        let datajson = await data.json();
        let chosenwords = datajson.chosenwords; 
        console.log('i am chosenwords data in practice', datajson, chosenwords);
        // console.log('i am chosenwords in practice', chosenwords.chosenwords);
        this.setState({
          // content: 'yoo',
          // question: 'son'
          content: chosenwords[0].content,
          question: chosenwords[0].question,
          possibleAnswer: chosenwords[0].possibleAnswer,
          correctAnswer: chosenwords[0].correctAnswer
        });
    }

    componentDidMount = () => {
        this.handleChosenWords();
    }

    contHandler = () => {
      this.setState({
        cont: true
      })
    }

    checkHandler = () => {
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

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ myAnswer: e.target.value, visible: false, correct: false, wrong: false });
    }
  
    render() {
        const { classes } = this.props;
        const { done, next, correct, cont } = this.state;
      
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
                      Practice
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
                          Practice
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
                      </RadioGroup> <br/>

                      { this.state.correct && this.state.visible ? 
                      <Typography variant="headline" component="h1">
                        The answer is correct. 
                      </Typography> : null }

                      { this.state.wrong && this.state.visible ? 
                      <Typography variant="headline" component="h1">
                        The answer is wrong try again. 
                      </Typography> : null }

                      { this.state.correct && this.state.visible ? 
                      <Button
                      color="primary"
                      variant="contained"
                      className={classes.formItems}
                      onClick={this.checkHandler}
                      >
                        Continue to next word
                      </Button> : 
                      <Button
                      color="primary"
                      variant="contained"
                      className={classes.formItems}
                      onClick={this.checkHandler}
                      >
                        Check
                      </Button>
                      }

                      {/* { (this.state.correct && this.state.visible) && (
                        <Typography variant="headline" component="h1">
                        The answer is correct. 
                        </Typography>,
                        <Button
                        color="primary"
                        variant="contained"
                        className={classes.formItems}
                        onClick={this.checkHandler}
                        >
                          Check
                        </Button>
                      )} */}                    

                      {/* <Button
                            color="primary"
                            variant="contained"
                            className={classes.formItems}
                            onClick={this.checkHandler}
                      >
                        Check
                      </Button> */}
                      
                  </Grid>
            )
          }
    };
}

// class Correct extends Component {
//   render() {
//       return (
//         <Grid>
//         <Typography variant="headline" component="h1">
//           The answer is correct. 
//         </Typography> 
//               <Button
//               color="primary"
//               variant="contained"
//               className={classes.formItems}
//               onClick={this.checkHandler}
//         >
//           Check
//         </Button>
//          <Grid/>
//       )
//   };
// }

export default withStyles(styles)(PracticePage);   