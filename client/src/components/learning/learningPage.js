import React, { Component } from 'react';
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
      counter: 0,
      emotionContent: '',
      familyContent: '',
      foodContent: ''
    }

    // randomNum = () => {
    //   const min = 0;
    //   const max = 5;
    //   const rand = min + Math.random() * (max - min);
    //   return rand;
    // }

    componentDidMount = () => {
      this.fetchEmotionQuestion();
      this.fetchFamilyQuestion();
      this.fetchFoodQuestion();
    }

    fetchEmotionQuestion = async () => {
      const url = 'api/question/emotion';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      this.setState({emotionContent: data[0].content})
    } 

    fetchFamilyQuestion = async () => {
      const url = 'api/question/family';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({familyContent: data[0].content})
    } 

    fetchFoodQuestion = async () => {
      const url = 'api/question/food';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({foodContent: data[0].content})
    } 

    // setNextContent() {
    //   const counter = this.state.counter+1;

    //   this.setState({
    //     counter: counter,
    //     emotionContent: data[counter].content,
    //     familyContent: data[counter].content,
    //     foodContent: data[counter].content
    //   });
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
                    <Typography className={classes.formControl}>{this.state.familyContent}</Typography>
                    <Typography className={classes.formControl}>{this.state.foodContent}</Typography>
                </div>
            </Grid>  
            <Button
                  component={ Link } to="/question"
                  color="primary"
                  variant="contained"
                  className={classes.formItems}
                  onClick={this.proceedNext}
            >
            Next
            </Button>
        </Grid>
        )
    };

}

export default withStyles(styles)(LearningPage);    