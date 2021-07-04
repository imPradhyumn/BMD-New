import axios from "axios";
import {
  FetchBySpeciality,
  FetchBySpecialityAndLocation,
  SortByCharge,
  FilterByAvailabilityDay,
  FetchAllDoctors,
  AddDoctor
} from "../../actions/DoctorActions";

const initialState = [];
const baseUrl = "http://localhost:8050/bmd/doctor";

export const GetDoctors = (state = initialState, action) => {
  let myData;

  switch (action.type) {
    case "FETCH_ALL_DOCTORS":
      return action.payload;

    case "FETCH_BY_SPECIALITY":
      return state.filter((obj) => obj.speciality.includes(action.payload));

    case "FETCH_BY_SPECIALITY_AND_LOCATION":
      return state.filter((obj) => obj.location.includes(action.payload));

    case "ADD_DOCTOR":
      return state;

    case "SORT_BY_CHARGE":
      if (action.payload === "asc") {
        myData = []
          .concat(state)
          .sort((a, b) => (a.chargePerVisit > b.chargePerVisit ? 1 : -1));
      } else {
        myData = []
          .concat(state)
          .sort((a, b) => (a.chargePerVisit > b.chargePerVisit ? -1 : 1));
      }
      return myData;

    case "FILTER_BY_AVAILABILITY_DAY":
      return state.filter((obj) =>
        obj.availabilityDays.includes(action.payload)
      );

    default:
      return state;
  }
};

export const GetAllDoctors = () => {
  let url = baseUrl + "/getlist";
  return function (dispatch) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(FetchAllDoctors(response.data));
      })
      .catch((err) => console.log(err.message));
  };
};

export const GetBySpeciality = (speciality) => {
  return function (dispatch) {
    dispatch(FetchBySpeciality(speciality));
  };
};

export const GetBySpecialityAndLocation = (location) => {
  return function (dispatch) {
    dispatch(FetchBySpecialityAndLocation(location));
  };
};

export const GetByCharge = (sortType) => {
  return function (dispatch) {
    dispatch(SortByCharge(sortType));
  };
};

export const GetByAvailabilityDays = (day) => {
  return function (dispatch) {
    dispatch(FilterByAvailabilityDay(day));
  };
};

export const SignUp = (doctor) => {
  axios.defaults.headers.post["Access-Control-Allow-Orign"] = "*";

  return function (dispatch) {
    axios
      .post("http://localhost:8050/bmd/doctor/add", doctor, {
        header: { "Access-Control-Allow-Orign": "*" }
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Successflly Signed Up!!\nWelcome to BMD Community");

          dispatch(AddDoctor());
          return true;
        }
      })
      .catch((err) => {
        alert(err.response.data.message);

        return false;
      });
  };
};
