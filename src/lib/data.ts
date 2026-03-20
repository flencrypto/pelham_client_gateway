import type { Project, Service, ProcessStep, Insight, Metric, SustainabilityPillar } from '@/types'

export const projects: Project[] = [
  {
    id: 'mandarin-oriental',
    name: 'The Mandarin Oriental Residences, London',
    sector: 'Residential',
    value: '£4.2M',
    progress: 87,
    status: 'In Progress',
    location: 'Knightsbridge, London',
    description: 'A landmark residential transformation within one of London\'s most prestigious addresses. Spanning 24 private residences across three floors, this project redefines luxury urban living through bespoke material palettes and spatial artistry.',
    imageUrl: '',
    highlights: ['24 Private Residences', 'Bespoke Material Palette', 'Smart Home Integration', 'Museum-quality Art Curation'],
  },
  {
    id: 'one-canada-square',
    name: 'One Canada Square Workspace Transformation',
    sector: 'Commercial',
    value: '£2.8M',
    progress: 62,
    status: 'In Progress',
    location: 'Canary Wharf, London',
    description: 'A comprehensive reimagining of 40,000 sq ft of premium office space at London\'s iconic financial district tower. The brief demanded an environment that inspires collaboration while projecting authority and sophistication.',
    imageUrl: '',
    highlights: ['40,000 sq ft', 'WELL Building Certification', 'Biophilic Design Elements', 'Flexible Collaboration Zones'],
  },
  {
    id: 'langham-spa',
    name: 'The Langham Hotel Spa Renovation',
    sector: 'Hospitality',
    value: '£1.9M',
    progress: 100,
    status: 'Completed',
    location: 'Mayfair, London',
    completedDate: 'March 2024',
    description: 'A complete reimagining of the iconic Langham\'s wellness facilities, creating an 18-treatment-room sanctuary of calm. Materiality draws from natural stone, bronze, and hand-woven textiles to evoke serene escapism.',
    imageUrl: '',
    highlights: ['18 Treatment Rooms', 'Hydrotherapy Suite', 'Natural Stone Finishes', 'Award-winning Design'],
  },
  {
    id: 'canary-wharf-penthouses',
    name: 'Canary Wharf Penthouse Collection',
    sector: 'Residential',
    value: '£3.1M',
    progress: 45,
    status: 'In Progress',
    location: 'Canary Wharf, London',
    description: 'Four signature penthouses at the apex of a new residential tower, each with bespoke interior schemes reflecting distinct personality narratives. Panoramic Thames views form the backdrop to considered material compositions.',
    imageUrl: '',
    highlights: ['4 Signature Penthouses', 'Panoramic Thames Views', 'Custom Furniture Pieces', 'Private Terrace Design'],
  },
  {
    id: 'mayfair-members-club',
    name: 'Mayfair Private Members Club',
    sector: 'Hospitality',
    value: '£2.2M',
    progress: 73,
    status: 'In Progress',
    location: 'Mayfair, London',
    description: 'An intimate members club occupying a Georgian townhouse, where heritage architecture meets contemporary luxury. The club\'s identity is woven through every surface, creating a cohesive environment of discreet elegance.',
    imageUrl: '',
    highlights: ['Georgian Heritage Building', 'Library & Reading Room', 'Private Dining Rooms', 'Members Lounge'],
  },
  {
    id: 'chelsea-arts-quarter',
    name: 'Chelsea Arts Quarter Studios',
    sector: 'Commercial',
    value: '£1.4M',
    progress: 91,
    status: 'In Progress',
    location: 'Chelsea, London',
    description: 'A creative workspace development designed to attract and retain London\'s leading creative talent. Industrial heritage meets artisanal detailing in a scheme that celebrates the area\'s artistic legacy.',
    imageUrl: '',
    highlights: ['32 Creative Studios', 'Shared Exhibition Space', 'Industrial Heritage', 'Rooftop Terrace'],
  },
]

export const services: Service[] = [
  {
    id: 'interior-architecture',
    title: 'Interior Architecture',
    description: 'Comprehensive spatial design from concept through construction documentation, working seamlessly with architects and structural engineers.',
    icon: 'building-2',
  },
  {
    id: 'ffe-specification',
    title: 'FF&E Specification',
    description: 'Meticulous furniture, fixture and equipment curation from global ateliers, private makers, and exclusive trade sources.',
    icon: 'sofa',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end programme oversight with dedicated site presence, contractor coordination, and transparent client reporting.',
    icon: 'clipboard-list',
  },
  {
    id: 'lighting-design',
    title: 'Lighting Design',
    description: 'Architectural and decorative lighting schemes that sculpt space, establish mood, and highlight material excellence.',
    icon: 'lamp',
  },
  {
    id: 'spatial-planning',
    title: 'Spatial Planning',
    description: 'Strategic space utilisation analysis ensuring every square foot serves both aesthetic and functional objectives.',
    icon: 'layout-dashboard',
  },
  {
    id: 'brand-environments',
    title: 'Brand Environments',
    description: 'Translating brand identity into physical space — from hospitality concepts to corporate headquarters and retail destinations.',
    icon: 'star',
  },
]

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Discovery & Brief',
    description: 'Immersive client workshops to understand vision, lifestyle, operational needs, and aspirational benchmarks. We define the brief together.',
  },
  {
    phase: '02',
    title: 'Concept Design',
    description: 'Mood boards, spatial narratives, and schematic layouts translate the brief into a coherent design language for client review and sign-off.',
  },
  {
    phase: '03',
    title: 'Design Development',
    description: 'Detailed drawings, material specifications, and FF&E schedules are developed to construction-ready standard. Every decision is documented.',
  },
  {
    phase: '04',
    title: 'Procurement & Build',
    description: 'Contractor tendering, order placement, site coordination, and rigorous quality control throughout the construction and installation phase.',
  },
  {
    phase: '05',
    title: 'Completion & Handover',
    description: 'Final snagging, art and accessories placement, photography, and a comprehensive handover pack ensures a flawless project close.',
  },
]

export const insights: Insight[] = [
  {
    id: 'biophilic-design-2024',
    title: 'Biophilic Design in Premium Commercial Spaces: Beyond the Living Wall',
    category: 'Design Thinking',
    date: 'November 2024',
    readTime: '6 min read',
    excerpt: 'As the evidence for nature-connected design compounds, leading commercial clients are demanding more than tokenistic greenery. We explore the materiality, light, and form strategies driving genuine biophilic environments.',
  },
  {
    id: 'hospitality-post-pandemic',
    title: 'The New Hospitality Standard: Privacy, Ritual, and the Art of the Slow Interior',
    category: 'Hospitality',
    date: 'October 2024',
    readTime: '8 min read',
    excerpt: 'Post-pandemic luxury hospitality has fundamentally shifted. Guests seek intimate ritual over grand gesture. We examine how the most successful hotel and club interiors are responding to this profound change in expectation.',
  },
  {
    id: 'sustainable-luxury',
    title: 'Sustainable Luxury Is Not a Contradiction: Material Ethics at the Top of the Market',
    category: 'Sustainability',
    date: 'September 2024',
    readTime: '5 min read',
    excerpt: 'The assumption that sustainability compromises luxury is increasingly being challenged by a new generation of artisan suppliers, recycled precious materials, and carbon-conscious procurement strategies.',
  },
]

export const metrics: Metric[] = [
  { label: 'Portfolio Value', value: '£48M+' },
  { label: 'Projects Delivered', value: '127' },
  { label: 'Years Experience', value: '18' },
  { label: 'Client Return Rate', value: '94%' },
]

export const sustainabilityPillars: SustainabilityPillar[] = [
  {
    title: 'Responsible Sourcing',
    stat: '78%',
    description: 'Of our FF&E is sourced from certified sustainable or artisan British makers, reducing supply chain miles and supporting craft heritage.',
  },
  {
    title: 'Carbon Reduction',
    stat: '40%',
    description: 'Average embodied carbon reduction achieved on projects where we lead the material specification against conventional luxury benchmarks.',
  },
  {
    title: 'Circular Design',
    stat: '15+',
    description: 'Projects completed using circular design principles — designing for longevity, adaptability, and eventual material recovery.',
  },
]
