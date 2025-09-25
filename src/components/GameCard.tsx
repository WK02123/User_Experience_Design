interface GameCardProps {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

const GameCard = ({ title, description, image, tag }: GameCardProps) => {
  return (
    <div className="gaming-card group cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {tag && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md">
            {tag}
          </div>
        )}
        <div className="hero-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;