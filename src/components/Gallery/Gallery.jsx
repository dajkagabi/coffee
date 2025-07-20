import React from "react";

import bcs from "../../assets/bcs.jpg";
import cold from "../../assets/cold.jpg";
import flat from "../../assets/flat-w.png";
import hero from "../../assets/hero.jpg";
import sofia from "../../assets/sofia.jpg";
import bg from "../../assets/bg.jpg";

const SimpleImageGallery = () => {
  const images = [
    {
      src: bcs,
      alt: "bcs",
    },
    {
      src: cold,
      alt: "cold",
    },
    {
      src: flat,
      alt: "flat",
    },
    {
      src: hero,
      alt: "hero",
    },
    {
      src: sofia,
      alt: "sofia",
    },
    {
      src: bg,
      alt: "bg",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="object-cover object-center w-full h-80 max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleImageGallery;
