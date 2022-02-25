import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pubg from "./Picture/PUBGM.svg";
import dollar from "./Picture/dollar-circle.svg";
import people from "./Picture/people.svg";

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    items: 1,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
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
      </div>
      <div className="item">
        <div className="item card">
          <div className="card-body d-flex flex-row">
            <img src={pubg} alt="pubg" style={{ width: 100 }} />
            <div>
              <div className="ml-3 mb-3 d-flex flex-row">
                <div>
                  <h5 className="card-title">Piala Gubernur Cup</h5>
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
      </div>
      <div className="item">
        <div className="item card">
          <div className="card-body d-flex flex-row">
            <img src={pubg} alt="pubg" style={{ width: 100 }} />
            <div>
              <div className="ml-3 mb-3 d-flex flex-row">
                <div>
                  <h5 className="card-title">Piala Presiden Cup</h5>
                  <h6 className="card-subtitle mb-1 text-muted">
                    Pemerintahan Indonesia
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
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
