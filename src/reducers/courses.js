import {GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE} from '../constants/courses'
const initialState = {
  courses: [],
  isLoading: false,
  error: null,

};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_REQUEST: {
      return {...state, isLoading: true, error: null}
    }

    case GET_COURSES_SUCCESS: {
      console.log(action.payload.data)
      return {...state, isLoading: false, courses: action.payload.data}
    }
  
    case GET_COURSES_FAILURE: {
      return {...state,courses: [], isLoading: false, error: action.payload.error}
    }
    default:
      return state
  }
}

export default coursesReducer