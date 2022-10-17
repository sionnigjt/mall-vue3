import axios from "../utils/axios";
interface getOrderListType { pageNumber: number, status: string }
export function getOrderList(params: getOrderListType):Promise<MyResponseType<OrderDataType>> {
    return axios.get('/order', { params });
  }