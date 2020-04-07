import React, { Component } from 'react';
import quizQuestions from '../questions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

class TestPage extends Component {

    state = {
        content: '',
        question: '',
        myAnswer: '',
        possibleAnswer: [],
        correctAnswer: '',
        complete: false,
        score: 0
      }

}