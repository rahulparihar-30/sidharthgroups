import BusinessLandingPage from "../BusinessLandingPage";

const constructionData = {
  // --- Hero Section ---
  name: "Siddharth Construction",
  tagline: "Engineering the Skylines of Tomorrow.",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // A grand skyscraper shot

  // --- About Section ---
  aboutText: "For over four decades, Siddharth Construction has been the cornerstone of trust and innovation in the infrastructure sector. From redefining urban landscapes with ultra-modern complexes to creating commercial ecosystems, our legacy is built on engineering precision, timely delivery, and an obsession with quality.",

  // --- The Floating Stats Strip ---
  stats: [
    { label: "Sq.Ft Delivered", value: "12M+" },
    { label: "Ongoing Projects", value: "19" },
    { label: "Happy Families", value: "15k+" },
    { label: "City Presence", value: "Pune & Mumbai" },
  ],

  // --- Services / Capabilities ---
  services: [
    {
      title: "Commercial & Retail Complexes",
      desc: "Building state-of-the-art malls and retail hubs that serve as prime locations for our franchise partners."
    },
    {
      title: "Commercial IT Parks",
      desc: "Developing LEED Platinum certified office spaces designed for Fortune 500 companies with smart automation."
    },
    {
      title: "Urban Redevelopment",
      desc: "Transforming aging city landscapes into modern architectural marvels while preserving community heritage."
    },
    {
      title: "Industrial Warehousing",
      desc: "Strategic logistics parks and warehousing solutions optimized for supply chain efficiency and connectivity."
    },
  ],

  // --- Bottom Gallery ---
  gallery: [
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800", // Highway/Bridge
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Corporate Office
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800", // Stock/Trading/Business
  ]
};


const Construction = () => {
  return <BusinessLandingPage data={constructionData} />
}

export default Construction;