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

function HaveSquad() {
  return (
    <>
      <>
        <main>
          {/* Awal Banner */}
          <div class="col-md-12 content mx-auto konten">
            <div class="col-md-8 mx-auto ">
              <div class="d-flex flex-row mx-auto justify-content-between mb-5">
                <a href="">
                  <img src={left} />
                </a>
                <h1>Squad</h1>
                <a href="">
                  <img src={notification} />
                </a>
              </div>
              <center>
                <img src={dadu} className="img1" />
              </center>
              <div class="mt-5 text-center">
                <h2 class="ml-3 mb-5">
                  Squid Squad
                  <img src={centangbiru} class="img2 ml-2" />
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
            <div class="col-10 konten1">
              <div class="row ">
                <div class="col">
                  <center>
                    <a href="">
                      <img src={people} />
                    </a>
                  </center>
                  <h1>Anggota</h1>
                </div>
                <div class="col">
                  <center>
                    <a href="">
                      <img src={fatrows} />
                    </a>
                  </center>
                  <h1>Statistik</h1>
                </div>
                <div class="col">
                  <center>
                    <a href="">
                      <img src={logout} />
                    </a>
                  </center>
                  <h1>Keluar</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Akhir Info Panel */}
          {/* Awal Search */}
          <div class=" col-md-9 mx-auto konten2">
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
                <img src={search} className="img1" />
              </a>
            </div>
          </div>
          {/* Akhir Search */}
          {/* Button */}
          <div class="col-md-12 content mx-auto  ">
            <div class="col-md-8 mx-auto ">
              <div class="d-flex flex-row mx-auto justify-content-between mb-5">
                <a href="">
                  <button type="button" class="btn btn konten3_btn">
                    Mobile&nbsp;Legend
                  </button>
                </a>
                <a href="">
                  <button type="button" class="btn btn konten3_btn ml-3">
                    PUBG
                  </button>
                </a>
                <a href="">
                  <button type="button" class="btn btn konten3_btn">
                    Free&nbsp;Fire
                  </button>
                </a>
                <a href="">
                  <button type="button" class="btn btn konten3_btn">
                    Point&nbsp;Blank
                  </button>
                </a>
                <a href="">
                  <button type="button" class="btn btn konten3_btn">
                    Lainnya
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Akhir Button */}
          {/* Sparing */}
          <div class="col-md-8 mx-auto mt-5 konten3">
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

          <div class="col-md-8 mx-auto mt-5 konten3">
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

          <div class="col-md-8 mx-auto mt-5 konten3">
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

          <div class="col-md-8 mx-auto mt-5 konten3">
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

          <div class="col-md-8 mx-auto mt-5 konten3">
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

          <div class="col-lg-12 mx-auto mt-5">
            {/* <!-- Bottom Navbar --> */}
            <nav class="navbar#28a745 navbar-expand bottom ">
              <ul class="navbar-nav nav-justified w-100">
                <li class="nav-item">
                  <a href="#" class="nav-link text-center">
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      class="bi bi-house"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                      />
                    </svg>
                    <span class="small d-block">Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link text-center">
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      class="bi bi-search"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      />
                    </svg>
                    <span class="small d-block">Search</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link text-center">
                    <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      class="bi bi-person"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                      />
                    </svg>
                    <span class="small d-block">Profile</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </>
    </>
  );
}
export default HaveSquad;
