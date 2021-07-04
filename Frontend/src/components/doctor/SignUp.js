import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import { useState } from "react";
import { FormGroup, FormControlLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SignUp } from "../../reducers/DoctorReducers/GetDoctors";

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

export default function DoctorSignUp() {
  let history = useHistory();
  const [doctor, setDoctor] = useState({
    doctorName: "",
    doctorPhone: "",
    chargePerVisit: "",
    hospitalName: "",
    speciality: "",
    location: "",
    email: "",
    password: "",
    availabilityDays: ""
  });

  const {
    doctorName,
    doctorPhone,
    chargePerVisit,
    hospitalName,
    speciality,
    location,
    email,
    password,
    availabilityDays
  } = doctor;

  const [checked, setChecked] = useState({
    mon: false,
    tue: false,
    wed: false,
    th: false,
    fr: false,
    sa: false
  });
  const handleCheckbox = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };

  const dispatch = useDispatch();
  const onInputChange = (e) => {
    //we are using spread operator
    //using spread operator other fields will not show errors
    setDoctor({
      ...doctor,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });
  };
  //for form submition
  const onSubmit = (e) => {
    e.preventDefault();
    let temp = ["mon", "tue", "wed", "th", "fr", "sa"];
    let availabilityDays = "";
    let bool;
    temp.map((day) => {
      bool = document.getElementsByName(day)[0].checked;
      if (bool)
        availabilityDays =
          availabilityDays + "/" + document.getElementsByName(day)[0].value;
    });
    doctor.availabilityDays = availabilityDays;
    doctor.email = doctor.email.toLowerCase();
    console.log(doctor);
    let res = dispatch(SignUp(doctor));
    if (res) history.push("/fordoctors");
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
                name="doctorName"
                autoComplete="name"
                autoFocus
                value={doctorName}
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
                id="doctorPhone"
                label="Mobile Number"
                name="doctorPhone"
                autoComplete="doctorPhone"
                value={doctorPhone}
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
                id="charge"
                label="Charge Per Visit"
                name="chargePerVisit"
                autoComplete="charge"
                type="number"
                value={chargePerVisit}
                onChange={(e) => onInputChange(e)}
                inputProps={{ min: "1", title: "Please enter a valid amount" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="hospiital"
                label="Hospital Name"
                name="hospitalName"
                autoComplete="hospitalName"
                value={hospitalName}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[a-zA-Z][a-zA-Z ]+",
                  title: "Please enter valid hospital name"
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
                id="speciality"
                label="Speciality"
                name="speciality"
                autoComplete="speciality"
                value={speciality}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[a-zA-Z][a-zA-Z ]+",
                  title: "Please enter valid speciality"
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
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                value={location}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[a-zA-Z][a-zA-Z ]+",
                  title: "Please enter a valid location"
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
                label="Email Address"
                name="email"
                autoComplete="email"
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
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onInputChange(e)}
                inputProps={{
                  pattern: "[a-zA-Z0-9#@!&$%]{8,}",
                  title: "Atleast 8 characters"
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <h5>Select Availability Days:</h5>
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="availabilityDays"
                label="AvailabilityDays"
                type="text"
                id="AvailabilityDays"
                value={availabilityDays}
                onChange={(e) => onInputChange(e)}
                placeholder="Write days seperated by comma eg. (m,t,w,th,f,sa)"/> */}
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="mon"
                      value="M"
                      checked={checked.mon}
                      onChange={handleCheckbox}
                      label="M"
                    />
                  }
                  label="Mon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="tue"
                      value="T"
                      checked={checked.tue}
                      onChange={handleCheckbox}
                      label="Tue"
                    />
                  }
                  label="Tue"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="wed"
                      value="W"
                      checked={checked.wed}
                      onChange={handleCheckbox}
                      label="Wed"
                    />
                  }
                  label="Wed"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="th"
                      value="Th"
                      checked={checked.th}
                      onChange={handleCheckbox}
                      label="Thu"
                    />
                  }
                  label="Thu"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="fr"
                      value="F"
                      checked={checked.fr}
                      onChange={handleCheckbox}
                      label="Fri"
                    />
                  }
                  label="Fri"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="sa"
                      value="Sa"
                      checked={checked.sa}
                      onChange={handleCheckbox}
                      label="Sat"
                    />
                  }
                  label="Sat"
                />
              </FormGroup>
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
          <Grid container justify="flex-end">
            <Grid item>
              {"Already have an account? "}
              <Link
                style={{ cursor: "pointer" }}
                to="/fordoctors/login"
                variant="body2"
              >
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
