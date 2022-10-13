import axios from "../utils/axios";

export function getHome():Promise<MyResponseType> {
  return axios.get("/index-infos");
}
