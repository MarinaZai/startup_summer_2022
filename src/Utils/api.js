import axios from "axios";
import { constants } from "../constants";

export const apiRequest = async (url, params) => {
  const request = await axios.get(`${constants.BaseUrl}/users/${url}`, {
    params,
  });
  return request.data;
};
