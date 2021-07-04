import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import { useHistory } from "react-router-dom";
import { GetAllAppointmentsForUser } from "../../reducers/AppoinmentReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  sno,
  doctor,
  speciality,
  date,
  location,
  appointmentstatus
) {
  return { sno, doctor, speciality, date, location, appointmentstatus };
}

const rows = [
  createData(1, "Gajbhe", "eye", "24/6/20", "Mumbai", " pending"),
  createData(2, "Uppari", "heart", "24/6/20", "Delhi", " booked"),
  createData(3, "Sharma", "neuro", "24/6/20", "Chennai", " pending"),
  createData(4, "Singh", "dentist", "24/6/20", "Mysore", " booked"),
  createData(5, "Kumar", "ortho", "24/6/20", "Pune", " pending"),
];

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

export default function SeeOwnAppointments() {
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(localStorage.getItem("usertoken"));
  if (localStorage.getItem("usertoken") === null) {
    history.push("/");
  }

  const state = useSelector((state) => state.changeUserLoginStatus);

  useEffect(() => {
    dispatch(GetAllAppointmentsForUser(state.id));
  }, []);

  const appointments = useSelector((state) => state.GetAppointments);
  console.log(appointments);

  const classes = useStyles();

  let count = 1;

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        <h3>Your Appointments</h3>
      </div>
      <Container fixed>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sno</StyledTableCell>
                <StyledTableCell align="center">Doctor Name</StyledTableCell>
                <StyledTableCell align="center">Speciality</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Hospital</StyledTableCell>
                <StyledTableCell align="center">
                  Appointment Status
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((row) => (
                <StyledTableRow key={row.appointmentId}>
                  <StyledTableCell component="th" scope="row">
                    {count++}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.doctor.doctorName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.doctor.speciality}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.appointmentDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.doctor.hospitalName + ", " + row.doctor.location}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.status.toUpperCase()}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
