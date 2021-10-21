import React from "react";
import Slider from "react-slick";

import { useFetch } from "../../hooks/useFetch";
import { HeroSliderSlide } from "./HeroSliderSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroSlider = () => {
  const { loading, data: slides } = useFetch("json/hero_slider/6?_format=json");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="content-top content-top--hero">
      <div className="hero hero-slider" id="hero-slider">
        {
          !loading &&
            <Slider {...settings}>
              {
                slides.map((slide, key) => (
                  <HeroSliderSlide key={key} slide={slide} />
                ))
              }
            </Slider>
        }
      </div>
    </div>
  );
};
