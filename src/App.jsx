import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Logement from "./components/Logement/Logement";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
