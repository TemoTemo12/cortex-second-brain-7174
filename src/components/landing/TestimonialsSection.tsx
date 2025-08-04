import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  showTestimonials: boolean;
}

export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const [currentSet, setCurrentSet] = useState(0);
  
  const testimonials = [
    {
      quote: "JemalaGPT transformed my research workflow. I can now connect ideas across hundreds of papers instantly.",
      name: "Dr. Elena Rodriguez",
      role: "AI Research Lead at Stanford",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The AI-powered connections are mind-blowing. It's like having a superintelligent research assistant.",
      name: "Marcus Chen",
      role: "Senior Data Scientist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "I've tried every productivity tool out there. Nothing comes close to JemalaGPT's intelligence.",
      name: "Zara Ahmed",
      role: "Tech Entrepreneur",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "My team's collaboration improved 300% after implementing JemalaGPT. It's revolutionary.",
      name: "James Morrison",
      role: "Head of Product",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The visual knowledge maps changed how I understand complex topics. Absolutely game-changing.",
      name: "Dr. Priya Patel",
      role: "Neuroscientist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "JemalaGPT doesn't just store information—it makes me smarter. The insights are incredible.",
      name: "Alex Thompson",
      role: "Strategy Consultant",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "I can't imagine working without it now. It's like having access to my future genius self.",
      name: "Sofia Larsson",
      role: "Creative Director",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The AI suggestions are so accurate, it's almost scary. In the best way possible.",
      name: "David Kim",
      role: "Investment Analyst",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Finally, a second brain that actually thinks. JemalaGPT is the future of knowledge work.",
      name: "Isabella Torres",
      role: "PhD Student",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "My writing quality improved dramatically. It's like having a brilliant co-author.",
      name: "Ryan O'Sullivan",
      role: "Tech Journalist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The cross-domain insights JemalaGPT provides are simply magical. Pure innovation.",
      name: "Dr. Yuki Tanaka",
      role: "Systems Engineer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "It's not just a tool—it's an extension of my mind. Absolutely transformative.",
      name: "Maya Singh",
      role: "Design Researcher",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
    }
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!showTestimonials) return;
    
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % Math.ceil(testimonials.length / 6));
    }, 5000);

    return () => clearInterval(interval);
  }, [showTestimonials, testimonials.length]);

  // Get 6 testimonials for current set
  const getCurrentTestimonials = () => {
    const start = currentSet * 6;
    return testimonials.slice(start, start + 6);
  };

  // Component to render star ratings
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"} 
          />
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
    <Card 
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 p-6 rounded-2xl hover:bg-card/80 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <Quote className="text-primary/20 mb-4" size={24} />
        <StarRating rating={testimonial.rating} />
        
        <p className="text-foreground/90 leading-relaxed mb-6 font-medium">
          "{testimonial.quote}"
        </p>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/10">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
        
        <div className="relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star size={16} className="fill-current" />
              <span>Loved by thousands</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight animate-fade-in">
              Trusted by brilliant minds
              <br />
              <span className="text-primary">everywhere</span>
            </h2>
          </div>
          
          <div className="px-4 max-w-7xl mx-auto">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in transition-all duration-700"
              key={currentSet}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <TestimonialCard 
                  key={`${currentSet}-${index}`}
                  testimonial={testimonial} 
                  index={index}
                />
              ))}
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: Math.ceil(testimonials.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSet 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};