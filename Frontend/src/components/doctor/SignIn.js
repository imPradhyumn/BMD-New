import React from "react";
import SignInHOC from "../HOC/SignInHOC";
import { changeDoctorLoginStatus } from "../../reducers/DoctorReducers/changeDoctorLoginStatus";
import { useSelector } from "react-redux";
import {
  DoctorLogin,
  DoctorLogout,
} from "../../reducers/DoctorReducers/changeDoctorLoginStatus";

export const DoctorSignIn = () => {
  const state = useSelector((state) => state.changeDoctorLoginStatus);
  const loginStatus = state.status;
  return (
    <SignInHOC
      formName="doctorsignin"
      toggleLoginStatus={changeDoctorLoginStatus}
      loginStatus={loginStatus}
      login={DoctorLogin}
      logout={DoctorLogout}
    />
  );
};
