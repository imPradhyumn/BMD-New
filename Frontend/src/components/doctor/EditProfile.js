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
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import { GetDoctorById } from "../../reducers/DoctorReducers/GetDoctor";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
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

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function ProfileBox(props) {
  const [doctorDetails, setDoctorDetails] = useState(props.doctor);

  const [readOnly, setReadOnly] = useState({ readOnly: true });
  const classes = useStyles();

  const [textFieldType, setTextFieldType] = useState("standard");

  function toggleReadOnly() {
    setReadOnly({ readOnly: false });
    setTextFieldType("outlined");
  }

  function handleChange(e) {
    setDoctorDetails({ ...doctorDetails, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setReadOnly({ readOnly: true });
    setTextFieldType("standard");
    axios
      .put("http://localhost:8050/bmd/doctor/updateprofile", doctorDetails)
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
            className={classes.form}
            validate
            type="get"
            onSubmit={onSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
                  value={doctorDetails.doctorName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="Phone"
                  required
                  id="phone"
                  InputProps={readOnly}
                  name="phone"
                  type="phone"
                  value={doctorDetails.doctorPhone}
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
                  value={doctorDetails.email}
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
                  value={doctorDetails.password}
                  InputProps={readOnly}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  label="Location"
                  name="location"
                  variant={textFieldType}
                  required
                  id="location"
                  InputProps={readOnly}
                  autoFocus
                  type="text"
                  value={doctorDetails.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="Speciality"
                  required
                  name="speciality"
                  value={doctorDetails.speciality}
                  id="speciality"
                  InputProps={readOnly}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="Hospital"
                  required
                  name="hospital"
                  value={doctorDetails.hospitalName}
                  id="hospital"
                  InputProps={readOnly}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="ChargePerVisit"
                  required
                  name="chargePerVisit"
                  value={doctorDetails.chargePerVisit}
                  id="chargePerVisit"
                  InputProps={readOnly}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant={textFieldType}
                  size="small"
                  label="AvailabilityDays"
                  required
                  type="text"
                  name="fromDate"
                  value={doctorDetails.availabilityDays}
                  id="fromDate"
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
  const state = useSelector((state) => state.changeDoctorLoginStatus);
  const doctor = useSelector((state) => state.GetSingleDoctor);
  const loginStatus = state.status;
  const dispatch = useDispatch();

  const classes = useStyles();
  const history = useHistory();

  const bgStyles = {
    backgroundImage: " linear-gradient(#0052b0, #b340b3)",
    backgroundRepeat: "no-repeat",
    marginTop: "-5px",
    backgroundSize: "cover",
    height: "400px"
  };

  if (!loginStatus) history.push("/fordoctors");

  useEffect(() => dispatch(GetDoctorById(state.id)), []);

  const doctor1 = {
    name: "Aakash",
    location: "Kota",
    phone: "9057672243",
    email: "ps@gmail.com",
    password: "password",
    speciality: "Dentist",
    hospital: "Apollo",
    availabilityDays: "m,w,f"
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
              <ProfileBox doctor={doctor} />
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
};
