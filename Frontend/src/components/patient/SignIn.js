import React from "react";
import SignInHOC from "../HOC/SignInHOC";
import { changeUserLoginStatus } from "../../reducers/UserReducers/changeUserLoginStatus";
import { useSelector } from "react-redux";

export const UserSignIn = () => {
  const state = useSelector((state) => state.changeUserLoginStatus);
  const loginStatus = state.status;
  return (
    <SignInHOC
      formName="Usersignin"
      toggleLoginStatus={changeUserLoginStatus}
      loginStatus={loginStatus}
    />
  );
};
