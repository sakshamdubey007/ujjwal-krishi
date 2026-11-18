import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sprout, Sun, TrendingUp, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-farming.jpg";
import sensorsImage from "@/assets/smart-sensors.jpg";
import irrigationImage from "@/assets/smart-irrigation.jpg";

const benefits = [
  {
    icon: Droplets,
    title: "Save Water",
    description: "Smart irrigation helps use water only when needed, reducing waste and costs.",
  },
  {
    icon: TrendingUp,
    title: "Better Yields",
    description: "Make informed decisions to grow healthier crops and increase productivity.",
  },
  {
    icon: Sun,
    title: "Weather Awareness",
    description: "Get timely updates about weather to protect your crops from damage.",
  },
  {
    icon: Users,
    title: "Farmer-Friendly",
    description: "Designed for everyone – no technical expertise needed to use our guidance.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-6 w-6 text-primary-foreground" />
              <span className="text-primary-foreground/90 font-medium">
                Smart Farming Initiative
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ujjwal Krishi
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-primary-foreground/90">
                Smart Farming with AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-2xl">
              Empowering farmers with simple, technology-driven guidance to save water, 
              improve crop health, and make better farming decisions – all without needing 
              technical knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                <Link to="/features">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-green-700 text-white hover:bg-green-800">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ujjwal Krishi */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Ujjwal Krishi?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ujjwal Krishi is a smart farming initiative that uses the power of 
              Artificial Intelligence (AI) and smart sensors to help farmers make 
              better decisions. Think of it as a helpful guide that tells you when 
              to water your crops, what your soil needs, and how to protect your 
              plants from bad weather – all in simple language.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={sensorsImage}
                alt="Smart farming sensors monitoring soil and crops"
                className="rounded-xl shadow-card w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Technology That Understands Farming
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine modern technology with traditional farming wisdom. Our 
                system collects information about your soil, weather, and crops, 
                then gives you easy-to-understand suggestions to help your farm thrive.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You don't need to be a computer expert – our guidance is written in 
                simple words that any farmer can understand and act upon.
              </p>
              <Button asChild variant="outline">
                <Link to="/how-it-works">
                  See How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Ujjwal Krishi Helps Farmers
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mission is simple: help farmers work smarter, not harder. Here's 
              what you can expect.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Irrigation Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary font-medium">Featured Capability</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Smart Irrigation Guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Water is precious, and using it wisely is essential for sustainable 
                farming. Ujjwal Krishi helps you understand exactly when your crops 
                need water, preventing both over-watering and under-watering.
              </p>
              <ul className="space-y-3">
                {[
                  "Know when soil moisture is low",
                  "Avoid water waste during rainy periods",
                  "Get alerts for optimal watering times",
                  "Save money on water bills",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Sprout className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/features">
                  View All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={irrigationImage}
                alt="Smart irrigation system saving water in agricultural field"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Explore Smart Farming?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            Discover how Ujjwal Krishi can help you farm more efficiently and 
            sustainably. Learn about our features, understand the technology, 
            or reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link to="/features">Explore Features</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-green-700 text-white hover:bg-green-800">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
