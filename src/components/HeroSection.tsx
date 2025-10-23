import heroImage from "@/assets/gaming-hero.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gaming hero showcase featuring epic game scenes"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experience Epic Gaming
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Discover the latest exclusive games and console experiences that push the boundaries of interactive entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/games')}
              className="gaming-button bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Explore Games
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;