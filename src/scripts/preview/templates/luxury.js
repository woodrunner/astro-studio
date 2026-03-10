import { NAAM, YEAR, PROJECTS } from '../config.js';

export function nav({ c, f }) {
  const voornaam = NAAM.split(' ')[0];
  return `
    <nav style="position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 3rem;background:${c.bg};border-bottom:1px solid ${c.border};">
      <a style="font-family:${f.h};font-size:1.3rem;color:var(--accent);text-decoration:none;">${voornaam}</a>
      <ul style="display:flex;gap:2rem;list-style:none;">
        ${['Over mij','Werk','Contact'].map(l => `
          <li><a style="color:${c.muted};text-decoration:none;font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase;">${l}</a></li>
        `).join('')}
      </ul>
    </nav>`;
}

export function hero({ c, f, heroStijl }) {
  const [voornaam, ...rest] = NAAM.split(' ');
  const achternaam = rest.join(' ');

  if (heroStijl === 'centered') return `
    <section style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:6rem 3rem;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,var(--accent-07) 0%,transparent 70%);"></div>
      <div style="position:relative;">
        <div style="display:inline-flex;align-items:center;gap:0.75rem;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:2rem;">
          <span style="display:block;width:2rem;height:1px;background:var(--accent);"></span>
          Beschikbaar voor projecten
          <span style="display:block;width:2rem;height:1px;background:var(--accent);"></span>
        </div>
        <h1 style="font-family:${f.h};font-size:clamp(3.5rem,8vw,7rem);line-height:1.05;font-weight:700;margin-bottom:0.5rem;">${voornaam}</h1>
        <h1 style="font-family:${f.h};font-size:clamp(3.5rem,8vw,7rem);line-height:1.05;font-style:italic;color:var(--accent);margin-bottom:2rem;">${achternaam}.</h1>
        <a style="display:inline-flex;align-items:center;gap:0.75rem;background:var(--accent);color:#0E0E0E;text-decoration:none;font-weight:500;font-size:0.9rem;padding:1rem 2rem;border-radius:50px;">Bekijk mijn werk →</a>
      </div>
    </section>`;

  if (heroStijl === 'minimal') return `
    <section style="padding:8rem 3rem 5rem;border-bottom:1px solid ${c.border};">
      <div style="display:flex;align-items:center;gap:0.75rem;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:2.5rem;">
        <span style="display:block;width:2rem;height:1px;background:var(--accent);"></span>
        Beschikbaar voor projecten
      </div>
      <h1 style="font-family:${f.h};font-size:clamp(3rem,7vw,6rem);line-height:1.05;font-weight:700;margin-bottom:0.25rem;">${voornaam}</h1>
      <h1 style="font-family:${f.h};font-size:clamp(3rem,7vw,6rem);line-height:1.05;font-style:italic;color:var(--accent);margin-bottom:2.5rem;">${achternaam}.</h1>
      <a style="display:inline-flex;align-items:center;gap:0.75rem;border:1px solid ${c.border};color:${c.text};text-decoration:none;font-size:0.85rem;padding:0.85rem 1.75rem;">Bekijk mijn werk →</a>
    </section>`;

  // split (default)
  return `
    <section style="min-height:100vh;display:flex;align-items:center;padding:8rem 3rem 4rem;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 80% 50%,var(--accent-07) 0%,transparent 70%);"></div>
      <div style="position:relative;max-width:800px;">
        <div style="display:inline-flex;align-items:center;gap:0.75rem;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:2rem;">
          <span style="display:block;width:2rem;height:1px;background:var(--accent);"></span>
          Beschikbaar voor projecten
        </div>
        <h1 style="font-family:${f.h};font-size:clamp(3.5rem,8vw,7rem);line-height:1.05;font-weight:700;margin-bottom:0.5rem;">${voornaam}</h1>
        <h1 style="font-family:${f.h};font-size:clamp(3.5rem,8vw,7rem);line-height:1.05;font-style:italic;color:var(--accent);margin-bottom:2rem;">${achternaam}.</h1>
        <a style="display:inline-flex;align-items:center;gap:0.75rem;background:var(--accent);color:#0E0E0E;text-decoration:none;font-weight:500;font-size:0.9rem;padding:1rem 2rem;border-radius:50px;">Bekijk mijn werk →</a>
      </div>
    </section>`;
}

export function projects({ c, f, projStijl }) {
  if (projStijl === 'lijst') {
    const rows = PROJECTS.map(p => `
      <div style="display:grid;grid-template-columns:3rem 1fr auto;gap:1.5rem;align-items:center;padding:1.75rem 0;border-top:1px solid ${c.border};">
        <span style="font-family:${f.mo};font-size:0.7rem;color:var(--accent);">${p.num}</span>
        <div>
          <h3 style="font-family:${f.h};font-size:1.2rem;font-style:italic;margin-bottom:0.3rem;">${p.title}</h3>
          <p style="font-size:0.85rem;color:${c.muted};">${p.desc}</p>
        </div>
        <span style="font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--accent);">${p.cat}</span>
      </div>`).join('');
    return `
      <section style="padding:7rem 3rem;background:${c.bg};">
        <div style="font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
          Werk <span style="width:3rem;height:1px;background:var(--accent);display:block;"></span>
        </div>
        <h2 style="font-family:${f.h};font-size:clamp(2rem,4vw,3.5rem);line-height:1.1;margin-bottom:3rem;">Recente projecten</h2>
        ${rows}
        <div style="border-top:1px solid ${c.border};"></div>
      </section>`;
  }

  // grid (default)
  const cards = PROJECTS.map(p => `
    <div style="background:${c.surface};border:1px solid ${c.border};border-radius:12px;overflow:hidden;">
      <div style="height:180px;background:linear-gradient(135deg,var(--accent-22),var(--accent-44));display:flex;align-items:center;justify-content:center;font-family:${f.h};font-size:3rem;font-style:italic;color:var(--accent);opacity:0.6;">
        ${p.title[0]}
      </div>
      <div style="padding:1.5rem;">
        <p style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);margin-bottom:0.5rem;">${p.cat}</p>
        <h3 style="font-family:${f.h};font-size:1.3rem;margin-bottom:0.75rem;">${p.title}</h3>
        <p style="font-size:0.9rem;color:${c.muted};">${p.desc}</p>
      </div>
    </div>`).join('');
  return `
    <section style="padding:7rem 3rem;background:${c.bg};">
      <div style="font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
        Werk <span style="width:3rem;height:1px;background:var(--accent);display:block;"></span>
      </div>
      <h2 style="font-family:${f.h};font-size:clamp(2rem,4vw,3.5rem);line-height:1.1;margin-bottom:3rem;">Recente projecten</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">${cards}</div>
    </section>`;
}
