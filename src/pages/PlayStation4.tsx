import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PlayStation4 = () => {
  const ps4Models = [
    {
      title: "PlayStation 4 Pro",
      description: "Experience gaming in breathtaking 4K quality with enhanced graphics and improved performance.",
      price: "$399.99",
      image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=300&fit=crop",
      tag: "4K GAMING"
    },
    {
      title: "PlayStation 4 Slim",
      description: "Compact design with all the power of PS4 in a sleek, slimmer package for modern living spaces.",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tag: "COMPACT"
    }
  ];

  const accessories = [
    {
      title: "DualShock 4 Wireless Controller",
      description: "Precision control with revolutionary features including responsive analog sticks.",
      price: "$64.99",
      image: "https://images.unsplash.com/photo-1592840496693-26d035b52b48?w=300&h=200&fit=crop"
    },
    {
      title: "PlayStation Gold Wireless Headset",
      description: "Premium wireless audio with virtual 7.1 surround sound for immersive gaming.",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop"
    },
    {
      title: "PlayStation Camera",
      description: "Advanced motion sensing for PlayStation VR and gesture controls.",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop"
    },
    {
      title: "Vertical Stand",
      description: "Keep your PS4 Pro or PS4 Slim stable in vertical position to save space.",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1564298429-c582451a6fa8?w=300&h=200&fit=crop"
    },
    {
      title: "DualShock 4 Charging Station",
      description: "Charge two DualShock 4 controllers simultaneously without the console.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1564298429-c582451a6fa8?w=300&h=200&fit=crop"
    },
    {
      title: "PlayStation VR Bundle",
      description: "Enter new worlds with PlayStation VR virtual reality gaming system.",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                GREATNESS AWAITS
              </h1>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Discover incredible games and entertainment with the PlayStation 4 console family.
              </p>
              <Button className="gaming-button bg-white text-primary hover:bg-white/90">
                Explore Games
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&h=400&fit=crop"
                alt="PlayStation 4 Console"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PS4 Console Models */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">PlayStation 4 Console</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ps4Models.map((model, index) => (
              <div key={index} className="gaming-card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={model.image}
                    alt={model.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {model.tag && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {model.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{model.price}</span>
                    <Button className="gaming-button bg-primary hover:bg-primary/90 text-primary-foreground">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PlayStation Accessories */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">PlayStation 4 Accessories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Complete your gaming setup with official PlayStation 4 accessories designed for optimal performance.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory, index) => (
              <div key={index} className="gaming-card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={accessory.image}
                    alt={accessory.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{accessory.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{accessory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{accessory.price}</span>
                    <Button size="sm" className="gaming-button bg-primary hover:bg-primary/90 text-primary-foreground">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlayStation4;