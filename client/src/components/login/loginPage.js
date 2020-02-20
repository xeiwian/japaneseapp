import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import QuestionPage from "../questions/questionPage"; 

// set the styles for loginPage
const style = theme => ({
  titleText: {
    fontSize: 36,
    // fontWeight: 600,
    marginTop: 56
  },
  form: {
    padding: 16
  },
  formItems: {
    marginTop: 16,
    marginBottom: 12
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
});

class LoginPage extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //       username:'',
    //       age:'',
    //       score:''
    //     }
    // }
    
    // create a new student record 
    createStudent = async data => {
      console.log(data);
      return await fetch(`api/userlogin`, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(data)  
      });
    };

    // set the state of loginPage
    state = {
      username: '',
      score: 0
    }

    // proceedNext is responsible for saving user data into db
    proceedNext = async () => {
      let userData = {
        name: this.state.username,
        score: this.state.score
      }
      // create user data 
      try {
        this.createStudent(userData);
        console.log(userData);
      } catch (e) {
        console.log(e);
      }
    }

    // handle changes for what user select
    handleChange = username => event => {
      this.setState({ [username]: event.target.value });
    };

    render() {
      const { classes } = this.props;
      return (
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.titleText}>
          Welcome boys and girls!
          </Typography>
          <form className={classes.form}>
            <TextField
                id="username"
                label="Username"
                value={this.state.username}
                // handleChange={this.handleChange}
                // onChange = {(event, value) => this.setState({username:value})}
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

export default withStyles(style)(LoginPage);
