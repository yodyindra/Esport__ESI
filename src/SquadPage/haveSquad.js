import { Link } from "react-router-dom";
import "../SquadPage/haveSquad.css";
import left from "../img/left.svg";
import notification from "../img/notification.svg";
import dadu from "../img/dadu.jpg";
import people from "../img/people.svg";
import fatrows from "../img/fatrows.svg";
import logout from "../img/logout.svg";
import search from "../img/search.svg";
import foto1 from "../img/foto1.jpg";
import centangbiru from "../img/centangbiru.svg";
import homeRed from "../Picture/home-red.svg";
import tournament from "../Picture/tournament.svg";
import squad from "../Picture/squad.svg";
import leaderboard from "../Picture/leaderboard.svg";
import profile from "../Picture/profile.svg";
import OwlCarouselSquadPage from "./squadPageOwlCarousel";

function HaveSquad() {
  return (
    <>
      <>
        <main>
          {/* Awal Banner */}
          <div class="col-md-12 content mx-auto konten">
            <div class="col-md-6 mx-auto ">
              <div class="d-flex flex-row mx-auto justify-content-between mb-5">
                <Link to="/homepage">
                  <img src={left} alt="left" />
                </Link>
                <h1>Squad</h1>
                <Link to="">
                  <img src={notification} alt="notif" />
                </Link>
              </div>
              <center>
                <img src={dadu} alt="" className="img1" />
              </center>
              <div class="mt-5 text-center">
                <h2 class="ml-3 mb-5">
                  Squid Squad
                  <img src={centangbiru} alt="" class="img2 ml-2" />
                </h2>
                <h3 class="mb-5">ID4R2632379</h3>
              </div>
              <div
                class="mb-5 pb-5 text-center"
                style={{ color: "#ed8a90", fontSize: "40px" }}
              >
                <h4>Space Squad merupakan squad game mobile legends yang </h4>
                <h4>sudah dibentuk dari 15 september 2021 </h4>
              </div>
            </div>
          </div>
          {/* Akhir Banner */}
          {/* Info Panel */}
          <div class="row justify-content-center">
            <div class="col-6 konten1">
              <div class="row ">
                <div class="col">
                  <center>
                    <Link to="">
                      <img src={people} alt="" />
                    </Link>
                  </center>
                  <h1>Anggota</h1>
                </div>
                <div class="col">
                  <center>
                    <Link to="">
                      <img src={fatrows} alt="" />
                    </Link>
                  </center>
                  <h1>Statistik</h1>
                </div>
                <div class="col">
                  <center>
                    <Link to="">
                      <img src={logout} alt="" />
                    </Link>
                  </center>
                  <h1>Keluar</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Akhir Info Panel */}
          {/* Awal Search */}
          <div class=" col-md-6 mx-auto konten2">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <div class="mt-3">
                  <h1>Temukan Squad Lainnya!</h1>
                </div>
                <div class="">
                  <h2>Temukan dan tantang squad lain dalam Sparing</h2>
                </div>
              </div>
              <a href="">
                <img src={search} alt="" className="img1" />
              </a>
            </div>
          </div>
          {/* Akhir Search */}
          {/* Button */}
          <div class=" col-md-6 mx-auto">
            <OwlCarouselSquadPage />
          </div>
          {/* Akhir Button */}
          {/* Sparing */}
          <div class="col-md-6 mx-auto mt-5 konten3">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img src={foto1} class="img2" />
                <div class="mt-3 ml-3">
                  <h1 class="">
                    Squid Squad
                    <img src={centangbiru} class="img2 ml-2" />
                  </h1>
                  <h2 class="mb-1">14562390</h2>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>

          <div class="col-md-6 mx-auto mt-5 konten3">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img src={foto1} class="img2" />
                <div class="mt-3 ml-3">
                  <h1 class="">
                    Squid Squad
                    <img src={centangbiru} class="img2 ml-2" />
                  </h1>
                  <h2 class="mb-1">14562390</h2>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>

          <div class="col-md-6 mx-auto mt-5 konten3">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img src={foto1} class="img2" />
                <div class="mt-3 ml-3">
                  <h1 class="">
                    Squid Squad
                    <img src={centangbiru} class="img2 ml-2" />
                  </h1>
                  <h2 class="mb-1">14562390</h2>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>

          <div class="col-md-6 mx-auto mt-5 konten3">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img src={foto1} class="img2" />
                <div class="mt-3 ml-3">
                  <h1 class="">
                    Squid Squad
                    <img src={centangbiru} class="img2 ml-2" />
                  </h1>
                  <h2 class="mb-1">14562390</h2>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>

          <div class="col-md-6 mx-auto mt-5 konten3">
            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <img src={foto1} class="img2" />
                <div class="mt-3 ml-3">
                  <h1 class="">
                    Squid Squad
                    <img src={centangbiru} class="img2 ml-2" />
                  </h1>
                  <h2 class="mb-1">14562390</h2>
                </div>
              </div>
              <button class="btn">Sparing</button>
            </div>
          </div>
          {/* Akhir Sparing */}
          {/* Squad lain */}
          <div class="col-md-12 content mx-auto konten4">
            <div>
              <div class="mt-5 mb-5 text-center">
                <a href="">Temukan Squad Lain</a>
              </div>
            </div>
          </div>
          {/* Akhir squad lain */}

          <div className="navs 8 mx-auto mt-2">
            <div className="card">
              <div className="card-body">
                <div className="col-md-6 mx-auto d-flex flex-row justify-content-between">
                  <Link to="/homepage">
                    <img src={homeRed} alt="homeRed" style={{ height: 40 }} />
                  </Link>
                  <a href="">
                    <img
                      src={tournament}
                      alt="tournament"
                      style={{ height: 40 }}
                    />
                  </a>
                  <a href="">
                    <img src={squad} alt="squad" style={{ height: 40 }} />
                  </a>
                  <a href="">
                    <img
                      src={leaderboard}
                      alt="leaderboard"
                      style={{ height: 40 }}
                    />
                  </a>
                  <a href="">
                    <img src={profile} alt="profile" style={{ height: 40 }} />
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
export default HaveSquad;
