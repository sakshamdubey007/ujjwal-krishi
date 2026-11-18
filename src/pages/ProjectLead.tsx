import { GraduationCap, Target, Lightbulb, Heart, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import sakshamImage from "@/assets/saksham-dubey.jpg";

const ProjectLead = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Meet the Project Lead
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            The person behind Ujjwal Krishi – driven by a passion for technology 
            and a genuine desire to help farmers.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo & Quick Info */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-card border-4 border-primary/20">
                      <img
                        src={sakshamImage}
                        alt="Saksham Dubey - Project Lead"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">
                      Saksham Dubey
                    </h2>
                    <p className="text-primary font-medium mb-4">
                      Project Lead & Founder
                    </p>
                    
                    <Card className="shadow-soft">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="h-4 w-4 text-primary" />
                          <a href="tel:9625531191" className="text-muted-foreground hover:text-primary">
                            +91 9625531191
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href="mailto:sakshamdubey69@gmail.com" className="text-muted-foreground hover:text-primary break-all">
                            sakshamdubey69@gmail.com
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="md:col-span-2 space-y-8">
                {/* Introduction */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    About Saksham
                  </h3>
                  <div className="prose prose-gray">
                    <p className="text-muted-foreground leading-relaxed">
                      I am a student of Computer Science with a specialization in 
                      Artificial Intelligence (B.Tech CSE-AI). My journey into 
                      technology has always been guided by a simple question: 
                      "How can this help real people in their daily lives?"
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Ujjwal Krishi is born from this question. Growing up seeing 
                      farmers struggle with unpredictable weather, water scarcity, 
                      and lack of timely guidance, I realized that modern technology 
                      could be a powerful ally for agriculture – if only it could 
                      be made accessible and understandable.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        B.Tech in Computer Science
                      </p>
                      <p className="text-primary">
                        Specialization: Artificial Intelligence
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Focused on machine learning, data analysis, and practical 
                        applications of AI in solving real-world problems.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Vision */}
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Vision for Ujjwal Krishi
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "I believe that technology should never be a barrier – it 
                      should be a bridge. My vision for Ujjwal Krishi is to create 
                      a system that speaks the farmer's language, understands their 
                      challenges, and provides solutions they can actually use. 
                      Every farmer deserves access to knowledge that can help them 
                      succeed, regardless of their education or resources."
                    </p>
                  </CardContent>
                </Card>

                {/* Why Agriculture */}
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Why Agriculture?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Agriculture is the backbone of our nation. Millions of 
                      families depend on farming for their livelihood. Yet, many 
                      farmers still rely on traditional methods and lack access 
                      to the kind of guidance that could significantly improve 
                      their outcomes. I chose to focus my technical skills on 
                      agriculture because I believe this is where technology can 
                      make the most meaningful difference in people's lives.
                    </p>
                  </CardContent>
                </Card>

                {/* Personal Note */}
                <Card className="shadow-card bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      A Personal Note
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ujjwal Krishi started as an academic project, but it has 
                      become much more than that. It represents my belief that 
                      students can create meaningful solutions for real-world 
                      problems. I am committed to growing this project beyond 
                      college, reaching actual farmers, and making a genuine 
                      positive impact on Indian agriculture.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If you share this vision or want to contribute, I would 
                      love to hear from you. Together, we can make smart farming 
                      a reality for every farmer.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have questions, suggestions, or want to collaborate, 
            I'm always happy to connect with people who care about agriculture 
            and technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9625531191"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call: +91 9625531191
            </a>
            <a
              href="mailto:sakshamdubey69@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectLead;
