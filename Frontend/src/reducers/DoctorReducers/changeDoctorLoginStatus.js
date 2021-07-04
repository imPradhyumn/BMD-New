import { DocLogin, DocLogout } from "../../actions/DoctorActions";
import axios from "axios";

const initialState = { status: false, id: null };

export const changeDoctorLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case "DOC_LOGIN":
      return { status: true, id: action.payload };
    case "DOC_LOGOUT":
      return { status: false, id: null };
    default:
      return state;
  }
};

export const DoctorLogin = (email, password) => {
  return function (dispatch) {
    axios
      .get("http://localhost:8050/bmd/doctor/login/" + email + "/" + password)
      .then((response) => dispatch(DocLogin(response.data.doctorId)))
      .catch((err) => alert("Wrong credentials"));
    //dispatch(DocLogin(2));
    console.log("Doctor logged in");
  };
};

export const DoctorLogout = () => {
  return function (dispatch) {
    dispatch(DocLogout());
  };
};
