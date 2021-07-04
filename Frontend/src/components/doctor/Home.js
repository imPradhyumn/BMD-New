import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "300px",
  },
});

function Cards({ content }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" variant="h4">
          {content[0]}
        </Typography>
        <Typography style={{ marginTop: "8px" }}>
          <b>{content[1]}</b>
        </Typography>
        <Typography variant="body2" component="p" style={{ marginTop: "8px" }}>
          {content[2]}
        </Typography>
        <button
          style={{ marginTop: "14px", border: "0px solid red" }}
          className="btn btn-info"
        >
          Learn More
        </button>
      </CardContent>
    </Card>
  );
}

export function Home() {
  const cardContent = {
    card1: [
      "GoodMD",
      "Get connected with us and help us serve people at larger extent",
      "Be a part of community and share your skills using our platform",
    ],
    card2: [
      "Grow",
      "Take your practice to new extent and heights",
      "Serve more patients, earn much reputation and get recognized on Earth",
    ],
    card3: [
      "Manage",
      "Manage your daily work effortlessly",
      "Manage records,patients,appointments on single place",
    ],
  };
  return (
    <>
      <Box style={{ marginTop: "150px" }} display="flex" flexDirection="column">
        <Box
          display="flex"
          style={{ width: "1100px", margin: "0 auto" }}
          justifyContent="space-around"
        >
          <Box
            display="flex"
            flexDirection="column"
            style={{
              width: "700px",
              marginLeft: "40px",
            }}
            justifyContent="space-around"
          >
            <h3>
              A great way to grow your network
              <br />
              and practice
            </h3>

            <h5>Get connected with your patients effortlessly</h5>

            <Link to="/fordoctors/signup">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "248px", padding: "10px 0" }}
              >
                Get started by Joining Us
              </button>
            </Link>
          </Box>
          <img
            width="550"
            height="270"
            src={process.env.PUBLIC_URL + "doctor-images/doctor-mobile.jpg"}
            alt="Phone"
          />
        </Box>
        <div
          className="my-5"
          style={{
            backgroundColor: "rgb(211,211,211,0.5)",
          }}
        >
          <center>
            <h3 className="my-5">Seamlessly Take Care of All :)</h3>
          </center>
          <Box
            style={{ width: "1100px", margin: "70px auto" }}
            display="flex"
            justifyContent="space-around"
          >
            <Cards content={cardContent.card1} />
            <Cards content={cardContent.card2} />
            <Cards content={cardContent.card3} />
          </Box>
        </div>
      </Box>
    </>
  );
}
