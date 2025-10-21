# Semiconductor Industry Presentation

A comprehensive React-based presentation about the semiconductor industry, structured as individual PowerPoint-style slides.

## 🎯 Project Structure

The presentation has been modularized into individual slide components for better organization and reusability.

### 📁 File Organization

```
src/
├── slides/
│   ├── Slide01_Title.tsx              # Title slide
│   ├── Slide02_IndustryOverview.tsx   # Industry overview & market scale
│   ├── Slide03_ValueChain.tsx         # Complete value chain analysis
│   ├── Slide04_MarketTrends.tsx       # Key market trends driving growth
│   ├── Slide05_InvestmentConsiderations.tsx # Investment & finance analysis
│   ├── Slide06_KeyTakeaways.tsx       # Summary and recommendations
│   └── index.ts                       # Slide exports and navigation
├── App.tsx                            # Main navigation component
├── main.tsx                           # React app entry point
└── index.css                          # Tailwind CSS styles
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000/`

## 📊 Slide Content Overview

### Slide 1: Title
- Company branding
- Presentation title and subtitle
- Professional introduction

### Slide 2: Industry Overview
- Market scale ($627B in 2024, $697B forecast 2025)
- Key applications (AI, EVs, Data Centers)
- Current market update with R&D statistics

### Slide 3: Complete Value Chain
- **Design & IP**: NVIDIA ($3.6T), Broadcom ($1.2T), AMD, Qualcomm
- **Materials & Equipment**: ASML monopoly, Applied Materials, Lam Research
- **Fabrication**: TSMC dominance (70% share), Samsung, Intel
- **Critical Dependencies**: Geopolitical risks and supply chain vulnerabilities

### Slide 4: Market Trends
- AI & Machine Learning growth drivers
- Electric vehicle semiconductor requirements
- Cloud & data center expansion
- Government policy impacts (CHIPS Act, EU Chips Act)

### Slide 5: Investment Considerations
- Capital intensity ($15-20B per fab)
- Industry cyclicality patterns
- M&A activity and consolidation trends
- Key investment metrics to monitor

### Slide 6: Key Takeaways
- Investment positives vs. risks
- Financial analyst recommendations
- Portfolio construction guidance

## 🎮 Navigation Features

- **Previous/Next Buttons**: Navigate between slides
- **Slide Dots**: Click to jump to any specific slide
- **Keyboard Support**: Arrow keys for navigation
- **Slide Counter**: Current position indicator
- **Title Display**: Shows current slide title

## 🛠 Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive design** for different screen sizes

## 📱 Usage Scenarios

### Individual Slide Display
Each slide is a standalone component that can be:
- Embedded in other applications
- Used for specific presentation sections
- Exported as separate modules

### Full Presentation Mode
The main App component provides:
- Sequential slide navigation
- Overview mode with slide thumbnails
- Presenter controls and timing

## 🔧 Customization

### Adding New Slides
1. Create new slide component in `src/slides/`
2. Export it in `src/slides/index.ts`
3. Add to slides array in `App.tsx`
4. Update `SLIDE_TITLES` array

### Styling
- Modify Tailwind classes for consistent theming
- Update color schemes in individual slide components
- Customize navigation controls in `App.tsx`

## 📈 Key Data Points Covered

- **Market Size**: $627B (2024) → $697B (2025)
- **Market Cap**: Top 10 companies worth $6.5T combined
- **Geographic Concentration**: Taiwan (70% foundry), Netherlands (100% EUV)
- **Growth Drivers**: AI chips ($125B→$150B+), EVs, 5G, Cloud
- **Investment Scale**: $15-20B per leading-edge fab

## 🌐 Industry Coverage

- **Design Companies**: NVIDIA, AMD, Qualcomm, Broadcom
- **Equipment**: ASML, Applied Materials, Lam Research
- **Foundries**: TSMC, Samsung, Intel IFS
- **Materials**: Japanese suppliers, Critical materials supply chain
- **Government Policies**: US CHIPS Act, EU Chips Act, Export controls

---

**Built for financial analysts and investment professionals** 📊💼