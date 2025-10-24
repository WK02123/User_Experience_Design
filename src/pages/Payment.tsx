import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "bank">("cash");

  const subtotal = getTotalPrice();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed",
      description: "Your order has been placed successfully!",
    });
    navigate("/track-order");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Billing Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First</Label>
                      <Input id="firstName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last</Label>
                      <Input id="lastName" required />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">Town/City</Label>
                      <Input id="city" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cash" 
                        checked={paymentMethod === "cash"}
                        onCheckedChange={() => setPaymentMethod("cash")}
                      />
                      <Label htmlFor="cash" className="cursor-pointer">Cash On Delivery</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="bank" 
                        checked={paymentMethod === "bank"}
                        onCheckedChange={() => setPaymentMethod("bank")}
                      />
                      <Label htmlFor="bank" className="cursor-pointer flex items-center gap-2">
                        Bank
                        <div className="flex items-center gap-1">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-4" />
                        </div>
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Total</h3>
                  
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3 mb-6 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SubTotal</span>
                      <span>RM{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `RM${shipping}`}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>RM{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
