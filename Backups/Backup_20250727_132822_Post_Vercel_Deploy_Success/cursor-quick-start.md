# Cursor Quick Start Guide - Future of Finance Portal

## 🚀 Start Here - Simple Steps to Build the Portal

### Step 1: Setup (5 minutes)
```bash
# Navigate to Site Build folder
cd "Site Build"

# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest . --typescript --tailwind --app --eslint

# Install required packages
npm install framer-motion lucide-react recharts
```

### Step 2: Copy Core Content (2 minutes)

Create these files first:

**app/globals.css** - Add to existing file:
```css
@layer base {
  body {
    @apply bg-slate-950 text-white;
  }
}

@layer utilities {
  .gradient-primary {
    @apply bg-gradient-to-r from-blue-600 to-purple-600;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600;
  }
}
```

**lib/content.ts** - All your text content:
```typescript
export const HOMEPAGE_CONTENT = {
  hero: {
    title: "Experience the AI-Powered Future of Finance",
    subtitle: "Interactive prototypes showcasing how artificial intelligence will transform every aspect of finance - from planning to reporting, from compliance to treasury."
  },
  stats: [
    { value: "70%", label: "Reduction in Planning Time" },
    { value: "95%", label: "Forecast Accuracy" },
    { value: "10x", label: "Faster Insights" },
    { value: "300%", label: "ROI in 18 Months" }
  ]
};

export const FPA_DEMO_DATA = {
  kpis: {
    revenue: { value: 124.5, trend: 3.2, confidence: [122, 127] },
    ebitda: { value: 18.7, trend: 1.5, ahead: 0.7 },
    cash: { value: 45.2, trend: -2.1, next30: 8.5 },
    accuracy: { value: 94.8, trend: 5.2 }
  }
};
```

### Step 3: Build Homepage First (30 minutes)

**app/page.tsx** - Start simple:
```typescript
import { HOMEPAGE_CONTENT } from '@/lib/content';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {HOMEPAGE_CONTENT.hero.title}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          {HOMEPAGE_CONTENT.hero.subtitle}
        </p>
        <button className="gradient-primary px-8 py-3 rounded-lg font-semibold">
          Explore Prototypes
        </button>
      </section>

      {/* Stats */}
      <section className="px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {HOMEPAGE_CONTENT.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Function Grid next... */}
    </main>
  );
}
```

### Step 4: Add FP&A Demo (45 minutes)

Create the folder structure:
```
app/
└── fpa/
    └── forecasting/
        └── page.tsx
```

**app/fpa/forecasting/page.tsx** - Basic structure:
```typescript
'use client';
import { useState } from 'react';
import { FPA_DEMO_DATA } from '@/lib/content';

export default function ForecastingDemo() {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6">
        <h2 className="text-xl font-bold mb-8">ForecastAI</h2>
        {/* Add navigation items */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-50 text-slate-900">
        {/* Header */}
        <header className="bg-white p-6 border-b flex justify-between">
          <h1 className="text-2xl font-semibold">Executive Dashboard</h1>
          <button 
            onClick={() => setShowAI(true)}
            className="gradient-primary text-white px-4 py-2 rounded-lg"
          >
            ✨ AI Assistant
          </button>
        </header>

        {/* KPI Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Add KPI cards using FPA_DEMO_DATA */}
        </div>
      </main>
    </div>
  );
}
```

### Step 5: Progressive Enhancement

Once basic pages work, enhance with:

1. **Animations** (Framer Motion):
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

2. **Interactive Charts** (Recharts):
```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', actual: 100, forecast: 102 },
  { month: 'Feb', actual: 105, forecast: 107 },
  // ...
];

<LineChart width={600} height={300} data={data}>
  <Line type="monotone" dataKey="actual" stroke="#3b82f6" />
  <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" />
</LineChart>
```

3. **Scenario Sliders**:
```typescript
<input
  type="range"
  min="0"
  max="10"
  step="0.1"
  value={marketGrowth}
  onChange={(e) => setMarketGrowth(e.target.value)}
  className="w-full"
/>
```

## 📋 Build Checklist

**Phase 1 - Foundation (Day 1)**
- [ ] Create Next.js project in Site Build folder
- [ ] Install all dependencies
- [ ] Set up folder structure
- [ ] Create content.ts with all text
- [ ] Build basic homepage
- [ ] Add navigation

**Phase 2 - FP&A Demo (Day 2)**
- [ ] Create FP&A routes
- [ ] Build dashboard layout
- [ ] Add KPI cards
- [ ] Create scenario sliders
- [ ] Add AI assistant modal
- [ ] Make it interactive

**Phase 3 - Polish (Day 3)**
- [ ] Add animations
- [ ] Implement charts
- [ ] Mobile responsive
- [ ] Dark theme consistency
- [ ] Test all interactions

## 🎯 Key Success Metrics

Your site is ready when:
1. Homepage loads with smooth animations ✨
2. Stats show the exact values provided 📊
3. FP&A demo has working sliders 🎚️
4. AI Assistant modal opens/closes 🤖
5. Everything looks professional 💼

## 💡 Pro Tips

1. **Start Simple** - Get basic pages working first
2. **Use the Content** - Copy text exactly from content.ts
3. **Test Often** - Check in browser after each section
4. **Mobile First** - Use responsive classes from the start
5. **Git Commits** - Commit after each working feature

## 🆘 Common Issues & Solutions

**Issue**: Styling looks off
**Solution**: Make sure Tailwind is properly configured and you're using the gradient classes

**Issue**: Data not showing
**Solution**: Import from lib/content.ts and check console for errors

**Issue**: Animations janky
**Solution**: Use CSS transforms instead of changing positions

**Issue**: Build errors
**Solution**: Check TypeScript types and make sure all imports are correct

---

Start with Step 1 and work through sequentially. The homepage should take ~30 minutes, and the FP&A demo another ~45 minutes for basic functionality. Enhancement can come after everything works!