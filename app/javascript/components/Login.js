import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme)=>({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//const history = createBrowserHistory();

export default function Login() {
  const classes = useStyles;
  const [userId, setUserId] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const history = useHistory();
  const login = () => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('accountNumber', accountNumber);
    console.log(userId, ' ', accountNumber);
    history.push('/dashboard');
  };

  if (localStorage.getItem('userId') && localStorage.getItem('accountNumber')) {
    return(
      <Redirect to='/dashboard' />
    )
  }

  return(
    <React.Fragment>
      <h1>ATM</h1>
      <Grid container item md={3} spacing={1}>
        <Grid item md={12}>
          <TextField
            id='user_id'
            label='User ID'
            fullWidth
            onChange={ (event) => setUserId(event.target.value) }
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id='account'
            label='Account'
            fullWidth
            onChange={ (event) => setAccountNumber(event.target.value) }
          />
        </Grid>
        <Grid item md={12}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className={classes.submit}
            onClick={ () => login() }
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
