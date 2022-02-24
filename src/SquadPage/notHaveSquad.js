// import "./homePage.css";
import notif from "../Picture/notification.svg";
import verifiedBlue from "../Picture/verified-blue.svg";
import squidSquad from "../Picture/squid-squad.svg";
import sikoSquad from "../Picture/siko-squad.svg";
import kapakSquad from "../Picture/kapak-squad.svg";
import homeRed from "../Picture/home-red.svg";
import tournament from "../Picture/tournament.svg";
import squad from "../Picture/squad.svg";
import leaderboard from "../Picture/leaderboard.svg";
import profile from "../Picture/profile.svg";
import chevronLeft from "../Picture/chevron-left.svg";
import sad from "../Picture/sad.svg";
import joinSquad from "../Picture/join-squad.svg";
import createSquad from "../Picture/create-squad.svg";
import search from "../Picture/search.svg";

function NotHaveSquad() {
  return (
    <>
      <>
        <main>
          <div
            class="contain col-md-12 content mx-auto"
            style={{
              background: "linear-gradient(180deg, #a8091e 0%, #ec2028 100%)"
            }}
          >
            <div class="col-md-6 mx-auto">
              <div class="d-flex flex-row mx-auto justify-content-between mb-5">
                <a href="">
                  <img
                    src={chevronLeft}
                    alt="chevronLeft"
                    style={{ height: "40px" }}
                  />
                </a>
                <h4 style={{ color: "#ffffff" }}>Squad</h4>
                <a href="">
                  <img src={notif} alt="notif" style={{ height: "35px" }} />
                </a>
              </div>
              <center>
                <img src={sad} alt="sad" style={{ height: "120px" }} />
              </center>
              <div
                class="mt-4 text-center"
                style={{ color: "#ed8a90", fontSize: "40px" }}
              >
                Anda belum memiliki Squad
              </div>
            </div>
          </div>
          <div class="card1 col-md-6 mx-auto">
            <div class="card">
              <div class="cards card-body d-flex flex-row">
                <img
                  src={joinSquad}
                  alt="joinSquad"
                  style={{ width: "150px" }}
                />
                <img src={createSquad} alt="" style={{ width: "150px" }} />
              </div>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <div>
                <div class="mt-5" style={{ fontSize: "30px" }}>
                  <b>Temukan Squad Lainnya!</b>
                </div>
                <div
                  class="mt-2"
                  style={{ fontSize: "20px", color: "#b0b0b0" }}
                >
                  Temukan dan tantang squad lain dalam Sparing
                </div>
              </div>
              <img
                src={search}
                alt="search"
                style={{
                  width: "40px",
                  marginTop: "25px",
                  marginRight: "15px"
                }}
              />
            </div>
            <div class="mt-4 owl-carousel owl-theme text-center">
              <button
                class="btn"
                style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
              >
                Mobile&nbsp;Legend
              </button>
              <button
                class="btn"
                style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
              >
                PUBG
              </button>
              <button
                class="btn"
                style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
              >
                Free&nbsp;Fire
              </button>
              <button
                class="btn"
                style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
              >
                Point&nbsp;Blank
              </button>
              <button
                class="btn"
                style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
              >
                Lainnya
              </button>
            </div>
          </div>
          <div class="col-md-6 mx-auto mt-5">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src={squidSquad}
                  alt="squidSquad"
                  style={{ width: "90px" }}
                />
                <div class="mt-3 ml-3">
                  <h5 class="card-title">
                    Squid Squad
                    <img
                      src={verifiedBlue}
                      alt="verifiedBlue"
                      class="ml-2"
                      style={{ width: "22px" }}
                    />
                  </h5>
                  <h6 class="card-subtitle mb-1" style={{ color: "#b0b0b0" }}>
                    14562390
                  </h6>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>
          <div class="col-md-6 mx-auto mt-5">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src={sikoSquad}
                  alt="sikoSquad"
                  style={{ width: "90px" }}
                />
                <div class="mt-3 ml-3">
                  <h5 class="card-title">
                    Siko Squad
                    <img
                      src={verifiedBlue}
                      alt="verifiedBlue"
                      class="ml-2"
                      style={{ width: "22px" }}
                    />
                  </h5>
                  <h6 class="card-subtitle mb-1" style={{ color: "#b0b0b0" }}>
                    12303456
                  </h6>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>
          <div class="col-md-6 mx-auto mt-5">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src={kapakSquad}
                  alt="kapakSquad"
                  style={{ width: "90px" }}
                />
                <div class="mt-3 ml-3">
                  <h5 class="card-title">
                    Kapak Squad
                    <img
                      src={verifiedBlue}
                      alt="verifiedBlue"
                      class="ml-2"
                      style={{ width: "22px" }}
                    />
                  </h5>
                  <h6 class="card-subtitle mb-1" style={{ color: "#b0b0b0" }}>
                    56095673
                  </h6>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>
          <div class="col-md-6 mx-auto mt-5">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src={sikoSquad}
                  alt="sikoSquad"
                  style={{ width: "90px" }}
                />
                <div class="mt-3 ml-3">
                  <h5 class="card-title">
                    Siko Squad
                    <img
                      src={verifiedBlue}
                      alt="verifiedBlue"
                      class="ml-2"
                      style={{ width: "22px" }}
                    />
                  </h5>
                  <h6 class="card-subtitle mb-1" style={{ color: "#b0b0b0" }}>
                    12303456
                  </h6>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>
          <div class="col-md-6 mx-auto mt-5">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img
                  src={kapakSquad}
                  alt="kapakSquad"
                  style={{ width: "90px" }}
                />
                <div class="mt-3 ml-3">
                  <h5 class="card-title">
                    Kapak Squad
                    <img
                      src={verifiedBlue}
                      alt="verifiedBlue"
                      class="ml-2"
                      style={{ width: "22px" }}
                    />
                  </h5>
                  <h6 class="card-subtitle mb-1" style={{ color: "#b0b0b0" }}>
                    56095673
                  </h6>
                </div>
              </div>
              <button type="button" class="btn">
                Sparing
              </button>
            </div>
          </div>
          <div class="col-md-12 mx-auto mt-5">
            <div class="card">
              <div class="card-body">
                <div class="navs col-md-6 mx-auto">
                  <div class="col-md-10 mx-auto d-flex flex-row justify-content-between">
                    <a href="">
                      <img
                        src={homeRed}
                        alt="homeRed"
                        style={{ height: "15%" }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={tournament}
                        alt="tournament"
                        style={{ height: "15%" }}
                      />
                    </a>
                    <a href="">
                      <img src={squad} alt="squad" style={{ height: "15%" }} />
                    </a>
                    <a href="">
                      <img
                        src={leaderboard}
                        alt="leaderboard"
                        style={{ height: "15%" }}
                      />
                    </a>
                    <a href="">
                      <img
                        src={profile}
                        alt="profile"
                        style={{ height: "15%" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
}

export default NotHaveSquad;
