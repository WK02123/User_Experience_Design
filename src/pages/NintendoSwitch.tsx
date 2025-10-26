import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { getProductsByType } from "@/data/products";

const NintendoSwitch = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent, product: { id: string; name?: string; title: string; price: string; image: string }) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name || product.title,
      price: parseFloat(product.price.replace('RM ', '').replace(',', '')),
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name || product.title} has been added to your cart`,
    });
    navigate('/cart');
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const consoles = getProductsByType('nintendo', 'console');
  const joycons = getProductsByType('nintendo', 'accessory');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <BackButton />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Nintendo Switch</h1>
              <p className="text-xl mb-8 opacity-90">
                Play at home or on the go with the gaming system that adapts to your lifestyle.
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Explore Now
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Nintendo Switch Console" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Console Models */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nintendo Console</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consoles.map((console) => (
              <Card 
                key={console.id} 
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductClick(console.id)}
              >
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={console.image} 
                      alt={console.name || console.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{console.name || console.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{console.description}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{console.price}</p>
                  <Button 
                    className="w-full"
                    onClick={(e) => handleAddToCart(e, console)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Joy-Con Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Joy-Con</h2>
            <p className="text-lg text-muted-foreground">
              Bring your games to life with intuitive controls and HD Rumble technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {joycons.map((joycon) => (
              <Card 
                key={joycon.id} 
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductClick(joycon.id)}
              >
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={joycon.image} 
                      alt={joycon.name || joycon.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{joycon.name || joycon.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{joycon.description}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{joycon.price}</p>
                  <Button 
                    className="w-full"
                    onClick={(e) => handleAddToCart(e, joycon)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share the Fun Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Share the Fun</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pass a Joy-Con controller to a friend for instant multiplayer gaming anywhere, anytime.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NintendoSwitch;