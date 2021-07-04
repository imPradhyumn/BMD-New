import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAppointmentsByDate,
  GetAllAppointmentsForDoctor,
  Approve,
  Cancel
} from "../../reducers/AppoinmentReducer";
import { Update } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
const useStyles = makeStyles({
  table: {
    width: "100%"
  }
});
export default function GetAllPatients() {
  const history = useHistory();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.changeDoctorLoginStatus);
  if (!state.status) {
    history.push("/fordoctors");
  }

  useEffect(() => {
    dispatch(GetAllAppointmentsForDoctor(state.id));
  }, []);

  const [temp, setTemp] = useState(0);

  function update() {
    setTemp((pre) => pre + 1);
  }

  useEffect(() => {
    dispatch(GetAllAppointmentsForDoctor(state.id));
  }, [temp]);

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
          marginBottom: "50px"
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
                <StyledTableCell align="center">Patient Name</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">
                  Appointment Status
                </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((row) => (
                <StyledTableRow key={row.appointmentId}>
                  <StyledTableCell component="th" scope="row">
                    {count++}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.patient.patientName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.patient.age}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.appointmentDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.status === "Cancelled" && (
                      <Button
                        className="mx-2"
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          dispatch(Approve(row.appointmentId));
                          update();
                        }}
                      >
                        Approve
                      </Button>
                    )}

                    {row.status === "Approved" && (
                      <Button
                        onClick={() => {
                          dispatch(Cancel(row.appointmentId));
                          update();
                        }}
                        size="small"
                        color="secondary"
                        variant="contained"
                      >
                        Cancel
                      </Button>
                    )}

                    {(row.status === "pending" || row.status === "Pending") && (
                      <>
                        <Button
                          className="mx-2"
                          size="small"
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            dispatch(Approve(row.appointmentId));
                            update();
                          }}
                        >
                          Approve
                        </Button>
                        <Button
                          className="mx-2"
                          onClick={() => {
                            dispatch(Cancel(row.appointmentId));
                            update();
                          }}
                          size="small"
                          color="secondary"
                          variant="contained"
                        >
                          Cancel
                        </Button>
                      </>
                    )}
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
