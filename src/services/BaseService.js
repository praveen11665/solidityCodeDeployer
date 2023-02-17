import axios from 'axios'

export const baseURL = 'https://abi-test.onrender.com/'

export default axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: '*/*',
    'Content-Type': '*',
    'X-Requested-With': '*',
    'Access-Control-Allow-Origin' : '*',
  },
  validateStatus: function (status) {
    return status >= 200 && status <= 300
  },
})
