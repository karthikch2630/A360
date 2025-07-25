import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import AnadaHomes from "./pages/portfolio/AnandaHomes";
import BuildBoxGarden from "./pages/portfolio/BuildBoxGarden";
import CountryYardMansion from "./pages/portfolio/CountryYardMansion";
import ScintillaApartments from "./pages/portfolio/ScintillaApartments";
import VasaviBuildBoxBhuvi from "./pages/portfolio/VasaviBuildBoxBhuvi";
import SahithiComplex from "./pages/portfolio/SahithiComplex";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#333333] text-white">
        <Header />
        <LeftSidebar />
        <ScrollToTop />
        
        {/* Main content area */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />           
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio/Ananda-Homes" element={<AnadaHomes />} />
            <Route path="/portfolio/Buildbox-Gardens" element={<BuildBoxGarden />} />
            <Route path="/portfolio/Countryard-Mansion" element={<CountryYardMansion />} />
            <Route path="/portfolio/Scintilla-Apartments" element={<ScintillaApartments />} />
            <Route path="/portfolio/Vasavi-BuildBox-Bhuvi" element={<VasaviBuildBoxBhuvi />} />
            <Route path="/portfolio/Sahithi-Complex" element={<SahithiComplex />} />
            {/* Add more portfolio routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
