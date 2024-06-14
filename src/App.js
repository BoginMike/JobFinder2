import React from "react";
import "./App.css";
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
// import SignOnChat from "./pages/Chat/SignOnChat";
import Home from "./pages/Index/Products";
import AddZip from "./pages/AddZip/AddZip";
// import Chat from "./pages/Chat/Chat";
// import StartChat from "./pages/Chat/StartChat";
import JobTypes from "./pages/JobTypes/JobTypes";
import Location from "./pages/Location/Products";
import Qualifications from "./pages/Qualifications/Products";
import ExperienceLevel from "./pages/ExperienceLevel/Products";
import Education from "./pages/Education/Products";
import DatePosted from "./pages/DatePosted/Products";
import SalaryRange from "./pages/SalaryRange/Products";
import Searches from "./pages/Searches/Products";
//import ContactInfo from "./pages/ContactInfo/ContactInfo";
// import AboutUs from "./pages/AboutUs/About";
// import ColorCopiers from "./pages/Qualifications/ColorCopiers";
// import BwCopiers from "./pages/Qualifications/BwCopiers";
// import BwPrinter from "./pages/Qualifications/BwPrinter";
// import ColorPrinter from "./pages/Qualifications/ColorPrinter";
// import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./components/NotFoundPage";
import Profile from "./pages/Profile/Profile";

// for socketio chat...not implementing yet: import "./pages/chat/chat.scss";
// import socketClient from "socket.io-client";
// const SERVER = "http://127.0.0.1:8080";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        {/* <div className="desc1">
          We RENT Copiers, Fax Machines &amp; Printers for use in
          Pennsylvania(east of Harrisburg), New Jersey, Delaware (parts of
          Maryland), Washington, DC, Southern New York, Southern Connecticut,
          Virginia and Pittsburgh.
        </div> */}

        <Routes>
          {/* <Route path="/about-us" element={<AboutUs />}></Route> */}
          {/* <Route path="/login" element={<Login />}></Route>

          <Route path="/signon-chat" element={<SignOnChat />}></Route> */}
          {/* <Route path="/location" element={<Location />}></Route>
          <Route path="/qualifications" element={<Qualifications />}></Route> */}
          {/* <Route path="/colorcopiers" element={<ColorCopiers />}></Route>
          <Route path="/bwcopiers" element={<BwCopiers />}></Route>
          <Route path="/bwprinter" element={<BwPrinter />}></Route>
          <Route path="/clrprinter" element={<ColorPrinter />}></Route>
          <Route path="/startchat" element={<StartChat />}></Route> */}
          {/* <Route path="/jobtypes" element={<JobTypes />}></Route> */}
          {/* <Route path="/experiencelevel"component={<ExperienceLevel />}></Route> */}
          {/* <Route path="/dateposted" element={<DatePosted />}></Route>
          <Route path="/salaryrange" element={<SalaryRange />}></Route>
          <Route path="/searchselections" element={<Searches />}></Route>*/}
          {/* <Route path="/education" component={<Education />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/jobtypes" element={<JobTypes />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/qualifications" element={<Qualifications />}></Route>
          <Route path="/experiencelevel" element={<ExperienceLevel />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/dateposted" element={<DatePosted />}></Route>
          <Route path="/salaryrange" element={<SalaryRange />}></Route>
          <Route path="/searches" element={<Searches />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/zips" element={<AddZip />}></Route>
          {/* <Route path="/chat" element={<Chat />}></Route> */}
          <Route
            path="/profile"
            element={
              // <ProtectedRoute>
              <Profile />
              // </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>

          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
