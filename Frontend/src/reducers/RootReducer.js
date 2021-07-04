import { changeDoctorLoginStatus } from "./DoctorReducers/changeDoctorLoginStatus";
import { changeUserLoginStatus } from "./UserReducers/changeUserLoginStatus";
import { GetDoctors } from "../../src/reducers/DoctorReducers/GetDoctors";
import { combineReducers } from "redux";
import { GetAppointments } from "./AppoinmentReducer";
import { UserReducer } from "./UserReducers/GetUsers";
import { GetSingleDoctor } from "./DoctorReducers/GetDoctor";

const rootReducer = combineReducers({
  changeDoctorLoginStatus,
  changeUserLoginStatus,
  GetDoctors,
  GetAppointments,
  GetSingleDoctor,
  UserReducer,
});

export default rootReducer;
