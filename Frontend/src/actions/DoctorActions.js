export const FetchAllDoctors = (data) => {
  return {
    type: "FETCH_ALL_DOCTORS",
    payload: data
  };
};

export const FetchBySpeciality = (speciality) => {
  return {
    type: "FETCH_BY_SPECIALITY",
    payload: speciality
  };
};

export const DocLogin = (id) => {
  return {
    type: "DOC_LOGIN",
    payload: id
  };
};

export const DocLogout = () => {
  return {
    type: "DOC_LOGOUT"
  };
};

export const FetchBySpecialityAndLocation = (location) => {
  return {
    type: "FETCH_BY_SPECIALITY_AND_LOCATION",
    payload: location
  };
};

export const FetchSingleDoctor = (data) => {
  return {
    type: "FETCH_SINGLE_DOCTOR",
    payload: data
  };
};

export const SortByCharge = (sortType) => {
  return {
    type: "SORT_BY_CHARGE",
    payload: sortType
  };
};

export const FilterByAvailabilityDay = (day) => {
  return {
    type: "FILTER_BY_AVAILABILITY_DAY",
    payload: day
  };
};

export const AddDoctor = () => {
  return {
    type: "ADD_DOCTOR"
  };
};
