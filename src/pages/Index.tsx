import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GameCard from "@/components/GameCard";
import ConsoleSection from "@/components/ConsoleSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";

// Placeholder game data - in a real app this would come from an API
const gameData = [
  {
    title: "Begin your journey here",
    description: "Embark on an epic adventure through mystical lands filled with magic and wonder.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    tag: "NEW"
  },
  {
    title: "Capture a new world",
    description: "Explore vast alien worlds and uncover the secrets of ancient civilizations.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    tag: "EXCLUSIVE"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Games Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {gameData.map((game, index) => (
              <GameCard
                key={index}
                title={game.title}
                description={game.description}
                image={game.image}
                tag={game.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsoleSection />
      <FeatureHighlights />
      <Footer />
    </div>
  );
};

export default Index;