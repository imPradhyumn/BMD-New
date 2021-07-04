import axios from "axios";
import { FetchSingleDoctor } from "../../actions/DoctorActions";

const initialState = [];

const baseUrl = "http://localhost:8050/bmd/doctor/getbyid/";

export const GetSingleDoctor = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_DOCTOR":
      return action.payload;
    default:
      return state;
  }
};

export const GetDoctorById = (id) => {
  return function (dispatch) {
    axios
      .get(baseUrl + id)
      .then((res) => {
        console.log(res.data);
        dispatch(FetchSingleDoctor(res.data));
      })
      .catch((err) => console.log(err.message));
  };
};
