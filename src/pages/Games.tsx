import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Games = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (game: { title: string; price: string; image: string }) => {
    addToCart({
      id: game.title.toLowerCase().replace(/\s+/g, '-'),
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
  const ps5Games = [
    {
      id: 1,
      title: "PS5 Zero Day Chalking",
      price: "RM 199",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "PS5 Ghost of Tsushima Director's Cut",
      price: "RM 249",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "PS5 God of War Ragnarök",
      price: "RM 299",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "PS5 Gran Turismo 7",
      price: "RM 279",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "PS5 Marvel Spider-Man 2",
      price: "RM 319",
      image: "/placeholder.svg"
    }
  ];

  const ps4Games = [
    {
      id: 1,
      title: "PS4 Horizon Zero Forbidden West Complete Edition",
      price: "RM 189",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "PS4 Ghost of Tsushima Director's Cut",
      price: "RM 199",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "PS4 Gran Turismo 4 Spec II",
      price: "RM 149",
      image: "/placeholder.svg"
    }
  ];

  const nintendoGames = [
    {
      id: 1,
      title: "Mario Kart 8 Deluxe",
      price: "RM 249",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "The Legend of Zelda: Breath of the Wild",
      price: "RM 269",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Pokemon Violet Luigi's Mansion 3",
      price: "RM 229",
      image: "/placeholder.svg"
    }
  ];

  const GameGrid = ({ games, title }: { games: any[], title: string }) => (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="group hover:shadow-lg transition-shadow">
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
                onClick={() => handleAddToCart(game)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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