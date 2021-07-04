import axios from "axios";
import { AddUser, FetchSingleUser } from "../../actions/UserActions";

const initialState = [];

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_USER":
      console.log("User=" + action.payload);
      return action.payload;
    case "ADD_USER":
      return state;
    default:
      return state;
  }
};

export const GetUserById = (id) => {
  const url = "http://localhost:8050/bmd/patient/getpatientbyid/" + id;
  console.log(id);
  return function (dispatch) {
    axios
      .get(url)
      .then((res) => dispatch(FetchSingleUser(res.data)))
      .catch((err) => console.log(err.message));
  };
};

export const SignUp = (user) => {
  axios.defaults.headers.post["Access-Control-Allow-Orign"] = "true";

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  console.log(user);
  return function (dispatch) {
    axios
      .post("http://localhost:8050/bmd/patient/add", user, {
        headers: headers
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Successflly Signed Up!!\nWelcome to BMD Community");
          dispatch(AddUser());
          return true;
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        return false;
      });
  };
};
