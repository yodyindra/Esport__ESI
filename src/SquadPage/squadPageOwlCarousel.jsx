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
    </OwlCarousel>
  );
};
export default OwlCarouselSquadPage;
