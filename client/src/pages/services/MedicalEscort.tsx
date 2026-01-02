import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  ClipboardCheck,
  Plane,
  Ambulance,
  FileCheck,
  Heart,
  Phone,
  CheckCircle2,
  Shield,
  Users,
} from "lucide-react";

import heroImage from "@assets/generated_images/flight_medical_escort_service.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";
import escortAssistImage from "@assets/generated_images/medical_escort_airport_assistance.png";
import monitoringImage from "@assets/generated_images/in-flight_patient_monitoring.png";
import groundTransferImage from "@assets/generated_images/ground_to_air_transfer.png";

const services = [
  {
    icon: ClipboardCheck,
    title: "Pre-Travel Medical Evaluation",
    description: "Before travel takes place, our medical team performs a detailed consultation with the patient, their family and attending doctors to assess medical conditions, travel ability, and specific needs.",
  },
  {
    icon: Stethoscope,
    title: "Professional In-Flight Care",
    description: "We provide certified nurses or paramedics to accompany patients on commercial flights to continue monitoring and provide medical services from oxygen support to emergency response.",
  },
  {
    icon: Ambulance,
    title: "End-to-End Ground Transfers",
    description: "Our team organizes every medically assisted ground transport from bedside pickup through final drop-off, including hospital transport and last mile support.",
  },
  {
    icon: FileCheck,
    title: "Travel Coordination & Logistics",
    description: "We coordinate every element including securing needed seat types, obtaining medical clearances, and working with airlines and airports to streamline boarding.",
  },
];

const escortTypes = [
  {
    title: "Nurse Escort",
    description: "Registered nurses provide care for stable patients requiring medication management, monitoring, and basic medical support during travel.",
    suitable: ["Stable medical conditions", "Post-surgery recovery", "Elderly patients", "Mobility assistance"],
  },
  {
    title: "Paramedic Escort",
    description: "Advanced life support trained paramedics for patients who may need emergency interventions during their journey.",
    suitable: ["Cardiac patients", "Respiratory conditions", "Higher acuity cases", "Trauma recovery"],
  },
  {
    title: "Physician Escort",
    description: "Board-certified physicians accompany critically ill patients requiring continuous medical oversight and decision-making.",
    suitable: ["Critical conditions", "Complex medical cases", "High-risk patients", "ICU transfers"],
  },
];

const benefits = [
  "Peace of mind for patients and families",
  "Continuous medical monitoring throughout journey",
  "Professional handling of all medical needs",
  "Coordination with airlines and medical clearances",
  "Ground ambulance arrangements included",
  "24/7 support from our operations center",
  "Cost-effective alternative to full air ambulance",
  "Experienced, compassionate medical professionals",
];

export default function MedicalEscort() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="escort-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical Escort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Flight Medical Escort Service
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Safe, Comfortable, and Compassionate Care—Anywhere You Go
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Professional medical escorts for patients ready to travel but needing assistance throughout their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1-800-UROAIR" data-testid="escort-call">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Hotline
                </Button>
              </a>
              <Link href="/contact" data-testid="escort-quote">
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
                Compassionate Medical Escort Services
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At UroAirAmbulance, we recognize that traveling for medical purposes can be exhausting – physically and emotionally – especially during periods of unwellness or recovery.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our Medical Escort Service is designed to provide the appropriate level of assistance for those with medical needs when they are ready to travel, but do not require a full air ambulance. Our trained medical professionals are there to make your journey stress-free, whether traveling nationally or internationally.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Professionals</span>
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
              What's Included in Our Medical Escort Service
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive support from initial consultation to final destination
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

      <section className="py-20" data-testid="escort-types-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Types of Medical Escorts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We match the right medical professional to your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {escortTypes.map((type) => (
              <Card key={type.title} className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Suitable for:</p>
                    <ul className="space-y-1">
                      {type.suitable.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={escortAssistImage}
                alt="Medical Escort Airport Assistance"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Airport Assistance & Support
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our medical escorts provide comprehensive support at every stage of your journey. From wheelchair assistance at check-in to navigating security and boarding, we ensure a stress-free travel experience.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We coordinate with airport authorities and airlines to arrange priority boarding, special seating accommodations, and ensure all medical equipment is properly handled.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Wheelchair and mobility assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Priority boarding arrangements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Medical equipment coordination</span>
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
              Your Journey with Our Medical Escorts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From departure to arrival, our compassionate team ensures safe and comfortable travel
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img
                src={escortAssistImage}
                alt="Airport Assistance"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Airport assistance and check-in</p>
            </div>
            <div className="space-y-2">
              <img
                src={monitoringImage}
                alt="In-Flight Monitoring"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Continuous health monitoring</p>
            </div>
            <div className="space-y-2">
              <img
                src={groundTransferImage}
                alt="Ground Transfer"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Ground ambulance coordination</p>
            </div>
            <div className="space-y-2">
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Certified medical professionals</p>
            </div>
            <div className="space-y-2">
              <img
                src={interiorImage}
                alt="Aircraft Interior"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Comfortable flight arrangements</p>
            </div>
            <div className="space-y-2">
              <img
                src={dispatchImage}
                alt="Operations Center"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">24/7 operations support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="benefits-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Benefits of Medical Escort Service
            </h2>
            <p className="text-slate-300 text-lg">
              With UroAirAmbulance, you're investing in more than just transportation—you're investing in peace of mind
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
            Need a Medical Escort?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            The medical escorts we deploy are trained, experienced, and kind-hearted professionals. Contact us today for a consultation.
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
                Book a Consultation
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
            <Link href="/services/repatriation" data-testid="related-repatriation">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground">Airlines Medical Services</h4>
                  <p className="text-sm text-muted-foreground mt-1">Medical support on commercial flights</p>
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
          </div>
        </div>
      </section >
    </div >
  );
}
