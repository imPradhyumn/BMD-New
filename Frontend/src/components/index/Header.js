import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { LocalHospital } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from "../../reducers/UserReducers/changeUserLoginStatus";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMenuOpen = Boolean(anchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  //get state from store
  const state = useSelector((state) => state.changeUserLoginStatus);
  const loginStatus = state.status;

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(LogoutUser());
    localStorage.removeItem("usertoken");
    history.push("/");
  };

  const navLinkStyle = { color: "white" };
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link style={navLinkStyle} to="/user/profile">
        <MenuItem
          style={{ backgroundColor: "#353a40" }}
          onClick={handleMenuClose}
        >
          Profile
        </MenuItem>
      </Link>

      <Link style={navLinkStyle} to="/user/seeappointments">
        <MenuItem
          style={{ backgroundColor: "#353a40" }}
          onClick={handleMenuClose}
        >
          See Appointments
        </MenuItem>
      </Link>
      <Link style={navLinkStyle}>
        <MenuItem
          style={{ backgroundColor: "#353a40" }}
          onClick={() => {
            handleMenuClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Link>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link style={navLinkStyle} to="/">
        <MenuItem
          onClick={handleMenuClose}
          style={{ backgroundColor: "#353a40" }}
        >
          <HomeIcon style={{ marginRight: "6px" }} />
          Home
        </MenuItem>
      </Link>
      {!loginStatus && (
        <Link style={navLinkStyle} to="/fordoctors">
          <MenuItem
            onClick={handleMenuClose}
            style={{ backgroundColor: "#353a40" }}
          >
            <LocalHospital style={{ marginRight: "6px" }} />
            ForDoctors
          </MenuItem>
        </Link>
      )}
      <Link style={navLinkStyle} to="/user/bookappointment">
        <MenuItem
          onClick={handleMenuClose}
          style={{ backgroundColor: "#353a40" }}
        >
          <LocalHospital style={{ marginRight: "6px" }} />
          BookAppointment
        </MenuItem>
      </Link>
      {!loginStatus && (
        <Link style={navLinkStyle} to="/user/login">
          <MenuItem
            onClick={handleMenuClose}
            style={{ backgroundColor: "#353a40" }}
          >
            <VpnKeyIcon style={{ marginRight: "6px" }} />
            Login/Register
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  let width = "430px";
  if (!loginStatus) width = "600px";

  return (
    <div
      className={classes.grow}
      style={{ position: "fixed", top: "0", width: "100%" }}
    >
      <AppBar style={{ backgroundColor: "#353a40" }}>
        <Toolbar>
          <Avatar
            className="ml-5"
            style={{ marginLeft: "50px" }}
            src={process.env.PUBLIC_URL + "/home/doclogo.png"}
            variant="square"
            alt="Logo"
          />
          <Typography
            style={{
              fontFamily: "consolas",
              fontSize: "30px",
            }}
            className={classes.title + " ml-2"}
            variant="h6"
            noWrap
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to="/"
            >
              BookMyDoctor
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: width,
              }}
            >
              <Link style={navLinkStyle} to="/">
                <i
                  className="fa fa-home mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                Home
              </Link>
              {!loginStatus && (
                <Link style={navLinkStyle} to="/fordoctors">
                  <i
                    className="fa fa-user-md mr-1"
                    style={{ fontSize: "17px", color: "white" }}
                  ></i>
                  ForDoctors
                </Link>
              )}
              <Link style={navLinkStyle} to="/search">
                <i
                  className="fa fa-user-md mr-1"
                  style={{ fontSize: "17px", color: "white" }}
                ></i>
                BookAppointment
              </Link>
              {!loginStatus && (
                <Link style={navLinkStyle} to="/user/login">
                  <i
                    className="fa fa-sign-in mr-1"
                    style={{ fontSize: "17px", color: "white" }}
                  ></i>
                  Login/Register
                </Link>
              )}

              {loginStatus && (
                <AccountCircle
                  style={{ cursor: "pointer" }}
                  onClick={handleProfileMenuOpen}
                />
              )}
            </div>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
