import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CalendarRange,
  ChevronRight,
  CircleCheck,
  Dumbbell,
  Factory,
  Filter,
  LayoutGrid,
  MapPin,
  PoundSterling,
  Search,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const welcomeScreenImage = "/mnt/data/page-35.png";

const projects = [
  {
    id: "wow-london",
    title: "WOW London",
    location: "Camden, London",
    sector: "Retail",
    value: "£220,000",
    programme: "6 Weeks",
    summary: "Bold branded retail fit-out with custom joinery and a playful, highly visual customer environment.",
    description:
      "Pelham delivered a Cat A & B plus shop fitting scheme for WOW London, blending brand expression with precise retail execution and highly visual merchandising.",
    image: "/mnt/data/page-11.png",
    tags: ["Retail", "Joinery", "Brand-led"],
  },
  {
    id: "robnor-resinlab",
    title: "Robnor Resinlab",
    location: "Athena Ave, Swindon",
    sector: "Industrial",
    value: "Specialist fit-out",
    programme: "Multi-area delivery",
    summary: "Manufacturing, storage and office delivery with specialist infrastructure and controlled environments.",
    description:
      "A technically demanding project spanning manufacturing, warehouse, storage and office spaces with specialist infrastructure to support operations and process environments.",
    image: "/mnt/data/page-12.png",
    tags: ["Industrial", "Specialist", "Infrastructure"],
  },
  {
    id: "digital-realty",
    title: "Digital Realty",
    location: "London",
    sector: "Industrial",
    value: "£5M+",
    programme: "200,000+ SQFT",
    summary: "Large-scale data-centre related delivery with warehousing, office build and infrastructure works.",
    description:
      "Pelham completed design and build work for Digital Realty including office, warehouse and infrastructure support, demonstrating technical capability at substantial scale.",
    image: "/mnt/data/page-13.png",
    tags: ["Data Centre", "Industrial", "Scale"],
  },
  {
    id: "lek",
    title: "LEK",
    location: "Victoria, London",
    sector: "Commercial",
    value: "30,000 SQ FT refresh",
    programme: "Reconfiguration",
    summary: "Quiet zones, meetings, new desking and refreshed finishes within an existing live workspace.",
    description:
      "A commercial reconfiguration and refresh designed to support team growth while blending seamlessly with the original office character.",
    image: "/mnt/data/page-15.png",
    tags: ["Commercial", "Refresh", "Workplace"],
  },
  {
    id: "agora",
    title: "Agora",
    location: "London",
    sector: "Commercial",
    value: "6-floor refurbishment",
    programme: "8 Weeks",
    summary: "Fast-track serviced office refurbishment with reused materials and upgraded lighting and M&E.",
    description:
      "Pelham completed a six-floor refurbishment for serviced office provider Agora, balancing speed, reuse and finish quality.",
    image: "/mnt/data/page-16.png",
    tags: ["Commercial", "Refurbishment", "Fast-track"],
  },
  {
    id: "repeat-client",
    title: "Repeat Client",
    location: "London",
    sector: "Commercial",
    value: "£185,000",
    programme: "2,500 SQ FT",
    summary: "Budget-conscious CAT B design and build with strong amenity and space-efficiency thinking.",
    description:
      "This project shows how Pelham delivers value-led commercial environments without sacrificing quality, usability or visual coherence.",
    image: "/mnt/data/page-17.png",
    tags: ["Commercial", "CAT B", "Value-led"],
  },
  {
    id: "birrane-house",
    title: "Birrane House",
    location: "London",
    sector: "Commercial",
    value: "£2.2M",
    programme: "1st–4th floors",
    summary: "Comprehensive South Bank office refurbishment with premium finishes and major building upgrades.",
    description:
      "A landmark commercial refurbishment including lift works, staircase construction, façade repairs and a contemporary internal finish across multiple floors.",
    image: "/mnt/data/page-18.png",
    tags: ["Commercial", "Major Works", "Premium"],
  },
  {
    id: "bwin-party",
    title: "bwin.party",
    location: "One New Change, London",
    sector: "Commercial",
    value: "£3M",
    programme: "20,000 SQ FT",
    summary: "A high-design office for a global gaming company with strong brand expression and custom forms.",
    description:
      "Pelham designed and built a dynamic workspace reflecting bwin.party's brand standards, with custom Corian curves and a high-impact front-of-house identity.",
    image: "/mnt/data/page-19.png",
    tags: ["Commercial", "Brand-led", "Corporate HQ"],
  },
  {
    id: "hybrid-fitness",
    title: "Hybrid Fitness",
    location: "London",
    sector: "Leisure",
    value: "20,000 SQ FT max",
    programme: "Multi-site",
    summary: "Leisure and fitness rollout across multiple sites with consistent brand feel and specialist installations.",
    description:
      "Pelham worked closely with Hybrid Fitness across multiple schemes, including HVAC, lighting, hot yoga rooms and branded member spaces.",
    image: "/mnt/data/page-20.png",
    tags: ["Leisure", "Multi-site", "Brand Consistency"],
  },
  {
    id: "coffee-republic",
    title: "Coffee Republic",
    location: "Putney High Street, London",
    sector: "Retail",
    value: "Flagship Store",
    programme: "4 Weeks",
    summary: "New flagship retail and hospitality environment designed to feel open, bright and inviting.",
    description:
      "Pelham delivered a fast-paced flagship fit-out for Coffee Republic, including planning support, glazing changes and bespoke joinery.",
    image: "/mnt/data/page-21.png",
    tags: ["Retail", "Hospitality", "Fast-track"],
  },
];

const services = [
  "Design & Build",
  "Workplace Consultancy",
  "Interior Fit-Out & Refurbishment",
  "Furniture Specification",
  "Move Management",
  "Post-Occupancy Support",
];

const processSteps = [
  "Brief & Analysis",
  "Space Planning & Budgets",
  "Interior Design & Fixed Pricing",
  "Build",
  "Furniture & Move",
  "Hand-Over & Support",
];

const SECTOR_ICONS = {
  Retail: Store,
  Industrial: Factory,
  Leisure: Dumbbell,
};

function StatCard({ value, label }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <div className="text-3xl font-semibold text-lime-300">{value}</div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

function Header({ query, setQuery, sector, setSector }) {
  const sectors = ["All", "Commercial", "Industrial", "Retail", "Leisure"];
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#232528]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Building2 className="h-6 w-6 text-lime-300" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">Pelham Interiors</div>
              <h1 className="text-xl font-semibold md:text-2xl">Interactive Customer Dashboard</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="flex min-w-[260px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              <Search className="h-4 w-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, sectors, locations..."
                className="w-full bg-transparent outline-none placeholder:text-white/35"
              />
            </label>
            <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-2">
              <Filter className="ml-1 h-4 w-4 text-white/40" />
              {sectors.map((item) => (
                <button
                  key={item}
                  onClick={() => setSector(item)}
                  className={`rounded-xl px-3 py-2 text-sm ${sector === item ? "bg-lime-400 text-[#20231f]" : "text-white/70 hover:bg-white/10"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-[1.08fr_.92fr] md:px-6 md:py-8">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,205,58,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="relative z-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-lime-300">
            <Sparkles className="h-3.5 w-3.5" />
            Welcome to Pelham Interiors
          </div>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Explore projects, sectors, delivery strengths and design capability in one place.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            A polished customer dashboard concept inspired by Pelham&apos;s brochure and website aesthetic, helping prospects understand what Pelham does and where Pelham excels.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-5 py-3 font-medium text-[#20231f]">
              Explore projects <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
              Learn the process <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
        <Image src={welcomeScreenImage} alt="Pelham welcome screen" fill className="min-h-[320px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="rounded-[22px] border border-white/10 bg-black/30 p-5 backdrop-blur-md">
            <div className="text-xs uppercase tracking-[0.25em] text-lime-300">Featured welcome screen</div>
            <div className="mt-2 text-2xl font-semibold">Design-led interiors. Commercial confidence.</div>
            <p className="mt-2 text-sm text-white/70">The latest uploaded page is used as the opening visual anchor for the dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStats() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-6 md:grid-cols-4 md:px-6">
      <StatCard value="70+" label="Years of experience" />
      <StatCard value="10,000,000+" label="Sq ft delivered" />
      <StatCard value="500+" label="Office fit-outs" />
      <StatCard value="4" label="Core sectors featured" />
    </section>
  );
}

function TabNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "projects", label: "Projects", icon: LayoutGrid },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "process", label: "Process", icon: CircleCheck },
    { id: "insights", label: "Insights", icon: BarChart3 },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mb-6 flex flex-wrap gap-2 rounded-[24px] border border-white/10 bg-white/5 p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium ${activeTab === tab.id ? "bg-lime-400 text-[#20231f]" : "text-white/70 hover:bg-white/10"}`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 p-3">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/40">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-white/90">{value}</div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const Icon = SECTOR_ICONS[project.sector] ?? Briefcase;
  return (
    <button
      onClick={() => onOpen(project)}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.06]"
    >
      <div className="relative h-64 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191b] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
          <Icon className="h-3.5 w-3.5" />
          {project.sector}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm text-lime-300">{project.location}</div>
        <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">{project.summary}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Metric icon={PoundSterling} label="Value" value={project.value} />
          <Metric icon={CalendarRange} label="Programme" value={project.programme} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function ProjectGrid({ items, onOpen }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">Selected work</div>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Project explorer</h2>
        </div>
        <div className="text-sm text-white/45">{items.length} results</div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function ServicesPanel() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-14 md:grid-cols-[.9fr_1.1fr] md:px-6">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">What Pelham does</div>
        <h2 className="mt-2 text-3xl font-semibold">Service architecture</h2>
        <p className="mt-4 text-sm leading-7 text-white/65">
          The dashboard presents Pelham as a full-service design and build partner with consultancy, fit-out, refurbishment, furniture and handover capability.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="mb-3 h-1.5 w-16 rounded-full bg-lime-400" />
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessPanel() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
      <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">Delivery model</div>
        <h2 className="mt-2 text-3xl font-semibold">Six steps to success</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step} className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/15 p-5">
              <div className="absolute right-3 top-2 text-6xl font-semibold text-white/[0.05]">0{index + 1}</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/15 text-lime-300">
                <CircleCheck className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-medium leading-6">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsPanel({ items }) {
  const grouped = useMemo(() => {
    const counts = items.reduce((acc, item) => {
      acc[item.sector] = (acc[item.sector] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts);
  }, [items]);

  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 md:grid-cols-[1fr_.95fr] md:px-6">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">Sector mix</div>
        <h2 className="mt-2 text-3xl font-semibold">Capability signals</h2>
        <div className="mt-8 space-y-4">
          {grouped.map(([sector, count]) => (
            <div key={sector}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/75">{sector}</span>
                <span className="text-lime-300">{count}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-lime-400" style={{ width: `${(count / items.length) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">Why this works</div>
        <h2 className="mt-2 text-3xl font-semibold">Customer-first interaction</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-white/65">
          <li>• Search and filter by sector, location and project type.</li>
          <li>• Visual-first cards using Pelham case-study imagery.</li>
          <li>• Modal drill-down for deeper project storytelling.</li>
          <li>• Services, process and credibility surfaced without clutter.</li>
          <li>• Strong component structure for future CMS or API integration.</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-[#232528] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/10 p-5 md:p-6">
          <div>
            <div className="text-sm text-lime-300">{project.location}</div>
            <h3 className="text-2xl font-semibold md:text-3xl">{project.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/70 hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid max-h-[calc(90vh-88px)] overflow-auto md:grid-cols-[1.08fr_.92fr]">
          <div className="p-5 md:p-6">
            <p className="text-base leading-8 text-white/75">{project.description}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <Metric icon={MapPin} label="Location" value={project.location} />
              <Metric icon={PoundSterling} label="Value" value={project.value} />
              <Metric icon={CalendarRange} label="Programme" value={project.programme} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] border-t border-white/10 md:border-l md:border-t-0">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PelhamCustomerDashboard() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All");
  const [activeTab, setActiveTab] = useState("projects");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchSector = sector === "All" || project.sector === sector;
      const haystack = `${project.title} ${project.location} ${project.sector} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
      const matchQuery = haystack.includes(query.toLowerCase());
      return matchSector && matchQuery;
    });
  }, [query, sector]);

  return (
    <div className="min-h-screen text-white" style={{ background: "radial-gradient(circle at top left, rgba(157,205,58,0.12), transparent 24%), linear-gradient(180deg, #232528 0%, #1d1f22 100%)" }}>
      <Header query={query} setQuery={setQuery} sector={sector} setSector={setSector} />
      <Hero />
      <QuickStats />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "projects" && <ProjectGrid items={filteredProjects} onOpen={setActiveProject} />}
      {activeTab === "services" && <ServicesPanel />}
      {activeTab === "process" && <ProcessPanel />}
      {activeTab === "insights" && <InsightsPanel items={filteredProjects} />}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
