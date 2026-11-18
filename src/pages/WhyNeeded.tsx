import { AlertTriangle, Droplets, ThermometerSun, HelpCircle, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import challengesImage from "@/assets/farming-challenges.jpg";
import irrigationImage from "@/assets/smart-irrigation.jpg";

const challenges = [
  {
    icon: Droplets,
    title: "Water Wastage",
    description: "Many farmers water their crops based on guesswork, often using too much water and wasting this precious resource.",
    traditional: "Watering based on habit or guesswork",
    smart: "Watering based on actual soil moisture needs",
  },
  {
    icon: ThermometerSun,
    title: "Unpredictable Weather",
    description: "Sudden weather changes can damage crops, but farmers often don't get timely warnings to take protective action.",
    traditional: "No advance warning, reactive approach",
    smart: "Early alerts to prepare for weather changes",
  },
  {
    icon: HelpCircle,
    title: "Limited Expert Access",
    description: "Getting expert advice on crop health, soil conditions, or pest control is difficult for many rural farmers.",
    traditional: "Wait for experts or rely on general knowledge",
    smart: "Instant guidance based on your specific conditions",
  },
  {
    icon: TrendingDown,
    title: "Low Productivity",
    description: "Without proper data about soil, water, and crop needs, farmers often get lower yields than possible.",
    traditional: "One-size-fits-all farming approach",
    smart: "Customized suggestions for better results",
  },
];

const WhyNeeded = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${challengesImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Why Smart Farming is Needed
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Understanding the real challenges farmers face today and how technology 
            can provide meaningful solutions.
          </p>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent" />
              <span className="text-primary font-medium">The Reality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Challenges Faced by Farmers Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Farming has always been challenging, but today's farmers face even 
              more difficulties. Climate change brings unpredictable weather, water 
              resources are becoming scarcer, and market pressures demand higher 
              productivity. Many farmers work incredibly hard but still struggle 
              to get the results they deserve.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The good news? Many of these challenges can be addressed with better 
              information and timely guidance. That's exactly what smart farming 
              aims to provide.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Common Problems We Address
            </h2>
            <p className="text-lg text-muted-foreground">
              These are real issues that affect millions of farmers. Let's look at 
              how traditional methods compare with smart farming approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="p-4 bg-destructive/5">
                      <p className="text-xs font-medium text-destructive mb-1">Traditional Way</p>
                      <p className="text-sm text-muted-foreground">{challenge.traditional}</p>
                    </div>
                    <div className="p-4 bg-primary/5">
                      <p className="text-xs font-medium text-primary mb-1">Smart Farming Way</p>
                      <p className="text-sm text-muted-foreground">{challenge.smart}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={irrigationImage}
                alt="Smart irrigation system providing water efficiently"
                className="rounded-xl shadow-card w-full"
              />
            </div>
            <div>
              <span className="text-primary font-medium">The Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Technology as a Helpful Friend
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Smart farming isn't about replacing farmers with machines. It's 
                  about giving farmers better tools and information to make their 
                  own decisions more confidently.
                </p>
                <p>
                  Think of it like having a knowledgeable friend who can check your 
                  soil, watch the weather, and give you advice – but this friend is 
                  available 24/7 and never gets tired.
                </p>
                <p>
                  With Ujjwal Krishi, we want to make this kind of support available 
                  to every farmer, regardless of their technical background or 
                  financial situation.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link to="/features">
                  See Our Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              The Impact of Better Farming
            </h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto">
              When farmers get the right information at the right time, the results speak for themselves.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "30%", label: "Less Water Usage" },
              { value: "25%", label: "Better Crop Yields" },
              { value: "20%", label: "Cost Reduction" },
              { value: "40%", label: "Less Crop Loss" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background/10 rounded-xl backdrop-blur-sm">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-primary-foreground/60 mt-8">
            *Potential improvements based on smart farming adoption studies
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WhyNeeded;
