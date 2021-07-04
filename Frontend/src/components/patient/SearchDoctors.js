import React from "react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import axios from "axios";
import { GetAllAppointmentsForUser } from "../../reducers/AppoinmentReducer";

import {
  Box,
  Container,
  Card,
  ButtonGroup,
  Button,
  Radio,
  Avatar
} from "@material-ui/core";
import { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  GetAllDoctors,
  GetByCharge,
  GetByAvailabilityDays
} from "../../reducers/DoctorReducers/GetDoctors";

function MiddleCard({ doctor, patientId, status, appointments }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const [date, setDate] = useState(today);

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function BookAppointment(e) {
    e.preventDefault();
    let temp = date;
    temp = temp.split("");

    yyyy = temp.slice(0, 4).join("");

    mm = temp.slice(5, 7).join("");
    dd = temp.slice(8).join("");
    temp = yyyy + "-" + mm + "-" + dd;

    if (!status) {
      alert("Please Login first");
      return;
    }

    const appointment = {
      appointmentDate: temp,
      doctor: {
        doctorId: doctor.doctorId
      },
      patient: {
        patientId: patientId
      },
      remark: "",
      status: "Pending"
    };

    console.log(appointment);

    axios
      .post("http://localhost:8050/bmd/appointment/add", appointment)
      .then((res) => alert("Appointment Booked"))
      .catch((err) => console.log(err));
  }

  return (
    <Card
      elevation={3}
      className="mb-4"
      style={{ width: "580px", height: "238px" }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box
          className="ml-2"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          style={{
            height: "200px",
            width: "230px"
          }}
        >
          <Avatar
            style={{ width: "80px", height: "80px" }}
            src="jkjl"
            alt="LOGO"
          />
        </Box>
        <Box
          className="mt-2"
          display="flex"
          flexDirection="column"
          style={{ width: "100%" }}
        >
          <h5>Dr. {doctor.doctorName}</h5>
          <h6>{doctor.speciality}</h6>
          <div>{doctor.hospitalName + ", " + doctor.location}</div>
        </Box>
        <Box
          className="mt-2 mr-2"
          style={{ width: "500px" }}
          display="flex"
          flexDirection="column"
        >
          <div>
            <i className="fa fa-heart" aria-hidden="true"></i> Rating: 4.5/10
            (234 ratings)
          </div>
          <div className="my-2">
            <i className="fa fa-comments" aria-hidden="true"></i>
            130 User Feedbacks
          </div>
          <div>
            <i className="fa fa-money" aria-hidden="true"></i> ChargePerVisit:{" "}
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            {doctor.chargePerVisit}
          </div>
          <div className="mt-2">
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
            Availability: {doctor.availabilityDays}
          </div>
        </Box>
      </Box>

      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        className="btn btn-success"
        style={{ width: "100%" }}
      >
        Book Appointment
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Choose a date
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={BookAppointment}>
              <div className="modal-body">
                <input
                  type="date"
                  min={today}
                  required
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}

export const SearchDoctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllDoctors());
  }, []);
  const doctorList = useSelector((state) => state.GetDoctors);
  console.log(doctorList);

  const patient = useSelector((state) => state.changeUserLoginStatus);
  const loginStatus = patient.status;
  const patientId = patient.id;
  const appointments = useSelector((state) => state.GetAppointments);

  useEffect(() => {
    loginStatus && dispatch(GetAllAppointmentsForUser(patientId));
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  let keyCount = 1;

  return (
    <>
      <SearchBar />
      <div className="mt-5"></div>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          style={{
            margin: "0 auto",
            width: "1150px",
            height: "100%"
          }}
        >
          <Card elevation={3} style={{ width: "255px", height: "270px" }}>
            <div style={{}} className="mt-2 mx-2">
              <h5>Filters</h5>
              <hr />
              <h6>Availability</h6>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
                style={{ width: "80px", height: "25px" }}
              >
                <Button onClick={() => dispatch(GetByAvailabilityDays("M"))}>
                  M
                </Button>
                <Button onClick={() => dispatch(GetByAvailabilityDays("T"))}>
                  T
                </Button>
                <Button onClick={() => dispatch(GetByAvailabilityDays("W"))}>
                  W
                </Button>
                <Button onClick={() => dispatch(GetByAvailabilityDays("Th"))}>
                  T
                </Button>
                <Button onClick={() => dispatch(GetByAvailabilityDays("F"))}>
                  F
                </Button>
                <Button onClick={() => dispatch(GetByAvailabilityDays("Sa"))}>
                  S
                </Button>
              </ButtonGroup>
              <hr />
              <h6>ChargePerVisit</h6>

              <label>HighToLow</label>
              <Radio
                checked={selectedValue === "descending"}
                onChange={handleChange}
                value="descending"
                name="price"
                inputProps={{ "aria-label": "A" }}
                onClick={() => {
                  dispatch(GetByCharge("asc"));
                }}
              />
              <br />
              <label>LowToHigh</label>
              <Radio
                checked={selectedValue === "ascending"}
                onChange={handleChange}
                onClick={() => dispatch(GetByCharge("desc"))}
                value="ascending"
                name="price"
                inputProps={{ "aria-label": "B" }}
              />
            </div>
          </Card>

          {/*Left card end*/}
          <Box
            justifyContent="flex-start"
            display="flex"
            flexDirection="column"
          >
            <div id="formapp"></div>
            {doctorList.map((doctor) => (
              <MiddleCard
                key={keyCount++}
                doctor={doctor}
                patientId={patientId}
                status={loginStatus}
                appointments={appointments}
              />
            ))}
          </Box>

          {/*  Middle card end */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            style={{
              height: "600px",
              width: "250px"
            }}
          >
            <Card elevation={3}>
              <div className="mt-2 mx-2">
                <h5>Top Health Tips</h5>
                <Link style={{ color: "red" }}>
                  <h6>Ayurvedic tips to heal acne at home</h6>
                </Link>
                <hr />
                <Link style={{ color: "red" }}>
                  <h6>Best homemade skin care routine tips</h6>
                </Link>
                <hr />
                <Link style={{ color: "red" }}>
                  <h6>5 ways you can get rid off your dandruff</h6>
                </Link>
              </div>
            </Card>
            <Card elevation={3} className="mt-4">
              <div className="mt-2 mx-2">
                <h6>
                  {" "}
                  <EmailIcon style={{ fontSize: "18px" }} />
                  &nbsp;&nbsp;Ask a free question anonymously
                </h6>
                <textarea style={{ width: "100%", height: "100px" }}></textarea>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  className="my-2"
                >
                  Ask
                </Button>
              </div>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};
