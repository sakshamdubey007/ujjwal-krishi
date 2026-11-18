import { Target, Lightbulb, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-farming.jpg";
import sensorsImage from "@/assets/smart-sensors.jpg";

const values = [
  {
    icon: Heart,
    title: "Farmer-First Approach",
    description: "Every decision we make starts with one question: How does this help the farmer?",
  },
  {
    icon: Lightbulb,
    title: "Simple Innovation",
    description: "We believe technology should be easy to use, not complicated or intimidating.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We aim to build a supportive community where farmers can grow together.",
  },
  {
    icon: Target,
    title: "Practical Solutions",
    description: "Our focus is on real-world problems with solutions that actually work.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
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
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            About Ujjwal Krishi
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            A smart farming initiative born from the desire to bridge the gap between 
            modern technology and traditional agriculture.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Where It All Started
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ujjwal Krishi began as an academic project with a simple vision: 
                  to help farmers make better decisions using technology that they 
                  can actually understand and use.
                </p>
                <p>
                  As students of Computer Science and Artificial Intelligence, we 
                  saw the potential of AI to solve real-world problems. But we also 
                  noticed that most farming technologies were either too expensive, 
                  too complicated, or not designed with the average farmer in mind.
                </p>
                <p>
                  That's when we decided to create something different – a smart 
                  farming guidance system that speaks the farmer's language, 
                  understands their challenges, and provides practical solutions 
                  without requiring any technical expertise.
                </p>
              </div>
            </div>
            <div>
              <img
                src={sensorsImage}
                alt="Smart farming technology in action"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Purposes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Three Important Purposes
            </h2>
            <p className="text-lg text-muted-foreground">
              Ujjwal Krishi serves three equally important purposes that guide 
              everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Academic Project
                </h3>
                <p className="text-muted-foreground">
                  This project was developed as part of our college education, 
                  demonstrating how theoretical knowledge can be applied to solve 
                  real-world agricultural challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Future Startup
                </h3>
                <p className="text-muted-foreground">
                  We envision Ujjwal Krishi growing into a full-fledged startup 
                  that can reach and benefit millions of farmers across India 
                  and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Farmer Education
                </h3>
                <p className="text-muted-foreground">
                  We want to create awareness about smart farming practices and 
                  help farmers understand how technology can make their work 
                  easier and more profitable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These values shape how we think, design, and build Ujjwal Krishi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            "To empower every farmer with accessible, understandable, and practical 
            smart farming guidance that helps them conserve resources, increase 
            productivity, and build a sustainable future for agriculture."
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
