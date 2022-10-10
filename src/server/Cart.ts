import axios from '../utils/axios'
export function getCart() {
    return axios.get('/shop-cart', {  });
  }