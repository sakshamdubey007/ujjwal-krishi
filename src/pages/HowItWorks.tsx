import { Database, Cpu, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import sensorsImage from "@/assets/smart-sensors.jpg";
import techImage from "@/assets/tech-simple.jpg";

const steps = [
  {
    number: "1",
    icon: Database,
    title: "Data Collection",
    description: "Information about your farm is gathered. This includes details like how wet or dry your soil is, what the weather is like, and what crops you're growing.",
    details: "This can be done through simple sensors placed in your field, or by entering basic information yourself. The system only needs the essentials – nothing complicated.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "Smart Analysis",
    description: "Our AI system studies all the collected information. It looks at patterns and compares your situation with farming best practices.",
    details: "Think of it like a very knowledgeable farming expert who instantly reviews your farm's condition and knows exactly what different crops need to grow well.",
  },
  {
    number: "3",
    icon: MessageSquare,
    title: "Simple Suggestions",
    description: "Based on the analysis, you receive clear, easy-to-understand guidance. No technical jargon – just practical advice you can act on.",
    details: "For example: 'Your tomato plants need water today' or 'Rain is coming tomorrow – no need to irrigate.' Simple, direct, and helpful.",
  },
  {
    number: "4",
    icon: CheckCircle,
    title: "Better Results",
    description: "By following the guidance, you save resources, protect your crops, and improve your yields over time.",
    details: "The system learns and improves its suggestions based on what works best for your specific conditions, making the advice more accurate over time.",
  },
];

const HowItWorks = () => {
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
            How Ujjwal Krishi Works
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            A simple, step-by-step explanation of how we help farmers make better 
            decisions – no technical background needed to understand.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Simple Journey from Farm to Guidance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imagine having a helpful assistant who watches over your farm 24 hours 
              a day, 7 days a week. This assistant notices when your soil is getting 
              dry, knows when rain is coming, and tells you exactly what your crops 
              need. That's essentially what Ujjwal Krishi does – here's how:
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-16 bg-primary/20 hidden md:block" />
                  )}
                  
                  <div className="bg-card rounded-2xl shadow-card p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-nature flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <div className="bg-secondary rounded-lg p-4">
                          <p className="text-sm text-muted-foreground italic">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Explanation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={techImage}
                alt="Farmer using smartphone for smart farming guidance"
                className="rounded-xl shadow-card w-full"
              />
            </div>
            <div>
              <span className="text-primary font-medium">User-Friendly Design</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Easy to Use, Easy to Understand
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You don't need to understand how AI works or know anything about 
                  sensors and technology. Ujjwal Krishi handles all the complex 
                  stuff in the background.
                </p>
                <p>
                  What you see is simple: clear messages telling you what's 
                  happening with your farm and what you can do to improve things. 
                  It's like having a conversation with a farming expert.
                </p>
                <p>
                  All you need to do is check the guidance and decide if you want 
                  to follow the suggestions. The choice is always yours – we just 
                  help you make informed decisions.
                </p>
              </div>
              <Button asChild className="mt-6">
                <Link to="/technology">
                  Learn About the Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            In Simple Words
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Ujjwal Krishi collects information about your farm, thinks about 
              what's best for your crops, and tells you what to do in words you 
              can easily understand. It's like having a smart farming friend who 
              never sleeps and always wants to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                <Link to="/features">See All Features</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-green-700 text-white hover:bg-green-800">
                <Link to="/impact">Explore the Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
