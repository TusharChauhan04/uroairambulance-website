import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Plane,
  Phone,
  Shield,
  Clock,
  Globe,
  Heart,
  Users,
  Building2,
  Award,
  Stethoscope,
  HeartPulse,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

import heroImage from "@assets/generated_images/air_ambulance_aircraft_hero_image.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";

const services = [
  {
    title: "Air Ambulance Services",
    description: "An air ambulance is a specialized aircraft designed to provide advanced medical intervention while transporting a critically ill or injured patient. Equipped with the same intensive care capabilities as an ICU and staffed with accredited medical care, an air ambulance ensures that the patient is cared for from the moment of departure to the moment of arrival.",
    icon: Plane,
    href: "/services/air-ambulance",
    image: interiorImage,
  },
  {
    title: "Airlines Medical Services",
    description: "Timely and safe transportation is important during a medical emergency that is far away from home. UroAirAmbulance offers professional Commercial Medical Services for medically stable patients who require medical assistance and support while traveling home on commercial airlines.",
    icon: Globe,
    href: "/services/repatriation",
    image: teamImage,
  },
  {
    title: "Medical Tourism Services",
    description: "At UroAirAmbulance, we recognize that traveling for medical purposes can be exhausting – physically and emotionally – especially during periods of unwellness or recovery. Our Medical Escort Service is designed to provide the appropriate level of assistance for those with medical needs when they are ready to travel.",
    icon: Heart,
    href: "/services/medical-tourism",
    image: dispatchImage,
  },
  {
    title: "Flight Medical Escort Service",
    description: "At UroAirAmbulance, we recognize that traveling for medical purposes can be exhausting – physically and emotionally – especially during periods of unwellness or recovery. Our Medical Escort Service is designed to provide the appropriate level of assistance for those with medical needs when they are ready to travel, but do not require a full air ambulance.",
    icon: Stethoscope,
    href: "/services/medical-escort",
    image: heroImage,
  },
];

const stats = [
  { value: "1800+", label: "Medical Facilities", icon: Building2 },
  { value: "800+", label: "Leading Hospitals", icon: HeartPulse },
  { value: "100+", label: "Corporations", icon: Briefcase },
  { value: "50+", label: "Embassies", icon: Award },
];

const whyChooseUs = [
  "Seamless Bed-to-Bed Transfers – Anytime, Anywhere",
  "Global Medical Access with 24/7 Operations",
  "Advanced Fleet: State-of-the-art transport for urgent medical missions",
  "Globally Accredited Medical Crew",
  "Transparent Pricing and Real-Time Support",
];

const faqs = [
  {
    question: "What Is an International Air Ambulance?",
    answer: "An International Air Ambulance is a specially equipped medical aircraft designed to safely transport patients across borders. These flying ICUs carry advanced life-support systems, experienced medical teams, and emergency equipment to ensure continuity of care throughout the journey. UroAirAmbulance specializes in global Air Ambulance Services, Medical Evacuation Services, and International Air Ambulance Services, offering seamless bed-to-bed medical transfers anywhere in the world.",
  },
  {
    question: "What Types of Cases Need Emergency Medical Air Ambulance Service?",
    answer: "Emergency air ambulance services are crucial for patients requiring urgent medical assistance or rapid transfer, such as: Heart attack, stroke, or cardiac arrest; Severe trauma or road accidents; ICU patient transfers; Children and newborns needing intensive care; Organ transplant logistics; Long-distance or international medical transfers.",
  },
  {
    question: "What Is the Cost of an Emergency Medical Air Ambulance Service?",
    answer: "Costs may vary based on: Required medical equipment, Type of aircraft, Destination (domestic or international), Airport landing and clearance fees, and Crew and coordination time. UroAirAmbulance ensures transparent pricing with no hidden charges.",
  },
  {
    question: "Is the Emergency Air Ambulance Service Safe for Critical Patients?",
    answer: "Absolutely. Air ambulances operated by UroAirAmbulance offer full Sky ICU capabilities, including: Ventilators and cardiac monitors, Advanced life-support systems, Emergency medications, Experienced emergency doctors and flight paramedics, and Continuous in-flight monitoring.",
  },
  {
    question: "Can the Patient Bring a Wheelchair on the Air Ambulance?",
    answer: "Yes. Wheelchairs are accepted on most aircraft. If needed, UroAirAmbulance also provides medical wheelchairs and full ground ambulance support as part of our Ambulance Transfer Services.",
  },
  {
    question: "How Do I Book an Air Ambulance Flight?",
    answer: "Booking is simple. Contact our 24/7 operations center via phone, email, or our website. A dedicated case manager will assess the patient's condition, review medical reports, and coordinate all logistics, including hospital clearances, ground ambulances, and flight scheduling. We are ready to assist globally anytime.",
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

function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentIndex + 1) % services.length);
  const prevSlide = () => goToSlide((currentIndex - 1 + services.length) % services.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={service.title} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 p-8">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
                    {service.title}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href={service.href} data-testid={`service-slider-link-${service.href.split("/").pop()}`}>
                    <Button>
                      Read More
                    </Button>
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          size="icon"
          variant="outline"
          onClick={prevSlide}
          data-testid="slider-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              data-testid={`slider-dot-${index}`}
            />
          ))}
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          data-testid="slider-next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Air Ambulance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30">
                Available 24/7/365
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Worldwide Air Ambulance Services with{" "}
              <span className="text-primary">Advanced Critical Care</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              UroAirAmbulance is a recognized leader in air medical transport around the world, providing professional emergency and non-emergency air ambulance services while maintaining a full commitment to patient safety, patient comfort, and patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1-800-UROAIR" data-testid="hero-emergency-call">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-8">
                  <Phone className="h-5 w-5" />
                  Emergency Hotline
                </Button>
              </a>
              <Link href="/contact" data-testid="hero-contact-link">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2 text-lg px-8">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              An Unrivaled Global Network at Our Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by medical facilities, hospitals, corporations, and embassies worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6">
                <CardContent className="p-0">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Medical Transport Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive air medical services designed to meet your every need
            </p>
          </div>
          <ServicesSlider />
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose UroAirAmbulance?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                With decades of experience in air medical transport, we deliver unmatched service quality and patient care across the globe.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-block mt-8" data-testid="why-choose-about-link">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Clock className="h-10 w-10" />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" data-testid="repatriation-process-section">
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
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxMDBDMTAwIDEwMCAzMDAgMTAwIDQwMCAxMDAiIHN0cm9rZT0iIzMzNTVhYSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]" />
              </div>
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

      <section className="py-20 bg-card" data-testid="fleet-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={interiorImage}
                alt="Medical Aircraft Interior"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                State-of-the-Art Medical Fleet
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our aircraft are equipped with the same intensive care capabilities as an ICU, ensuring patients receive continuous critical care during transport.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Learjet Series", "Gulfstream Series", "Bombardier Series", "Citation Series", "Hawker 800XP", "Falcon 2000"].map((aircraft) => (
                  <div key={aircraft} className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{aircraft}</span>
                  </div>
                ))}
              </div>
              <Link href="/services/air-ambulance" className="inline-block mt-6" data-testid="fleet-services-link">
                <Button>View Our Fleet</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our air ambulance services
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:no-underline" data-testid={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="global-reach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Global Operations Center
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our 24/7 operations center coordinates medical evacuations worldwide, ensuring rapid response and seamless coordination with hospitals, airports, and medical teams across the globe.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-foreground">CAMTS Accredited</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-foreground">EURAMI Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Expert Medical Crew</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Worldwide Coverage</span>
                </div>
              </div>
              <Link href="/contact" data-testid="global-contact-link">
                <Button size="lg">Contact Our Team</Button>
              </Link>
            </div>
            <div>
              <img
                src={dispatchImage}
                alt="Operations Center"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
