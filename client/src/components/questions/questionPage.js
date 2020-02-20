import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class QuestionPage extends Component {

    // it runs automatically when the component is mounted
    // componentDidMount() {
    //     fetch('/api/question')
    //         .then(res => res.json())
    //         .then(questions => this.setState({questions}, () => console.log('Questions fetched...', questions)));
    // }

    // state = {
    //   content: '',
    //   correctAnswer: '',
    //   possibleAnswer: ''
    // }

    state = {
      value: 'female',
    };

    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
    render() {
        const { classes } = this.props;

        return (
          <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
        )
    };

}

export default withStyles(styles)(QuestionPage);
