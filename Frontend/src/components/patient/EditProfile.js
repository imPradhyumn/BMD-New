import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetUserById } from "../../reducers/UserReducers/GetUsers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "40px auto",
      width: "850px",
      height: "510px"
    }
  },
  image: {
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "35px",
    marginRight: "-70px",
    width: "350px",
    height: "350px"
  },
  profile: {
    marginTop: "25px",
    marginBottom: "25px",
    width: "350px",
    height: "450px"
  },
  paper: {
    marginTop: theme.spacing(2),
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

function ProfileBox(props) {
  console.log("Props=" + props.user);
  const [userDetails, setUserDetails] = useState(props.user);

  const [readOnly, setReadOnly] = useState({ readOnly: true });
  const classes = useStyles();

  const [textFieldType, setTextFieldType] = useState("standard");

  function toggleReadOnly() {
    setReadOnly({ readOnly: false });
    setTextFieldType("outlined");
  }

  function handleChange(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setReadOnly({ readOnly: true });
    setTextFieldType("standard");
    axios
      .put("http://localhost:8050/bmd/patient/updateprofile", userDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  return (
    <Container className={classes.profile}>
      <Container component="main" style={{ width: "380px" }}>
        <CssBaseline />
        <div className={classes.paper}>
          <h3>Profile Details</h3>
          <form
            onSubmit={onSubmit}
            className={classes.form}
            validate
            type="get"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  name="name"
                  label="Name"
                  fullWidth
                  variant={textFieldType}
                  required
                  id="name"
                  InputProps={readOnly}
                  type="text"
                  value={userDetails.patientName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="Phone"
                  required
                  fullWidth
                  id="phone"
                  InputProps={readOnly}
                  name="phone"
                  type="phone"
                  value={userDetails.patientPhone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  required
                  variant={textFieldType}
                  id="email"
                  InputProps={readOnly}
                  name="email"
                  type="email"
                  label="Email"
                  autoComplete="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  name="password"
                  required
                  label="Password"
                  type="password"
                  id="password"
                  value={userDetails.password}
                  InputProps={readOnly}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  label="Address"
                  name="address"
                  variant={textFieldType}
                  required
                  fullWidth
                  id="address"
                  InputProps={readOnly}
                  autoFocus
                  type="text"
                  value={userDetails.address}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="Age"
                  required
                  name="dob"
                  type="number"
                  value={userDetails.age}
                  id="dob"
                  InputProps={readOnly}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
              {readOnly.readOnly && (
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={toggleReadOnly}
                >
                  Edit Profile
                </Button>
              )}

              {!readOnly.readOnly && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save
                </Button>
              )}
            </Box>
          </form>
        </div>
      </Container>
    </Container>
  );
}

export const EditProfile = () => {
  const state = useSelector((state) => state.changeUserLoginStatus);
  const loginStatus = state.status;
  const classes = useStyles();
  const history = useHistory();

  if (!loginStatus) history.push("/");

  const dispatch = useDispatch();

  useEffect(() => dispatch(GetUserById(state.id)), []);

  const user = useSelector((state) => state.UserReducer);
  console.log("User=" + user);

  console.log("User=" + user);

  const user1 = {
    name: "Ps",
    address: "6e13",
    phone: "9057672243",
    email: "ps@gmail.com",
    password: "password",
    dob: "1998-10-29"
  };
  const bgStyles = {
    backgroundImage: " linear-gradient(#0052b0, #b340b3)",
    backgroundRepeat: "no-repeat",
    marginTop: "-5px",
    backgroundSize: "cover",
    height: "400px"
  };
  return (
    <div style={{ height: "700px", marginTop: "150px" }}>
      <div style={bgStyles}>
        <Container className={classes.root}>
          <Paper elevation={3}>
            <Box display="flex" justifyContent="center">
              <img
                className={classes.image}
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80"
                alt="kl"
              />
              <ProfileBox user={user} />
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};
