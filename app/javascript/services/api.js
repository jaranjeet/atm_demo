import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};
const tokenDom = document.querySelector('meta[name=csrf-token]');
if (tokenDom) {
  const csrfToken = tokenDom.content;
  axiosConfig.headers['X-CSRF-Token'] = csrfToken;
  axiosConfig.headers['X-Requested-With'] = 'XMLHttpRequest';
}
const Api = axios.create(axiosConfig);
export default Api;
