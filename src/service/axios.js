import Axios from 'axios';

Axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
// axios.defaut.baseURL = 'http://47.92.199.153:8082';

export default Axios;