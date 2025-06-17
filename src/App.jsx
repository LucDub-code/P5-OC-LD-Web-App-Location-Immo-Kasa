import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { LogementsProvider } from "./context/LogementsContext";

export default function App() {
  return (
    <LogementsProvider>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LogementsProvider>
  );
}
