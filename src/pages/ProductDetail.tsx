import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in a real app, this would come from an API or context
  const product = {
    id: id || "1",
    name: "PlayStation 5 Digital Edition",
    description: "All-digital PS5 console with Ultra-High Speed SSD and integrated I/O for a streamlined gaming experience.",
    price: "RM 2169",
    image: "/placeholder.svg"
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace('RM ', '').replace(',', '')),
        image: product.image,
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart`,
    });
    navigate('/cart');
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
