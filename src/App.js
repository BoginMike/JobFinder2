// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Index/Index";
import AboutUs from "./pages/AboutUs/About";
import AddSong from "./pages/AddSong/AddSong";
import Chat from "./pages/Chat/Chat";
import RentalEquipment from "./pages/RentalEquipment/RentalEquipment";
import Locations from "./pages/LocationsServed/LocationsServed";
import ColorCopiers from "./pages/RentalEquipment/ColorCopiers";
import BwCopiers from "./pages/RentalEquipment/BwCopiers";
import BwPrinter from "./pages/RentalEquipment/BwPrinter";
import ColorPrinter from "./pages/RentalEquipment/ColorPrinter";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import NotFoundPage from "./shared/components/NotFoundPage";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/locations-served" element={<Locations />}></Route>
        <Route path="/rental-equipment" element={<RentalEquipment />}></Route>
        <Route path="/colorcopiers" element={<ColorCopiers />}></Route>
        <Route path="/bwcopiers" element={<BwCopiers />}></Route>
        <Route path="/bwprinter" element={<BwPrinter />}></Route>
        <Route path="/clrprinter" element={<ColorPrinter />}></Route>
        <Route
          path="/add-song"
          element={
            <ProtectedRoute>
              <AddSong />
            </ProtectedRoute>
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

