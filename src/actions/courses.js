import { GET_COURSES_REQUEST, GET_COURSES_FAILURE, GET_COURSES_SUCCESS } from "../constants/courses";

import coursesAPI from "../services/coursesAPI";

export function getCourseByCategory(category) {
  return  async (dispatch) => {
    dispatch({type: GET_COURSES_REQUEST});

    try {
      const {data} = await coursesAPI.getCourseByCategory(category);
      dispatch({type: GET_COURSES_SUCCESS, payload: {data}})
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: {error: error.response.data},
      })
    }
  }
}