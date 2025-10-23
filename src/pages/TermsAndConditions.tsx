import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to Exclusive Gaming Platform. These terms and conditions outline the rules and regulations 
              for the use of our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Account Terms</h2>
            <p>
              You must be 13 years or older to use this service. You are responsible for maintaining the security 
              of your account and password. We cannot and will not be liable for any loss or damage from your 
              failure to comply with this security obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that 
              product descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
            <p>
              All prices are in USD unless otherwise stated. Payment must be received by us before the dispatch 
              of your order. We accept various payment methods including credit cards, debit cards, and other 
              electronic payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
            <p>
              Delivery times may vary depending on your location. We are not responsible for delays caused by 
              shipping carriers or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
            <p>
              Products may be returned within 30 days of purchase for a full refund, provided they are in 
              original condition with all packaging and accessories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Exclusive Gaming Platform be liable for any indirect, incidental, special, 
              consequential or punitive damages arising out of or related to your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting to the website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
