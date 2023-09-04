// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Index/Index";
import AboutUs from "./pages/AboutUs/About";
import AddZip from "./pages/AddZip/AddZip";
import Chat from "./pages/Chat/Chat";
import StartChat from "./pages/Chat/StartChat";
import RentalEquipment from "./pages/RentalEquipment/RentalEquipment";
import Locations from "./pages/LocationsServed/LocationsServed";
import ColorCopiers from "./pages/RentalEquipment/ColorCopiers";
import BwCopiers from "./pages/RentalEquipment/BwCopiers";
import BwPrinter from "./pages/RentalEquipment/BwPrinter";
import ColorPrinter from "./pages/RentalEquipment/ColorPrinter";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import NotFoundPage from "./shared/components/NotFoundPage";
import Profile from "./pages/Profile/Profile";

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
        <Route path="/locations-served" element={<Locations />}></Route>
        <Route path="/rental-equipment" element={<RentalEquipment />}></Route>
        <Route path="/colorcopiers" element={<ColorCopiers />}></Route>
        <Route path="/bwcopiers" element={<BwCopiers />}></Route>
        <Route path="/bwprinter" element={<BwPrinter />}></Route>
        <Route path="/clrprinter" element={<ColorPrinter />}></Route>
        <Route path="/startchat" element={<StartChat />}></Route>
        <Route
          path="/add-zip"
          element={
            // <ProtectedRoute>
            <AddZip />
            // </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/chat"
          element={
            // <ProtectedRoute>
            <Chat />
            // </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
