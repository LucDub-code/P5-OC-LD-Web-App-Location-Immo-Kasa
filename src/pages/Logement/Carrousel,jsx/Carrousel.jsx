import "./Carrousel.scss";
import chevronLeft from "../../../assets/icons/chevron-left.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";

export default function Carrousel({ images }) {
  return (
    <div className="carrousel">
      <img
        className="carrousel__chevron carrousel__chevron--left"
        src={chevronLeft}
        alt="chevron-left"
      />
      <img
        className="carrousel__chevron carrousel__chevron--right"
        src={chevronRight}
        alt="chevron-right"
      />
      {images.map((image, index) => (
        <img
          className="carrousel__image"
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
}
