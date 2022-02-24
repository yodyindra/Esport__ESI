import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./OpeningScreen/loading";
import OpeningScreen1 from "./OpeningScreen/openingScreen1";
import OpeningScreen2 from "./OpeningScreen/openingScreen2";
import OpeningScreen3 from "./OpeningScreen/openingScreen3";
import RegisterScreen from "./Register/registerScreen";
import RegisterScreenFail from "./Register/registerScreenFail";
import PhoneConfirmation from "./Register/phoneConfirmation";
import PhoneConfirmationFail from "./Register/phoneConfirmationFail";
import Homepage from "./Homepage/homePage";
import NotHaveSquad from "./SquadPage/notHaveSquad";
import MyOwlCarousel from "./OwlCarousel";

export default function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        {/* <Route path="/" element={<Loading/>} /> */}
        <Route path="/" element={<OpeningScreen1 />} />
        <Route path="/open2" element={<OpeningScreen2 />} />
        <Route path="/open3" element={<OpeningScreen3 />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/register-failed" element={<RegisterScreenFail />} />
        <Route path="/phone-confirmation" element={<PhoneConfirmation />} />
        <Route
          path="/phone-confirmation-fail"
          element={<PhoneConfirmationFail />}
        />
      </Routes>
    </div>
  );
}
