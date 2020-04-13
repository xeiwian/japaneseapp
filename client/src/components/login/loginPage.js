import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core';
import LearningPage from '../learning/learningPage';

// set the styles for loginPage
const style = theme => ({
  // card: {
  //   display: 'column',
  //   width: 500,
  //   height: 300,
  //   padding: 16,
  //   alignItems: 'center',
  //   // justifyContent: 'center',
  //   color: 'white',
  //   background: '#448aff',
  //   borderRadius: 16
  // },
  // root: {
  //   display: 'flex',
  //   // justifyContent: "center"
  // },
  // formItems: {
  //   marginTop: 16,
  //   marginBottom: 12
  // },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    margin: `${theme.spacing(0)} auto`
  },
  loginBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    background: '#3d5afe' 
  },
  header: {
    textAlign: 'center',
    background: '#3d5afe',
    color: '#fff'
  },
  card: {
    marginTop: theme.spacing(10)
  }
});

class LoginPage extends Component {

    // set the state of loginPage
    state = {
      id: 'sixnine',
      name: '',
      earlyscore: 0,
      emotionscore: 0,
      familyscore: 0,
      foodscore: 0,
      finalscore: 0,
      login: false
    }

    // create a new student record 
    createStudent = async data => {
      console.log(data);
      return await fetch(`api/userlogin`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(data)  
      });
    };

    // proceedNext is responsible for saving user data into db
    proceedNext = async () => {
      let userData = {
        name: this.state.username,
        earlyscore: this.state.earlyscore,
        emotionscore: 0,
        familyscore: 0,
        foodscore: 0,
        finalscore: 0
      }
      
      // create user data 
      try {
        let res = await this.createStudent(userData);
        if (res) {
          let data = await res.json();
          this.setState({
            id: data['_id'],
            name: data['name']
          });
          console.log('i am id', data['_id'], this.state.id, this.state.name);
        }
      } catch (e) {
        console.log(e);
      }

      this.setState({
        login: true
      });
    }

    // handle changes for what user select
    handleChange = username => event => {
      this.setState({ [username]: event.target.value });
    };

    render() {
      const { classes } = this.props;
      const { login } = this.state;

      if(login) {
        return (
          <LearningPage id = {this.state.id} name = {this.state.name} />
        )
      } else {
          // return (
          //   <Grid
          //     container
          //     spacing={0}
          //     direction="column"
          //     alignItems="center"
          //     justify="center"
          //     style={{ minHeight: '60vh' }}
          //     >
          //         <Typography>
          //           <Box fontSize={30} fontFamily="Open Sans">
          //             Japanese Adaptive Language Learning App
          //           </Box>
          //         </Typography>                                 
          //         <TextField
          //             id="username"
          //             label="Username"
          //             value={this.state.username}
          //             color="#2196f3"
          //             onChange={this.handleChange('username')}
          //             margin="normal"
          //             placeholder="Enter a username"
          //             required
          //             InputLabelProps={{
          //               shrink: true
          //             }}
                    
          //             helperText={this.state.nameErrorMsg}
          //             error={this.state.nameError}
          //         /> <br/>
          //           <Button
          //             color="primary"
          //             variant="contained"
          //             className={classes.formItems}
          //             onClick={this.proceedNext}
          //           >
          //             Begin Lesson
          //           </Button>
          //     </Grid>
          // );
          return (
            <React.Fragment>
              <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                  <CardHeader className={classes.header} title="Japanese Adaptive Language Learning Web App" />
                  <CardContent>
                    <div>
                      <TextField
                        fullWidth
                        id="username"
                        type="email"
                        label="Username"
                        value={this.state.username}
                        placeholder="Enter any username"
                        margin="normal"
                        onChange={this.handleChange('username')}
                      />
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.loginBtn}
                      onClick={this.proceedNext}
                      >
                      Begin Lesson
                    </Button>
                  </CardActions>
                </Card>
              </form>
            </React.Fragment>
          );
      }
    }
  }

export default withStyles(style)(LoginPage);
