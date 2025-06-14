import "./Home.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import homeBanner from "../../assets/images/hero-banner-home.jpg";
import Gallery from "../Gallery/Gallery";

export default function Home() {
  return (
    <div className="home">
      <HeroBanner image={homeBanner} text="Chez vous, partout et ailleurs" overlayOpacity={0.6} />
      <Gallery />
    </div>
  )
}