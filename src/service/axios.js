import Axios from 'axios';
import { message } from 'antd';

Axios.interceptors.response.use(function (response) {
    if (response.data.retCode !== '0000') {
      const msg = response.data.retMsg;
      message.error(msg);
      return Promise.reject(response.data);
    }
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
// axios.defaut.baseURL = 'http://47.92.199.153:8082';

export default Axios;