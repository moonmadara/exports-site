import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import FreshRedOnion from './pages/FreshRedOnion';
import OnionPowder from './pages/OnionPowder';
import GreenBellPepper from './pages/GreenBellPepper';
import SourcingQuality from './pages/SourcingQuality';
import CertificationsCompliance from './pages/CertificationsCompliance';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/fresh-red-onion" element={<FreshRedOnion />} />
          <Route path="/products/onion-powder" element={<OnionPowder />} />
          <Route path="/products/green-bell-pepper" element={<GreenBellPepper />} />
          <Route path="/sourcing-quality" element={<SourcingQuality />} />
          <Route path="/logistics-certifications" element={<CertificationsCompliance />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
