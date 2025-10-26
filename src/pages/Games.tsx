import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { products } from "@/data/products";

const Games = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent, game: { id: string; title: string; price: string; image: string }) => {
    e.stopPropagation();
    addToCart({
      id: game.id,
      name: game.title,
      price: parseFloat(game.price.replace('RM ', '')),
      image: game.image,
    });
    toast({
      title: "Added to cart",
      description: `${game.title} has been added to your cart`,
    });
    navigate('/cart');
  };

  // Filter games from products
  const ps5Games = products.filter(product => product.type === 'game' && product.category === 'game');

  const ps4Games: any[] = [];

  const nintendoGames: any[] = [];

  const GameGrid = ({ games, title }: { games: any[], title: string }) => {
    if (games.length === 0) return null;
    
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className="group hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/${game.id}`)}
            >
              <CardContent className="p-4">
                <div className="aspect-[3/4] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2 line-clamp-2">{game.title}</h3>
                <p className="text-lg font-bold text-primary mb-3">{game.price}</p>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={(e) => handleAddToCart(e, game)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Games</h1>
          <p className="text-lg text-muted-foreground">
            Discover the latest and greatest games for all your favorite consoles
          </p>
        </div>

        <GameGrid games={ps5Games} title="PlayStation 5 Games" />
        <GameGrid games={ps4Games} title="PlayStation 4 Games" />
        <GameGrid games={nintendoGames} title="Nintendo Games" />
      </div>

      <Footer />
    </div>
  );
};

export default Games;