import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-20 mx-auto px-5">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Single Floating Circle */}
      <div className="absolute right-1/4 top-20 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle 
            className="animate-float-slow" 
            cx="50" 
            cy="50" 
            r="20" 
            fill="#FFD700" 
            fillOpacity="0.3" 
          />
        </svg>
      </div>
      
      {/* Wave SVG Background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFD700" 
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Manage Tickets Smarter.{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Track Progress Faster.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A modern platform to create, assign, and manage tickets seamlessly with your team.
              Streamline your workflow and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-glow">
              <a href="/signup">Get Started</a>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative animate-fade-in   max-w[100px]">
           <img src="/side.svg" alt="ticket-img"/>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Hero;