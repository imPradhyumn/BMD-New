import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function Home() {
  return (
    <>
      <Container style={{ marginTop: "90px" }}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/home/carousel8.jpg"}
          alt="First slide"
          style={{ height: "540px" }}
        />
        {/* <Carousel
          className="m-auto"
          style={{ width: "1200px", border: "8px groove grey" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/home/carousel8.jpg"}
              alt="First slide"
              style={{ height: "540px" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/home/carousel7.jpg"}
              alt="Second slide"
              style={{ height: "540px" }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/home/carousel91.jpg"}
              alt="Third slide"
              style={{ height: "540px" }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </Container>

      {/*Pics and hospital names*/}

      <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      />
      <Container className="d-flex flex-row justify-content-around flex-wrap">
        <div className="d-flex flex-row">
          <Container
            className="d-flex flex-column justify-content-between mr-3"
            style={{
              height: "400px",
              width: "130px",
            }}
          >
            <Container>
              <img
                src={process.env.PUBLIC_URL + "/home/users.png"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>
            <Container>
              <img
                src={process.env.PUBLIC_URL + "/home/doctor.png"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>
            <Container>
              <img
                src={process.env.PUBLIC_URL + "/home/appointment-logo.jpg"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>
          </Container>
          <div
            className="d-flex flex-column justify-content-between mt-4 mb-auto"
            style={{
              height: "360px",
              width: "200px",
            }}
          >
            <div>
              <span
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              >
                2M+ Users
              </span>
              <br />
              Registered On BMD
            </div>
            <div>
              <span
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              >
                30k+ Specialist
              </span>
              <br />
              Doctors Available On BMD
            </div>
            <div>
              <span
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              >
                3M+ Appointments
              </span>
              <br />
              Booked So Far
            </div>
          </div>
        </div>

        <div className="mr-5">
          <img
            src={process.env.PUBLIC_URL + "/home/hospital-logos.jpg"}
            alt="Users"
            width="500"
            height="400"
          />
        </div>
      </Container>
      <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      />

      {/*Specialities*/}
      <Container className="d-flex flex-column justify-content-start ml-5">
        <Container className="d-flex flex-row">
          <h4 style={{ marginLeft: "80px" }}>
            Consult our Top Doctors now for any health concern{" "}
          </h4>
        </Container>
        <Container className="d-flex flex-row justify-content-around mt-4 mr-5 flex-wrap">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/home/child.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" }}
              className="ml-3 mt-3"
            >
              Child Health
            </figcaption>
          </figure>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/home/pregnancy.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" }}
              className="ml-4 mt-3"
            >
              Pregnancy
            </figcaption>
          </figure>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/home/acne.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" }}
              className="ml-2 mt-3"
            >
              Acne/Pimples
            </figcaption>
          </figure>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/home/anxiety.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" }}
              className="mt-3"
            >
              Anxiety or Depression
            </figcaption>
          </figure>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/home/cough.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" }}
              className="mt-3"
            >
              Cough and Fever
            </figcaption>
          </figure>
        </Container>
      </Container>
      <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      />
    </>
  );
}

export default withRouter(Home);
