import axios from "axios";
import { UserLogin, UserLogout } from "../../actions/UserActions";

const initialState = { status: false, id: 0 };

export const changeUserLoginStatus = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { status: true, id: action.payload };
    case "USER_LOGOUT":
      return { status: false, id: 0 };
    default:
      return state;
  }
};

export const LoginUser = (email, password) => {
  return function (dispatch) {
    axios
      .get("http://localhost:8050/bmd/patient/login/" + email + "/" + password)
      .then((response) => dispatch(UserLogin(response.data.patientId)))
      .catch((err) => alert("Wrong credentials"));
    console.log("User logged in");
    //dispatch(UserLogin(2));
  };
};

export const LogoutUser = () => {
  return function (dispatch) {
    console.log("User logged out");
    dispatch(UserLogout());
  };
};
