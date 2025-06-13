import "./Home.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import HomeBanner from "../../assets/images/hero-banner-home.jpg";
import Gallery from "../Gallery/Gallery";

export default function Home() {
  return (
    <div>
      <HeroBanner image={HomeBanner} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  )
}