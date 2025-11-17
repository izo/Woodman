// theme.ts
// Shadcn UI + Tailwind theme inspired by Zed (zed.dev)
//
// Usage idea:
// 1. Import `zedLightTheme` / `zedDarkTheme` where you build your design tokens
// 2. Plug values into your Tailwind config / CSS variables (see examples at bottom)

export type ShadcnTheme = {
  background: string
  foreground: string
  muted: string
  'muted-foreground': string
  popover: string
  'popover-foreground': string
  border: string
  input: string
  card: string
  'card-foreground': string
  primary: string
  'primary-foreground': string
  secondary: string
  'secondary-foreground': string
  accent: string
  'accent-foreground': string
  destructive: string
  'destructive-foreground': string
  ring: string
  radius: string
}

export const zedLightTheme: ShadcnTheme = {
  // Base
  background: '0 0% 100%',          // pure white
  foreground: '0 0% 0%',            // pure black

  // Subtle surfaces
  muted: '0 0% 96%',                // light gray surface
  'muted-foreground': '0 0% 35%',   // mid gray text

  // Popovers / dropdowns
  popover: '0 0% 100%',
  'popover-foreground': '0 0% 5%',

  // Borders / inputs
  border: '0 0% 90%',
  input: '0 0% 90%',

  // Cards
  card: '0 0% 100%',
  'card-foreground': '0 0% 0%',

  // Brand
  // #084CCF ≈ hsl(220 93% 42%)
  primary: '220 93% 42%',           // Zed brand blue
  'primary-foreground': '0 0% 100%',

  // Secondary / subtle fills
  secondary: '0 0% 95%',
  'secondary-foreground': '0 0% 10%',

  // Accent (for focus rings, subtle highlights)
  accent: '220 15% 95%',            // very light blue-tinted gray
  'accent-foreground': '0 0% 10%',

  // Destructive
  destructive: '0 84% 60%',         // red
  'destructive-foreground': '0 0% 100%',

  // Focus ring
  ring: '220 93% 42%',

  // Rounding close to Zed’s sharp UI (slightly rounded)
  radius: '0.4rem',
}

export const zedDarkTheme: ShadcnTheme = {
  // Base
  background: '0 0% 0%',            // pure black
  foreground: '0 0% 100%',          // pure white

  // Subtle surfaces
  muted: '0 0% 12%',                // dark gray panels
  'muted-foreground': '0 0% 70%',   // soft gray text

  // Popovers / dropdowns
  popover: '0 0% 5%',
  'popover-foreground': '0 0% 96%',

  // Borders / inputs
  border: '0 0% 18%',
  input: '0 0% 18%',

  // Cards
  card: '0 0% 5%',
  'card-foreground': '0 0% 100%',

  // Brand
  primary: '220 93% 52%',           // slightly lighter brand blue on dark
  'primary-foreground': '0 0% 100%',

  // Secondary / subtle fills
  secondary: '0 0% 14%',
  'secondary-foreground': '0 0% 92%',

  // Accent
  accent: '220 15% 20%',            // dark bluish gray
  'accent-foreground': '0 0% 96%',

  // Destructive
  destructive: '0 84% 60%',
  'destructive-foreground': '0 0% 100%',

  // Focus ring
  ring: '220 93% 52%',

  radius: '0.4rem',
}

// Optional: font stacks that fit Zed-ish look (editor, mono-first)
export const zedFonts = {
  sans: [
    '"SF Pro Text"',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'sans-serif',
  ].join(', '),
  mono: [
    '"JetBrains Mono"',
    '"SF Mono"',
    '"Fira Code"',
    '"Menlo"',
    'ui-monospace',
    'monospace',
  ].join(', '),
}

/**
 * Example: plug into CSS variables (globals.css)
 *
 * :root {
 *   --background: 0 0% 100%;
 *   --foreground: 0 0% 0%;
 *   --card: 0 0% 100%;
 *   --card-foreground: 0 0% 0%;
 *   --popover: 0 0% 100%;
 *   --popover-foreground: 0 0% 5%;
 *   --primary: 220 93% 42%;
 *   --primary-foreground: 0 0% 100%;
 *   --secondary: 0 0% 95%;
 *   --secondary-foreground: 0 0% 10%;
 *   --muted: 0 0% 96%;
 *   --muted-foreground: 0 0% 35%;
 *   --accent: 220 15% 95%;
 *   --accent-foreground: 0 0% 10%;
 *   --destructive: 0 84% 60%;
 *   --destructive-foreground: 0 0% 100%;
 *   --border: 0 0% 90%;
 *   --input: 0 0% 90%;
 *   --ring: 220 93% 42%;
 *   --radius: 0.4rem;
 * }
 *
 * .dark {
 *   --background: 0 0% 0%;
 *   --foreground: 0 0% 100%;
 *   --card: 0 0% 5%;
 *   --card-foreground: 0 0% 100%;
 *   --popover: 0 0% 5%;
 *   --popover-foreground: 0 0% 96%;
 *   --primary: 220 93% 52%;
 *   --primary-foreground: 0 0% 100%;
 *   --secondary: 0 0% 14%;
 *   --secondary-foreground: 0 0% 92%;
 *   --muted: 0 0% 12%;
 *   --muted-foreground: 0 0% 70%;
 *   --accent: 220 15% 20%;
 *   --accent-foreground: 0 0% 96%;
 *   --destructive: 0 84% 60%;
 *   --destructive-foreground: 0 0% 100%;
 *   --border: 0 0% 18%;
 *   --input: 0 0% 18%;
 *   --ring: 220 93% 52%;
 *   --radius: 0.4rem;
 * }
 *
 * Example: Tailwind + shadcn mapping (tailwind.config.ts)
 *
 * theme: {
 *   extend: {
 *     fontFamily: {
 *       sans: zedFonts.sans.split(', '),
 *       mono: zedFonts.mono.split(', '),
 *     },
 *     colors: {
 *       border: 'hsl(var(--border))',
 *       input: 'hsl(var(--input))',
 *       ring: 'hsl(var(--ring))',
 *       background: 'hsl(var(--background))',
 *       foreground: 'hsl(var(--foreground))',
 *       primary: {
 *         DEFAULT: 'hsl(var(--primary))',
 *         foreground: 'hsl(var(--primary-foreground))',
 *       },
 *       secondary: {
 *         DEFAULT: 'hsl(var(--secondary))',
 *         foreground: 'hsl(var(--secondary-foreground))',
 *       },
 *       destructive: {
 *         DEFAULT: 'hsl(var(--destructive))',
 *         foreground: 'hsl(var(--destructive-foreground))',
 *       },
 *       muted: {
 *         DEFAULT: 'hsl(var(--muted))',
 *         foreground: 'hsl(var(--muted-foreground))',
 *       },
 *       accent: {
 *         DEFAULT: 'hsl(var(--accent))',
 *         foreground: 'hsl(var(--accent-foreground))',
 *       },
 *       card: {
 *         DEFAULT: 'hsl(var(--card))',
 *         foreground: 'hsl(var(--card-foreground))',
 *       },
 *     },
 *     borderRadius: {
 *       lg: 'var(--radius)',
 *       md: 'calc(var(--radius) - 2px)',
 *       sm: 'calc(var(--radius) - 4px)',
 *     },
 *   },
 * }
 */
