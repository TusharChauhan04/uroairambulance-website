import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DollarSign,
  Clock,
  Globe,
  Building2,
  Heart,
  Sparkles,
  Users,
  Shield,
  Phone,
  CheckCircle2,
  Plane,
  Ambulance,
  FileCheck,
  HeartPulse,
} from "lucide-react";

import heroImage from "@assets/generated_images/medical_tourism_hospital_room.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";
import hospitalImage from "@assets/generated_images/international_hospital_facility.png";
import patientCareImage from "@assets/generated_images/air_ambulance_patient_care.png";
import groundTransferImage from "@assets/generated_images/ground_to_air_transfer.png";

const whyMedicalTourism = [
  {
    icon: DollarSign,
    title: "Lower Healthcare Costs",
    description: "Healthcare visits and procedures can be much cheaper overseas than in the U.S. and Canada—often 70% less—while still receiving top-notch care.",
  },
  {
    icon: Sparkles,
    title: "Access to Advanced Treatments",
    description: "Access medical treatments not available in your home country, like advanced organ transplants, fertility treatments, and cutting-edge cancer treatments.",
  },
  {
    icon: Clock,
    title: "Reduced Waiting Times",
    description: "Avoid extensive wait lists for care. With medical tourism you can skip long waiting periods for treatment that might be delayed at home.",
  },
  {
    icon: Heart,
    title: "Vacation While Recovering",
    description: "Recover in luxurious and peaceful destinations. By recovering in a beautiful location, patients enhance recovery and have a better healing experience.",
  },
  {
    icon: Users,
    title: "Personalized Healthcare",
    description: "International facilities designed for medical tourists offer personal care including better wait times, recovery programs, and concierge services.",
  },
  {
    icon: Building2,
    title: "World-Class Facilities",
    description: "Many destinations feature internationally accredited hospitals staffed by highly trained, often Western-educated physicians meeting global standards.",
  },
];

const ourServices = [
  {
    icon: Plane,
    title: "Safe Transportation Arrangements",
    description: "All our air ambulances include advanced life-support systems and are staffed with certified medical professionals for secure, timely transport.",
  },
  {
    icon: HeartPulse,
    title: "In-Flight Medical Assistance",
    description: "Every flight provides paramedics, nursing, and medical assistance as needed—trained to monitor patient health throughout travel.",
  },
  {
    icon: Globe,
    title: "Access to Remote Areas",
    description: "We help patients access larger hospitals and specialty clinics from remote areas or regions with limited land transport systems.",
  },
  {
    icon: Ambulance,
    title: "Non-Emergency Medical Transport",
    description: "For patients not requiring emergency evacuation, our services provide medically supported long-range travel with professional supervision.",
  },
  {
    icon: FileCheck,
    title: "Customized Travel Plans",
    description: "Each trip is planned to meet specific patient needs including medical escorts, equipment, hospital transfers, and all care coordination details.",
  },
  {
    icon: Shield,
    title: "Global Healthcare Coordination",
    description: "We work with hospitals and clinics worldwide to ensure smooth care transitions, streamlining communication between medical teams.",
  },
];

const destinations = [
  "India", "UAE", "Thailand", "Turkey", "Mexico", "Singapore", "Germany", "Malaysia"
];

export default function MedicalTourism() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="tourism-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Medical Tourism Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Complete travel support for patients seeking medical procedures abroad, with reliable and medically supported air transportation worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1-800-UROAIR" data-testid="tourism-call">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Hotline
                </Button>
              </a>
              <Link href="/contact" data-testid="tourism-quote">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="what-is-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What is Medical Tourism?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Medical tourism involves traveling abroad to access medical services that are either unavailable, prohibitively costly, or lacking in certain technologies in the home country.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                As countries like India, the UAE, Thailand, Mexico, and Turkey develop their healthcare systems and provide quality care, we are seeing an uptick in patients seeking medical treatment abroad. From commonplace procedures to specialized services, the opportunities continue to expand.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Navigating international medical travel can present challenges. This is where UroAirAmbulance differentiates itself—providing reliable, medically supported air transportation connecting patients with world-class healthcare providers.
              </p>
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

      <section className="py-20 bg-card" data-testid="why-tourism-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Patients Choose Medical Tourism
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the benefits of seeking medical care abroad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyMedicalTourism.map((reason) => (
              <Card key={reason.title} className="p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="our-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How UroAirAmbulance Supports Medical Tourism
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our services are designed to provide patients with a safe, efficient and stress-free journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourServices.map((service) => (
              <Card key={service.title} className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="hospitals-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Access to World-Class Healthcare Facilities
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We partner with internationally accredited hospitals and medical centers around the world. These facilities feature cutting-edge technology, highly trained specialists, and personalized care programs designed specifically for international patients.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From pre-operative consultations to post-procedure recovery, we coordinate every aspect of your medical journey to ensure a seamless experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">JCI-accredited hospitals worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">English-speaking medical staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Luxury recovery accommodations</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={hospitalImage}
                alt="International Hospital Facility"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Medical Tourism Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From departure to treatment to safe return home, we ensure every step is handled professionally
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img
                src={hospitalImage}
                alt="International Hospital"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">World-class medical facilities</p>
            </div>
            <div className="space-y-2">
              <img
                src={patientCareImage}
                alt="Patient Care"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Professional medical care</p>
            </div>
            <div className="space-y-2">
              <img
                src={groundTransferImage}
                alt="Ground Transfer"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Seamless airport transfers</p>
            </div>
            <div className="space-y-2">
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Experienced medical escorts</p>
            </div>
            <div className="space-y-2">
              <img
                src={interiorImage}
                alt="Aircraft Interior"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Comfortable air transport</p>
            </div>
            <div className="space-y-2">
              <img
                src={dispatchImage}
                alt="Operations Center"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Global coordination center</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="destinations-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Popular Medical Tourism Destinations
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            We coordinate medical travel to leading healthcare destinations worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((destination) => (
              <div key={destination} className="bg-slate-800/50 px-6 py-3 rounded-full">
                <span className="text-slate-200 font-medium">{destination}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Planning Medical Travel?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact us for seamless medical tourism transportation and support
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
            <Link href="/services/repatriation" data-testid="related-repatriation">
              <Card className="hover-elevate cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium text-foreground">Airlines Medical Services</h4>
                  <p className="text-sm text-muted-foreground mt-1">Medical support on commercial flights</p>
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
      </section >
    </div >
  );
}
