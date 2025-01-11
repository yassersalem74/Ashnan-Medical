import { Routes, Route } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import OurParteners from './pages/OurParteners';
import ContactUs from './pages/ContactUs';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar className="sticky top-0 z-50" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partners" element={<OurParteners />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer className="" />
    </div>
  );
}

export default App;