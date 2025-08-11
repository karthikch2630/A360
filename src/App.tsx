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
import VasaviBuildDoxBhuvi from "./pages/portfolio/VasaviBuildDoxBhuvi";
import BuildDoxGarden from "./pages/portfolio/BUILDOXJJGARDENS";
import ScintillaApartments from "./pages/portfolio/SCINTILLAAPARTMENT";
import NavaNaami from "./pages/portfolio/NavaNaami";
import BigBullPub from "./pages/portfolio/BigBullPub";
import CountryYardMansion from "./pages/portfolio/CountryYardMansion";
import Dwellings from "./pages/portfolio/Dwellings";
import ChiralaResort from "./pages/portfolio/ChiralaResort";
import AnadaHomes from "./pages/portfolio/AnandaHomes";
import AsrMemorial from "./pages/portfolio/AsrMemorial";
import RRHomes from "./pages/portfolio/RRHomes";
import SahithiDPS from "./pages/portfolio/SahithiDPS";
import SindhujaConstructions from "./pages/portfolio/SindhujaConstructions";
import CRDAOffice from "./pages/portfolio/CRDAOffice";
import PrasadCommercial from "./pages/portfolio/PrasadCommercial";
import DSDwellings from "./pages/portfolio/DSDwellings";
import PulsusCorpOffice from "./pages/portfolio/PULSUSCorpOffice";
import SahitiCom from "./pages/portfolio/SahitiCom";
import RRFarmHouse from "./pages/portfolio/RRFarmHouse";
import VinodMall from "./pages/portfolio/VinodMall";
import PORTOffice from "./pages/portfolio/PORTOffice";
import OSRInfra from "./pages/portfolio/OSRInfra";
import Shiva from "./pages/portfolio/perupalem";
import DPVilla from "./pages/portfolio/DPVilla";
import YTDYards from "./pages/portfolio/YTD450Yards";







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
            <Route path="/portfolio/vasavi-builddox-by-bhuvi" element={<VasaviBuildDoxBhuvi />} />
            <Route path="/portfolio/bhuvi-by-vasavi-builddox" element={<BuildDoxGarden />} />
            <Route path="/portfolio/scintilla-apartment" element={<ScintillaApartments />} />
            <Route path="/portfolio/navanaami" element={<NavaNaami />} />
            <Route path="/portfolio/big-bull-pub" element={<BigBullPub />} />
            <Route path="/portfolio/courtyard-mansion" element={<CountryYardMansion />} />
            <Route path="/portfolio/dwellings" element={<Dwellings />} />
            <Route path="/portfolio/chirala-resort" element={<ChiralaResort />} />
            <Route path="/portfolio/ananda-homes" element={<AnadaHomes />} />
            <Route path="/portfolio/asr-memorial" element={<AsrMemorial />} />
            <Route path="/portfolio/rr-homes" element={<RRHomes />} />
            <Route path="/portfolio/sahiti-dps" element={<SahithiDPS />} />
            <Route path="/portfolio/sindhuja-constructions" element={<SindhujaConstructions />} />
            <Route path="/portfolio/crda-office" element={<CRDAOffice />} />
            <Route path="/portfolio/prasad-commercial-building" element={<PrasadCommercial />} />
            <Route path="/portfolio/ds-dwellings" element={<DSDwellings />} />
            <Route path="/portfolio/pulsus-corporate-office" element={<PulsusCorpOffice />} />
            <Route path="/portfolio/sahiti-commercial" element={<SahitiCom />} />
            <Route path="/portfolio/rr-farmhouse" element={<RRFarmHouse />} />
            <Route path="/portfolio/vinod-mall" element={<VinodMall />} />
            <Route path="/portfolio/gangavaram-port-office" element={<PORTOffice />} />
            <Route path="/portfolio/osr-infra" element={<OSRInfra />} />
            <Route path="/portfolio/perupalem-beachfront-shiva-temple" element={<Shiva />} />
            <Route path="/portfolio/dp-villa" element={<DPVilla />} />
            <Route path="/portfolio/ytd-450-sq-yds" element={<YTDYards />} />



            {/*Blog Routes*/}


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
