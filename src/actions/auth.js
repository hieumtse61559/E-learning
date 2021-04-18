import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from '../constants/auth'
import authAPI from '../services/authAPI'
export function login(values){
  return async (dispatch)=>{
    dispatch({type: LOGIN_REQUEST});

    try {
      const {data} = await authAPI.login(values);

      // Lưu thông tin user xuống localStorage để giữ trạng thái đăng nhập khi user tắt trang web
      localStorage.setItem("userInfo", JSON.stringify(data) );

      dispatch({type: LOGIN_SUCCESS, payload: {data}});
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {error: error.response.data},
      })
    }
  }
}