import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Clock,
  Shield,
  DollarSign,
  Heart,
  Gauge,
  Globe,
  CheckCircle2,
  Phone,
} from "lucide-react";

import heroImage from "@assets/generated_images/medical_jet_flying_in_sky.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import patientCareImage from "@assets/generated_images/air_ambulance_patient_care.png";
import groundTransferImage from "@assets/generated_images/ground_to_air_transfer.png";
import monitoringImage from "@assets/generated_images/in-flight_patient_monitoring.png";

const aircraftFleet = [
  { name: "Learjet Series", description: "Fast and efficient for short to medium distances" },
  { name: "Gulfstream Series", description: "Long-range capability with spacious cabin" },
  { name: "Bombardier Series", description: "Advanced avionics and patient comfort" },
  { name: "Citation Series", description: "Versatile aircraft for various mission profiles" },
  { name: "Hawker 800XP", description: "Reliable mid-size jet with excellent range" },
  { name: "Falcon 2000", description: "Premium comfort for long-distance transfers" },
];

const features = [
  {
    icon: Gauge,
    title: "Speed & Efficiency",
    description: "Fixed-wing air ambulances are a faster and more efficient method for the transfer of critically ill patients over longer distances compared to helicopter services.",
  },
  {
    icon: Globe,
    title: "Range & Accessibility",
    description: "Fixed-wing air ambulances have longer range than helicopters, allowing travel to remote destinations with fewer stops for refueling.",
  },
  {
    icon: Heart,
    title: "Comfort & Stability",
    description: "Our pressurized and climate-controlled fixed-wing aircraft provide a smoother ride for patients who need continued critical care and stabilization.",
  },
  {
    icon: DollarSign,
    title: "Cost Effectiveness",
    description: "When used for long distance transfers, fixed-wing air ambulances are more fuel efficient than helicopters and cost less overall.",
  },
];

const medicalEquipment = [
  "Ventilators and cardiac monitors",
  "Advanced life-support systems",
  "Defibrillators and pacemakers",
  "IV pumps and medication delivery",
  "Oxygen therapy equipment",
  "Patient monitoring systems",
  "Neonatal incubators",
  "Stretcher and transport systems",
];

const whyChooseUs = [
  "24/7 Operations and Rapid Deployment",
  "Globally Accredited Medical Crew",
  "Bed-to-Bed Patient Transfer Services",
  "Transparent Pricing and Real-Time Support",
  "CAMTS and EURAMI Certified",
];

export default function AirAmbulance() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center" data-testid="air-ambulance-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Air Ambulance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Air Ambulance Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              ICU-equipped aircraft designed to provide advanced medical intervention while transporting critically ill or injured patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1-800-UROAIR" data-testid="air-ambulance-call">
                <Button size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Hotline
                </Button>
              </a>
              <Link href="/contact" data-testid="air-ambulance-quote">
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
                Advanced Critical Care in the Sky
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                An air ambulance is a specialized aircraft designed to provide advanced medical intervention while transporting a critically ill or injured patient. Equipped with the same intensive care capabilities as an ICU and staffed with accredited medical care, an air ambulance ensures that the patient is cared for from the moment of departure to the moment of arrival.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                UroAirAmbulance provides rapid-response air medical transport for emergencies, transfers between facilities, and relocating patients long distances, across provinces and internationally.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Fully Certified</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={interiorImage}
                alt="Medical Aircraft Interior"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="fleet-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Fixed Wing Air Ambulance Fleet
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide specialized fixed-wing air ambulance services utilizing our carefully selected fleet for speed, efficiency, and highest standard of medical care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aircraftFleet.map((aircraft) => (
              <Card key={aircraft.name} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg text-foreground">{aircraft.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{aircraft.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Fixed-Wing Aircraft?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At UroAirAmbulance, we understand that every second counts during medical emergencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="equipment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Enhanced Medical Facilities
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Each fixed-wing aircraft is run as a flying ICU, providing life support, ventilators, monitors, and can have a medical team on-board tailored to every patient.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {medicalEquipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="why-choose-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why UroAirAmbulance?
            </h2>
            <p className="text-muted-foreground text-lg">
              When it comes to medical emergencies, choosing the right air transport can make all the difference.
            </p>
          </div>
          <div className="space-y-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-card rounded-lg p-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Operations in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See our professional teams and state-of-the-art equipment providing life-saving medical transport
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img
                src={patientCareImage}
                alt="Patient Care in Flight"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Expert patient care during flight</p>
            </div>
            <div className="space-y-2">
              <img
                src={groundTransferImage}
                alt="Ground to Air Transfer"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Seamless ground to air transfer</p>
            </div>
            <div className="space-y-2">
              <img
                src={monitoringImage}
                alt="In-Flight Monitoring"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Continuous vital signs monitoring</p>
            </div>
            <div className="space-y-2">
              <img
                src={interiorImage}
                alt="Aircraft ICU Interior"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">ICU-equipped aircraft interior</p>
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
                src={heroImage}
                alt="Air Ambulance Aircraft"
                className="rounded-xl shadow-lg w-full h-56 object-cover"
              />
              <p className="text-sm text-muted-foreground text-center">Modern air ambulance fleet</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Need Air Ambulance Services?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Trust UroAirAmbulance for reliable, responsive, and expertly managed air medical transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1-800-UROAIR" data-testid="cta-call">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                <Phone className="h-5 w-5" />
                Call Emergency Line
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
