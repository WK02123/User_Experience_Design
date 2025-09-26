import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NintendoSwitch = () => {
  const consoles = [
    {
      id: 1,
      name: "Nintendo Switch OLED Model",
      price: "RM 1,499",
      image: "/placeholder.svg",
      colors: ["Neon Blue/Neon Red", "White"]
    },
    {
      id: 2,
      name: "Nintendo Switch",
      price: "RM 1,299", 
      image: "/placeholder.svg",
      colors: ["Neon Blue/Neon Red", "Gray"]
    },
    {
      id: 3,
      name: "Nintendo Switch Lite",
      price: "RM 899",
      image: "/placeholder.svg", 
      colors: ["Yellow", "Coral", "Turquoise", "Gray", "Blue"]
    }
  ];

  const joycons = [
    {
      id: 1,
      name: "Joy-Con (L)/(R)",
      price: "RM 349",
      color: "Neon Blue/Neon Red",
      image: "/placeholder.svg"
    },
    {
      id: 2, 
      name: "Joy-Con (L)/(R)",
      price: "RM 349",
      color: "Neon Pink/Neon Green", 
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
              <Card key={console.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={console.image} 
                      alt={console.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{console.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{console.price}</p>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Available Colors:</p>
                    <div className="flex flex-wrap gap-1">
                      {console.colors.map((color, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
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
              <Card key={joycon.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={joycon.image} 
                      alt={joycon.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{joycon.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{joycon.color}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{joycon.price}</p>
                  <Button className="w-full">Add to Cart</Button>
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