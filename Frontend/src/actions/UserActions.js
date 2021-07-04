export const UserLogin = (id) => {
  return {
    type: "USER_LOGIN",
    payload: id
  };
};

export const UserLogout = () => {
  return {
    type: "USER_LOGOUT"
  };
};

export const FetchSingleUser = (data) => {
  return {
    type: "FETCH_SINGLE_USER",
    payload: data
  };
};

export const AddUser = () => {
  return {
    type: "ADD_USER"
  };
};
