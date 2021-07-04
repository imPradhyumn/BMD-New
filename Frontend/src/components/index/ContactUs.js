import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { CenterFocusStrong } from "@material-ui/icons";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textField: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "350px",
    marginBottom: theme.spacing(3),
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <>
      <Container
        fluid
        component="main"
        maxWidth="xs"
        style={{
          marginTop: "120px",
          marginBottom: "60px",
          width: "500px",
        }}
      >
        <CssBaseline />
        <Paper elevation={3} style={{ backgroundColor: "#353a40" }}>
          <div className={classes.paper}>
            <Paper className={classes.textField}>
              <Avatar className={classes.avatar} style={{ marginTop: "20px" }}>
                <MailOutlineIcon />
              </Avatar>

              <Typography component="h1" variant="h5">
                Contact Us
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  size="small"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="mobno"
                  label="Mobile Number"
                  type="text"
                  id="mobno"
                  size="small"
                  autoComplete="mobno"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="msg"
                  label="Message"
                  name="msg"
                  size="small"
                  autoComplete="msg"
                  autoFocus
                />

                <center>
                  <Button
                    style={{ margin: "30px auto" }}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                </center>
              </form>
            </Paper>
          </div>
        </Paper>
      </Container>
    </>
  );
}
