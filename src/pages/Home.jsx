import HeroSection from '../components/HeroSection';
import FlashDealsBanner from '../components/FlashDealsBanner';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import SmartLSection from '../components/SmartLSection';
import WhyInvestSection from '../components/WhyInvestSection';
import ProjectsSection from '../components/ProjectsSection';
import Calculators from '../components/Calculators';
import TestimonialsSection from '../components/TestimonialsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <HeroSection />
      <FlashDealsBanner />
      <TrustBar />
      
      <div className="reveal">
        <AboutSection />
      </div>

      <div className="reveal">
        <SmartLSection />
      </div>

      <div className="reveal">
        <WhyInvestSection />
      </div>

      <div className="reveal">
        <ProjectsSection />
      </div>

      <div className="reveal">
        <Calculators />
      </div>
      
      <div className="reveal">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Home;

