import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import nintendoImage from "@/assets/nintendo-switch.jpg";
import ps5Image from "@/assets/ps5-console.jpg";

const ConsoleSection = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Nintendo Switch Section */}
      <section className="nintendo-section rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nintendo Switch
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Play at home or on the go with the versatile Nintendo Switch console. 
              Experience your favorite games anywhere, anytime.
            </p>
            <Button 
              onClick={() => navigate('/nintendo-switch')}
              className="gaming-button bg-nintendo-red hover:bg-nintendo-red/90 text-white"
            >
              Console Information →
            </Button>
          </div>
          <div className="relative">
            <img 
              src={nintendoImage} 
              alt="Nintendo Switch console in vibrant blue and red colors"
              className="w-full h-full object-cover rounded-r-2xl lg:rounded-l-none"
            />
          </div>
        </div>
      </section>

      {/* PS5 Section */}
      <section className="playstation-section rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src={ps5Image} 
              alt="PlayStation 5 console and DualSense controller"
              className="w-full h-full object-cover rounded-l-2xl lg:rounded-r-none"
            />
          </div>
          <div className="order-1 lg:order-2 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Introducing the PS5 console and accessories
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experience lightning-fast loading with the PS5 console. 
              Discover a deeper gaming experience with innovative features.
            </p>
            <Button 
              onClick={() => navigate('/playstation')}
              className="gaming-button bg-playstation-blue hover:bg-playstation-blue/90 text-white"
            >
              Read more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsoleSection;