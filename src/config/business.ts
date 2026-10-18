// Centralized configuration for Shree Bhagavanthi Travels
// Verified client information from supplied banner:
// Business: Shree Bhagavanthi Travels
// Address: Near Mallikarjuna Mata, Lingappadavakadu, Mulki - 574154
// Primary Phones: 9741852609, 7019722804

export const BUSINESS_CONFIG = {
  name: "Shree Bhagavanthi Travels",
  tagline: "Your Trusted Travel Partner in Mulki & Coastal Karnataka",
  shortDescription:
    "Comfortable, reliable, and family-friendly taxi and travel services across Mulki, Mangaluru, Udupi, and outstation destinations.",
  ownerInfo: "BK Travels & Logistics",
  address: {
    landmark: "Near Mallikarjuna Mata",
    street: "Lingappayyakadu",
    city: "Mulki",
    pincode: "574154",
    state: "Karnataka",
    fullAddress: "Near Mallikarjuna Mata, Lingappayyakadu, Mulki, Karnataka 574154",
  },
  phones: [
    { number: "9741852609", display: "+91 97418 52609", isPrimary: true, isWhatsApp: true },
    { number: "7019722804", display: "+91 70197 22804", isPrimary: false, isWhatsApp: false },
  ],
  whatsappNumber: "919741852609", // verified primary number in international format
  brandColors: {
    primaryNavy: "#10172A",
    royalBlue: "#0878C9",
    royalBlueHover: "#0662a6",
    accentYellow: "#FFD900",
    accentYellowHover: "#e6c300",
    white: "#FFFFFF",
    surfaceLight: "#F8FAFC",
  },
  operatingAreas: ["Mulki", "Mangaluru", "Udupi", "Kinnigoli", "Surathkal", "Moodabidri", "Coastal Karnataka"],
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Tour Packages", href: "#packages" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export const TRUST_POINTS = [
  {
    title: "Comfortable Travel",
    desc: "Clean, well-maintained, air-conditioned vehicles for a smooth and relaxing ride.",
    icon: "ShieldCheck",
  },
  {
    title: "Reliable Service",
    desc: "Experienced local drivers familiar with all coastal routes, temples, and outstation highways.",
    icon: "Clock",
  },
  {
    title: "Personalized Trips",
    desc: "Customizable travel itineraries tailored to family holidays, temple visits, and group outings.",
    icon: "Compass",
  },
];

export const SERVICES_LIST = [
  {
    id: "local-city",
    title: "Local City Travel",
    desc: "Quick, dependable taxi rides across Mulki, Surathkal, Mangaluru, and Udupi for daily errands, shopping, and visits.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    badge: "Daily Cab Service",
  },
  {
    id: "outstation",
    title: "Outstation Taxi Services",
    desc: "Comfortable one-way and round-trip long-distance taxi services connecting Mulki to anywhere in Karnataka, Goa, and Kerala.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    badge: "Intercity Travel",
  },
  {
    id: "family-trips",
    title: "Family Trips & Vacations",
    desc: "Spacious multi-seater vehicles designed for relaxed family holidays, weekend getaways, and scenic coastal road trips.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    badge: "Spacious & Safe",
  },
  {
    id: "temple-pilgrimage",
    title: "Temple & Pilgrimage Tours",
    desc: "Special pilgrimage transport to revered coastal shrines including Kateel, Dharmasthala, Subramanya, Kollur Mookambika, and Udupi Krishna Matha.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    badge: "Devotional Circuits",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    desc: "Punctual pick-up and drop-off services to and from Mangaluru International Airport (IXE) with flight-timed coordination.",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80",
    badge: "24/7 Availability",
  },
  {
    id: "group-tours",
    title: "Group Tours & Sightseeing",
    desc: "Roomy Tempo Travellers and group vehicles with ample luggage capacity for corporate trips, student excursions, and large families.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    badge: "Group Comfort",
  },
  {
    id: "wedding-events",
    title: "Wedding & Event Transportation",
    desc: "Dedicated guest transport fleets for weddings, receptions, cultural festivals, and family celebrations in Mulki and surrounding towns.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Ceremonial Logistics",
  },
  {
    id: "custom-packages",
    title: "Customized Travel Packages",
    desc: "Bespoke travel plans tailored specifically to your schedule, chosen stops, and budget across South India.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    badge: "Flexible Itineraries",
  },
];

export const FLEET_LIST = [
  {
    id: "hatchback",
    category: "Economy Hatchback",
    modelExample: "WagonR / Swift or equivalent",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    capacity: "4 Passengers",
    luggage: "2 Medium Bags",
    ac: true,
    suitableFor: "Local city travel, solo travelers, small families, and budget outstation trips.",
    features: ["Air Conditioned", "Clean & Sanitized", "Budget Friendly", "Smooth City Nav"],
  },
  {
    id: "sedan",
    category: "Prime Sedan",
    modelExample: "Swift Dzire / Etios or equivalent",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    capacity: "4 Passengers",
    luggage: "3 Medium Bags",
    ac: true,
    suitableFor: "Airport transfers, business meetings, couple getaways, and temple visits in supreme comfort.",
    features: ["Extra Legroom", "Large Boot Space", "Smooth Highway Ride", "Chauffeur Driven"],
  },
  {
    id: "suv",
    category: "Premium SUV",
    modelExample: "Innova Crysta / Ertiga or equivalent",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    capacity: "6-7 Passengers",
    luggage: "4-5 Bags",
    ac: true,
    suitableFor: "Family vacations, outstation hill station tours, ghat roads, and group pilgrimage circuits.",
    features: ["Spacious Seating", "Dual AC Vents", "Superior Ghat Comfort", "Generous Luggage"],
  },
  {
    id: "tempo-traveller",
    category: "Tempo Traveller",
    modelExample: "12 / 17 Seater Luxury Traveller",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    capacity: "12-17 Passengers",
    luggage: "Ample Luggage Carrier",
    ac: true,
    suitableFor: "Large family reunions, wedding guest convoys, corporate team outings, and multi-day tours.",
    features: ["Reclining Push-back Seats", "Surround AC", "Music System", "Overhead Racks"],
  },
];

export const TOUR_PACKAGES = [
  {
    id: "udupi-malpe",
    name: "Udupi & Malpe Coastal Trail",
    tagline: "Spiritual aura and golden beaches",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    highlights: ["Sri Krishna Temple", "Malpe Beach & Sea Walk", "St. Mary's Island ferry point", "Kapu Lighthouse"],
    duration: "Day Trip / Flexible",
  },
  {
    id: "dharmasthala-subramanya",
    name: "Dharmasthala & Kukke Subramanya",
    tagline: "Sacred Western Ghats pilgrimage",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    highlights: ["Manjunatha Swamy Temple", "Annappa Hill", "Kukke Subramanya Shrine", "Scenic Ghat Road"],
    duration: "1 to 2 Days",
  },
  {
    id: "murudeshwar-gokarna",
    name: "Murudeshwar & Gokarna Expedition",
    tagline: "Colossal Shiva statue & tranquil beaches",
    image: "https://images.unsplash.com/photo-1626014303757-658c35398282?auto=format&fit=crop&w=800&q=80",
    highlights: ["Murudeshwar Temple & Raja Gopura", "Om Beach & Kudle Beach", "Mahabaleshwar Temple", "Coastal Highway Drive"],
    duration: "1 to 2 Days",
  },
  {
    id: "mangaluru-kateel",
    name: "Mangaluru Heritage & Kateel Circuit",
    tagline: "Local temples, churches, and coastal cuisines",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    highlights: ["Kateel Sri Durgaparameshwari", "Kudroli Gokarnanatheshwara", "Panambur Beach", "Mangaladevi Temple"],
    duration: "1 Day Circuit",
  },
  {
    id: "coorg-madikeri",
    name: "Coorg Hill Station Getaway",
    tagline: "Coffee plantations & misty peaks",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    highlights: ["Raja's Seat", "Abbey Falls", "Golden Temple Kushalnagar", "Coffee Estate Drives"],
    duration: "2 to 3 Days",
  },
  {
    id: "mysuru-heritage",
    name: "Mysuru Royal Heritage Tour",
    tagline: "Historic palaces, gardens, and Chamundi Hill",
    image: "https://images.unsplash.com/photo-1600100397608-f010e42e4e1f?auto=format&fit=crop&w=800&q=80",
    highlights: ["Mysore Palace", "Chamundeshwari Temple", "Brindavan Gardens", "Srirangapatna"],
    duration: "2 to 3 Days",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Comfortable Travel",
    desc: "Well-maintained, clean, air-conditioned vehicles fitted with comfortable seating for relaxed short and long drives.",
    icon: "ShieldCheck",
  },
  {
    title: "Convenient Booking",
    desc: "Quick quote requests directly through our website or direct one-tap WhatsApp and phone bookings.",
    icon: "PhoneCall",
  },
  {
    title: "Flexible Trip Planning",
    desc: "Need an extra stop or route adjustment? We accommodate customized pickup times and multi-stop requirements.",
    icon: "Calendar",
  },
  {
    title: "Friendly Local Drivers",
    desc: "Courteous drivers with deep familiarity with coastal Karnataka roads, temple timings, and local traffic shortcuts.",
    icon: "UserCheck",
  },
  {
    title: "Suitable for Families & Groups",
    desc: "From compact hatchbacks to spacious 7-seater SUVs and tempo travellers, we cater to groups of all sizes comfortably.",
    icon: "Users",
  },
  {
    title: "Personalized Travel Assistance",
    desc: "Direct communication with our team in Mulki to plan optimal routes, departure times, and destination stops.",
    icon: "HeartHandshake",
  },
];

export const GALLERY_ITEMS = [
  {
    title: "Scenic Coastal Drives",
    category: "Road Trips",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pristine Western Ghats Pilgrimage",
    category: "Temple Tours",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Well-Maintained Travel Fleet",
    category: "Our Vehicles",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Family Vacations & Getaways",
    category: "Family Tours",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Coastal Beaches & Sunsets",
    category: "Sightseeing",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Spacious Multi-Seater SUV Comfort",
    category: "Fleet Showcase",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  },
];

export const TESTIMONIALS_LIST = [
  {
    quote:
      "We booked a cab from Mulki for our family temple visit across Kateel and Dharmasthala. The vehicle was spotless, AC was great, and the driver was very polite and punctual. Highly recommended for family travel!",
    author: "Ramesh Bhat",
    location: "Mulki",
    tripType: "Temple Pilgrimage",
    rating: 5,
  },
  {
    quote:
      "Smooth airport pickup from Mangaluru Airport to Mulki late at night. The booking via WhatsApp was seamless and prompt. Safe driving and fair pricing.",
    author: "Pooja Hegde",
    location: "Mangaluru",
    tripType: "Airport Transfer",
    rating: 5,
  },
  {
    quote:
      "Took an Innova for a 3-day family trip to Murudeshwar and Gokarna. Very comfortable journey with plenty of luggage room. Shree Bhagavanthi Travels made our coastal vacation completely stress-free.",
    author: "Santhosh Shetty",
    location: "Surathkal",
    tripType: "Outstation Tour",
    rating: 5,
  },
  {
    quote:
      "Reliable and prompt service right from Lingappadavakadu. We frequently hire their vehicles for local ceremonies and outstation trips. Always friendly and dependable.",
    author: "Divya Acharya",
    location: "Kinnigoli",
    tripType: "Family Trip",
    rating: 5,
  },
];

/**
 * Helper to construct WhatsApp link with verified number and prefilled message
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}
