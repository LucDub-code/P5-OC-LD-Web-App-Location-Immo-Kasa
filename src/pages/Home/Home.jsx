import "./Home.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import homeBanner from "../../assets/images/hero-banner-home.jpg";
import Gallery from "./Gallery/Gallery";

export default function Home() {
  return (
    <div className="home">
      <HeroBanner
        image={homeBanner}
        text={<span className="hero-banner__title">Chez vous,<br className="hero-banner__break"/> partout et ailleurs</span>}
        overlayOpacity={0.6}
      />
      <Gallery />
    </div>
  );
}
