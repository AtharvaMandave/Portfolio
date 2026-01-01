import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  );
}
