import "./App.css";
import Header from "./components/index/Header";
import Home from "./components/index/Home";
import About from "./components/index/About";
import Footer from "./components/index/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { EditProfile as UserProfile } from "./components/patient/EditProfile";
import { EditProfile as DoctorProfile } from "./components/doctor/EditProfile";
import { DoctorSignIn } from "./components/doctor/SignIn";
import DoctorSignUp from "./components/doctor/SignUp";
import { Header as DoctorHeader } from "./components/doctor/Header";
import { Home as DoctorHome } from "./components/doctor/Home";
import { UserSignIn } from "./components/patient/SignIn";
import GetAppointments from "./components/doctor/GetAppointments";
import UserSignUp from "./components/patient/SignUp";
import ContactUs from "./components/index/ContactUs";
import { ReduxTest } from "./components/redux-test";
import { SearchDoctors } from "./components/patient/SearchDoctors";
import SeeOwnAppointments from "./components/patient/SeeOwnAppointments";

function App() {
  return (
    <Router>
      <Header />

      {/* <Route exact path="/search" component={SearchDoctors} /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchDoctors} />

        <Route path="/fordoctors">
          <DoctorHeader />
          <Route exact path="/fordoctors">
            <DoctorHome style={{ marginTop: "65px" }} />
          </Route>
          <Route exact path="/fordoctors/signup" component={DoctorSignUp} />

          <Route exact path="/fordoctors/login" component={DoctorSignIn} />
          <Route
            exact
            path="/fordoctors/seeappointments"
            component={GetAppointments}
          />

          <Route exact path="/fordoctors/profile" component={DoctorProfile} />
        </Route>

        <Route exact path="/user/login" component={UserSignIn} />
        <Route
          exact
          path="/user/seeappointments"
          component={SeeOwnAppointments}
        />
        <Route exact path="/user/signup" component={UserSignUp} />

        <Route exact path="/user/profile" component={UserProfile} />

        <Route exact path="/about" component={About} />

        <Route exact path="/contactus" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
