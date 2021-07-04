import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Cancel } from "../reducers/AppoinmentReducer";

export const ReduxTest = () => {
  const dispatch = useDispatch();

  const doctor = useSelector((state) => state.UserReducer);

  return (
    <div>
      <Button onClick={() => dispatch(Cancel())}>Doctor</Button>

      <h5>{JSON.stringify(doctor)}</h5>
    </div>
  );
};
