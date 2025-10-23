import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
          <div>
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/profile" className="hover:text-background transition-colors">My Account</Link></li>
              <li><Link to="/track-order" className="hover:text-background transition-colors">Order Tracking</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/terms-and-conditions" className="hover:text-background transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Exclusives Gaming Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;