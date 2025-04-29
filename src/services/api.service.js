// lớp dịch vụ lấy dữ liệu
import axios from "axios";
const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};
