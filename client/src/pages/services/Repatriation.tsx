import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Clock,
  Users,
  FileCheck,
  Ambulance,
  Phone,
  CheckCircle2,
  Shield,
  HeartPulse,
} from "lucide-react";

import heroImage from "@assets/generated_images/commercial_airline_medical_repatriation.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";
import stretcherImage from "@assets/generated_images/commercial_airline_stretcher_service.png";
import groundTransferImage from "@assets/generated_images/ground_to_air_transfer.png";
import monitoringImage from "@assets/generated_images/in-flight_patient_monitoring.png";

const services = [
  {
    icon: Users,
    title: "Commercial Stretcher Service",
    description: "For patients who need to travel in a recumbent position, we arrange commercial airline stretcher accommodations with full medical support.",
  },
  {
    icon: HeartPulse,
    title: "Medical Escort on Flights",
    description: "Qualified medical professionals accompany patients throughout their commercial flight journey, ensuring continuous care and monitoring.",
  },
  {
    icon: FileCheck,
    title: "Medical Clearance Coordination",
    description: "We handle all airline medical clearances, documentation, and special service requests required for medical passengers.",
  },
  {
    icon: Ambulance,
    title: "Ground Ambulance Coordination",
    description: "Seamless coordination of ground ambulance services at departure and arrival airports for bed-to-bed transfers.",
  },
];

const repatriationSteps = [
  { step: "01", title: "Initial Consultation" },
  { step: "02", title: "Medical Records Review" },
  { step: "03", title: "Fit-to-Fly Assessment" },
  { step: "04", title: "Flight Coordination & Confirmation" },
  { step: "05", title: "Ground Transfer to Airport" },
  { step: "06", title: "Medical Transfer by Air" },
  { step: "07", title: "Ground Transfer to Receiving Facility" },
  { step: "08", title: "Continued Support & Recovery" },
];

const benefits = [
  "Cost-effective alternative to private air ambulance",
  "Suitable for medically stable patients",
  "Professional medical escort throughout journey",
  "All airline medical clearances handled",
  "Wheelchair and stretcher services available",
  "Ground ambulance coordination included",
  "24/7 support and monitoring",
  "International medical transfer expertise",
];

export default function Repatriation() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="repatriation-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Airlines Medical Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Airlines Medical Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Professional commercial medical services for medically stable patients who require medical assistance while traveling home on commercial airlines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1-800-UROAIR" data-testid="repatriation-call">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Hotline
                </Button>
              </a>
              <Link href="/contact" data-testid="repatriation-quote">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Safe Transportation During Medical Emergencies
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Timely and safe transportation is important during a medical emergency that is far away from home. UroAirAmbulance offers professional Commercial Medical Services for medically stable patients who require medical assistance and support while traveling home on commercial airlines.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our commercial medical services provide a cost-effective alternative to private air ambulance while still ensuring patients receive the medical support they need throughout their journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">24/7 Coordination</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Escorts</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive medical support for commercial airline travel
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Medical Transfer Process
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When a client contacts us for air ambulance assistance, we provide them with the best option that is available, discuss the budget with them, and find out how far they need to travel. After the necessary steps have been completed, we collect identification documentation and an advance payment to reserve their air ambulance. After all processes are complete, a ground ambulance is allocated to transfer patients to the air ambulance's location, and the air ambulance subsequently transports the patients to a hospital.
              </p>
            </div>
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-2 relative">
                {repatriationSteps.map((step, index) => (
                  <div key={step.step} className="flex items-center">
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rotate-45 border-2 border-primary bg-background flex items-center justify-center shadow-sm">
                        <div className="-rotate-45 text-center px-1">
                          <div className="text-xs text-primary font-bold mb-0.5">{step.step}</div>
                          <div className="text-[10px] sm:text-xs font-medium text-foreground leading-tight">{step.title}</div>
                        </div>
                      </div>
                    </div>
                    {index < repatriationSteps.length - 1 && (
                      <div className="w-2 h-0.5 bg-primary/30 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="stretcher-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={stretcherImage}
                alt="Commercial Airline Stretcher Service"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Commercial Airline Stretcher Arrangements
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                For patients who cannot sit upright during travel, we arrange specialized stretcher accommodations on commercial airlines. This involves removing several rows of seats and installing a medical stretcher with privacy curtains.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our team handles all the logistics including airline coordination, medical clearance documentation, and ensuring proper medical equipment is available throughout the flight.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Full stretcher configuration on commercial aircraft</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Privacy curtains for patient dignity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Medical escort accompanies patient throughout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Operations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional teams and seamless coordination ensuring safe medical services worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img
                src={stretcherImage}
                alt="Stretcher Service"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Commercial airline stretcher setup</p>
            </div>
            <div className="space-y-2">
              <img
                src={groundTransferImage}
                alt="Ground Transfer"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Airport ground transfers</p>
            </div>
            <div className="space-y-2">
              <img
                src={monitoringImage}
                alt="In-Flight Monitoring"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Continuous patient monitoring</p>
            </div>
            <div className="space-y-2">
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Certified medical escorts</p>
            </div>
            <div className="space-y-2">
              <img
                src={dispatchImage}
                alt="Operations Center"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">24/7 operations center</p>
            </div>
            <div className="space-y-2">
              <img
                src={interiorImage}
                alt="Aircraft Interior"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Medical equipment ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="benefits-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Benefits of Our Service
            </h2>
            <p className="text-slate-300 text-lg">
              Why choose UroAirAmbulance for commercial medical services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Need Medical Services?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact our team to arrange professional medical services on commercial airlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-800-UROAIR" data-testid="cta-call">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <Link href="/contact" data-testid="cta-contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="related-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/air-ambulance" data-testid="related-air-ambulance">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground">Air Ambulance Services</h4>
                  <p className="text-sm text-muted-foreground mt-1">ICU-equipped aircraft transport</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/medical-tourism" data-testid="related-tourism">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground">Medical Tourism</h4>
                  <p className="text-sm text-muted-foreground mt-1">Travel support for medical procedures</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/medical-escort" data-testid="related-escort">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground">Flight Medical Escort</h4>
                  <p className="text-sm text-muted-foreground mt-1">Professional medical escorts</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
