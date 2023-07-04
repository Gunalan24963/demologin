import axios from "axios";
import { url } from "../url";
import { Navigate } from "react-router-dom";
import { message } from "antd";

export const Apirequest = async (method, endpoint, data, navigate) => {
  const accessToken = localStorage.getItem("token");
  try {
    const config = {
      method: method,
      url: `${url}/${endpoint}`,
      headers: {
        Authorization: accessToken ? accessToken : undefined,
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error("Unauthorized")
      navigate("/");
    } else {
      console.error(error);
    }
  }
};
