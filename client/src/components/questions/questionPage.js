import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const style = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
});

class QuestionPage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         questions: []
    //     }
    // }

    // it runs automatically when the component is mounted
    componentDidMount() {
        fetch('/api/question')
            .then(res => res.json())
            .then(questions => this.setState({questions}, () => console.log('Questions fetched...', questions)));
    }

    state = {
      content: '',
      correctAnswer: '',
      possibleAnswer: ''
    }

    render() {
        const { classes } = this.props;
        const [value, setValue] = React.useState('female');
        const handleChange = event => {
          setValue(event.target.value);
        };
        return (
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        )
    };

}

export default QuestionPage;
