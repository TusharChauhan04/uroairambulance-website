import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import AirAmbulance from "@/pages/services/AirAmbulance";
import Repatriation from "@/pages/services/Repatriation";
import MedicalTourism from "@/pages/services/MedicalTourism";
import MedicalEscort from "@/pages/services/MedicalEscort";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/services/air-ambulance" component={AirAmbulance} />
        <Route path="/services/repatriation" component={Repatriation} />
        <Route path="/services/medical-tourism" component={MedicalTourism} />
        <Route path="/services/medical-escort" component={MedicalEscort} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
