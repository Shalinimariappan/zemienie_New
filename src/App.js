import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Revenue from './pages/Revenue';
import Imaging from './pages/Imaging';
import Credentialing from './pages/Credentialing';
import Macra from './pages/Macra';
import Specialist from './pages/Specialist';
import Career from './pages/Career';
import Careerdetail from './pages/Careerdetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

// Import all specialty pages
import Acupuncture from './pages/Acupuncture';
import Urology from './pages/Urology';
import ThoracicSurgery from './pages/ThoracicSurgery';
import GeneralSurgery from './pages/GeneralSurgery';
import SpeechTherapy from './pages/SpeechTherapy';
import Pathology from './pages/Pathology';
import RadiologyDiagnostic from './pages/RadiologyDiagnostic';
import Psychiatry from './pages/Psychiatry';
import PlasticSurgery from './pages/PlasticSurgery';
import Physiotherapy from './pages/Physiotherapy';
import PhysicalMedicine from './pages/PhysicalMedicine';
import Otolaryngology from './pages/Otolaryngology';
import OrthopedicSurgery from './pages/OrthopedicSurgery';
import PainMedicine from './pages/PainMedicine';
import Ophthalmology from './pages/Ophthalmology';
import ObstetricsGynecology from './pages/ObstetricsGynecology';
import Neurology from './pages/Neurology';
import InterventionalCardiology from './pages/InterventionalCardiology';
import Pediatrics from './pages/Pediatrics';
import AllergyImmunology from './pages/AllergyImmunology';
import Anesthesiology from './pages/Anesthesiology';
import Audiology from './pages/Audiology';
import CardiovascularDisease from './pages/CardiovascularDisease';
import Chiropractic from './pages/Chiropractic';
import ClinicalCardiacElectrophysiology from './pages/ClinicalCardiacElectrophysiology';
import Dermatology from './pages/Dermatology';
import FamilyMedicine from './pages/FamilyMedicine';
import HematologyOncology from './pages/HematologyOncology';
import Gastroenterology from './pages/Gastroenterology';
import InfectiousDisease from './pages/InfectiousDisease';
import InternalMedicine from './pages/InternalMedicine';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/imaging" element={<Imaging />} />
            <Route path="/credentialing" element={<Credentialing />} />
            <Route path="/macra" element={<Macra />} />
            <Route path="/specialist" element={<Specialist />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career-detail" element={<Careerdetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Specialty Routes */}
            <Route path="/acupuncture" element={<Acupuncture />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/thoracic-surgery" element={<ThoracicSurgery />} />
            <Route path="/general-surgery" element={<GeneralSurgery />} />
            <Route path="/speech-therapy" element={<SpeechTherapy />} />
            <Route path="/pathology" element={<Pathology />} />
            <Route path="/radiology" element={<RadiologyDiagnostic />} />
            <Route path="/psychiatry" element={<Psychiatry />} />
            <Route path="/plastic-surgery" element={<PlasticSurgery />} />
            <Route path="/physiotherapy" element={<Physiotherapy />} />
            <Route path="/physical-medicine" element={<PhysicalMedicine />} />
            <Route path="/otolaryngology" element={<Otolaryngology />} />
            <Route path="/orthopedic-surgery" element={<OrthopedicSurgery />} />
            <Route path="/pain-medicine" element={<PainMedicine />} />
            <Route path="/ophthalmology" element={<Ophthalmology />} />
            <Route path="/obgyn" element={<ObstetricsGynecology />} />
            <Route path="/neurology" element={<Neurology />} />
            <Route path="/interventional-cardiology" element={<InterventionalCardiology />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
            <Route path="/allergy-immunology" element={<AllergyImmunology />} />
            <Route path="/anesthesiology" element={<Anesthesiology />} />
            <Route path="/audiology" element={<Audiology />} />
            <Route path="/cardiovascular" element={<CardiovascularDisease />} />
            <Route path="/chiropractic" element={<Chiropractic />} />
            <Route path="/cardiac-electrophysiology" element={<ClinicalCardiacElectrophysiology />} />
            <Route path="/dermatology" element={<Dermatology />} />
            <Route path="/family-medicine" element={<FamilyMedicine />} />
            <Route path="/hematology-oncology" element={<HematologyOncology />} />
            <Route path="/gastroenterology" element={<Gastroenterology />} />
            <Route path="/infectious-disease" element={<InfectiousDisease />} />
            <Route path="/internal-medicine" element={<InternalMedicine />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;