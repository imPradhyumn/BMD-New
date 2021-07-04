import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Radio, RadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../reducers/UserReducers/GetUsers";
import { useHistory } from "react-router-dom";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function UserSignUp() {
  let history = useHistory();
  const [user, set] = useState({
    patientName: "",
    patientPhone: "",
    age: "",
    address: "",
    email: "",
    password: "",
    gender: ""
  });

  const { patientName, patientPhone, age, address, email, password, gender } =
    user;

  const onInputChange = (e) => {
    set({
      ...user,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });
  };

  const dispatch = useDispatch();

  //for form submition
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    user.email = user.email.toLowerCase();
    let res = dispatch(SignUp(user));
    if (res) history.push("/");
  };

  const classes = useStyles();

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginBottom: "25px", marginTop: "80px" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="patientName"
                autoComplete="name"
                autoFocus
                value={patientName}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[A-Za-z]+[ ]{1}[A-Za-z]+",
                  title: "Please enter valid full name"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userPphone"
                label="Contact"
                name="patientPhone"
                autoComplete="phone"
                autoFocus
                value={patientPhone}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[9|6|7|8]{1}[0-9]{9}",
                  title: "Wrong phone number"
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern:
                    "[A-Za-z]+[0-9A-Za-z]*[@]{1}[a-z]{2,}[.]{1}[a-zA-Z]{2,}",
                  title: "Please enter valid email"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                autoFocus
                value={password}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[a-zA-Z0-9#@!&%]{8,}",
                  title: "Atleast 8 characters"
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="age"
                label="Age"
                type="number"
                id="age"
                value={age}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  min: "1",
                  max: "100"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="gender"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="start"
                    checked={gender === "Male"}
                    onChange={(e) => onInputChange(e)}
                  />
                  <FormControlLabel
                    value="Female"
                    checked={gender === "Female"}
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="start"
                    onChange={(e) => onInputChange(e)}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            {"Already have an account? "}
            <Link
              style={{ cursor: "pointer" }}
              to="/user/login"
              variant="body2"
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
