# Cursor Build Instructions - Future of Finance Portal

## Project Overview

Build an interactive Future of Finance portal that showcases AI-powered prototypes for finance transformation. The site should use the provided content and designs to create a professional, modern web application that CFOs and finance leaders can explore to understand the future of their function.

## Folder Structure

```
Future of Finance/
├── Overview/                  # Portal vision, homepage content, taxonomy
├── FP&A Forecasting Platform/ # First prototype content
├── Site Build/               # YOUR WORKING DIRECTORY - Build everything here
│   ├── src/
│   ├── public/
│   ├── components/
│   └── ... (all code goes here)
└── [Future Prototypes]/      # Additional prototypes will be added
```

## Technology Stack

Use the following modern web stack:

```javascript
// Core Framework
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

// UI Components
- Framer Motion (animations)
- Radix UI (accessible components)
- Lucide React (icons)

// Data Visualization
- Recharts or Chart.js
- D3.js (for complex visualizations)

// State Management
- Zustand or React Context

// Development Tools
- ESLint + Prettier
- Vercel for deployment
```

## Step 1: Project Setup

Create a new Next.js project in the Site Build folder:

```bash
cd "Site Build"
npx create-next-app@latest . --typescript --tailwind --app --eslint
npm install framer-motion lucide-react recharts zustand
npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-slider
```

## Step 2: Project Structure

Create the following structure inside Site Build:

```
Site Build/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── functions/
│   │   └── fpa/
│   │       ├── page.tsx           # FP&A overview
│   │       └── forecasting/
│   │           └── page.tsx       # Forecasting demo
│   └── api/
│       └── demo-data/
│           └── route.ts           # Demo data endpoints
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FunctionGrid.tsx
│   │   └── StatsSection.tsx
│   ├── fpa/
│   │   ├── DashboardKPIs.tsx
│   │   ├── ForecastChart.tsx
│   │   ├── ScenarioModeling.tsx
│   │   └── AIAssistant.tsx
│   └── ui/
│       ├── Card.tsx
│       ├── Button.tsx
│       └── Modal.tsx
├── lib/
│   ├── demo-data.ts               # Synthetic data generation
│   ├── constants.ts               # Finance taxonomy
│   └── utils.ts
├── styles/
│   └── globals.css
└── public/
    └── images/
```

## Step 3: Core Implementation Tasks

### 3.1 Homepage (app/page.tsx)

Using content from the Overview folder, implement:

1. **Hero Section** with animated background
2. **Finance Function Grid** - Interactive cards for each function
3. **Featured Prototype** section highlighting FP&A
4. **Stats/ROI** animated counters
5. **Smooth scroll navigation**

Key features:
- Dark theme with blue/purple gradients
- Hover animations on cards
- Mobile responsive
- Intersection observer for scroll animations

### 3.2 Finance Taxonomy (lib/constants.ts)

```typescript
export const FINANCE_TAXONOMY = {
  fpa: {
    name: "FP&A",
    icon: "📊",
    description: "AI-powered planning, forecasting, and analysis",
    activities: [
      "Financial Planning and Analysis",
      "Strategic or LR Planning",
      "Integrated Enterprise Planning",
      "Budgeting",
      "Dynamic Forecasting",
      "Decision Support & Modelling",
      "Reporting & Analysis",
      "Data/System Effectiveness",
      "Treasury KPI Reporting"
    ],
    prototypes: [
      {
        id: "forecasting-platform",
        name: "Integrated Forecasting Platform",
        status: "live",
        coverage: ["planning", "budgeting", "forecasting", "modeling"]
      },
      {
        id: "management-reporting",
        name: "Intelligent Management Reporting",
        status: "coming-soon",
        coverage: ["reporting", "analysis", "kpi"]
      }
    ]
  },
  controllership: {
    // Add similar structure for other functions
  }
  // ... other functions
};
```

### 3.3 FP&A Section Page (app/functions/fpa/page.tsx)

Implement the FP&A overview page showing:
1. Current state activities (from taxonomy)
2. Transformation vision (before/after)
3. Available prototypes with coverage matrix
4. Links to demos

### 3.4 Forecasting Platform Demo (app/functions/fpa/forecasting/page.tsx)

This is the flagship demo. Implement:

1. **Executive Dashboard Layout**
   - Sidebar navigation
   - Header with AI Assistant button
   - KPI cards with animated values
   - Revenue forecast chart
   - Scenario modeling sliders
   - AI predictions panel

2. **Interactive Elements**
   - Functional scenario sliders that update impacts
   - AI Assistant modal with chat interface
   - Chart view toggles (Monthly/Quarterly/YTD)
   - Real-time KPI updates (simulated)

3. **Demo Data** (lib/demo-data.ts)
```typescript
export const generateForecastData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    month,
    actual: Math.random() * 20 + 100,
    forecast: Math.random() * 20 + 102,
    mlForecast: Math.random() * 20 + 101,
    upperBound: Math.random() * 20 + 105,
    lowerBound: Math.random() * 20 + 98
  }));
};

export const kpiData = {
  revenue: {
    value: 124.5,
    unit: 'M',
    trend: 3.2,
    confidence: { min: 122, max: 127 }
  },
  ebitda: {
    value: 18.7,
    unit: '%',
    trend: 1.5,
    variance: 0.7
  }
  // ... more KPIs
};
```

## Step 4: Styling Guidelines

Use these Tailwind classes consistently:

```css
/* Color Palette */
- Background: bg-slate-950 (dark) or bg-slate-50 (light sections)
- Cards: bg-white dark:bg-slate-900
- Borders: border-slate-200 dark:border-slate-800
- Primary: bg-blue-600 hover:bg-blue-700
- Accent: bg-purple-600
- Gradients: bg-gradient-to-r from-blue-600 to-purple-600

/* Common Patterns */
- Cards: rounded-xl shadow-lg p-6
- Buttons: px-4 py-2 rounded-lg font-medium transition-all
- Hover Effects: hover:scale-105 hover:shadow-xl
- Animations: animate-fade-in, animate-slide-up
```

## Step 5: Component Examples

### KPI Card Component
```typescript
// components/fpa/DashboardKPIs.tsx
export const KPICard = ({ title, value, trend, subtitle }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
        <TrendBadge value={trend} />
      </div>
      <div className="text-3xl font-bold mb-2">${value}M</div>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <MiniChart />
    </div>
  );
};
```

### Scenario Slider Component
```typescript
// components/fpa/ScenarioModeling.tsx
export const ScenarioSlider = ({ label, value, onChange, min, max, unit }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold">{value}{unit}</span>
      </div>
      <Slider.Root
        className="relative flex items-center w-full h-5"
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={0.1}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
          <Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-blue-600 shadow-lg rounded-full" />
      </Slider.Root>
    </div>
  );
};
```

## Step 6: Animation Specifications

Use Framer Motion for smooth animations:

```typescript
// Fade in animation for cards
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  <Card />
</motion.div>

// Hover animations
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Page transitions
<AnimatePresence mode="wait">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

## Step 7: Future Prototype Integration

When adding new prototypes:

1. Create new folder in project root with content
2. Add to FINANCE_TAXONOMY constant
3. Create new route: `app/functions/[function]/[prototype]/page.tsx`
4. Reuse component patterns from FP&A demo
5. Add to navigation and homepage grid

## Step 8: Deployment

1. Push to GitHub
2. Deploy to Vercel:
```bash
npm run build
vercel --prod
```

## Important Implementation Notes

1. **Use all provided content** - Copy text, descriptions, and features from the artifacts
2. **Match the visual design** - Dark theme, gradients, modern UI as specified
3. **Make it interactive** - Sliders should update values, charts should animate
4. **Mobile responsive** - Test on all screen sizes
5. **Performance** - Lazy load components, optimize images
6. **Accessibility** - Use semantic HTML, ARIA labels, keyboard navigation

## Data Handling (Keep Simple for Now)

For now, use client-side demo data:
- Generate synthetic data in `lib/demo-data.ts`
- Use React state for interactivity
- Simulate real-time updates with `setInterval`

Future enhancement with Supabase:
```typescript
// When ready for real data
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Use for storing:
// - Demo scenarios
// - User interactions
// - Forecast simulations
```

## Testing Checklist

- [ ] Homepage loads with animations
- [ ] Finance function cards are clickable
- [ ] FP&A section shows all content
- [ ] Forecasting demo is interactive
- [ ] Scenario sliders update values
- [ ] AI Assistant modal opens/closes
- [ ] Mobile responsive design works
- [ ] Dark theme is consistent
- [ ] All text content matches artifacts

## Success Criteria

The site should:
1. Look professional and futuristic
2. Load quickly and animate smoothly
3. Clearly communicate the vision
4. Make demos feel real and interactive
5. Be easy to extend with new prototypes

Start with the homepage and FP&A demo. Once those are working, the pattern is established for adding other finance functions.