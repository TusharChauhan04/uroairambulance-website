import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/URO_Air_Ambulance_Logo-01_(1)_1766226553636.png";

const services = [
  { title: "Air Ambulance Services", href: "/services/air-ambulance" },
  { title: "Airlines Medical Services", href: "/services/repatriation" },
  { title: "Medical Tourism", href: "/services/medical-tourism" },
  { title: "Flight Medical Escort", href: "/services/medical-escort" },
];

const company = [
  { title: "About Us", href: "/about" },
  { title: "Our Services", href: "/services" },
  { title: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-xl -translate-y-1/2 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">Need Emergency Air Ambulance?</h3>
              <p className="text-primary-foreground/80 mt-1">Available 24/7, 365 days a year. Call us now.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+1-800-UROAIR" data-testid="footer-emergency-call">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </Button>
              </a>
              <Link href="/contact" data-testid="footer-contact-link">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  <Mail className="h-5 w-5" />
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <Link href="/">
              <img
                src={logoImage}
                alt="URO Air Ambulance"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A recognized leader in air medical transport around the world, providing professional emergency and non-emergency air ambulance services.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-primary" />
              <span>Available 24/7/365</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} data-testid={`footer-link-${service.href.split("/").pop()}`}>
                    <span className="text-slate-400 hover:text-white transition-colors text-sm">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} data-testid={`footer-link-${item.href.slice(1)}`}>
                    <span className="text-slate-400 hover:text-white transition-colors text-sm">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3" data-testid="footer-contact-phone">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-400">Emergency Hotline</p>
                  <a href="tel:+1-800-UROAIR" className="text-white font-medium hover:text-primary transition-colors" data-testid="footer-phone-link">
                    +1-800-UROAIR
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3" data-testid="footer-contact-email">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-400">Email Us</p>
                  <a href="mailto:info@uroairambulance.com" className="text-white font-medium hover:text-primary transition-colors" data-testid="footer-email-link">
                    info@uroairambulance.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-400">Headquarters</p>
                  <p className="text-white">Global Operations Center</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} UroAirAmbulance. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                CAMTS Accredited
              </span>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                EURAMI Certified
              </span>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
