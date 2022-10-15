import axios from '../utils/axios'
export function getCart():Promise<MyResponseType<Array<CartListType> >> {
    return axios.get('/shop-cart',{});
  }
  export function addCart(params:addCartType):Promise<MyResponseType<any>>{
    return axios.post('/shop-cart', params);
  }
  export function deleteCartItem(id:number){
    return axios.delete(`/shop-cart/${id}`);
  }