import { Link } from "react-router-dom";
import "./openingScreen.css";
import os3 from "../Picture/os3.svg";

const dotOne = {
  width: 14,
  height: 6,
  backgroundColor: "#e6e6e6",
  borderRadius: 4,
  margin: 1
};
const dotTwo = {
  width: 14,
  height: 6,
  backgroundColor: "#e6e6e6",
  borderRadius: 4,
  margin: 1
};
const dotThree = {
  width: 22,
  height: 6,
  backgroundColor: "#747d8c",
  borderRadius: 4,
  margin: 1
};

function OpeningScreen3() {
  return (
    <>
      <main>
        <Link to="/login">
          <div className="text-right mt-4 mb-4">
            <b>SKIP</b>
          </div>
        </Link>
        <br />
        <div className="wrapper">
          <div>
            <img src={os3} alt="os3" className="opening__img" />
          </div>
        </div>
        <div className="d-flex flex-row mb-4 justify-content-center">
          <div style={dotOne}></div>
          <div style={dotTwo}></div>
          <div style={dotThree}></div>
        </div>
        <h2 className="text-center">
          <b>Playing</b>
        </h2>
        <h5 className="text-center">Find and win various esport tournament</h5>
      </main>
      <nav className="text-center">
        <Link to="/login">
          <button style={{ margin: 7 }}>
            <div>GET&nbsp;STARTED</div>
          </button>
        </Link>
      </nav>
    </>
  );
}

export default OpeningScreen3;
