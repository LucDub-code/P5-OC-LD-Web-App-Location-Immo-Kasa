import "./About.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import AboutBanner from "../../assets/images/hero-banner-about.jpg";

export default function About() {
  return (
    <div>
      <HeroBanner image={AboutBanner} />
    </div>
  )
}