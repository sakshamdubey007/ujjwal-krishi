import { Droplets, TrendingUp, Leaf, Clock, DollarSign, Heart, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import impactImage from "@/assets/impact-sustainable.jpg";
import irrigationImage from "@/assets/smart-irrigation.jpg";

const impacts = [
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Smart irrigation guidance helps farmers use water only when needed, reducing waste by up to 30%. Every drop saved helps both the farmer and the environment.",
    stat: "30%",
    statLabel: "Water Savings Potential",
  },
  {
    icon: TrendingUp,
    title: "Improved Crop Yields",
    description: "With better timing for watering and care, crops grow healthier and produce more. Farmers can see significant improvements in their harvest quality and quantity.",
    stat: "25%",
    statLabel: "Yield Improvement Potential",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Less water usage, fewer crop losses, and better resource management all add up to lower farming costs. This means more profit for farmers.",
    stat: "20%",
    statLabel: "Cost Reduction Potential",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Instead of constantly checking fields and guessing what's needed, farmers can rely on timely alerts and spend their time more productively.",
    stat: "Hours",
    statLabel: "Saved Every Week",
  },
];

const environmentalBenefits = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "By using resources more efficiently, smart farming promotes agricultural practices that can be maintained for generations.",
  },
  {
    icon: Globe,
    title: "Environmental Protection",
    description: "Reduced water waste and optimized resource use mean less strain on natural resources and ecosystems.",
  },
  {
    icon: Heart,
    title: "Healthier Produce",
    description: "Crops grown with optimal care tend to be healthier and more nutritious for consumers.",
  },
  {
    icon: Users,
    title: "Community Benefit",
    description: "When individual farmers succeed, entire communities benefit from improved food security and economic stability.",
  },
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${impactImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            The Impact of Smart Farming
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Discover how Ujjwal Krishi creates positive change for farmers, 
            communities, and the environment.
          </p>
        </div>
      </section>

      {/* Key Impacts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Benefits for Real Farmers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smart farming isn't just about technology – it's about making a real 
              difference in farmers' lives. Here's what farmers can expect when they 
              embrace smarter farming practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <impact.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">{impact.stat}</p>
                      <p className="text-xs text-muted-foreground">{impact.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            *Potential improvements based on smart farming adoption studies and industry research
          </p>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Beyond the Farm</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Environmental & Community Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The benefits of smart farming extend far beyond individual farms. 
                When we use resources wisely and farm sustainably, everyone benefits 
                – from local communities to the global environment.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {environmentalBenefits.map((benefit, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg shadow-soft">
                    <benefit.icon className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={irrigationImage}
                alt="Sustainable farming practices with efficient irrigation"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Vision for Agriculture
            </h2>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                "We believe that every farmer deserves access to the knowledge and 
                tools that can help them succeed. By making smart farming simple and 
                accessible, we aim to create a future where agriculture is more 
                productive, sustainable, and rewarding for everyone involved."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of the Change
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            Every step toward smarter farming is a step toward a better future. 
            Join us in transforming agriculture for the better.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
