import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

const OwlCarouselSquadPage = () => {
  const options = {
    loop: false,
    items: 1,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <button
          class="btn"
          style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
        >
          Mobile&nbsp;Legend
        </button>
      </div>
      <div className="item">
        <button
          class="btn"
          style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
        >
          PUBG
        </button>
      </div>
      <div className="item">
        <button
          class="btn"
          style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
        >
          Free&nbsp;Fire
        </button>
      </div>
      <div className="item">
        <button
          class="btn"
          style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
        >
          Point&nbsp;Blank
        </button>
      </div>
      <div className="item">
        <button
          class="btn"
          style={{ backgroundColor: "#f1f2f6", borderRadius: "16px" }}
        >
          Lainnya
        </button>
      </div>
    </OwlCarousel>
  );
};
export default OwlCarouselSquadPage;
