import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pubg from "../Picture/PUBGM.svg";
import dollar from "../Picture/dollar-circle.svg";
import people from "../Picture/people.svg";
import "./homePage.css";

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
                  <h5 className="card-title text-left">Piala Walikota Cup</h5>
                  <h6 className="card-subtitle mb-1 text-muted text-left">
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
                <img src={dollar} alt="dollar" style={height3} />
                <Link to="#">Rp100.000.000</Link>
                <img
                  className="ml-3"
                  src={people}
                  alt="people"
                  style={height3}
                />
                <Link to="#">25/50 Tim</Link>
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
                  <h5 className="card-title text-left">Piala Gubernur Cup</h5>
                  <h6 className="card-subtitle mb-1 text-muted text-left">
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
                  style={height3}
                />
                <Link to="#">Rp100.000.000</Link>
                <img
                  className="ml-3"
                  src={people}
                  alt="people"
                  style={height3}
                />
                <Link to="#">25/50 Tim</Link>
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
                  <h5 className="card-title text-left">Piala Presiden Cup</h5>
                  <h6 className="card-subtitle mb-1 text-muted text-left">
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
                  style={height3}
                />
                <Link to="#">Rp100.000.000</Link>
                <img
                  className="ml-3"
                  src={people}
                  alt="people"
                  style={height3}
                />
                <Link to="#">25/50 Tim</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};
export default MyOwlCarousel;
