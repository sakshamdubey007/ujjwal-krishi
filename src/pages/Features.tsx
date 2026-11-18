import { Droplets, Leaf, Cloud, Brain, Bell, BarChart, Sprout, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import sensorsImage from "@/assets/smart-sensors.jpg";
import irrigationImage from "@/assets/smart-irrigation.jpg";

const features = [
  {
    icon: Droplets,
    title: "Smart Irrigation Guidance",
    description: "Know exactly when your crops need water based on soil moisture levels. No more guessing – save water and improve crop health.",
    benefits: ["Save up to 30% water", "Prevent over-watering damage", "Reduce water bills"],
  },
  {
    icon: Leaf,
    title: "Soil Health Awareness",
    description: "Understand what your soil contains and what it needs. Get suggestions for maintaining healthy, productive soil.",
    benefits: ["Know soil moisture levels", "Understand nutrient needs", "Improve soil quality over time"],
  },
  {
    icon: Cloud,
    title: "Weather-Aware Farming",
    description: "Stay prepared for weather changes with timely updates. Protect your crops from unexpected rain, heat, or cold.",
    benefits: ["Early weather warnings", "Plan farm activities better", "Reduce crop damage"],
  },
  {
    icon: Brain,
    title: "AI-Powered Suggestions",
    description: "Our intelligent system analyzes data and provides personalized recommendations in simple, easy-to-understand language.",
    benefits: ["Personalized advice", "Simple language", "Actionable guidance"],
  },
  {
    icon: Sprout,
    title: "Crop-Specific Guidance",
    description: "Different crops have different needs. Get suggestions tailored to what you're growing for best results.",
    benefits: ["Customized recommendations", "Optimal growing conditions", "Better harvest timing"],
  },
  {
    icon: Bell,
    title: "Timely Alerts",
    description: "Receive notifications when action is needed – whether it's time to water, prepare for weather, or check on your crops.",
    benefits: ["Never miss important tasks", "Act at the right time", "Peace of mind"],
  },
  {
    icon: BarChart,
    title: "Easy-to-Read Information",
    description: "All data and suggestions are presented in a clear, visual format that anyone can understand at a glance.",
    benefits: ["No technical jargon", "Visual displays", "Quick understanding"],
  },
  {
    icon: Shield,
    title: "Sustainable Practices",
    description: "Our recommendations promote eco-friendly farming methods that are good for your farm and the environment.",
    benefits: ["Environmentally friendly", "Long-term soil health", "Responsible farming"],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sensorsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Features of Ujjwal Krishi
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Simple, practical tools designed to help farmers make better decisions 
            and improve their farming outcomes.
          </p>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Ujjwal Krishi Can Do For You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each feature is designed with one goal in mind: making farming easier 
              and more successful. Here's how we help you grow better crops with 
              less effort.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Feature */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Key Highlight</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Simple Language, Clear Guidance
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We understand that complex technical terms can be confusing. 
                  That's why every piece of information in Ujjwal Krishi is 
                  presented in simple, everyday language.
                </p>
                <p>
                  Instead of showing you graphs and numbers that require 
                  interpretation, we give you clear, actionable advice like:
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    "Your soil is dry. Consider watering your crops today."
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    "Rain expected tomorrow. You can skip watering today."
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    "Temperature dropping tonight. Cover sensitive plants."
                  </li>
                </ul>
                <p>
                  No technical expertise required – just practical advice you 
                  can act on immediately.
                </p>
              </div>
            </div>
            <div>
              <img
                src={irrigationImage}
                alt="Smart irrigation providing precise water management"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Farm Smarter?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            These features are designed to work together, providing you with 
            comprehensive support for all your farming needs.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
