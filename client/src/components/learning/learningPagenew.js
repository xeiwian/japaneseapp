import React, { Component } from 'react';
import quizQuestions from '../questions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import QuestionPage from '../questions/questionPage';

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

class LearningPageNew extends Component {

    state = {
      emotionContent: '',
      familyContent: '',
      foodContent: '',
      done: false
    }

    componentDidMount = () => {
        this.setState({
          firstEmotionContent: quizQuestions[0].content,
          firstFamilyContent: quizQuestions[9].content,
          firstFoodContent: quizQuestions[18].content,
          secondEmotionContent: quizQuestions[1].content,
          secondFamilyContent: quizQuestions[10].content,
          secondFoodContent: quizQuestions[19].content,
          thirdEmotionContent: quizQuestions[2].content,
          thirdFamilyContent: quizQuestions[11].content,
          thirdFoodContent: quizQuestions[20].content
        });
    }

    nextContentHandler = () => {
      this.setState({
        done: true
      });
    }
  
    render() {
        const { classes } = this.props;
        const { done } = this.state;

        if(done) {
          return (
            <QuestionPage id={this.props.id} name={this.props.name}/>
          )
        } else {
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
                    Learning
                </Typography> <br/>
                <Typography>
                    Select the button to continue after you are done memorising the words
                </Typography> <br/>

                <Grid item xs={6}>
                    <div className={classes.root}>
                        <Typography className={classes.formControl}>{this.state.firstEmotionContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.firstFamilyContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.firstFoodContent}</Typography>

                        <Typography className={classes.formControl}>{this.state.secondEmotionContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.secondFamilyContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.secondFoodContent}</Typography>

                        <Typography className={classes.formControl}>{this.state.thirdEmotionContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.thirdFamilyContent}</Typography>
                        <Typography className={classes.formControl}>{this.state.thirdFoodContent}</Typography>
                    </div>
                </Grid>  
                <Button
                      // component={ Link } to="/question"
                      color="primary"
                      variant="contained"
                      className={classes.formItems}
                      onClick={this.nextContentHandler}
                >
                Continue
                </Button>
            </Grid>
            )
        }
    };

}

export default withStyles(styles)(LearningPageNew);   