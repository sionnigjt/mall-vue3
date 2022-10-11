import axios from "../utils/axios";
type dataType = {
  carousels: any;
  hotGoodses: any;
  newGoodses: any;
  recommendGoodses: any;
}

interface MyResponseType {
  code: number;
  message: string;
  data: dataType;
}
export function getHome():Promise<MyResponseType> {
  return axios.get("/index-infos");
}
