import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import Service from '../services/accountApi';
import SimpleTable from './SimpleTable';

export default function Dashboard() {

  const [amount, setAmount] = useState(0);
  const [account_number, setAccountNumber] = useState(localStorage.getItem('accountNumber' || ''));
  const [account_balance, setAccountBalance] = useState('');
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState([]);
  const history = useHistory();

  const deposit = () => {
    setError();
    Service.deposit({amount: amount, account_number: account_number}).then(response => {
      console.log(response);
    }).catch(error => {
      setError(error);
      console.log('error', error);
      console.log('error message', error.response.data.message);
    });
  }

  const withdraw = () => {
    setError();
    Service.withdraw({amount: amount, account_number: account_number}).then(response => {
      console.log(response);
    }).catch(error => {
      setError(error.response.data.message);
      console.log('error message', error.response.data.message);
    });
  }

  const check_balance = () => {
    setError();
    Service.check_balance({account_number: account_number}).then(response => {
      console.log(response);
      setAccountBalance(response.data.balance);
    }).catch(error => {
      console.log(error);
    });
  }

  const view_transactions = () => {
    setError();
    Service.view_transactions({account_number: account_number}).then(response =>{
      setTransactions([...response.data.statement]);
      console.log(response);
      console.log(transactions);
    }).catch(error => {
      console.log(error);
    });
  }

  const logout = () => {
    localStorage.removeItem('userId', );
    localStorage.removeItem('accountNumber');
    history.push('/');
  }

  if (!localStorage.getItem('userId') || !localStorage.getItem('accountNumber')) {
    return(
      <Redirect to='/' />
    )
  }

  return(
    <Grid container component="main" spacing={3} justify="space-between">
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <TextField
          name='amount'
          label='Enter Amount'
          required
          fullWidth
          onChange={ (e) => setAmount(e.target.value) }
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={ () => deposit()}
        >
          Deposit
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={ () => withdraw()}
        >
          Withdraw
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => check_balance()}
        >
          View Balance
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => view_transactions()}
        >
          View Statement
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        {
          account_balance && 
          <Typography component="h5" variant="h6">
            Account Balance: { account_balance } Rs.
          </Typography>
        }
      </Grid>
      <Grid item xs={12} sm={8} md={5} elevation={6} >
        {
          error &&
          <Typography component="h5" variant="h6" color='error'>
            { error }
          </Typography>
        }
      </Grid>
      <Grid item md={12} >
        {
          transactions.length > 0 && <SimpleTable rows={ transactions }/>
        }
      </Grid>
    </Grid>
  )
}
