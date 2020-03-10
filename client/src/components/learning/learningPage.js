import React, { Component } from 'react';
import quizQuestions from '../questions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    fontSize: 26
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class LearningPage extends Component {

    state = {
      emotioncounter: 0,
      familycounter: 6,
      foodcounter: 12,
      emotionContent: '',
      familyContent: '',
      foodContent: ''
    }

    componentDidMount = () => {
      this.documentData = JSON.parse(localStorage.getItem('document'));

      if (localStorage.getItem('document')) {
        console.log("Found local storage");
        this.setState({
          //  emotionContent: this.documentData.emotionContent,
          //  familyContent: this.documentData.familyContent,
          //  foodContent: this.documentData.foodContent,
          emotioncounter: this.documentData.emotioncounter,
          familycounter: this.documentData.familycounter,
          foodcounter: this.documentData.foodcounter,
        });
      } else {
        console.log("Couldn't find local storage");
        this.setState({
          emotionContent: quizQuestions[this.state.emotioncounter].content,
          familyContent: quizQuestions[this.state.familycounter].content,
          foodContent: quizQuestions[this.state.foodcounter].content,
        });
      }
    }

    // increment the counter for all questions
    nextContentHandler = () => {
      // this.setState({
      //   emotioncounter: this.state.emotioncounter + 1,
      //   familycounter: this.state.familycounter + 1,
      //   foodcounter: this.state.foodcounter + 1,
      // });

      this.state.emotioncounter += 1;
      this.state.familycounter += 1;
      this.state.foodcounter += 1;

      localStorage.setItem('document',JSON.stringify(this.state));
    }

    // update the UI with new states (need to wrap it in a condition to check for state changes)
    componentDidUpdate(prevProps, prevState) {
      if (this.state.emotioncounter !== prevState.emotioncounter || this.state.familycounter !== prevState.familycounter || this.state.foodcounter !== prevState.foodcounter) {
        this.setState(() => {
          return {
            emotionContent: quizQuestions[this.state.emotioncounter].content,
            familyContent: quizQuestions[this.state.familycounter].content,
            foodContent: quizQuestions[this.state.foodcounter].content,
          };
        });
      }
    }
  
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
            <Typography variant="headline" component="h1">
            Learning
            </Typography> <br/>
            <Typography>
            Please memorise these 3 questions and select the next button to continue
            </Typography> <br/>

            <Grid item xs={6}>
                <div className={classes.root}>
                    <Typography className={classes.formControl}>{this.state.emotionContent}</Typography>
                    <Typography className={classes.formControl}>{this.state.familyContent}</Typography>
                    <Typography className={classes.formControl}>{this.state.foodContent}</Typography>
                </div>
            </Grid>  
            <Button
                  component={ Link } to="/question"
                  color="primary"
                  variant="contained"
                  className={classes.formItems}
                  onClick={this.nextContentHandler}
            >
            Next
            </Button>
        </Grid>
        )
    };

}

export default withStyles(styles)(LearningPage);    