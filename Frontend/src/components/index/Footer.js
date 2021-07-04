import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

export default function Footer() {
  const navLinkStyle = { color: "white" };
  return (
    <div id="footer" style={{ marginTop: "40px" }}>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <Box
            display="flex"
            justifyContent="space-around"
            style={{ width: "320px", margin: "0 auto" }}
          >
            <Link style={navLinkStyle} to="/about">
              <i
                className="fa fa-users mr-1"
                style={{ fontSize: "17px", color: "white" }}
              ></i>
              About-Us
            </Link>
            <Link style={navLinkStyle} to="/contactus">
              <i
                className="fa fa-envelope mr-1"
                style={{ fontSize: "17px", color: "white" }}
              ></i>
              Contact-Us
            </Link>
          </Box>
          <section className="mb-4 mt-3">
            <a
              className="btn btn-outline-light btn-floating mr-4 m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating mr-4 m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating mr-4 m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter :</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div
          className="text-center p-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <h6 className="my-1">© 2021 BookMyDoctor</h6>
        </div>
      </footer>
    </div>
  );
}
