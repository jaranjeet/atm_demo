import Api from './api';

const deposit = (params = {}) => Api.post('/accounts/deposit', params);
const withdraw = (params = {}) => Api.post('/accounts/withdraw', params);
const check_balance = (params = {}) => Api.post('/accounts/balance', params);
const view_transactions = (params = {}) => Api.post('accounts/view_transactions', params);

export default {
  deposit,
  withdraw,
  check_balance,
  view_transactions,
};
