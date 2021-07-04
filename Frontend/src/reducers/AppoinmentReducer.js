import axios from "axios";

import {
  FetchAppointmentsByDate,
  AddAppoinments,
  FetchAllAppoinmentsForDoctor,
  FetchAllAppoinmentsForUser,
  CancelAppoinment,
  ApproveAppoinment
} from "../actions/AppointmentActions";

const initialState = [];
const baseUrl = "http://localhost:8050/bmd/appointment";

export const GetAppointments = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_APPOINTMENTS_FOR_DOCTOR":
      return action.payload;

    case "FETCH_ALL_APPOINTMENTS_FOR_USER":
      return action.payload;

    case "FETCH_APPOINTMENTS_BY_DATE":
      return state.filter((obj) => obj.appointmentDate === action.payload);

    case "APPROVE_APPOINTMENT":
      let temp = state;
      temp.map((arr) => {
        if (arr.appointmentId === action.payload) arr.status = "Approved";
        return null;
      });
      return temp;

    case "ADD_APPOINTMENT":
      return state;

    case "CANCEL_APPOINTMENT":
      temp = state;
      temp.map((arr) => {
        if (arr.appointmentId === action.payload) arr.status = "Cancelled";
        return null;
      });
      return temp;

    default:
      return state;
  }
};

export const GetAllAppointmentsForDoctor = (id) => {
  return function (dispatch) {
    axios
      .get(baseUrl + "/get/appointmentbydoctorid/" + id)
      .then((response) => {
        console.log(response);
        dispatch(FetchAllAppoinmentsForDoctor(response.data));
      })
      .catch((err) => console.log(err.message));
  };
};

export const GetAllAppointmentsForUser = (id) => {
  return function (dispatch) {
    axios
      .get(baseUrl + "/get/appointmentbypatientid/" + id)
      .then((response) => {
        dispatch(FetchAllAppoinmentsForUser(response.data));
      })
      .catch((err) => console.log(err.message));
  };
};

export const GetAppointmentsByDate = (date) => {
  return function (dispatch) {
    dispatch(FetchAppointmentsByDate(date));
  };
};

export const AddAppoinment = (appointment) => {
  axios.defaults.headers.post["Access-Control-Allow-Orign"] = "*";
  return function (dispatch) {
    axios
      .post("http://localhost:8050/bmd/appointment/add", appointment, {
        header: { "Access-Control-Allow-Orign": "*" }
      })
      .then((response) => {
        dispatch(AddAppoinments());
      })
      .catch((err) => console.log(err.message));
  };
};

export const Approve = (id) => {
  return function (dispatch) {
    axios
      .put(baseUrl + "/approve/" + id)
      .then((response) => {
        dispatch(ApproveAppoinment());
      })
      .catch((err) => console.log(err.message));
  };
};

export const Cancel = (id) => {
  return function (dispatch) {
    axios
      .post(axios.put(baseUrl + "/cancel/" + id))
      .then((response) => {
        dispatch(CancelAppoinment());
      })
      .catch((err) => console.log(err.message));
  };
};
