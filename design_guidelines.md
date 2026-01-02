# UroAirAmbulance.com Design Guidelines

## Design Approach
**Industry Reference Strategy**: Drawing from premium healthcare + aviation sectors (Mayo Clinic's trust-building + aircraft manufacturer aesthetics). Professional, credible, and reassuring design that emphasizes safety, expertise, and rapid response capabilities.

## Core Design Principles
1. **Trust Through Clarity**: Clean, uncluttered layouts that communicate competence
2. **Urgency Without Anxiety**: Professional efficiency without creating panic
3. **Premium Service Positioning**: Sophisticated design reflecting high-value medical care

## Typography System
**Primary Font**: Inter or Source Sans Pro (via Google Fonts)
- H1 Hero: 48px-64px, font-bold
- H2 Section Headers: 36px-48px, font-semibold
- H3 Subsections: 24px-30px, font-semibold
- Body: 16px-18px, font-normal, leading-relaxed
- Captions/Labels: 14px, font-medium

**Accent Font**: Playfair Display or Merriweather (for credibility statements only)

## Layout & Spacing
**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl

## Page-Specific Structures

### Home Page (8 sections)
1. **Hero**: Full-width with aircraft/medical team image, blurred-background CTA buttons, 24/7 emergency contact prominent
2. **Trust Indicators**: Single row with stats (flights completed, years experience, response time, certifications)
3. **Service Overview**: 4-column grid (links to service pages) with icons
4. **Why Choose Us**: 2-column split with image + bullet points
5. **Aircraft Fleet Showcase**: 3-column cards with aircraft photos
6. **Medical Team**: Photo grid with credentials
7. **Testimonials**: 3-column patient/hospital testimonials
8. **Emergency CTA**: Full-width urgent contact section

### About Page
- Hero: Team/aircraft image with mission statement
- Company Story: 2-column text + timeline
- Certifications Grid: 4-column logos/badges
- Leadership Team: 3-4 column bios with photos
- Safety Standards section

### Services Pages (Each of 4 services)
- Hero: Service-specific aircraft/medical setup image
- Service Details: Alternating 2-column sections (text + image)
- Process Steps: 4-step horizontal timeline
- Equipment/Capabilities: Icon grid
- Pricing/Coverage info section
- Related Services: 3-column cross-links
- Emergency contact footer

### Contact Page
- Hero: Map background or dispatch center image
- 2-column layout: Contact form + info (phone, email, emergency line, office locations)
- Emergency vs. General Inquiry toggle
- Response time expectations
- Alternative contact methods (chat, phone)

## Component Library

**Navigation**: 
- Sticky header with logo left, menu center, emergency button right
- Transparent on hero, solid on scroll
- Mega dropdown for Services showing all 4 options

**Cards**:
- Service cards: Image top, title, description, "Learn More" link
- Testimonial cards: Quote, name, role, hospital/location
- Aircraft cards: Large photo, specs, capacity

**CTAs**:
- Primary: Solid, rounded-lg, px-8 py-4, font-semibold
- Emergency: Pulsing animation, high contrast
- Secondary: Outline style

**Forms**:
- Grouped fields with clear labels
- Emergency/urgent checkbox prominent
- Phone input with country code
- File upload for medical records

**Icons**: Heroicons (solid + outline mix)

**Footer**: 
- 4-column: Services, Company, Resources, Contact
- Trust badges row (certifications, partnerships)
- Emergency hotline repeated
- Social proof: "Available 24/7/365"

## Images Strategy
**Large hero images required for**:
- All page headers (aircraft in flight, medical teams, equipment)
- Service detail sections
- Team/about sections

**Image descriptions**:
- Medical aircraft (helicopters, fixed-wing) on tarmac or in flight
- Medical professionals in flight suits with equipment
- Interior cabin with medical equipment
- Patient transfer scenes (professional, dignified)
- Dispatch/operations center

**Treatment**: Professional photography style, slight desaturation for medical credibility, sharp focus on equipment/personnel

## Accessibility
- High contrast text on all backgrounds
- ARIA labels for emergency contact buttons
- Keyboard navigation throughout
- Screen reader optimized forms with field descriptions