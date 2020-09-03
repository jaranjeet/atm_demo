import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles;

  return(
    <React.Fragment>
      <h1>ATM</h1>
      <Grid container md={3} spacing={1}>
        <Grid item md={12}>
          <TextField id='user_id' label='User ID' fullWidth/>
        </Grid>
        <Grid item md={12}>
          <TextField id='account' label='Account' fullWidth/>
        </Grid>
        <Grid item md={12}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
