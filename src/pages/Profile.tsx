import { User, Package, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>

                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-3 h-4 w-4" />
                    Profile Information
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/track-order'}
                  >
                    <Package className="mr-3 h-4 w-4" />
                    Track Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="mr-3 h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Edit Your Profile</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First" defaultValue="John" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last" defaultValue="Doe" />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@gmail.com" 
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Address" 
                      defaultValue="No. 33 Jalan Penang, 11900, Bayan Lepas"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Password Changes</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/track-order'}
                  >
                    View All Orders
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt="PlayStation 5"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">PlayStation5 Console - Physical Slim Edition</h4>
                      <p className="text-sm text-muted-foreground">Order #PS5-2024-001</p>
                      <p className="text-sm text-green-600 font-medium">Shipped</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">RM 2499.00</p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.location.href = '/track-order'}
                      >
                        Track Order
                      </Button>
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

export default Profile;