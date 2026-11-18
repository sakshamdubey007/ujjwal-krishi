import { Brain, Wifi, Cloud, Smartphone, HelpCircle, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import techImage from "@/assets/tech-simple.jpg";
import sensorsImage from "@/assets/smart-sensors.jpg";

const techConcepts = [
  {
    icon: Brain,
    title: "Artificial Intelligence (AI)",
    simpleExplanation: "AI is like a very smart helper that can learn from information and make decisions. Imagine a friend who has read thousands of farming books and remembers everything – that's what AI does for Ujjwal Krishi.",
    realExample: "When AI sees that your soil is dry and no rain is expected, it tells you to water your crops. It learned this by studying many successful farming examples.",
    inSimpleWords: "AI = A smart computer brain that learns and gives advice",
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT)",
    simpleExplanation: "IoT means connecting everyday things to the internet so they can share information. In farming, small devices in your field can send updates about soil and weather directly to a system that helps you.",
    realExample: "A small sensor buried in your soil measures wetness and sends that information through the internet. You can then see on your phone whether your crops need water.",
    inSimpleWords: "IoT = Things talking to each other through the internet",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    simpleExplanation: "The 'cloud' is like a powerful computer somewhere else that does all the hard work for you. You don't need an expensive computer – the cloud handles all the complex calculations.",
    realExample: "When Ujjwal Krishi analyzes your farm data, the thinking happens on computers in the cloud. You just see the simple results on your phone or computer.",
    inSimpleWords: "Cloud = A powerful computer that works for you from far away",
  },
  {
    icon: Smartphone,
    title: "Smart Sensors",
    simpleExplanation: "Sensors are small devices that can measure things like temperature, wetness, or light. 'Smart' sensors can automatically send this information to a central system for analysis.",
    realExample: "A moisture sensor in your field measures how wet the soil is. If it's too dry, the system automatically sends you a notification to water your crops.",
    inSimpleWords: "Smart Sensors = Little devices that measure and report automatically",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${techImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Technology in Simple Words
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Don't worry about complicated technical terms. Here, we explain 
            everything in simple language that anyone can understand.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              You Don't Need to Be a Tech Expert
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use some advanced technology to help farmers, but you don't need 
              to understand how it works to benefit from it. Just like you don't 
              need to know how a car engine works to drive – you just need to know 
              how to use the steering wheel and pedals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              However, if you're curious about the technology behind Ujjwal Krishi, 
              this page explains everything in everyday language.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Concepts */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Technologies Explained Simply
            </h2>
            <p className="text-lg text-muted-foreground">
              Here are the main technologies we use, explained as if we were having 
              a friendly conversation.
            </p>
          </div>

          <div className="space-y-8">
            {techConcepts.map((tech, index) => (
              <Card key={index} className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    {/* Left - Title & Icon */}
                    <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <tech.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {tech.inSimpleWords}
                      </p>
                    </div>

                    {/* Right - Explanations */}
                    <div className="md:col-span-2 p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-primary" />
                            What is it?
                          </h4>
                          <p className="text-muted-foreground">
                            {tech.simpleExplanation}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-primary" />
                            Real Example
                          </h4>
                          <p className="text-muted-foreground">
                            {tech.realExample}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">The Big Picture</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                How These Technologies Work Together
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Think of it like a team working together for your farm:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </span>
                    <span><strong>Smart Sensors</strong> (the eyes) watch your farm and collect information about soil, weather, and crops.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </span>
                    <span><strong>IoT</strong> (the messenger) sends this information to the cloud through the internet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </span>
                    <span><strong>Cloud Computing</strong> (the workplace) provides the space and power to process all this information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </span>
                    <span><strong>AI</strong> (the brain) thinks about all the information and decides what advice to give you.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  The result? You get simple, helpful suggestions on your phone or computer – without needing to understand any of the technology behind it!
                </p>
              </div>
            </div>
            <div>
              <img
                src={sensorsImage}
                alt="Smart sensors working together in a field"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Remember */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Remember: Technology is Here to Help
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            You don't need to understand how electricity works to turn on a light. 
            Similarly, you don't need to understand AI or IoT to benefit from smart 
            farming. Our job is to handle the complex technology – your job is to 
            grow great crops!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
