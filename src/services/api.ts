import axios from 'axios';
// 192.168.121.225
// 'http://10.0.2.2:3333'
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
