import HeroBanner from "../HeroBanner/HeroBanner";
import HomeBanner from "../../assets/images/hero-banner-home.jpg";

export default function Home() {
  return (
    <div>
      <HeroBanner image={HomeBanner} text="Chez vous, partout et ailleurs" />
    </div>
  )
}