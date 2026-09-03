export const site = {
  name: "Tripp Energy and Mobility",
  shortName: "Tripp Energy",
  domain: "trippenergy.com",
  tagline: "Powering Schools. Transforming Mobility. Building a Cleaner Africa.",
  legalForm: "social enterprise",
  whatsapp: "https://wa.me/2340000000000",
  offices: [
    {
      country: "France",
      entity: "Tripp Energy and Mobility",
      address: "2 Rue Robert d'Arbrissel, 35065 Rennes, France",
      email: "contact@trippenergy.com",
    },
    {
      country: "Nigeria",
      entity: "Tripp Energy and Mobility Nigeria Limited",
      address: "Lagos, Nigeria",
      email: "nigeria@trippenergy.com",
    },
  ],
  contactEmails: [
    { label: "Enquiries", email: "info@trippenergy.com" },
    // { label: "School Partnerships", email: "schools@trippenergy.com" },
    // { label: "Technology Partners", email: "partners@trippenergy.com" },
    // { label: "Academic Partnerships", email: "research@trippenergy.com" },
    // { label: "Media and Press", email: "media@trippenergy.com" },
    // { label: "General Enquiries", email: "contact@trippenergy.com" },
    // { label: "Careers", email: "careers@trippenergy.com" },
  ],
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "The Problem", href: "/the-problem" },
  { label: "Our Solution", href: "/our-solution" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "CSRP", href: "/projects/csrp", description: "Circular Solar Retrofit Project" },
      { label: "PSEBP", href: "/projects/psebp", description: "School Electric Bus Project" },
      { label: "SSECNP", href: "/projects/ssecnp", description: "Solar-Storage Energy and Charging Nexus" },
      { label: "LSECNP", href: "/projects/lsecnp", description: "School-Anchored EV Charging Network" },
    ],
  },
  { label: "Programme Family", href: "/programme-family" },
  { label: "Impact", href: "/impact" },
  {
    label: "News",
    href: "/news",
    // children: [
    //   { label: "Research", href: "/research", description: "Publications and open-source protocols" },
    //   { label: "Partners", href: "/partners", description: "Pilot schools, DFIs, suppliers" },
    //   { label: "News", href: "/news", description: "Programme updates and insights" },
    //   { label: "Careers", href: "/careers", description: "Roles and student collaborators" },
    //   { label: "Press", href: "/press", description: "Media assets and contact" },
    // ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "Programme",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Problem", href: "/the-problem" },
      { label: "Our Solution", href: "/our-solution" },
      // { label: "Programme Family", href: "/programme-family" },
      // { label: "Impact", href: "/impact" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "CSRP", href: "/projects/csrp" },
      { label: "PSEBP", href: "/projects/psebp" },
      { label: "SSECNP", href: "/projects/ssecnp" },
      { label: "LSECNP", href: "/projects/lsecnp" },
    ],
  },
  {
    heading: "Organisation",
    links: [
      // { label: "Research", href: "/research" },
      // { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
      // { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      // { label: "Press", href: "/press" },
    ],
  },
];
