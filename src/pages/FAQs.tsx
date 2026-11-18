import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-farming.jpg";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is Ujjwal Krishi?",
        answer: "Ujjwal Krishi is a smart farming initiative that uses AI (Artificial Intelligence) and IoT (Internet of Things) technologies to help farmers make better decisions about their crops. We provide simple, easy-to-understand guidance about when to water, how to care for your soil, and how to protect your crops from weather changes.",
      },
      {
        question: "Is Ujjwal Krishi available right now?",
        answer: "Currently, Ujjwal Krishi is in its early stages as an academic project with plans to grow into a full product. This website serves as an introduction to what we're building and our vision for the future. Stay connected for updates on when the complete system will be available.",
      },
      {
        question: "Who is Ujjwal Krishi for?",
        answer: "Ujjwal Krishi is designed for all farmers – small, medium, and large. Our goal is to make smart farming accessible to everyone, regardless of their technical knowledge or farming scale. We especially focus on making our guidance simple enough for farmers who may not be familiar with technology.",
      },
    ],
  },
  {
    category: "Cost & Requirements",
    questions: [
      {
        question: "Will Ujjwal Krishi be expensive?",
        answer: "Our core mission is to make smart farming affordable and accessible. While we're still developing our pricing model, we're committed to creating solutions that even small farmers can afford. We believe technology should help farmers save money, not add to their expenses.",
      },
      {
        question: "Do I need technical knowledge to use it?",
        answer: "Absolutely not! Ujjwal Krishi is designed specifically for people who may not be familiar with technology. All information and suggestions are provided in simple, everyday language. If you can use a basic phone, you'll be able to use Ujjwal Krishi.",
      },
      {
        question: "What equipment do I need?",
        answer: "In its simplest form, you just need a smartphone or computer with internet access to receive guidance. For more advanced features, we plan to offer affordable sensors that can be placed in your field. But these will be optional – you can start benefiting from our guidance without any special equipment.",
      },
    ],
  },
  {
    category: "How It Works",
    questions: [
      {
        question: "How does the AI understand my farm's needs?",
        answer: "Our AI learns from various data sources – weather information, soil conditions, crop types, and successful farming practices. When you provide basic information about your farm and crops, the AI combines this with its knowledge to give you personalized suggestions. It's like having an expert who knows both general farming wisdom and your specific situation.",
      },
      {
        question: "Will my data be safe?",
        answer: "Yes, we take data privacy very seriously. Any information about your farm is used only to provide you with better guidance. We don't share your personal farming data with others, and we follow strict security practices to protect all information.",
      },
      {
        question: "Can it work without internet?",
        answer: "Currently, an internet connection is needed to receive real-time guidance and weather updates. However, we're exploring ways to provide offline capabilities for basic features, understanding that internet connectivity can be limited in some rural areas.",
      },
    ],
  },
  {
    category: "For Small Farmers",
    questions: [
      {
        question: "Can small farmers really benefit from this?",
        answer: "Absolutely! In fact, small farmers often benefit the most from smart farming guidance because they have more limited resources and can't afford mistakes. By knowing exactly when to water and what their crops need, small farmers can save water, reduce costs, and improve their yields – all of which can make a significant difference.",
      },
      {
        question: "What if I only have a small plot of land?",
        answer: "Farm size doesn't matter for our guidance to be useful. Whether you have a small vegetable garden or large agricultural fields, the principles of smart watering, soil care, and weather awareness apply equally. Our suggestions are tailored to your specific situation.",
      },
    ],
  },
  {
    category: "Support & Help",
    questions: [
      {
        question: "How can I get help if I have problems?",
        answer: "You can reach us through our contact page via phone (+91 9625531191) or email (sakshamdubey69@gmail.com). We're committed to supporting all users and answering questions. As we grow, we plan to add more support options including local language assistance.",
      },
      {
        question: "Can I suggest features or improvements?",
        answer: "Yes! We actively welcome feedback and suggestions from farmers. Your real-world experience and needs help us build something truly useful. Please reach out through our contact page with any ideas or suggestions.",
      },
    ],
  },
];

const FAQs = () => {
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
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Find answers to common questions about Ujjwal Krishi. Can't find 
            what you're looking for? Contact us directly!
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-card rounded-lg shadow-soft border border-border px-6"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-2xl mx-auto">
            We're here to help! If you couldn't find the answer to your question, 
            please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-primary-foreground/80 text-sm mb-1">Call Us</p>
              <a href="tel:9625531191" className="text-xl font-semibold text-primary-foreground">
                +91 9625531191
              </a>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-primary-foreground/80 text-sm mb-1">Email Us</p>
              <a href="mailto:sakshamdubey69@gmail.com" className="text-xl font-semibold text-primary-foreground">
                sakshamdubey69@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
