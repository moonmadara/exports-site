import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FreshRedOnion from './pages/FreshRedOnion';
import WhiteOnionPowder from './pages/WhiteOnionPowder';
import SourcingQuality from './pages/SourcingQuality';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/fresh-red-onion" element={<FreshRedOnion />} />
          <Route path="/products/white-onion-powder" element={<WhiteOnionPowder />} />
          <Route path="/sourcing-quality" element={<SourcingQuality />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
