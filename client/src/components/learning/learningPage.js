import React, { Component } from 'react';
import quizQuestions from '../questions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
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
  },
  container: {
    display: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 400,
    margin: `${theme.spacing(0)} auto`
  },
  instructions: {
    marginTop: theme.spacing(6),
  },
  continueBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    background: '#3d5afe',
    // width: 400,
    // height: 50
  },
  header: {
    textAlign: 'center',
    background: '#536dfe',
    color: '#fff',
    height: 12
  },
  content: {
    fontSize: 22
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 28
  },
  card: {
    marginTop: theme.spacing(6),
    borderRadius: 12
  }
});

class LearningPage extends Component {

    state = {
      emotionContent: '',
      familyContent: '',
      foodContent: '',
      done: false
    }

    componentDidMount = () => {
        this.setState({
          firstEmotionContent: quizQuestions[0].content,
          firstFamilyContent: quizQuestions[3].content,
          firstFoodContent: quizQuestions[6].content,
          secondEmotionContent: quizQuestions[1].content,
          secondFamilyContent: quizQuestions[4].content,
          secondFoodContent: quizQuestions[7].content,
          thirdEmotionContent: quizQuestions[2].content,
          thirdFamilyContent: quizQuestions[5].content,
          thirdFoodContent: quizQuestions[8].content
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
            // return (
            //   <Grid
            //   container
            //   spacing={0}
            //   direction="column"
            //   alignItems="center"
            //   justify="center"
            //   style={{ minHeight: '120vh' }}
            //   >
            //     <Typography variant="headline" component="h1">
            //         Learning
            //     </Typography> <br/>
            //     <Typography>
            //         Select the button to continue after you are done memorising the words
            //     </Typography> <br/>

            //     <Grid item xs={6}>
            //         <div className={classes.root}>
            //             <Typography className={classes.formControl}>{this.state.firstEmotionContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.firstFamilyContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.firstFoodContent}</Typography>

            //             <Typography className={classes.formControl}>{this.state.secondEmotionContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.secondFamilyContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.secondFoodContent}</Typography>

            //             <Typography className={classes.formControl}>{this.state.thirdEmotionContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.thirdFamilyContent}</Typography>
            //             <Typography className={classes.formControl}>{this.state.thirdFoodContent}</Typography>
            //         </div>
            //     </Grid>  
            //     <Button
            //           color="primary"
            //           variant="contained"
            //           className={classes.formItems}
            //           onClick={this.nextContentHandler}
            //     >
            //     Continue
            //     </Button>
            // </Grid>
            // )
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

                <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                >
                  <Box className={classes.instructions} m={0}>
                    Welcome! Please take your time and learn the words below before we begin the lesson.
                  </Box> 
                </Grid>
                
                <form className={classes.container}>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #1" />
                    <CardContent className={classes.content}>
                      {this.state.firstEmotionContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #2" />
                    <CardContent className={classes.content}>
                      {this.state.firstFamilyContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #3" />
                    <CardContent className={classes.content}>
                      {this.state.firstFoodContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #4" />
                    <CardContent className={classes.content}>
                      {this.state.secondEmotionContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #5" />
                    <CardContent className={classes.content}>
                      {this.state.secondFamilyContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #6" />
                    <CardContent className={classes.content}>
                      {this.state.secondFoodContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #7" />
                    <CardContent className={classes.content}>
                      {this.state.thirdEmotionContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #8" />
                    <CardContent className={classes.content}>
                      {this.state.thirdFamilyContent}
                    </CardContent>
                  </Card>
                  <Card className={classes.card} variant="outlined">
                    <CardHeader className={classes.header} title="Word #9" />
                    <CardContent className={classes.content}>
                      {this.state.thirdFoodContent}
                    </CardContent>
                  </Card>
                  
                </form>
                <Grid
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.instructions}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.continueBtn}
                    onClick={this.nextContentHandler}
                  >
                    Continue
                  </Button>
                </Grid>
                <br/>
                <br/>
                
              </div>
              
                      
            )
        }
    };

}

export default withStyles(styles)(LearningPage);   