@AGENTS.md
Act as a Senior Frontend Architect. Build a reusable, responsive React context and two-panel layout provider named `NavigationLayoutProvider` typed strictly with TypeScript and styled using CSS Variables (Shadcn-compatible palette) and Tailwind CSS.

---

### Key Specifications & Architecture Requirements

1. **Global Frame Layout:**
   - **Top Global Header Offset:** The layout must sit below an `80px` fixed top header (`margin-top: 80px` or `pt-[80px]`).
   - **Global Bottom Footer Behavior:** Below the main two-panel layout container, a global page footer is rendered. When the user scrolls past the main content to the bottom of the window, the entire layout (including the left sidebar) scrolls upward naturally to reveal the global footer.

2. **Left Panel (Navigation Sidebar):**
   - **Desktop Layout:** Width spans **10%** of viewport width (with a `min-width: 180px` fallback for readability).
   - **Height:** Fits `calc(100vh - 80px)` while in viewport.
   - **Internal Sticky Elements:**
     - Nav items display dynamically based on section config.
     - Sticky footer at the bottom of the left sidebar for quick actions/settings.
   - **Responsive Drawer:** On small/mobile screens (`< 768px`), collapse the left sidebar into an accessible slide-over Drawer/Overlay toggled via a hamburger menu.

3. **Right Panel (Main Content Viewport):**
   - **Width:** Takes up the remaining **90%** (or 100% on mobile screens when sidebar collapses).
   - **Panel Structure:**
     - Fixed/Sticky Panel Header at the top (e.g., active section title, action buttons).
     - Main content view rendered dynamically directly beneath the panel header.
   - **Scroll Behavior:** Standard viewport or container scroll with smooth overflow management (`overflow-y: auto`).

4. **Context & State Management (`NavigationLayoutProvider`):**
   - Provide a React Context (`NavigationLayoutContext`) that exposes:
     - `activePageId`: `string` representing current view ID.
     - `setActivePageId`: `(id: string) => void` function to navigate pages.
     - `isMobileOpen`: `boolean` state for mobile drawer.
     - `setIsMobileOpen`: `(open: boolean) => void` toggle.
   - Include a custom hook `useNavigationLayout()` with proper error guards if used outside the provider.

5. **Shadcn Color Token Standard:**
   - Use standardized CSS design tokens:
     - `bg-background`, `text-foreground`
     - `bg-card`, `text-card-foreground`
     - `bg-muted`, `text-muted-foreground`
     - `bg-primary`, `text-primary-foreground`
     - `border-border`

---

### Technical Deliverables

Provide fully written, beginner-friendly, and well-commented TypeScript code split into the following 5 files:

#### File 1: `navigation-layout.ts`

Export navigation configurations and types:

```typescript
import React from "react";

export interface NavigationSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
}

export type LayoutConfig = NavigationSection[];
```
