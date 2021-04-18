import {combineReducers} from 'redux'
import coursesReducer from './courses';
import auth from './auth'

const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  courses: coursesReducer,
  auth,

});

export default rootReducer;