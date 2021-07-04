import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState } from "react";
import { LoginUser } from "../../reducers/UserReducers/changeUserLoginStatus";
import { DoctorLogin } from "../../reducers/DoctorReducers/changeDoctorLoginStatus";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInHOC(props) {
  const classes = useStyles();

  const history = useHistory();

  //signup link path according to doctor or user
  const path =
    props.formName === "Usersignin" ? "/user/signup" : "/fordoctors/signup";

  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    emailorphone: "",
    password: ""
  });

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    if (props.formName === "Usersignin") {
      dispatch(LoginUser(credentials.emailorphone, credentials.password));
      localStorage.setItem("usertoken", "true");
      history.push("/");
    } else {
      dispatch(DoctorLogin(credentials.emailorphone, credentials.password));
      localStorage.setItem("doctortoken", "true");
      history.push("/fordoctors");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        className={classes.paper}
        style={{ marginBottom: "25px", marginTop: "80px" }}
      >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} validate onSubmit={OnSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="emailorphone"
            label="Email"
            name="emailorphone"
            autoComplete="email"
            autoFocus
            onChange={(e) => onInputChange(e)}
            inputProps={{
              pattern: "[A-Za-z]+[0-9A-Za-z]*[@]{1}[a-z]{2,}[.]{1}[a-zA-Z]{2,}",
              title: "Please enter valid email"
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => onInputChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link style={{ cursor: "pointer" }} to="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            {"Don't have an account? "}
            <Link style={{ cursor: "pointer" }} to={path} variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
