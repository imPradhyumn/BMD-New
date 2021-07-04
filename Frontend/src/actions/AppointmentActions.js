export const FetchAllAppoinmentsForDoctor = (appointments) => {
  return {
    type: "FETCH_ALL_APPOINTMENTS_FOR_DOCTOR",
    payload: appointments
  };
};

export const FetchAllAppoinmentsForUser = (appointments) => {
  return {
    type: "FETCH_ALL_APPOINTMENTS_FOR_USER",
    payload: appointments
  };
};

export const FetchAppointmentsByPatientId = (id) => {
  return {
    type: "FETCH_APPOINTMENTS_BY_PATIENT_ID",
    payload: id
  };
};

export const FetchAppointmentsByDate = (date) => {
  return {
    type: "FETCH_APPOINTMENTS_BY_DATE",
    payload: date
  };
};

export const AddAppoinments = () => {
  return {
    type: "ADD_APPOINTMENT"
  };
};

export const ApproveAppoinment = () => {
  return {
    type: "APPROVE_APPOINTMENT"
  };
};

export const CancelAppoinment = () => {
  return {
    type: "CANCEL_APPOINTMENT"
  };
};
