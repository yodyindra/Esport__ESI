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
import HaveSquad from "./SquadPage/haveSquad";
import LoginScreen from "./Login/loginScreen";
import TermsCondition from "./Register/termsCondition";
import ForgotPassword from "./ForgotPassword/forgotPassword";
import EmailNotify from "./ForgotPassword/emailNotify";
import CreateNewPassword from "./ForgotPassword/createNewPassword";
import InputCode from "./ForgotPassword/inputCode";
import EmailNotify2 from "./ForgotPassword/emailNotify2";

export default function App() {
  return (
    <div className="App">
      {/* <HaveSquad /> */}
      {/* <Homepage /> */}
      <Routes>
        {/* <Route path="/" element={<Loading/>} /> */}
        <Route path="/" element={<OpeningScreen1 />} />
        <Route path="/open2" element={<OpeningScreen2 />} />
        <Route path="/open3" element={<OpeningScreen3 />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/register-failed" element={<RegisterScreenFail />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/phone-confirmation" element={<PhoneConfirmation />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route
          path="/phone-confirmation-fail"
          element={<PhoneConfirmationFail />}
        />
        <Route path="/not-have-squad" element={<NotHaveSquad />} />
        <Route path="/have-squad" element={<HaveSquad />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-notify" element={<EmailNotify />} />
        <Route path="/input-code" element={<InputCode />} />
        <Route path="/create-password" element={<CreateNewPassword />} />
        <Route path="/email-notify2" element={<EmailNotify2 />} />
      </Routes>
    </div>
  );
}
