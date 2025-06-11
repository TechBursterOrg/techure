import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;