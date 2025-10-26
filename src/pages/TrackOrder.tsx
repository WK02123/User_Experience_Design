import { Check, Package, Truck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const TrackOrder = () => {
  const trackingSteps = [
    {
      status: "Order Confirmed",
      date: "Wed, 17th Jan",
      completed: true,
      icon: Check
    },
    {
      status: "Shipped", 
      date: "Wed, 17th Jan",
      completed: true,
      icon: Package
    },
    {
      status: "Out For Delivery",
      date: "Expected by Mon 30th",
      completed: false,
      icon: Truck
    },
    {
      status: "Delivered",
      date: "",
      completed: false,
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8 text-primary">Track Order</h1>

        {/* Order Tracking Timeline */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-8">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className={`text-sm font-medium text-center ${
                      step.completed ? 'text-green-600' : 'text-muted-foreground'
                    }`}>
                      {step.status}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.date}
                    </p>
                    {index < trackingSteps.length - 1 && (
                      <div className={`absolute h-0.5 w-full top-6 left-1/2 -z-10 ${
                        step.completed && trackingSteps[index + 1].completed 
                          ? 'bg-green-500' 
                          : 'bg-muted'
                      }`} style={{ transform: 'translateX(-50%)' }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="PlayStation 5 Console"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">PlayStation5 Console - Physical Slim Edition</h3>
                  <p className="text-sm text-muted-foreground mt-1">Qty: 1</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">RM 2499.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Payment & Delivery */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Payment</h3>
                <p className="text-sm text-muted-foreground">Visa •••• •••• •••• 1156</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  No 33, Jalan Penang<br />
                  11900, Bayan Lepas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount</span>
                    <span>RM 249.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>0.00</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>RM 2499.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder;