import { Activity, Bell, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Tracking",
      description:
        "Stay updated with live ticket status and team performance. Monitor progress at a glance.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Get instant alerts for ticket updates, assignments, and deadlines. Never miss a beat.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with built-in comments, mentions, and file sharing.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Gain insights with powerful analytics and reports to optimize your workflow.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Powerful Features for Modern Teams
            
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage tickets efficiently and scale with your team
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-border hover:shadow-lg transition-smooth hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
