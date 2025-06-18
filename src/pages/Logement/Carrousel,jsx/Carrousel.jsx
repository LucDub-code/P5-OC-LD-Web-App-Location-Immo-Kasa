import "./Carrousel.scss";
import chevronLeft from "../../../assets/icons/chevron-left.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";
import { useState } from "react";

export default function Carrousel({ images }) {
  const [ImageActive, setImageActive] = useState(0);
  const previousImage = (ImageActive - 1 + images.length) % images.length;
  const nextImage = (ImageActive + 1) % images.length;

  return (
    <div className="carrousel">
      <img
        className="carrousel__chevron carrousel__chevron--left"
        src={chevronLeft}
        alt="chevron-left"
        onClick={() =>
          setImageActive(ImageActive <= 0 ? images.length - 1 : ImageActive - 1)
        }
      />
      <img
        className="carrousel__chevron carrousel__chevron--right"
        src={chevronRight}
        alt="chevron-right"
        onClick={() =>
          setImageActive(ImageActive >= images.length - 1 ? 0 : ImageActive + 1)
        }
      />
      {images.map((image, index) => {
        if (
          index === ImageActive ||
          index === previousImage ||
          index === nextImage
        ) {
          return (
            <img
              key={index}
              className={`carrousel__image carrousel__image--${
                index === ImageActive
                  ? "active"
                  : index === previousImage
                  ? "prev"
                  : "next"
              }`}
              src={image}
              alt={`Image ${index + 1}`}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
