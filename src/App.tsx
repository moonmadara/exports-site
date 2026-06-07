import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Certifications from './components/Certifications';
import About from './components/About';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <About />
      <Certifications />
      <Leadership />
      <Footer />
    </div>
  );
}
