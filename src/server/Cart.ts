import axios from '../utils/axios'
export function getCart():Promise<MyResponseType<Array<CartListType> >> {
    return axios.get('/shop-cart', {  });
  }