import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 10 tickets per month",
        "Basic ticket tracking",
        "2 team members",
        "Email support",
        "7-day history",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro Plan",
      price: "$29",
      period: "per month",
      description: "For growing teams",
      features: [
        "Unlimited tickets",
        "Advanced analytics",
        "Up to 20 team members",
        "Priority support",
        "Unlimited history",
        "Custom workflows",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Advanced security",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Simple,
           
              Transparent Pricing
           
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`gradient-card border-border hover:shadow-lg transition-smooth hover:-translate-y-1 relative animate-fade-in-up ${
                plan.popular ? "border-primary border-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              <CardHeader className="text-center p-6 space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <div className="pt-4">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
