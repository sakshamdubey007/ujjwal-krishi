import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  // 🔹 Scroll to top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Ujjwal Krishi"
                className="h-10 w-auto rounded"
              />
              <span className="text-xl font-bold">Ujjwal Krishi</span>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Smart Farming with AI – Empowering farmers with technology for a
              sustainable and prosperous agricultural future.
            </p>

            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Leaf className="h-4 w-4" />
              <span className="text-sm">
                Growing Together, Farming Smarter
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Features", path: "/features" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleScrollTop}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2">
              {[
                { name: "Why It's Needed", path: "/why-needed" },
                { name: "Impact", path: "/impact" },
                { name: "Vision & Future", path: "/vision" },
                { name: "Technology Explained", path: "/technology" },
                { name: "FAQs", path: "/faqs" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleScrollTop}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <a
                  href="tel:9625531191"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 9625531191
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <a
                  href="mailto:sakshamdubey69@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  sakshamdubey69@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Ujjwal Krishi. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70">
              An Academic Project by Saksham Dubey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
