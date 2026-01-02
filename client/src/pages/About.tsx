import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Award,
  Users,
  Globe,
  Clock,
  Heart,
  Target,
  Zap,
  CheckCircle2,
  Eye,
  Lightbulb,
  Phone,
} from "lucide-react";

import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import heroImage from "@assets/generated_images/air_ambulance_aircraft_hero_image.png";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Every decision we make prioritizes patient safety, comfort, and well-being above all else.",
  },
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description: "We maintain the highest safety standards in the industry with rigorous protocols and continuous training.",
  },
  {
    icon: Target,
    title: "Excellence in Care",
    description: "Our medical teams are highly trained professionals dedicated to delivering exceptional care.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Our 24/7 operations center ensures swift coordination and deployment for every mission.",
  },
];

const certifications = [
  { name: "CAMTS Accredited", description: "Commission on Accreditation of Medical Transport Systems" },
  { name: "EURAMI Certified", description: "European Aeromedical Institute Certification" },
  { name: "ISO 9001:2015", description: "International Quality Management Standard" },
  { name: "FAA Certified", description: "Federal Aviation Administration Certified Operations" },
];

const milestones = [
  { year: "2010", event: "Company Founded", description: "Established with a vision to provide world-class air medical transport" },
  { year: "2014", event: "Global Expansion", description: "Expanded operations to cover all major continents" },
  { year: "2018", event: "Fleet Upgrade", description: "Introduced state-of-the-art ICU-equipped aircraft" },
  { year: "2022", event: "10,000+ Missions", description: "Completed over 10,000 successful patient transports" },
  { year: "2024", event: "Innovation Leader", description: "Recognized as industry leader in air medical innovation" },
];

export default function About() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="about-hero">
        <div className="absolute inset-0">
          <img
            src={teamImage}
            alt="Our Medical Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About UroAirAmbulance
            </h1>
            <p className="text-xl text-slate-300">
              A recognized leader in air medical transport, committed to patient safety, comfort, and care across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="about-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                UroAirAmbulance is a globally recognized leader in air medical transport services. Founded with a mission to bridge the gap between patients and life-saving medical care, we have grown into a trusted partner for hospitals, insurance companies, government agencies, and families worldwide.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our team comprises seasoned aviation professionals, experienced medical personnel, and dedicated coordinators who work around the clock to ensure seamless patient transfers. From critical care air ambulances to commercial airline medical escorts, we provide comprehensive solutions tailored to each patient's unique needs.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With operations spanning across continents and partnerships with leading hospitals globally, UroAirAmbulance has successfully completed thousands of medical evacuation missions, earning the trust of medical facilities, corporations, and embassies in over 100 countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">100+ Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">10,000+ Missions</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src={heroImage}
                alt="Air Ambulance Fleet"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src={dispatchImage}
                alt="Operations Center"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" data-testid="vision-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  To be the world's most trusted and reliable air medical transport provider, setting the global standard for patient care, safety, and operational excellence in aeromedical services.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We envision a world where geographic distance is never a barrier to receiving world-class medical care. Our goal is to ensure that every patient, regardless of location, has access to timely and professional medical transport when they need it most.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  UroAirAmbulance is dedicated to providing the highest quality air medical transport services worldwide. We believe that every patient deserves access to the best medical care, regardless of geographic location or distance.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether it is in response to a medical crisis across international borders, or transferring patients to a tertiary or specialized facility, when you need advanced critical care, we are always your partner in care – 24x7, 365 days of the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="timeline-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our commitment to excellence
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8 order-2"}`}>
                  <Card className="p-4 inline-block">
                    <CardContent className="p-0">
                      <div className="text-primary font-bold text-lg">{milestone.year}</div>
                      <div className="font-semibold text-foreground">{milestone.event}</div>
                      <div className="text-sm text-muted-foreground">{milestone.description}</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="certifications-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-slate-800/50 rounded-xl p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={interiorImage}
                alt="Medical Equipment"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Expert Medical Team
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our medical crews consist of highly trained professionals including flight physicians, critical care nurses, paramedics, and respiratory therapists. Each team member is carefully selected and undergoes rigorous training specific to aeromedical transport.
              </p>
              <ul className="space-y-3">
                {[
                  "Board-certified flight physicians",
                  "Critical care registered nurses",
                  "Advanced life support certified paramedics",
                  "Specialized pediatric and neonatal teams",
                  "24/7 medical consultation available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact our team to discuss your air medical transport needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="about-contact-link">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/services/air-ambulance" data-testid="about-services-link">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
