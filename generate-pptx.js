const PptxGenJS = require('pptxgenjs');

// Create a new PowerPoint presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Financial Analyst';
pptx.company = 'Semiconductor Industry Analysis';
pptx.title = 'Semiconductor Industry - Strategic Analysis & Investment Overview';

// Slide 1: Title Slide
const slide1 = pptx.addSlide();
slide1.background = { fill: 'E8F4F8' };

// Add a CPU icon representation (using shapes)
slide1.addShape(pptx.ShapeType.rect, {
  x: 4.2,
  y: 1.0,
  w: 1.6,
  h: 1.6,
  fill: { color: '2563EB' },
  line: { color: '1E40AF', width: 2 }
});
slide1.addText('CPU', {
  x: 4.2,
  y: 1.4,
  w: 1.6,
  h: 0.4,
  fontSize: 24,
  bold: true,
  color: 'FFFFFF',
  align: 'center'
});

slide1.addText('Semiconductor Industry', {
  x: 1.0,
  y: 2.8,
  w: 8,
  h: 0.8,
  fontSize: 44,
  bold: true,
  color: '1F2937',
  align: 'center'
});
slide1.addText('Strategic Analysis & Investment Overview', {
  x: 1.0,
  y: 3.7,
  w: 8,
  h: 0.6,
  fontSize: 28,
  color: '4B5563',
  align: 'center'
});
slide1.addText('A Financial Analyst Perspective', {
  x: 1.0,
  y: 4.6,
  w: 8,
  h: 0.4,
  fontSize: 20,
  color: '6B7280',
  align: 'center',
  italic: true
});

// Slide 2: Industry Overview
const slide2 = pptx.addSlide();
slide2.background = { fill: 'E8F4F8' };
slide2.addText('1. Industry Overview: Why Semiconductors Matter', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: '1F2937'
});

// Globe icon representation
slide2.addShape(pptx.ShapeType.ellipse, {
  x: 0.5,
  y: 1.1,
  w: 0.4,
  h: 0.4,
  fill: { color: '2563EB' }
});
slide2.addText('Critical to Modern Technology', {
  x: 1.0,
  y: 1.2,
  w: 8.5,
  h: 0.4,
  fontSize: 20,
  bold: true,
  color: '1E3A8A'
});
slide2.addText('Semiconductors are the backbone of virtually all modern electronic devices and digital infrastructure', {
  x: 1.0,
  y: 1.7,
  w: 8.5,
  h: 0.4,
  fontSize: 14,
  color: '374151'
});

// Market Scale box with icon
slide2.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 2.3,
  w: 4.5,
  h: 2.5,
  fill: { color: 'FFFFFF' },
  line: { color: 'D1D5DB', width: 1 }
});
// Zap icon
slide2.addShape(pptx.ShapeType.star5, {
  x: 0.6,
  y: 2.4,
  w: 0.3,
  h: 0.3,
  fill: { color: 'EAB308' }
});
slide2.addText('2024-2025 Market Scale', {
  x: 1.0,
  y: 2.4,
  w: 3.8,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '1F2937'
});
const marketData = [
  '• 2024 sales: $627B (19% growth)',
  '• 2025 forecast: $697B (new record)',
  '• On track to $1 trillion by 2030',
  '• Top 10 chip companies: $6.5T market cap'
];
marketData.forEach((text, i) => {
  slide2.addText(text, {
    x: 0.7,
    y: 2.9 + (i * 0.35),
    w: 4.1,
    h: 0.3,
    fontSize: 12,
    color: '374151'
  });
});

// Key Applications box
slide2.addShape(pptx.ShapeType.rect, {
  x: 5.2,
  y: 2.3,
  w: 4.3,
  h: 2.5,
  fill: { color: 'FFFFFF' },
  line: { color: 'D1D5DB', width: 1 }
});
slide2.addText('Key Applications', {
  x: 5.4,
  y: 2.4,
  w: 3.9,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '1F2937'
});
const applications = [
  '• AI & Machine Learning',
  '• Electric Vehicles (EVs)',
  '• Data Centers & Cloud',
  '• Consumer Electronics'
];
applications.forEach((text, i) => {
  slide2.addText(text, {
    x: 5.4,
    y: 2.9 + (i * 0.35),
    w: 3.9,
    h: 0.3,
    fontSize: 12,
    color: '374151'
  });
});

// Market Update box
slide2.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 5.0,
  w: 9,
  h: 0.7,
  fill: { color: 'FEF3C7' },
  line: { color: 'F59E0B', width: 2 }
});
slide2.addText('2024-25 Market Update: R&D spending reached 52% of EBIT. Gen AI chips exceeded $125B in 2024, forecast >$150B in 2025.', {
  x: 0.7,
  y: 5.15,
  w: 8.6,
  h: 0.4,
  fontSize: 11,
  color: '92400E'
});

// Slide 3: Value Chain Segments
const slide3 = pptx.addSlide();
slide3.background = { color: 'E8F4F8' };
slide3.addText('2. Semiconductor Value Chain: Three Major Segments', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: '1F2937'
});

slide3.addText('Highly Complex & Globally Distributed', {
  x: 0.5,
  y: 1.1,
  w: 9,
  h: 0.4,
  fontSize: 18,
  bold: true,
  color: 'FFFFFF',
  fill: { color: '3B82F6' },
  align: 'center'
});

// Design Segment
slide3.addText('1. DESIGN', {
  x: 0.5,
  y: 1.8,
  w: 3,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: '1E3A8A'
});
const designItems = [
  '• Fabless companies',
  '  (NVIDIA, AMD, Qualcomm)',
  '• System companies',
  '  (Apple, Tesla, Google)',
  '• IP vendors (Arm, Synopsys)',
  '• R&D Intensity: 25%+ of revenue'
];
designItems.forEach((text, i) => {
  slide3.addText(text, {
    x: 0.5,
    y: 2.3 + (i * 0.3),
    w: 3,
    h: 0.25,
    fontSize: 10,
    color: '374151'
  });
});

// Fabrication Segment
slide3.addText('2. FABRICATION', {
  x: 3.7,
  y: 1.8,
  w: 3,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: '065F46'
});
const fabItems = [
  '• Pure-play foundries',
  '  (TSMC, GlobalFoundries)',
  '• IDMs (Intel, Samsung)',
  '• Wafer production',
  '• Most complex facilities',
  '• Economies of scale critical'
];
fabItems.forEach((text, i) => {
  slide3.addText(text, {
    x: 3.7,
    y: 2.3 + (i * 0.3),
    w: 3,
    h: 0.25,
    fontSize: 10,
    color: '374151'
  });
});

// Assembly/Test/Packaging Segment
slide3.addText('3. ASSEMBLY/TEST/PACKAGING', {
  x: 6.9,
  y: 1.8,
  w: 3,
  h: 0.4,
  fontSize: 14,
  bold: true,
  color: '581C87'
});
const atpItems = [
  '• OSATs',
  '  (ASE, Amkor, JCET)',
  '• Lower margins vs. design/fab',
  '• Advanced packaging growing',
  '• Concentrated in SE Asia',
  '• Market: $44B in 2022'
];
atpItems.forEach((text, i) => {
  slide3.addText(text, {
    x: 6.9,
    y: 2.3 + (i * 0.3),
    w: 3,
    h: 0.25,
    fontSize: 10,
    color: '374151'
  });
});

// Slide 4: Market Trends
const slide4 = pptx.addSlide();
slide4.background = { fill: 'E8F4F8' };
slide4.addText('3. Key Market Trends Driving Growth', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: '1F2937'
});

// AI & ML box with gradient effect
slide4.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 1.2,
  w: 4.5,
  h: 1.8,
  fill: { color: '7C3AED' },
  line: { width: 0 }
});
slide4.addText('🤖 AI & Machine Learning', {
  x: 0.6,
  y: 1.3,
  w: 4.3,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: 'FFFFFF'
});
const aiItems = [
  '• Gen AI chips: $125B (2024) → $150B+ (2025)',
  '• NVIDIA: 93% server GPU revenue share',
  '• Data center market: $209B → $492B (2030)',
  '• Advanced packaging critical'
];
aiItems.forEach((text, i) => {
  slide4.addText(text, {
    x: 0.7,
    y: 1.8 + (i * 0.3),
    w: 4.1,
    h: 0.25,
    fontSize: 10,
    color: 'FFFFFF'
  });
});

// Electric Vehicles box
slide4.addShape(pptx.ShapeType.rect, {
  x: 5.2,
  y: 1.2,
  w: 4.3,
  h: 1.8,
  fill: { color: '10B981' },
  line: { width: 0 }
});
slide4.addText('⚡ Electric Vehicles', {
  x: 5.3,
  y: 1.3,
  w: 4.1,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: 'FFFFFF'
});
const evItems = [
  '• Power semiconductors (SiC, GaN)',
  '• 3x more chips than ICE vehicles',
  '• Battery management systems',
  '• Autonomous driving compute'
];
evItems.forEach((text, i) => {
  slide4.addText(text, {
    x: 5.4,
    y: 1.8 + (i * 0.3),
    w: 3.9,
    h: 0.25,
    fontSize: 10,
    color: 'FFFFFF'
  });
});

// Cloud & Data Centers box
slide4.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 3.2,
  w: 4.5,
  h: 1.5,
  fill: { color: '0EA5E9' },
  line: { width: 0 }
});
slide4.addText('☁️ Cloud & Data Centers', {
  x: 0.6,
  y: 3.3,
  w: 4.3,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: 'FFFFFF'
});
const cloudItems = [
  '• Hyperscale CapEx: $200B+ (2024)',
  '• 5G base stations: 3M → 15M',
  '• Server processors: $35B market'
];
cloudItems.forEach((text, i) => {
  slide4.addText(text, {
    x: 0.7,
    y: 3.8 + (i * 0.3),
    w: 4.1,
    h: 0.25,
    fontSize: 10,
    color: 'FFFFFF'
  });
});

// Supply Chain box
slide4.addShape(pptx.ShapeType.rect, {
  x: 5.2,
  y: 3.2,
  w: 4.3,
  h: 1.5,
  fill: { color: 'F97316' },
  line: { width: 0 }
});
slide4.addText('🔗 Supply Chain Evolution', {
  x: 5.3,
  y: 3.3,
  w: 4.1,
  h: 0.4,
  fontSize: 16,
  bold: true,
  color: 'FFFFFF'
});
const supplyItems = [
  '• 2021-22 shortage cost: $240B',
  '• Nearshoring: Mexico, India',
  '• Strategic stockpiling active'
];
supplyItems.forEach((text, i) => {
  slide4.addText(text, {
    x: 5.4,
    y: 3.8 + (i * 0.3),
    w: 3.9,
    h: 0.25,
    fontSize: 10,
    color: 'FFFFFF'
  });
});

// Government Policy section
slide4.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 5.0,
  w: 9,
  h: 0.5,
  fill: { color: 'DBEAFE' },
  line: { color: '2563EB', width: 2 }
});
slide4.addText('Government Policy Impact (2024-25 Update)', {
  x: 0.7,
  y: 5.1,
  w: 8.6,
  h: 0.3,
  fontSize: 14,
  bold: true,
  color: '1E40AF'
});
slide4.addText('🇺🇸 U.S. CHIPS Act: $52B deployed  |  🇪🇺 EU Chips Act: €43B active  |  Export Controls: Tightened restrictions', {
  x: 0.5,
  y: 5.6,
  w: 9,
  h: 0.3,
  fontSize: 10,
  color: '374151'
});

// Slide 5: Investment Considerations
const slide5 = pptx.addSlide();
slide5.background = { fill: 'E8F4F8' };
slide5.addText('4. Investment & Finance Considerations', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: '1F2937'
});

// Capital Intensity box with icon
slide5.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 1.2,
  w: 4.5,
  h: 2.2,
  fill: { color: 'FFFFFF' },
  line: { color: 'DC2626', width: 3, pt: 'solid' }
});
// Dollar sign icon
slide5.addShape(pptx.ShapeType.ellipse, {
  x: 0.6,
  y: 1.3,
  w: 0.3,
  h: 0.3,
  fill: { color: 'DC2626' }
});
slide5.addText('$', {
  x: 0.6,
  y: 1.3,
  w: 0.3,
  h: 0.3,
  fontSize: 18,
  bold: true,
  color: 'FFFFFF',
  align: 'center',
  valign: 'middle'
});
slide5.addText('Capital Intensity', {
  x: 1.0,
  y: 1.3,
  w: 3.8,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '991B1B'
});
const capitalItems = [
  '▸ Leading-edge fab: $15-20B investment',
  '▸ Equipment depreciation: 3-5 year cycles',
  '▸ Long payback periods: 5-7 years typical',
  '▸ Economies of scale: Essential for profitability'
];
capitalItems.forEach((text, i) => {
  slide5.addText(text, {
    x: 0.7,
    y: 1.8 + (i * 0.35),
    w: 4.1,
    h: 0.3,
    fontSize: 11,
    color: '374151'
  });
});

// Industry Cyclicality box with icon
slide5.addShape(pptx.ShapeType.rect, {
  x: 5.2,
  y: 1.2,
  w: 4.3,
  h: 2.2,
  fill: { color: 'FFFFFF' },
  line: { color: 'EA580C', width: 3, pt: 'solid' }
});
// Trending up icon
slide5.addShape(pptx.ShapeType.triangle, {
  x: 5.3,
  y: 1.3,
  w: 0.3,
  h: 0.3,
  fill: { color: 'EA580C' },
  rotate: 90
});
slide5.addText('Industry Cyclicality', {
  x: 5.7,
  y: 1.3,
  w: 3.6,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: 'C2410C'
});
const cyclicalityItems = [
  '▸ Boom-bust cycles: 2-4 year patterns',
  '▸ Inventory volatility: Bullwhip effect',
  '▸ End-market sensitivity: Consumer electronics, PCs',
  '▸ Counter-cyclical: Some segments (automotive, industrial)'
];
cyclicalityItems.forEach((text, i) => {
  slide5.addText(text, {
    x: 5.4,
    y: 1.8 + (i * 0.35),
    w: 3.9,
    h: 0.3,
    fontSize: 11,
    color: '374151'
  });
});

// M&A Activity section
slide5.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 3.6,
  w: 9,
  h: 1.2,
  fill: { color: 'DBEAFE' },
  line: { width: 0 }
});
slide5.addText('M&A Activity & Consolidation', {
  x: 0.7,
  y: 3.7,
  w: 8.6,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '1E40AF'
});
slide5.addText('Recent Trends: Vertical integration, Technology acquisition, Portfolio consolidation', {
  x: 0.7,
  y: 4.1,
  w: 8.6,
  h: 0.25,
  fontSize: 10,
  color: '374151'
});
slide5.addText('Drivers: Scale requirements, IP acquisition, Market access', {
  x: 0.7,
  y: 4.4,
  w: 8.6,
  h: 0.25,
  fontSize: 10,
  color: '374151'
});
slide5.addText('Regulatory Scrutiny: Antitrust concerns, National security, Tech sovereignty', {
  x: 0.7,
  y: 4.7,
  w: 8.6,
  h: 0.25,
  fontSize: 10,
  color: '374151'
});

// Key Metrics section
slide5.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 5.1,
  w: 9,
  h: 0.8,
  fill: { color: 'FEF3C7' },
  line: { color: 'F59E0B', width: 2 }
});
slide5.addText('Key Investment Metrics to Watch', {
  x: 0.7,
  y: 5.2,
  w: 8.6,
  h: 0.25,
  fontSize: 12,
  bold: true,
  color: '92400E'
});
slide5.addText('Capacity Utilization: 85%+  |  Book-to-Bill: >1.0  |  Inventory Days: 80-120  |  R&D: 15-25% of revenue', {
  x: 0.7,
  y: 5.5,
  w: 8.6,
  h: 0.3,
  fontSize: 9,
  color: '78350F'
});

// Slide 6: Key Takeaways
const slide6 = pptx.addSlide();
slide6.background = { fill: 'E8F4F8' };
slide6.addText('5. Key Takeaways', {
  x: 0.5,
  y: 0.3,
  w: 9,
  h: 0.6,
  fontSize: 32,
  bold: true,
  color: '1F2937'
});

slide6.addShape(pptx.ShapeType.rect, {
  x: 1.5,
  y: 1.0,
  w: 7,
  h: 0.8,
  fill: { color: '3B82F6' },
  line: { width: 0 }
});
slide6.addText('Investment Summary', {
  x: 1.5,
  y: 1.1,
  w: 7,
  h: 0.35,
  fontSize: 22,
  bold: true,
  color: 'FFFFFF',
  align: 'center'
});
slide6.addText('Semiconductors: Complex, Capital-Intensive, Strategically Critical', {
  x: 1.5,
  y: 1.5,
  w: 7,
  h: 0.3,
  fontSize: 14,
  color: 'FFFFFF',
  align: 'center'
});

// Investment Positives box
slide6.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 2.3,
  w: 4.5,
  h: 2.3,
  fill: { color: 'F0FDF4' },
  line: { color: '059669', width: 2 }
});
slide6.addText('✅ Investment Positives', {
  x: 0.7,
  y: 2.4,
  w: 4.1,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '065F46'
});
const positives = [
  '▸ Secular growth drivers: AI, EVs, IoT, 5G',
  '▸ High barriers to entry: Strong moats',
  '▸ Government support: $100B+ subsidies',
  '▸ Oligopoly structures: Pricing power',
  '▸ Technology indispensable'
];
positives.forEach((text, i) => {
  slide6.addText(text, {
    x: 0.7,
    y: 2.85 + (i * 0.35),
    w: 4.1,
    h: 0.3,
    fontSize: 10,
    color: '374151'
  });
});

// Key Risks box
slide6.addShape(pptx.ShapeType.rect, {
  x: 5.2,
  y: 2.3,
  w: 4.3,
  h: 2.3,
  fill: { color: 'FEF2F2' },
  line: { color: 'DC2626', width: 2 }
});
slide6.addText('⚠️ Key Risks', {
  x: 5.4,
  y: 2.4,
  w: 3.9,
  h: 0.3,
  fontSize: 16,
  bold: true,
  color: '991B1B'
});
const risks = [
  '▸ Geopolitical exposure: Taiwan concentration',
  '▸ Extreme cyclicality: Boom-bust patterns',
  '▸ Capital intensity: $15-20B fab costs',
  '▸ Technology obsolescence: Rapid innovation',
  '▸ Supply chain complexity'
];
risks.forEach((text, i) => {
  slide6.addText(text, {
    x: 5.4,
    y: 2.85 + (i * 0.35),
    w: 3.9,
    h: 0.3,
    fontSize: 10,
    color: '374151'
  });
});

// Bottom Line
slide6.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 5.0,
  w: 9,
  h: 0.9,
  fill: { color: 'E0E7FF' },
  line: { color: '4F46E5', width: 2 }
});
slide6.addText('Bottom Line: Semiconductors offer compelling long-term growth opportunities but require sophisticated understanding of technology, geopolitics, and market cycles. Selectivity is key.', {
  x: 0.7,
  y: 5.2,
  w: 8.6,
  h: 0.5,
  fontSize: 11,
  color: '1F2937',
  align: 'center',
  valign: 'middle'
});

// Save the presentation
pptx.writeFile({ fileName: 'Semiconductor_Industry_Presentation.pptx' })
  .then(() => {
    console.log('✅ PowerPoint presentation created successfully!');
    console.log('📄 File: Semiconductor_Industry_Presentation.pptx');
  })
  .catch((err) => {
    console.error('❌ Error creating PowerPoint:', err);
  });
