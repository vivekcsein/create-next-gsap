# Next.js Project Setup Guide

This guide covers the initial setup of a **Next.js application using Bun**.

It includes the core tools and libraries used in the project for:

- Application development
- Type-safe coding
- Sass/SCSS styling
- API communication
- Theme management
- Animations
- Responsive sliders
- UI components

The instructions are written step-by-step so that a new developer can set up the project without needing prior knowledge of the project's configuration.

---

## 1. Create the Next.js Application

Create a new Next.js application in the current directory:

```bash
bun create next-app@latest .
```

During installation, Next.js will ask several configuration questions.

For this project, use the following setup:

| Option           | Recommended Choice                |
| ---------------- | --------------------------------- |
| TypeScript       | Yes                               |
| Linter           | Biome                             |
| Tailwind CSS     | According to project requirements |
| `src/` directory | Yes                               |
| App Router       | Yes                               |
| Turbopack        | Yes                               |
| Import alias     | `@/*`                             |

Once the installation finishes, the basic Next.js application is ready.

---

# 2. Install Application Dependencies

Install the libraries required by the application:

```bash
bun add next-themes axios gsap framer-motion swiper
```

### Package Overview

| Package         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `next-themes`   | Light, dark, and system theme management |
| `axios`         | HTTP requests and API communication      |
| `gsap`          | Advanced animations and transitions      |
| `framer-motion` | React-based UI animations                |
| `swiper`        | Responsive sliders and carousels         |

These libraries provide the foundation for the application's API communication, themes, animations, and interactive UI.

---

# 3. Install Development Dependencies

Install Sass for stylesheet development:

```bash
bun add --dev sass
```

### Sass

Sass extends regular CSS with features such as:

- Variables
- Nesting
- Mixins
- Functions
- Partials
- Better stylesheet organization

The project can therefore use `.scss` and `.sass` files alongside regular CSS.

---

# 4. Configure Sass

If the project uses a shared `styles` directory, configure Sass in `next.config.ts`.

Because Next.js configuration uses ES modules, `__dirname` is not automatically available. Create it manually.

Add these imports:

```ts
import path from "node:path";
import { fileURLToPath } from "url";
```

Then add `sassOptions` to the Next.js configuration:

```ts
  sassOptions: { includePaths: [path.join(process.cwd(), "styles", "saas")] },
```

### Complete Example

```ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: { includePaths: [path.join(process.cwd(), "styles", "saas")] },
};

export default nextConfig;
```

This allows Sass to resolve files from the project's `styles` directory.

For example:

```text
styles/
├── variables.scss
├── mixins.scss
└── globals.scss
```

This structure keeps shared styles separate from component-specific styles.

---

# 5. Initialize shadcn/ui

Initialize shadcn/ui after the main project dependencies have been installed:

```bash
bun x --bun shadcn@latest init
```

The CLI will ask several questions about the UI configuration.

Select the options that match the project's styling and component architecture.

shadcn/ui provides reusable components while keeping the component source code inside your project, allowing you to modify and customize the components whenever necessary.

---

# 6. Configure shadcn/ui Aliases

During the shadcn/ui setup, configure the aliases according to the project's folder architecture.

Use the following aliases:

```json
{
  "aliases": {
    "components": "@/components",
    "utils": "@/packages/utils",
    "ui": "@/components/ui/shadcn",
    "lib": "@/packages",
    "hooks": "@/packages/hooks"
  }
}
```

These aliases provide consistent import paths throughout the project.

For example:

```ts
import { Button } from "@/components/ui/shadcn/button";
```

Instead of using long relative imports:

```ts
import { Button } from "../../../components/ui/shadcn/button";
```

### Alias Structure

| Alias        | Location                 | Purpose                       |
| ------------ | ------------------------ | ----------------------------- |
| `components` | `@/components`           | Application components        |
| `utils`      | `@/packages/utils`       | Utility functions             |
| `ui`         | `@/components/ui/shadcn` | shadcn/ui components          |
| `lib`        | `@/packages`             | Shared packages and libraries |
| `hooks`      | `@/packages/hooks`       | Custom React hooks            |

> **Note:** The exact shadcn configuration may vary depending on the version of the CLI and your project structure. Keep the aliases consistent with the actual directories in your project.

---

# 7. Add shadcn/ui Components

After initializing shadcn/ui, components can be added whenever they are needed.

Run:

```bash
bun x --bun shadcn@latest add
```

The CLI will prompt you to select the component.

You can also specify a component directly:

```bash
bun x --bun shadcn@latest add button
```

Multiple components can be added at once:

```bash
bun x --bun shadcn@latest add button card dialog input
```

The generated components will be placed inside the configured UI directory.

---

# 8. Initial Project Stack

After completing the setup, the project will have the following core stack:

| Technology        | Role                        |
| ----------------- | --------------------------- |
| **Next.js**       | Application framework       |
| **TypeScript**    | Type-safe development       |
| **Bun**           | Package manager and runtime |
| **Biome**         | Linting and code formatting |
| **Sass/SCSS**     | Styling                     |
| **Axios**         | API communication           |
| **next-themes**   | Theme management            |
| **GSAP**          | Advanced animations         |
| **Framer Motion** | React UI animations         |
| **Swiper**        | Sliders and carousels       |
| **shadcn/ui**     | Reusable UI components      |

This provides a solid foundation for building a modern, scalable Next.js application.

---

# 9. Complete Installation Commands

For a fresh project, run the commands in the following order.

### Create the application

```bash
bun create next-app@latest .
```

### Install application dependencies

```bash
bun add next-themes axios gsap framer-motion swiper
```

### Install development dependencies

```bash
bun add --dev sass
```

### Initialize shadcn/ui

```bash
bun x --bun shadcn@latest init
```

### Add shadcn/ui components

```bash
bun x --bun shadcn@latest add
```

---

# 10. Recommended Next Steps

After completing the initial setup, the project is ready for the next development stages.

Recommended order:

1. Set up the project folder architecture
2. Configure global Sass files
3. Create the design system
4. Define CSS variables and theme tokens
5. Configure light and dark themes
6. Create reusable UI components
7. Configure Axios and API services
8. Create shared utility functions
9. Add reusable React hooks
10. Configure GSAP animations
11. Configure Swiper components
12. Build application layouts and pages

---

## Final Project Foundation

At this point, the project has a clean development foundation with:

- Next.js App Router
- TypeScript
- Bun
- Biome
- Sass/SCSS
- Axios
- next-themes
- GSAP
- Framer Motion
- Swiper
- shadcn/ui

The remaining project-specific architecture can now be built on top of this foundation without changing the initial setup.
