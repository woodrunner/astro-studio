import { palettes, fonts } from './config.js';
import * as tech   from './templates/tech.js';
import * as luxury from './templates/luxury.js';
import * as agency from './templates/agency.js';
import * as craft  from './templates/craft.js';

const templates = { tech, luxury, agency, craft };

/**
 * Bouwt CSS custom properties op basis van de geselecteerde accentkleur.
 * Zo kunnen template-bestanden `var(--accent)` gebruiken zonder de hex
 * te kennen op build-tijd.
 */
function buildAccentVars(hex) {
  return `
    <style>
      :root {
        --accent:    ${hex};
        --accent-07: ${hex}12;
        --accent-22: ${hex}38;
        --accent-33: ${hex}55;
        --accent-44: ${hex}70;
        --accent-55: ${hex}8C;
        --accent-88: ${hex}E0;
      }
    </style>`;
}

/**
 * Hoofdfunctie — lees URL params, render de juiste template.
 * @param {URLSearchParams} params
 * @returns {string} HTML string voor de preview
 */
export function buildPreview(params) {
  const tpl       = params.get('template') || 'tech';
  const thema     = params.get('thema')    || 'licht';
  const accent    = '#' + (params.get('accent') || '2563EB');
  const fontKey   = params.get('font')     || 'grotesk';
  const heroStijl = params.get('hero')     || 'split';
  const projStijl = params.get('proj')     || 'lijst';

  // Craft heeft altijd zijn eigen warm palet
  const paletKey = tpl === 'craft' ? 'warm' : thema;
  const c = palettes[paletKey] || palettes.licht;

  // Agency heeft een eigen font, anderen volgen de keuze
  const fKey = tpl === 'agency' ? 'agency' : tpl === 'craft' ? 'craft' : fontKey;
  const f    = fonts[fKey] || fonts.grotesk;

  const tplModule = templates[tpl] || templates.tech;
  const ctx       = { c, f, heroStijl, projStijl };

  const navHtml      = tplModule.nav(ctx);
  const heroHtml     = tplModule.hero(ctx);
  const projectsHtml = tplModule.projects(ctx);

  return buildAccentVars(accent) + navHtml + heroHtml + projectsHtml;
}
