const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Exclusives</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Sign In</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Create Account</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Manage Profile</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Latest Games</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Console Deals</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
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