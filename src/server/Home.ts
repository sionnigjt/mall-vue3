import axios from "../utils/axios";

export function getHome():Promise<MyResponseType<dataType>> {
  return axios.get("/index-infos");
}
