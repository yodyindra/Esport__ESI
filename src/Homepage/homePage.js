import "./homePage.css";
import { Link } from "react-router-dom";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import wallet from "../Picture/empty-wallet.svg";
import notif from "../Picture/notification.svg";
import charles from "../Picture/charles.svg";
import qr from "../Picture/qrcode.svg";
import spaceSquad from "../Picture/space-squad.svg";
import verifiedBlue from "../Picture/verified-blue.svg";
import dot from "../Picture/dot.svg";
import more from "../Picture/more.svg";
import rankUp from "../Picture/rank-up.svg";
import rankSame from "../Picture/rank-same.svg";
import rankDown from "../Picture/rank-down.svg";
import verifiedWhite from "../Picture/verified-white.svg";
import squidSquad from "../Picture/squid-squad.svg";
import sikoSquad from "../Picture/siko-squad.svg";
import kapakSquad from "../Picture/kapak-squad.svg";
import rank1 from "../Picture/rank1.svg";
import rank2 from "../Picture/rank2.svg";
import rank3 from "../Picture/rank3.svg";
import HomepageOwlCarousel from "./HompageOwlCarousel";
import NavBar from "../Navbar/navigationBar";

const width1 = {
  width: 10
};
const width2 = {
  width: 20
};
const width3 = {
  width: 30
};
const width4 = {
  width: 40
};
const width5 = {
  width: 50
};
const width8 = {
  width: 80
};

function Homepage() {
  return (
    <>
      <>
        <main>
          <div
            className="contain__homepage content__homepage col-md-12  mx-auto"
            style={{
              backgroundColor: "#f3001f"
            }}
          >
            <div className="col-md-6 mx-auto">
              <div className="d-flex flex-row mx-auto justify-content-between">
                <div>
                  <h2 className="text-left" style={{ color: "#ffffff" }}>
                    Hai, Charles
                  </h2>
                  <h5 className="text-left" style={{ color: "#ffffff" }}>
                    Selamat datang!
                  </h5>
                </div>
                <div className="d-flex flex-row">
                  <img src={wallet} alt="wallet" style={width3} />
                  <img src={notif} alt="notif" style={width3} />
                  <img src={charles} alt="charles" style={width5} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div
              className="card1__homepage card"
              style={{
                background:
                  "linear-gradient(136.62deg, #f3001f -2.2%, #a8091e 102.22%)",
                border: "none"
              }}
            >
              <div className="card-body">
                <h6 className="card-subtitle mb-1" style={{ color: "#c7c7c7" }}>
                  ID CARD
                </h6>
                <h4 className="card-title" style={{ color: "#ffffff" }}>
                  12345678AABBCC
                </h4>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-1" style={{ color: "#c7c7c7" }}>
                  NAMA PENGGUNA
                </h6>
                <h4 className="card-title" style={{ color: "#ffffff" }}>
                  Charles
                </h4>
              </div>
              <div className="card-body d-flex flex-row justify-content-between">
                <div>
                  <h6
                    className="card-subtitle mb-1"
                    style={{ color: "#c7c7c7" }}
                  >
                    SQUAD
                  </h6>
                  <h4 className="card-title" style={{ color: "#ffffff" }}>
                    Space Squad
                  </h4>
                </div>
                <img src={qr} alt="qr" className="qr" style={width4} />
              </div>
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-4">
              <div className="card">
                <div className="card-body d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row">
                    <img
                      src={spaceSquad}
                      alt={spaceSquad}
                      style={{ width: "50" }}
                    />
                    <div className="ml-3 mr-4">
                      <h5 className="text-left card-title">
                        Space Squad
                        <img
                          src={verifiedBlue}
                          alt="verifiedBlue"
                          className="text-left ml-2"
                          style={width2}
                        />
                      </h5>
                      <h6 className="card-subtitle mb-1 text-muted">
                        Squad
                        <div>
                          <img src={dot} alt="dot" style={width1} />
                        </div>
                        Mobile Legend
                      </h6>
                    </div>
                  </div>
                  <img className="mr-0" src={more} alt="more" style={width4} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-4">
              <div className="d-flex flex-row justify-content-between">
                <h4>Turnamen</h4>
                <Link to="/register">Lihat semua</Link>
              </div>
              <HomepageOwlCarousel />
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-4">
              <h4>Leaderboard Pemain</h4>
              <div className="card" style={{ backgroundColor: "#f3001f" }}>
                <div className="card-body d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row">
                    <img src={rankUp} alt="" style={width4} className="mr-1" />
                    <img
                      src="./Picture/2000.svg"
                      alt=""
                      style={width4}
                      className="mr-4"
                    />
                    <img
                      src={spaceSquad}
                      alt="spaceSquad"
                      style={width8}
                      className="mr-2"
                    />
                    <div className="mt-3">
                      <h5 className="card-title" style={{ color: "#ffffff" }}>
                        Space Squad
                        <img
                          src={verifiedWhite}
                          alt="verifiedWhite"
                          className="ml-2"
                          style={{ width: 20 }}
                        />
                      </h5>
                      <h6
                        className="card-subtitle mb-1"
                        style={{ color: "#e6e6e6" }}
                      >
                        4R2632379
                      </h6>
                    </div>
                  </div>
                  <h3 className="mt-4" style={{ color: "#ffffff" }}>
                    <b>1.200&nbsp;Poin</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-2 mb-2">
              <div
                className="card"
                style={{
                  border: "none",
                  backgroundColor: "#fde3e6",
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 5,
                  paddingLeft: 20
                }}
              >
                <h5 className="text-left">
                  <b>Leaderboard</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto mt-2">
            <div className="card">
              <div className="card-body d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src={rankUp}
                    alt="rankUp"
                    style={{ width: 40 }}
                    className="mr-1"
                  />
                  <img
                    src={rank1}
                    alt="rank1"
                    style={{ width: 40 }}
                    className="mr-4"
                  />
                  <img
                    src={squidSquad}
                    alt="squidSquad"
                    style={{ width: 80 }}
                  />
                  <div className="mt-3 ml-3">
                    <h5 className="card-title">
                      Squid Squad
                      <img
                        src={verifiedBlue}
                        alt="verifiedBlue"
                        className="ml-2"
                        style={width1}
                      />
                    </h5>
                    <h6
                      className="card-subtitle mb-1"
                      style={{ color: "#b0b0b0" }}
                    >
                      14562390
                    </h6>
                  </div>
                </div>
                <h3 className="mt-4" style={{ color: "#f3001f" }}>
                  <b>1.200&nbsp;Poin</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto mt-2">
            <div className="card">
              <div className="card-body d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src={rankSame}
                    alt="rankSame"
                    style={width1}
                    className="ml-3 mr-3s"
                  />
                  <img
                    src={rank2}
                    alt="rank2"
                    style={{ width: 40 }}
                    className="mr-4"
                  />
                  <img src={sikoSquad} alt="sikoSquad" style={{ width: 80 }} />
                  <div className="mt-3 ml-3">
                    <h5 className="card-title">
                      Siko Squad
                      <img
                        src={verifiedBlue}
                        alt="verifiedBlue"
                        className="ml-2"
                        style={{ width: 22 }}
                      />
                    </h5>
                    <h6
                      className="card-subtitle mb-1"
                      style={{ color: "#b0b0b0" }}
                    >
                      12303456
                    </h6>
                  </div>
                </div>
                <h3 className="mt-4" style={{ color: "#f3001f" }}>
                  <b>1.000&nbsp;Poin</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto mt-2 mb-5">
            <div className="card">
              <div className="card-body d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src={rankDown}
                    alt="rankDown"
                    style={{ width: 40 }}
                    className="mr-1"
                  />
                  <img
                    src={rank3}
                    alt="rank3"
                    style={{ width: 40 }}
                    className="mr-4"
                  />
                  <img
                    src={kapakSquad}
                    alt="kapakSquad"
                    style={{ width: 80 }}
                  />
                  <div className="mt-3 ml-3">
                    <h5 className="card-title">
                      Kapak Squad
                      <img
                        src={verifiedBlue}
                        alt="verifiedBlue"
                        className="ml-2"
                        style={{ width: 22 }}
                      />
                    </h5>
                    <h6
                      className="card-subtitle mb-1"
                      style={{ color: "#b0b0b0" }}
                    >
                      56095673
                    </h6>
                  </div>
                </div>
                <h3 className="mt-4" style={{ color: "#f3001f" }}>
                  <b>1.000&nbsp;Poin</b>
                </h3>
              </div>
            </div>
          </div>
          <NavBar />
        </main>
      </>
    </>
  );
}

export default Homepage;
