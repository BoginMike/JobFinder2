// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignOnChat from "./pages/Chat/SignOnChat";
import Home from "./pages/Index/Index";
//import AddZip from "./pages/AddZip/AddZip";
import Chat from "./pages/Chat/Chat";
import StartChat from "./pages/Chat/StartChat";
import JobTypes from "./pages/JobTypes/JobTypes";
import Location from "./pages/Location/Location";
import Qualifications from "./pages/Qualifications/Qualifications";
import ExperienceLevel from "./pages/ExperienceLevel/ExperienceLevel";
import Education from "./pages/Education/Education";
import DatePosted from "./pages/DatePosted/DatePosted";
import SalaryRange from "./pages/SalaryRange/SalaryRange";
import Searches from "./pages/Searches/Searches";
//import ContactInfo from "./pages/ContactInfo/ContactInfo";
import AboutUs from "./pages/AboutUs/About";
import ColorCopiers from "./pages/Qualifications/ColorCopiers";
import BwCopiers from "./pages/Qualifications/BwCopiers";
import BwPrinter from "./pages/Qualifications/BwPrinter";
import ColorPrinter from "./pages/Qualifications/ColorPrinter";
//import ProtectedRoute from "./shared/components/ProtectedRoute";
import NotFoundPage from "./shared/components/NotFoundPage";
//import Profile from "./pages/Profile/Profile";

// for socketio chat...not implementing yet: import "./pages/chat/chat.scss";
// import socketClient from "socket.io-client";
// const SERVER = "http://127.0.0.1:8080";

function App() {
  // var socket = socketClient(SERVER);
  // socket.on("connection", () => {
  //   console.log(`I'm connected with the back-end`);
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/signon-chat" element={<SignOnChat />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/qualifications" element={<Qualifications />}></Route>
        <Route path="/colorcopiers" element={<ColorCopiers />}></Route>
        <Route path="/bwcopiers" element={<BwCopiers />}></Route>
        <Route path="/bwprinter" element={<BwPrinter />}></Route>
        <Route path="/clrprinter" element={<ColorPrinter />}></Route>
        <Route path="/startchat" element={<StartChat />}></Route>
        <Route path="/jobtypes" element={<JobTypes />}></Route>
        <Route path="/experience-level" element={<ExperienceLevel />}></Route>
        <Route path="/dateposted" element={<DatePosted />}></Route>
        <Route path="/salaryrange" element={<SalaryRange />}></Route>
        <Route path="/searchselections" element={<Searches />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/chat" element={<Chat />}></Route>

        {/* path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        </Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
