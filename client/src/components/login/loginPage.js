import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import LearningPage from '../learning/learningPage';

// set the styles for loginPage
const style = theme => ({
  root: {
    display: 'flex',
    // justifyContent: "center"
  },
  titleText: {
    fontSize: 36
  },
  form: {
    padding: 16
  },
  formItems: {
    marginTop: 16,
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
                  Japanese Adaptive Language Learning App
                </Typography> 
                <form className={classes.form}>
                  <TextField
                      id="username"
                      label="Username"
                      value={this.state.username}

                      onChange={this.handleChange('username')}
                      margin="normal"
                      placeholder="Enter a username"
                      required
                      InputLabelProps={{
                        shrink: true
                      }}
                      className={classes.formItems}
                      helperText={this.state.nameErrorMsg}
                      error={this.state.nameError}
                  />       
                  <br/>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.formItems}
                      onClick={this.proceedNext}
                    >
                      Begin Lesson
                    </Button>
                </form> 
            </Grid>
          );
      }
    }
  }

export default withStyles(style)(LoginPage);
