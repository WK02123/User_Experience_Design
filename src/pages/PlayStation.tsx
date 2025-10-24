import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import ps5Image from "@/assets/ps5-console.jpg";

const PlayStation = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: { title: string; price: string; image: string }) => {
    addToCart({
      id: product.title.toLowerCase().replace(/\s+/g, '-'),
      name: product.title,
      price: parseFloat(product.price.replace('RM ', '').replace(',', '')),
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    });
    navigate('/cart');
  };
  const ps5Models = [
    {
      title: "PlayStation 5 Console",
      description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback.",
      price: "RM 2499",
      image: "/placeholder.svg",
      tag: "POPULAR"
    },
    {
      title: "PlayStation 5 Digital Edition",
      description: "All-digital PS5 console with Ultra-High Speed SSD and integrated I/O for a streamlined gaming experience.",
      price: "RM 2169", 
      image: "/placeholder.svg",
      tag: "DIGITAL"
    }
  ];

  const accessories = [
    {
      title: "Access Controller",
      description: "Introducing the Access controller for PS5, a customisable and adaptive controller kit to make gaming more accessible to disabled gamers.",
      price: "RM 2169",
      image: "/placeholder.svg"
    },
    {
      title: "HD Camera",
      description: "Quickly create a recording or a broadcast of yourself and your gameplay",
      price: "RM 2169",
      image: "/placeholder.svg"
    },
    {
      title: "Media Remote Control",
      description: "Quickly navigate media with built-in play/pause, fast forward and fast reverse buttons. Seamless console compatibility",
      price: "RM 2169",
      image: "/placeholder.svg"
    },
    {
      title: "DualSense Charging Station",
      description: "Charge up to two DualSense wireless controllers simultaneously without having to connect them to your PlayStation 5 console.",
      price: "RM 2169",
      image: "/placeholder.svg"
    },
    {
      title: "Pulse Elite Wireless Headset",
      description: "Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery.",
      price: "RM 2169",
      image: "/placeholder.svg"
    },
    {
      title: "Pulse Explore Wireless Earbuds",
      description: "Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.",
      price: "RM 2169",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden bg-gradient-to-r from-playstation-blue to-playstation-blue/80">
        <div className="absolute inset-0 bg-gradient-to-r from-playstation-blue/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                SPECTACULAR VISUALS AT LIGHTNING SPEED
              </h1>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Experience the next generation of gaming with the PlayStation 5 console.
              </p>
              <Button className="gaming-button bg-white text-playstation-blue hover:bg-white/90">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <img 
                src={ps5Image}
                alt="PlayStation 5 Console"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PS5 Console Models */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">PlayStation 5 Console</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ps5Models.map((model, index) => (
              <div key={index} className="gaming-card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={model.image}
                    alt={model.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {model.tag && (
                    <div className="absolute top-4 left-4 bg-playstation-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {model.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-playstation-blue">{model.price}</span>
                    <Button 
                      className="gaming-button bg-playstation-blue hover:bg-playstation-blue/90 text-white"
                      onClick={() => handleAddToCart(model)}
                    >
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
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">PlayStation 5 Accessories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enhance your gaming experience with official PlayStation accessories designed for the PS5 console.
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
                    <span className="font-bold text-playstation-blue">{accessory.price}</span>
                    <Button 
                      size="sm" 
                      className="gaming-button bg-playstation-blue hover:bg-playstation-blue/90 text-white"
                      onClick={() => handleAddToCart(accessory)}
                    >
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

export default PlayStation;