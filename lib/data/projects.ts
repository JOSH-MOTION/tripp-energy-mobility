export type ProjectSpec = { label: string; value: string };

export type Project = {
  slug: "csrp" | "psebp" | "ssecnp" | "lsecnp";
  code: string;
  fullName: string;
  target: string;
  color: string; // css var name suffix, e.g. "csrp"
  headline: string;
  intro: string;
  bullets: string[];
  specs: ProjectSpec[];
  extra?: { heading: string; body: string };
  table?: { headers: string[]; rows: string[][] };
};

export const projects: Project[] = [
  {
    slug: "csrp",
    code: "Project 1 — CSRP",
    fullName: "Circular Solar Retrofit Project",
    target: "Lower-fee schools",
    color: "csrp",
    headline: "Remanufacturing Nigeria's School Bus Fleet, One Bus at a Time.",
    intro:
      "Project 1 (CSRP) converts end-of-life petrol school buses into solar-charged electric vehicles through circular remanufacturing, removing the petrol drivetrain and installing a purpose-sized LiFePO4 battery pack, AC induction motor, motor controller, on-board charger, BMS, and SPARC+CM VCU telematics device. The Toyota HiAce 18-seater is the primary donor vehicle.",
    bullets: [
      "74–81% lower capital cost than a new electric bus, accessible to lower-fee schools",
      "Preserves 20–30 tonnes of CO₂e of embedded vehicle manufacturing carbon per bus",
      "Creates Nigerian green jobs at SPARC+CM's Lagos EV conversion workshop",
      "Generates two additional carbon credit streams: transport emission credits and embodied circular remanufacturing credits",
      "Uses the Toyota HiAce platform, universally familiar to Lagos mechanics with ubiquitous spare parts",
    ],
    specs: [
      { label: "Battery Pack", value: "35–40kWh LiFePO4, purpose-sized for 30–40km school duty cycle" },
      { label: "Motor", value: "70–100kW AC induction motor with regenerative braking" },
      { label: "Battery Chemistry", value: "LiFePO4, thermally stable in Lagos 35–45°C ambient" },
      { label: "Daily Cycle Depth", value: "20–30%, maximises battery longevity to 12–15 years" },
      { label: "Charging", value: "7.4kW AC Type 2 on-board charger, compatible with Layer 2 charging bay" },
      { label: "Telematics", value: "SPARC+CM VCU: GPS, battery SoC, energy consumption, charging session data" },
      { label: "Certification", value: "VIO/FRSC roadworthiness certificate, Nigeria's EV conversion pathway" },
    ],
  },
  {
    slug: "psebp",
    code: "Project 2 — PSEBP",
    fullName: "School Electric Bus Project",
    target: "Higher-fee schools",
    color: "psebp",
    headline: "New Electric Buses for Higher-Fee Schools, Financed Not Purchased.",
    intro:
      "Project 2 (PSEBP) deploys new electric school buses at higher-fee schools through DFI concessional loans. SPARC+CM's comparative vehicle analysis identified three primary options for the higher-fee track.",
    bullets: [
      "No upfront capital required from the school operator",
      "Financed through concessional DFI loan instruments",
      "Matched to route length, seat count, and climate duty cycle per school",
      "Full manufacturer warranty options available on premium platforms",
    ],
    specs: [],
    table: {
      headers: ["Vehicle", "Specification", "Best For"],
      rows: [
        ["Kama ESP8", "41.86kWh CATL battery", "Best 10-year TCO, $24,690. Near-perfect duty cycle fit for Lagos school routes."],
        ["Kama Long-Range", "86.1kWh LiFePO4", "400km NEDC range. Designed for Nigeria and South Africa. Higher-fee schools."],
        ["Yutong V6E", "104kWh CATL battery", "Premium brand. Full manufacturer warranty. Highest-fee schools."],
      ],
    },
  },
  {
    slug: "ssecnp",
    code: "Project 3 — SSECNP",
    fullName: "Solar-Storage Energy and Charging Nexus",
    target: "All schools, universal",
    color: "ssecnp",
    headline: "Solar Primary Electricity for Every School: The Foundation of Everything Else.",
    intro:
      "Project 3 (SSECNP) is the universal project: every SPARC+CM school receives it regardless of which bus track they are on. It installs rooftop solar PV and battery storage as the school's primary electricity system, governed by the three-layer SEMS. The Phase 1 pilot installation at PMCC is a 120kWp system generating approximately 168,000kWh per year.",
    bullets: [
      "Rooftop solar PV and battery storage as the school's primary electricity system",
      "Governed by the three-layer SEMS priority sequence at all times",
      "Phase 1 pilot: 120kWp system at PMCC generating approximately 168,000kWh per year",
      "Six-month harmattan monitoring programme at Abba's Heart, September 2026 to February 2027",
    ],
    specs: [],
    extra: {
      heading: "The Harmattan Resilience Protocol",
      body: "The West African harmattan season (September to February) reduces solar irradiance by 15–25% through dust loading. SPARC+CM's six-month monitoring programme at Abba's Heart (September 2026–February 2027) will generate the first independently validated harmattan season solar performance dataset for a commercial-scale Lagos school installation, published as the open-source Harmattan Resilience Protocol, freely available to any Nigerian solar installer for system sizing.",
    },
  },
  {
    slug: "lsecnp",
    code: "Project 4 — LSECNP",
    fullName: "School-Anchored EV Charging Network",
    target: "All schools, universal",
    color: "lsecnp",
    headline: "108+ Solar-Powered Public EV Charging Points on Lagos Traffic Corridors.",
    intro:
      "Project 4 (LSECNP) builds Nigeria's first solar-powered, school-anchored, corridor-distributed public EV charging network, accessible via mobile app or USSD to unbanked users, powered entirely by Layer 3 solar surplus.",
    bullets: [
      "Nigeria's first solar-powered, school-anchored, corridor-distributed charging network",
      "Accessible via mobile app or USSD (*123#) to unbanked users",
      "Powered entirely by Layer 3 solar surplus, no additional grid draw",
      "Revenue split automated via the Network Management System (NMS)",
    ],
    specs: [
      { label: "Charging Standard", value: "AC Type 2, 7.4kW per point, compatible with all Lagos EV types" },
      { label: "Payment Access", value: "QR code app + USSD (*123#), accessible without smartphones" },
      { label: "Revenue Split", value: "70% to SPARC+CM programme pool, 30% to school operator" },
      { label: "Carbon Accounting", value: "Every kWh dispensed converted to CO₂e avoided, logged for Gold Standard / Verra VCS" },
      { label: "Phase 1 Network", value: "4 charging points across 2 schools: PMCC and Abba's Heart" },
      { label: "Phase 2 Network", value: "108+ charging points across 54 Lagos schools on 6 major traffic corridors" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
