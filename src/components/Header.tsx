import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Exclusives
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/home')} className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </button>
            <button onClick={() => navigate('/playstation4')} className="text-foreground hover:text-primary font-medium transition-colors">
              PlayStation 4
            </button>
            <button onClick={() => navigate('/playstation')} className="text-foreground hover:text-primary font-medium transition-colors">
              PlayStation 5
            </button>
            <button onClick={() => navigate('/nintendo-switch')} className="text-foreground hover:text-primary font-medium transition-colors">
              Nintendo Switch
            </button>
            <button onClick={() => navigate('/games')} className="text-foreground hover:text-primary font-medium transition-colors">
              Games
            </button>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-muted"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-muted"
              onClick={() => navigate('/profile')}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-muted"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;