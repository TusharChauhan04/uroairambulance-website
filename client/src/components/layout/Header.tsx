import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone } from "lucide-react";
import logoImage from "@assets/URO_Air_Ambulance_Logo-01_(1)_1766226553636.png";

const services = [
  { title: "Air Ambulance Services", href: "/services/air-ambulance", description: "ICU-equipped aircraft for critical patient transport" },
  { title: "Airlines Medical Services", href: "/services/repatriation", description: "Medical support on commercial flights" },
  { title: "Medical Tourism Services", href: "/services/medical-tourism", description: "Travel support for medical procedures abroad" },
  { title: "Flight Medical Escort", href: "/services/medical-escort", description: "Professional medical escorts for your journey" },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services", hasDropdown: true },
  { title: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
        }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" data-testid="link-logo">
            <img
              src={logoImage}
              alt="URO Air Ambulance"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <NavigationMenu key={link.title}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`bg-transparent ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                          } ${isActive(link.href) ? "font-semibold" : ""}`}
                        data-testid="nav-services-dropdown"
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 p-4">
                          {services.map((service) => (
                            <li key={service.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  data-testid={`link-${service.href.split("/").pop()}`}
                                >
                                  <div className="text-sm font-medium leading-none">{service.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link key={link.title} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80 hover:bg-white/10"
                      } ${isActive(link.href) ? "font-semibold" : ""}`}
                    data-testid={`link-${link.href === "/" ? "home" : link.href.slice(1)}`}
                  >
                    {link.title}
                  </Button>
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:+1-800-UROAIR" className="hidden sm:flex" data-testid="link-emergency-call">
              <Button variant={isScrolled ? "default" : "outline"} className={!isScrolled ? "bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" : ""}>
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Emergency: </span>
                <span className="font-semibold">24/7</span>
              </Button>
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white hover:bg-white/10"} data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.title} className="flex flex-col gap-2">
                        <span className="font-semibold text-foreground px-2">Services</span>
                        <div className="pl-4 flex flex-col gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              data-testid={`mobile-link-${service.href.split("/").pop()}`}
                            >
                              <Button variant="ghost" className="w-full justify-start text-left h-auto py-2">
                                <div>
                                  <div className="text-sm font-medium">{service.title}</div>
                                  <div className="text-xs text-muted-foreground">{service.description}</div>
                                </div>
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.title}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        data-testid={`mobile-link-${link.href === "/" ? "home" : link.href.slice(1)}`}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-lg ${isActive(link.href) ? "bg-accent font-semibold" : ""}`}
                        >
                          {link.title}
                        </Button>
                      </Link>
                    )
                  )}
                  <a href="tel:+1-800-UROAIR" className="mt-4" data-testid="mobile-link-emergency">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: 24/7 Hotline
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
