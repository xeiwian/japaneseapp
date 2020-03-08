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
      // familycounter: 6,
      // foodcounter: 12,
      emotionContent: '',
      // familyContent: '',
      // foodContent: ''
    }

    componentDidMount = () => {
      this.setState({
        emotionContent: quizQuestions[0].content,
      });

      // this.fetchEmotionQuestion();
      // this.fetchFamilyQuestion();
      // this.fetchFoodQuestion();
    }

    nextContentHandler = () => {
      const { emotionContent } = this.state;
    }

    // fetchEmotionQuestion = async () => {
    //   const url = 'api/question/emotion';
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   // console.log(data);
    //   this.setState({emotionContent: data[0].content})
    // } 

    // fetchFamilyQuestion = async () => {
    //   const url = 'api/question/family';
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data);
    //   this.setState({familyContent: data[0].content})
    // } 

    // fetchFoodQuestion = async () => {
    //   const url = 'api/question/food';
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data);
    //   this.setState({foodContent: data[0].content})
    // } 

    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
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
            <Typography>
            Please memorise these 3 words and select the next button to continue
            </Typography>
            <Grid item xs={3}>
                <div className={classes.root}>
                    <Typography className={classes.formControl}>{this.state.emotionContent}</Typography>
                    {/* <Typography className={classes.formControl}>{this.state.familyContent}</Typography>
                    <Typography className={classes.formControl}>{this.state.foodContent}</Typography> */}
                </div>
            </Grid>  
            <Button
                  component={ Link } to="/learning"
                  color="primary"
                  variant="contained"
                  className={classes.formItems}
                  onClick={this.setNextContent}
            >
            Next
            </Button>
        </Grid>
        )
    };

}

export default withStyles(styles)(LearningPage);    