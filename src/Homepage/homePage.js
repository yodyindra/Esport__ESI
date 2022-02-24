import "./homePage.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
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
import pubg from "../Picture/PUBGM.svg";
import dollar from "../Picture/dollar-circle.svg";
import people from "../Picture/people.svg";
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
import homeRed from "../Picture/home-red.svg";
import tournament from "../Picture/tournament.svg";
import squad from "../Picture/squad.svg";
import leaderboard from "../Picture/leaderboard.svg";
import profile from "../Picture/profile.svg";
import MyOwlCarousel from "../OwlCarousel";

// const MyOwlCarousel = () => {
//   Option = {
//     loop: true,
//     margin: 10,
//     items: 1,
//     autoplay: true
//   };
// };
const height1 = {
  height: 10
};
const height2 = {
  height: 20
};
const height3 = {
  height: 30
};
const height4 = {
  height: 40
};
const height5 = {
  height: 50
};

function Homepage() {
  return (
    <>
      <>
        <main>
          <div
            className="contain col-md-12 content mx-auto"
            style={{
              backgroundColor: "#f3001f"
            }}
          >
            <div className="col-md-6 mx-auto">
              <div className="d-flex flex-row mx-auto justify-content-between">
                <div>
                  <h2 style={{ color: "#ffffff" }}>Hai, Charles</h2>
                  <h5 style={{ color: "#ffffff" }}>Selamat datang!</h5>
                </div>
                <div className="d-flex flex-row">
                  <div style={{ height: "30px" }}>
                    <img src={wallet} alt="wallet" />
                  </div>

                  <img src={notif} alt="notif" style={height3} />
                  <img src={charles} alt="charles" style={height2} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div
              className="card1 card"
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
                <img src={qr} alt="qr" style={{ width: "40" }} />
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
                      <h5 className="card-title">
                        Space Squad
                        <img
                          src={verifiedBlue}
                          alt="verifiedBlue"
                          className="ml-2"
                          style={{ width: "22" }}
                        />
                      </h5>
                      <h6 className="card-subtitle mb-1 text-muted">
                        Squad <img src={dot} alt="dot" style={{ width: "5" }} />
                        Mobile Legend
                      </h6>
                    </div>
                  </div>
                  <img
                    className="ml-2"
                    src={more}
                    alt="more"
                    style={{ height: "3" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-4">
              <div className="d-flex flex-row justify-content-between">
                <h4>Turnamen</h4>
                <a href="/register">Lihat semua</a>
              </div>
              <MyOwlCarousel />
              {/* <OwlCarousel className="owl-theme" {...Option}>
                <div className="item">
                  <img
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328194-2590-FCBD-5A4FCA54E307E0AB.jpg"
                    alt="road"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/2/18/0218196-2590-FCBD-5AA19539BBCE5DDF.jpg"
                    alt="sunrise"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://d2rdb56lmj4es2.cloudfront.net/data/photo/2019/3/28/0328192-2590-FCBD-5A018FCFA66A0706.jpg"
                    alt="road2"
                  />
                </div>
              </OwlCarousel> */}
              {/* <div className="owl-carousel owl-theme">
                <div className="item card">
                  <div className="card-body d-flex flex-row">
                    <img src={pubg} alt="pubg" style={{ width: 100 }} />
                    <div>
                      <div className="ml-3 mb-3 d-flex flex-row">
                        <div>
                          <h5 className="card-title">Piala Walikota Cup</h5>
                          <h6 className="card-subtitle mb-1 text-muted">
                            Pemerintah Kota Denpasar
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn ml-3"
                          style={{
                            backgroundColor: "#44c616",
                            color: "#ffffff"
                          }}
                        >
                          Buka
                        </button>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          className="ml-3"
                          src={dollar}
                          alt="dollar"
                          style={{ width: 25 }}
                        />
                        <a href="#">Rp. 100.000.000</a>
                        <img
                          className="ml-3"
                          src={people}
                          alt="people"
                          style={{ width: 25 }}
                        />
                        <a href="#">25/50 Tim</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body d-flex flex-row">
                    <img src={pubg} alt="pubg" style={{ width: 100 }} />
                    <div>
                      <div className="ml-3 mb-3 d-flex flex-row">
                        <div>
                          <h5 className="card-title">Piala Walikota Cup</h5>
                          <h6 className="card-subtitle mb-1 text-muted">
                            Pemerintah Kota Denpasar
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn ml-3"
                          style={{
                            backgroundColor: "#44c616",
                            color: "#ffffff"
                          }}
                        >
                          Buka
                        </button>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          className="ml-3"
                          src={dollar}
                          alt="dollar"
                          style={{ width: 25 }}
                        />
                        <a href="#">Rp. 100.000.000</a>
                        <img
                          className="ml-3"
                          src={people}
                          alt="people"
                          style={{ width: 25 }}
                        />
                        <a href="#">25/50 Tim</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item card">
                  <div className="card-body d-flex flex-row">
                    <img src={pubg} alt="pubg" style={{ width: 100 }} />
                    <div>
                      <div className="ml-3 mb-3 d-flex flex-row">
                        <div>
                          <h5 className="card-title">Piala Walikota Cup</h5>
                          <h6 className="card-subtitle mb-1 text-muted">
                            Pemerintah Kota Denpasar
                          </h6>
                        </div>
                        <button
                          type="button"
                          className="btn ml-3"
                          style={{
                            backgroundColor: "#44c616",
                            color: "#ffffff"
                          }}
                        >
                          Buka
                        </button>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          className="ml-3"
                          src={dollar}
                          alt="dollar"
                          style={{ width: 25 }}
                        />
                        <a href="#">Rp. 100.000.000</a>
                        <img
                          className="ml-3"
                          src={people}
                          alt="people"
                          style={{ width: 25 }}
                        />
                        <a href="#">25/50 Tim</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <div className="col-md-6 mx-auto mt-4">
              <h4>Leaderboard Pemain</h4>
              <div className="card" style={{ backgroundColor: "#f3001f" }}>
                <div className="card-body d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row">
                    <img
                      src={rankUp}
                      alt=""
                      style={{ width: 40 }}
                      className="mr-1"
                    />
                    <img
                      src="./Picture/2000.svg"
                      alt=""
                      style={{ width: 40 }}
                      className="mr-4"
                    />
                    <img
                      src={spaceSquad}
                      alt="spaceSquad"
                      style={{ width: 90 }}
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
                    style={{ width: 90 }}
                  />
                  <div className="mt-3 ml-3">
                    <h5 className="card-title">
                      Squid Squad
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
                    style={{ width: 10 }}
                    className="ml-3 mr-3"
                  />
                  <img
                    src={rank2}
                    alt="rank2"
                    style={{ width: 40 }}
                    className="mr-4"
                  />
                  <img src={sikoSquad} alt="sikoSquad" style={{ width: 90 }} />
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
          <div className="col-md-6 mx-auto mt-2">
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
                    style={{ width: 90 }}
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
          <div className="navs col-md-6 mx-auto mt-2">
            <div className="card">
              <div className="card-body">
                <div className="col-md-10 mx-auto d-flex flex-row justify-content-between">
                  <a href="">
                    <img src={homeRed} alt="homeRed" style={{ height: 100 }} />
                  </a>
                  <a href="">
                    <img
                      src={tournament}
                      alt="tournament"
                      style={{ height: 100 }}
                    />
                  </a>
                  <a href="">
                    <img src={squad} alt="squad" style={{ height: 100 }} />
                  </a>
                  <a href="">
                    <img
                      src={leaderboard}
                      alt="leaderboard"
                      style={{ height: 100 }}
                    />
                  </a>
                  <a href="">
                    <img src={profile} alt="profile" style={{ height: 100 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
}

export default Homepage;
