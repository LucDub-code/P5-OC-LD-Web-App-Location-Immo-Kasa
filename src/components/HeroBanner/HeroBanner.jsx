import "./HeroBanner.scss";

export default function HeroBanner({ image, text, overlayOpacity }) {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${image})` }}>
      <div
        className="hero-banner__overlay"
        style={{ opacity: overlayOpacity }}
      />
      {text && <h1 className="hero-banner__title">{text}</h1>}
    </div>
  );
}
