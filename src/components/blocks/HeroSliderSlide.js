import React from 'react'
import { Link } from "react-router-dom";

export const HeroSliderSlide = ({slide}) => {
  const { image, title, description, link } = slide;
  const { sources, alt, src} = image;

  return (
    <div className="hero-slider__item">
      <div className="hero__top">
        <picture>
          {sources.map((source) => (
            <source
              key={source.mediakey}
              srcSet={source.srcset}
              media={source.media}
            />
          ))}
          <img className="img_responsive" src={src} alt={alt} />
        </picture>
      </div>
      <div className="hero__content row">
        <div className="hero__content-left">
          <h2 className="hero__content-title">{title}</h2>
          <p className="hero__content-description">{description}</p>
          <Link
            title={link.title}
            className="hero__content-cta btn btn--red"
            to={link.url}
          >
            {link.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
