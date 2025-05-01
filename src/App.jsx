import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import VantaBackground from './components/VantaBackground';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SlidingText from './components/SlidingText';
import TeamCards from './components/TeamCard';
import { useRef } from 'react';
import IdeologySection from './components/IdeologySection';
import RocketLoading from './components/Loader';
import TeamSection from './components/Slider';


function App() {
  // Create refs for scrolling targets
  const galleryRef = useRef(null);
  const teamRef = useRef(null);
  const footRef = useRef(null);

  // Scroll handlers
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFoot = () => {
    footRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <BrowserRouter>
    <RocketLoading />
      <Header scrollToGallery={scrollToGallery} scrollToTeam={scrollToTeam} scrollToFoot={scrollToFoot} />
      <VantaBackground />
      <HeroSection />

      {/* Scrollable section for Gallery */}
      <div ref={galleryRef}>
        <Gallery />
      </div>

      <SlidingText />

      <div ref={teamRef}>
        <TeamCards />
      </div>

      <IdeologySection />

      <TeamSection />

      <div ref={footRef}>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
