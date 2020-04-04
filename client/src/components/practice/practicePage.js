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
      foodContent: '',
      next: false,
      correct: false,
      proceed: false,
      done: false
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
          content: chosenwords[0].content,
          question: chosenwords[0].question
        });
    }

    componentDidMount = () => {
        this.handleChosenWords();
    }

    nextHandler = () => {
        this.setState({
            next: true
        });
    }

    continueHandler = () => {
      this.setState({
        proceed: true
      })
    }

    checkAnswerHandler = () => {
        const { myAnswer, correctAnswer } = this.state;

        if (myAnswer === correctAnswer) {
          this.setState({
            correct: true
          });
        }

    }

    handleOnChange(e) {
        console.log('selected option', e.target.value);
        this.setState({ myAnswer: e.target.value});
    }
  
    render() {
        const { classes } = this.props;
        const { done, next, correct, proceed } = this.state;

          return (
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '120vh' }}
            >
                <Typography variant="headline" component="h1">
                    Practice
                </Typography> <br/>
                <Typography className={classes.formControl}>{this.state.content}</Typography>
                <Button
                      color="primary"
                      variant="contained"
                      className={classes.formItems}
                      onClick={this.nextHandler}
                >
                  Next
                </Button>
            </Grid>
          )
        
    };

}

export default withStyles(styles)(PracticePage);   