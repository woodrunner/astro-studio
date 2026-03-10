// ── Kleurpaletten ────────────────────────────────────────
export const palettes = {
  donker: { bg: '#0E0E0E', surface: '#161616', surface2: '#1F1F1F', text: '#F0EDE6', muted: '#888', border: '#2A2A2A' },
  licht:  { bg: '#F7F5F0', surface: '#FFFFFF', surface2: '#EDEBE6', text: '#1A1A1A', muted: '#666', border: '#D8D5CF' },
  warm:   { bg: '#FDF6EE', surface: '#FFFBF5', surface2: '#F5ECD8', text: '#2C1810', muted: '#8B6E5A', border: '#E8D5BE' },
};

// ── Fonts ────────────────────────────────────────────────
export const fonts = {
  grotesk: { h: "'Space Grotesk',sans-serif",     b: "'Space Grotesk',sans-serif", mo: "'Space Mono',monospace" },
  serif:   { h: "'Playfair Display',serif",        b: "'DM Sans',sans-serif",       mo: "'Space Mono',monospace" },
  sans:    { h: "'DM Sans',sans-serif",            b: "'DM Sans',sans-serif",       mo: "'Space Mono',monospace" },
  agency:  { h: "'Barlow Condensed',sans-serif",   b: "'DM Sans',sans-serif",       mo: "'Space Mono',monospace" },
  craft:   { h: "'Lora',serif",                    b: "'DM Sans',sans-serif",       mo: "'Space Mono',monospace" },
};

// ── Placeholder data ─────────────────────────────────────
export const NAAM    = 'Jana Declercq';
export const TAGLINE = 'Designer & Developer';
export const YEAR    = new Date().getFullYear();

export const PROJECTS = [
  { num: '01', title: 'Webshop bakkerij',    cat: 'E-commerce', tags: ['React', 'Stripe'], desc: 'Volledige webshop met bestelsysteem.'   },
  { num: '02', title: 'Portfolio architect', cat: 'Portfolio',  tags: ['Astro', 'CSS'],   desc: 'Minimalistische portfolio met galerij.' },
  { num: '03', title: 'Restaurant website',  cat: 'Website',    tags: ['WordPress'],      desc: 'Meertalige site met reservatiesysteem.' },
];
