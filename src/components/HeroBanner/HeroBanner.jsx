import "./HeroBanner.scss";

export default function HeroBanner({ image, text }) {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1 className="hero-banner__title">{text}</h1>}
    </div>
  )
}