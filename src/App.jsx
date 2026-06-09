import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Divider from './components/Divider';
import StackMarquee from './components/StackMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Background />
      <CustomCursor />
      <Nav />

      <Hero />
      <StackMarquee />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
