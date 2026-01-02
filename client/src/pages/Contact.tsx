import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

import dispatchImage from "@assets/generated_images/global_operations_dispatch_center.png";
import teamImage from "@assets/generated_images/medical_team_near_aircraft.png";
import interiorImage from "@assets/generated_images/medical_aircraft_interior_icu.png";

export default function Contact() {

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center" data-testid="contact-hero">
        <div className="absolute inset-0">
          <img
            src={dispatchImage}
            alt="Operations Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300">
              Our team is available 24/7 to assist with your air medical transport needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="why-contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                We're Here to Help You
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                When you need medical air transport, every moment matters. Our dedicated team of medical coordinators, flight specialists, and healthcare professionals are standing by 24/7 to provide immediate assistance.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Whether you're dealing with a medical emergency, planning a hospital transfer, or need medical escort services for international travel, we're ready to coordinate every detail of your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Rapid Response</span>
                    <p className="text-sm text-muted-foreground">Quick assessment and deployment within hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Personalized Care</span>
                    <p className="text-sm text-muted-foreground">Tailored solutions for every patient's needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">Global Network</span>
                    <p className="text-sm text-muted-foreground">Connections to hospitals in 100+ countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={teamImage}
                alt="Medical Team"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src={interiorImage}
                alt="Aircraft Interior"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will respond promptly to discuss your medical transport needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe
                    src="https://zfrmz.in/9VjhYgAIcD8JKyCTHLlU"
                    title="Contact Form"
                    className="w-full border-0 rounded-lg"
                    style={{ minHeight: "800px" }}
                    data-testid="zoho-contact-form"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">Available 24/7 for emergencies</p>
                  <a href="tel:+1-800-UROAIR" className="text-2xl font-bold text-primary hover:underline" data-testid="contact-phone">
                    +1-800-UROAIR
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">For inquiries and quotes</p>
                  <a href="mailto:info@uroairambulance.com" className="text-foreground font-medium hover:text-primary" data-testid="contact-email">
                    info@uroairambulance.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Headquarters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">Global Operations Center</p>
                  <p className="text-foreground">
                    International Medical Transport Hub
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency Services</span>
                      <span className="text-foreground font-medium">24/7/365</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General Inquiries</span>
                      <span className="text-foreground font-medium">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our emergency response team is standing by to help coordinate your medical transport.
                </p>
                <a href="tel:+1-800-UROAIR" data-testid="contact-emergency-button">
                  <Button variant="secondary" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
