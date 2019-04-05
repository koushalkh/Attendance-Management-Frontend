import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";
import teacherReducer from "./teacherReducers";
import managementReducer from "./managementReducers";
export default combineReducers({
  student: studentReducer,
  user: userReducer,
  teacher: teacherReducer,
  manager: managementReducer
});
