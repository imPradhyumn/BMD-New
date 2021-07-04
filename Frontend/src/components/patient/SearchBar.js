import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllDoctors } from "../../reducers/DoctorReducers/GetDoctors";
import { useEffect } from "react";
import {
  GetBySpeciality,
  GetBySpecialityAndLocation
} from "../../reducers/DoctorReducers/GetDoctors";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },

  root: {
    marginTop: theme.spacing(11)
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "200%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "200%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

function SearchBarTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.search} style={{ width: "300px", zIndex: "1" }}>
      <Paper elevation={3}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={props.placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          name={props.name}
          inputProps={{ "aria-label": "search" }}
          value={props.searchItem}
          onChange={props.func}
        />
      </Paper>
    </div>
  );
}

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchItems, setsearchItems] = useState({
    city: "",
    speciality: ""
  });

  function handleChange(e) {
    setsearchItems({ ...searchItems, [e.target.name]: e.target.value });
  }

  function OnSubmit(e) {
    e.preventDefault();

    if (searchItems.speciality.length === 0) alert("Enter speciality please");
    else if (searchItems.city.length !== 0)
      dispatch(GetBySpeciality(searchItems.speciality));
    else if (searchItems.city.length <= 2 && searchItems.city.length > 0)
      alert("Please type atlest 3 character for searching city");
    else if (searchItems.city.length > 3)
      dispatch(GetBySpecialityAndLocation(searchItems.city));
  }

  useEffect(() => {
    dispatch(GetAllDoctors());
  }, []);

  useEffect(() => {
    dispatch(GetBySpeciality(searchItems.speciality));
  }, [searchItems.speciality]);

  useEffect(() => {
    dispatch(GetBySpecialityAndLocation(searchItems.city));
  }, [searchItems.city]);

  function reset() {
    dispatch(GetAllDoctors());
  }

  return (
    <div className={classes.root}>
      <div className={classes.grow}>
        <form onSubmit={OnSubmit}>
          <Box
            display="flex"
            justifyContent="center"
            style={{ margin: "0 auto", width: "1100px" }}
          >
            <SearchBarTemplate
              placeholder={"City"}
              name="city"
              searchItem={searchItems.city}
              func={handleChange}
            />

            <SearchBarTemplate
              placeholder={"Doctor speciality"}
              name="speciality"
              searchItem={searchItems.speciality}
              func={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
            <Button
              className="ml-2"
              type="button"
              onClick={reset}
              variant="contained"
              color="primary"
            >
              Reset Results
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
