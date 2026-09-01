export type NewsPost = {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const newsCategories = [
  "Programme Updates",
  "Research and Publications",
  "Technology",
  "Policy and Market",
  "Team",
];

export const newsPosts: NewsPost[] = [
  {
    slug: "introducing-sparc-cm",
    category: "Programme Updates",
    title: "Introducing SPARC+CM: How We Are Turning Lagos Schools Into Solar Energy Hubs",
    date: "September 2026",
    excerpt:
      "SPARC+CM launches in Lagos this month with two pilot schools. Here is the full picture of what the programme does and why it starts here.",
    body: [
      "This month, SPARC+CM begins its founding deployment in Lagos, Nigeria, at two schools that could not be more different in profile: Padre Monti Catholic College, a lower-fee Catholic secondary school in Abijo, and Abba's Heart Montessori School, a higher-fee institution already running on off-grid solar in Ibeju-Lekki. Between them, they represent the two ends of the fee spectrum SPARC+CM is designed to serve.",
      "The programme's premise is simple to state and hard to deliver: solar electricity for the school first, always and unconditionally, with any surplus used to charge electric school buses and then to power public EV charging points at the school perimeter. Every layer is financed by the layer below it, which is why no school pays anything upfront.",
      "At PMCC, that means a circularly remanufactured Toyota HiAce and a 120kWp rooftop solar-storage system. At Abba's Heart, it means a new electric bus financed through a concessional loan, layered onto an existing 200kWp installation that has quietly run the school since 2019.",
      "Over the next eighteen months, both schools will generate the operating data that underpins everything else in this programme: fuel savings, teaching hours recovered, and the first independently verified performance figures for a solar-retrofit nexus of this kind anywhere in West Africa.",
    ],
  },
  {
    slug: "5-10-5-80-model-explained",
    category: "Programme Updates",
    title: "The 5/10/5/80 Model Explained: How School Fuel Savings Fund the Clean Energy Transition",
    date: "September 2026",
    excerpt:
      "SPARC+CM's financial architecture splits bus fuel savings four ways. Here is why each share matters, and how it repays DFI capital without a single subsidy cheque.",
    body: [
      "Every SPARC+CM electric bus replaces a fuel bill that, at current Lagos prices, runs to over ₦1,400,000 a year. What happens to that saving is the mechanism that makes the whole programme self-financing, and it is deliberately split four ways.",
      "Five percent goes directly to parents, as a reduction in school bus fees from the very first term of electric operation. Ten percent becomes institutional profit for the school operator: a commercial return for participating, with zero capital outlay. Five percent covers programme expenses: monitoring, carbon credit verification, and reporting.",
      "The remaining eighty percent flows into the programme's financial pool. That pool does two jobs at once. It repays the concessional capital that funded the bus and solar installation in the first place, and it seeds the next school's deployment. No further subsidy cheque is required once the cycle is running.",
      "It is a model built for scale rather than for a single showcase site: every bus that pays down its own capital cost also part-funds the bus after it.",
    ],
  },
  {
    slug: "why-we-remanufacture-not-scrap",
    category: "Technology",
    title: "Why We Are Circularly Remanufacturing School Buses, Not Scrapping Them",
    date: "October 2026",
    excerpt:
      "New electric buses cost 4 to 5 times what a circular retrofit costs. For lower-fee schools, that difference decides whether the programme reaches them at all.",
    body: [
      "The Toyota HiAce is the most common school bus on Lagos roads, and most of the ageing fleet still has a sound chassis and body long after the petrol drivetrain has become an unaffordable liability. Project 1, CSRP, is built around that observation.",
      "The conversion removes the internal combustion drivetrain and installs a purpose-sized 35 to 40kWh LiFePO4 battery pack, a 70 to 100kW AC induction motor with regenerative braking, a motor controller, an on-board charger, a battery management system, and SPARC+CM's own VCU telematics unit.",
      "The result costs 74 to 81 percent less than procuring a new electric bus, which is the difference between a programme that can only reach premium schools and one that can reach the schools where 15 to 25 percent of the operating budget is already going to generator fuel.",
      "It also does something a new vehicle cannot: it preserves the 20 to 30 tonnes of embodied manufacturing carbon already locked into the vehicle, generating a second, independent carbon credit stream on top of the transport emissions avoided by going electric.",
    ],
  },
  {
    slug: "harmattan-and-solar",
    category: "Research and Publications",
    title: "Harmattan and Solar: What Seven Years of Data at Abba's Heart Tells Us",
    date: "November 2026",
    excerpt:
      "Abba's Heart has run on off-grid solar since 2019, through seven harmattan seasons. That history is now becoming a published protocol for every solar installer in Lagos.",
    body: [
      "Every year between September and February, the harmattan wind carries Saharan dust across West Africa and cuts solar irradiance across Lagos by 15 to 25 percent. Most system sizing calculations in Nigeria either ignore this or guess at it.",
      "Abba's Heart Montessori School has been generating real data on the question since 2019, when its 200kWp off-grid installation went live. That makes it, unusually, a school with seven full harmattan seasons of operating history already on the books before SPARC+CM's own six-month monitoring programme even begins.",
      "From September 2026 to February 2027, that monitoring programme will combine Abba's Heart's historical performance with new instrumentation to produce the first independently validated harmattan season solar performance dataset for a commercial-scale Lagos school installation.",
      "The output will be published in March 2027 as the open-source Harmattan Resilience Protocol: a free, practical sizing methodology for any Nigerian solar installer, whether or not they ever work with SPARC+CM.",
    ],
  },
  {
    slug: "from-lagos-to-karachi",
    category: "Programme Updates",
    title: "From Lagos to Karachi: The SPARC+CM Programme Family Introduction",
    date: "December 2026",
    excerpt:
      "One methodology, six programme identities, five countries. Here is why SPARC+CM does not try to look the same everywhere it operates.",
    body: [
      "SPARC+CM is the platform, but it is not the name most schools will ever see. In Nigeria it operates as LASMOCEP, the Lagos Solar Mobility and Circular Economy Programme. In the Democratic Republic of Congo and Ivory Coast it becomes LUMECO, delivered in French through the CFIC Catholic congregation network. In Ethiopia it is SPARC+ET, arriving at exactly the moment the country's ban on ICE vehicle imports has left over 115,000 EVs short of charging infrastructure.",
      "In Pakistan, NOOR-CM, meaning divine light, is structured around IsDB Shariah-compliant financing for fully off-grid schools. In India, SURYA-CM, named for the Sanskrit word for the sun, is built to be eligible for the FAME and PM E-DRIVE subsidy schemes in Tier 2 cities.",
      "Six names, one underlying methodology: solar electricity first, then bus charging, then public EV charging, financed by the 5/10/5/80 model in every geography. The identities change so that each deployment can speak the language, and meet the financing rules, of the market it is actually entering.",
    ],
  },
  {
    slug: "rsb-research-partnership",
    category: "Research and Publications",
    title: "Our Research Partnership with Rennes School of Business: What It Means for Open-Source Clean Energy",
    date: "January 2027",
    excerpt:
      "Every SPARC+CM claim is independently verifiable. That is what an academic anchor at a triple-accredited business school buys a social enterprise.",
    body: [
      "SPARC+CM is anchored by an independent academic research programme at Rennes School of Business in Rennes, France. RSB is triple-accredited by EQUIS, AACSB, and AMBA, ranks in the Financial Times Top 100 globally, and is a signatory to the UN Principles for Responsible Management Education.",
      "That anchor matters because it means programme findings are published whether or not they confirm the programme's own design assumptions. Seven peer-reviewed papers are planned across the four-year implementation period, starting with a study of circular retrofitting as a pathway to inclusive industrialisation in African cities, and culminating in a paper on carbon credits from integrated school-anchored solar-EV programmes.",
      "In Nigeria, the academic partnership is completed by Pan-Atlantic University and Lagos Business School, AACSB-accredited and ranked in the Financial Times Top 40 for Executive Education, giving the programme a rigorous in-country academic counterpart alongside its French anchor.",
      "The commitment underneath all of this is straightforward: every open-source protocol SPARC+CM publishes, starting with the Harmattan Resilience Protocol, is designed to be usable by any clean energy developer working in similar conditions, with or without a relationship to Tripp Energy and Mobility.",
    ],
  },
];

export const getPost = (slug: string) => newsPosts.find((p) => p.slug === slug);
