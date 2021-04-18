import axios from 'axios'
import qs from "qs"

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  // Tự cấu hình cách lấy params mặc định của axios
  // Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, {skipNulls: true})
})

axiosClient.interceptors.request.use(
  (config) => {
    // Xử lí trước khi request được gửi lên server
    // Thêm Authorization vào header
    const userInfo = localStorage.getItem("userInfo")

    if(userInfo) {
      const {accessToken} = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Xử lí khi request bị lỗi
    return Promise.reject(error);
  },
)

axiosClient.interceptors.response.use(
  (response) => {
    // Xử lí kết quả trả về từ server
    return response;
  },
  (error) => {
    // Xử lí kết quả trả về bị lỗi
    if(error.status === 401){
      // Xử lí logout: clear localStorage, đẩy người dùng về trang login
    }

    if(error.status ===500){
      // Xử lí thông báo cho người dùng là server đang bị lỗi
    }
    return Promise.reject(error)
  }
)

export default axiosClient