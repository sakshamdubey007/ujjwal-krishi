import { Rocket, Globe, Languages, Users, Lightbulb, Building2, Smartphone, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import visionImage from "@/assets/future-vision.jpg";

const futureGoals = [
  {
    icon: Smartphone,
    title: "Advanced Sensor Integration",
    description: "We plan to develop affordable, easy-to-install sensors that farmers can place in their fields for real-time monitoring of soil and crop conditions.",
    timeline: "Near Future",
  },
  {
    icon: Languages,
    title: "Multiple Language Support",
    description: "Agriculture has no language barriers. We aim to offer our guidance in Hindi, regional languages, and eventually multiple international languages.",
    timeline: "Ongoing",
  },
  {
    icon: Globe,
    title: "Wider Geographic Reach",
    description: "Starting from India, we envision expanding to help farmers across South Asia and eventually other agricultural regions worldwide.",
    timeline: "Long Term",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    description: "Collaborating with agricultural universities, government bodies, and NGOs to reach more farmers and validate our approaches scientifically.",
    timeline: "Medium Term",
  },
  {
    icon: Lightbulb,
    title: "Enhanced AI Capabilities",
    description: "Continuously improving our AI to provide even more accurate and personalized suggestions based on local conditions and farming patterns.",
    timeline: "Ongoing",
  },
  {
    icon: Users,
    title: "Farmer Community Platform",
    description: "Creating a platform where farmers can connect, share experiences, ask questions, and learn from each other's successes.",
    timeline: "Medium Term",
  },
];

const milestones = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "Current",
    items: ["Website development", "Core concept design", "Academic validation"],
  },
  {
    phase: "Phase 2",
    title: "Development",
    status: "Planned",
    items: ["Prototype sensor system", "Mobile app development", "Pilot testing with farmers"],
  },
  {
    phase: "Phase 3",
    title: "Launch",
    status: "Future",
    items: ["Public release", "Multi-language support", "Partnership establishment"],
  },
  {
    phase: "Phase 4",
    title: "Growth",
    status: "Vision",
    items: ["Scale to more regions", "Advanced features", "Sustainable business model"],
  },
];

const Vision = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${visionImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Vision & Future Scope
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Our aspirations for transforming agriculture through accessible 
            technology and farmer-centric innovation.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Long-Term Vision
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We envision a future where every farmer, regardless of their location, 
              education, or resources, has access to smart farming guidance that 
              helps them make the best decisions for their crops, their families, 
              and the environment.
            </p>
            <div className="bg-secondary rounded-2xl p-8">
              <p className="text-lg text-foreground italic">
                "From a college project to a nationwide solution – our journey is 
                about proving that good ideas, when combined with genuine care for 
                farmers, can create meaningful change in agriculture."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We're Working Towards
            </h2>
            <p className="text-lg text-muted-foreground">
              These are the exciting possibilities we're exploring and planning 
              to bring to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureGoals.map((goal, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <goal.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {goal.timeline}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              A realistic path from where we are to where we want to be.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className={`shadow-card ${
                  milestone.status === "Current" ? "border-2 border-primary" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">
                      {milestone.phase}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        milestone.status === "Current"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {milestone.title}
                  </h3>
                  <ul className="space-y-2">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-background/20 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Committed to Sustainability
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              As we grow, our commitment to sustainable and eco-friendly practices 
              remains at the core of everything we do. We believe technology should 
              help preserve our environment for future generations while improving 
              lives today.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
