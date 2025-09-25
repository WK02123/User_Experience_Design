import { Shield, Clock, Trophy } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Shield,
      title: "FREE EXCLUSIVE FEATURES",
      description: "Get exclusive content and early access to games"
    },
    {
      icon: Clock,
      title: "24/7 CUSTOMER SERVICE",
      description: "Round-the-clock support for all your gaming needs"
    },
    {
      icon: Trophy,
      title: "MONEY BACK GUARANTEE",
      description: "30-day satisfaction guarantee on all purchases"
    }
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;