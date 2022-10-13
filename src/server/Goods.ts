import axios from '../utils/axios'

export function  getDetail(id:number):Promise<MyResponseType<ProductDetailType>> {
    return axios.get(`/goods/detail/${id}`)
}

export function getCategory() {
  return axios.get('/categories');
}


