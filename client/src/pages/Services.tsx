import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Globe,
  Heart,
  Stethoscope,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Award,
} from "lucide-react";

import heroImage from "@assets/generated_images/air_ambulance_aircraft_hero_image.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";

const services = [
  {
    title: "Air Ambulance Services",
    description: "ICU-equipped aircraft designed to provide advanced medical intervention while transporting critically ill or injured patients. Our air ambulances feature state-of-the-art medical equipment and are staffed by certified medical professionals.",
    icon: Plane,
    href: "/services/air-ambulance",
    features: ["24/7 Availability", "ICU-equipped Aircraft", "Global Coverage", "Certified Medical Crew"],
    image: interiorImage,
  },
  {
    title: "Airlines Medical Services",
    description: "Professional commercial medical services for medically stable patients who require medical assistance while traveling home on commercial airlines. A cost-effective alternative with full medical support.",
    icon: Globe,
    href: "/services/repatriation",
    features: ["Commercial Flight Support", "Medical Escort", "Ground Ambulance Coordination", "Airline Clearances"],
    image: teamImage,
  },
  {
    title: "Medical Tourism Services",
    description: "Complete travel support for patients seeking medical procedures abroad. We provide reliable, medically supported air transportation connecting patients with world-class healthcare providers globally.",
    icon: Heart,
    href: "/services/medical-tourism",
    features: ["Global Healthcare Access", "Travel Coordination", "Hospital Partnerships", "Recovery Support"],
    image: dispatchImage,
  },
  {
    title: "Flight Medical Escort Services",
    description: "Trained medical professionals accompanying patients throughout their commercial flight journey. Our escorts provide continuous care and monitoring from departure to final destination.",
    icon: Stethoscope,
    href: "/services/medical-escort",
    features: ["Certified Escorts", "Pre-Travel Assessment", "In-Flight Care", "End-to-End Support"],
    image: heroImage,
  },
];

const stats = [
  { value: "24/7", label: "Emergency Response" },
  { value: "100+", label: "Countries Served" },
  { value: "10,000+", label: "Missions Completed" },
  { value: "99.9%", label: "Safety Record" },
];

export default function Services() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="services-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-services-title">
              Our Services
            </h1>
            <p className="text-xl text-slate-300" data-testid="text-services-subtitle">
              Comprehensive air medical transport solutions designed to meet your every need, available 24/7 worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card" data-testid="services-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-testid={`stat-item-${index}`}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Medical Transport Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-services-description">
              Choose the service that best fits your medical transport needs
            </p>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={service.title} className="overflow-hidden" data-testid={`service-card-${service.href.split("/").pop()}`}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, fIndex) => (
                          <div key={feature} className="flex items-center gap-2" data-testid={`feature-${index}-${fIndex}`}>
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={service.href} data-testid={`link-service-${service.href.split("/").pop()}`}>
                        <Button className="w-full sm:w-auto">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="services-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-why-us-title">
              Why Choose UroAirAmbulance?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto" data-testid="text-why-us-description">
              Trusted by medical facilities, hospitals, and patients worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="why-us-item-0">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-slate-400">Round-the-clock operations center ready to respond to your needs anytime.</p>
            </div>
            <div className="text-center" data-testid="why-us-item-1">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified & Accredited</h3>
              <p className="text-slate-400">CAMTS and EURAMI certified with rigorous safety standards.</p>
            </div>
            <div className="text-center" data-testid="why-us-item-2">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Medical Crew</h3>
              <p className="text-slate-400">Board-certified physicians and critical care nurses on every mission.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8" data-testid="text-cta-description">
            Contact our team to discuss your medical transport needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-800-UROAIR" data-testid="link-cta-call">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                <Phone className="h-5 w-5" />
                Call Emergency Line
              </Button>
            </a>
            <Link href="/contact" data-testid="link-cta-contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
