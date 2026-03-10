import { NAAM, TAGLINE, YEAR, PROJECTS } from '../config.js';

export function nav({ c, f, naam }) {
  const n = naam || NAAM;
  const initialen = n.split(' ').map(w => w[0]).join('') + '_';
  const links = ['Work', 'About', 'Contact'];

  return `
    <nav style="position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:1rem 3rem;background:${c.bg};border-bottom:1px solid ${c.border};">
      <span style="font-family:${f.mo};font-size:0.75rem;color:${c.muted};">${initialen}</span>
      <ul style="display:flex;gap:2rem;list-style:none;align-items:center;">
        ${links.map(l => `
          <li><a style="color:${c.muted};text-decoration:none;font-size:0.85rem;">${l}</a></li>
        `).join('')}
        <li><a style="background:var(--accent);color:#fff;padding:0.4rem 1rem;font-size:0.75rem;text-decoration:none;">Hire me</a></li>
      </ul>
    </nav>`;
}

export function hero({ c, f, heroStijl, naam }) {
  const n = naam || NAAM;
  const [voornaam, ...rest] = n.split(' ');
  const achternaam = rest.join(' ');

  if (heroStijl === 'centered') return `
    <section style="min-height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:4rem 3rem;border-bottom:1px solid ${c.border};">
      <p style="font-family:${f.mo};font-size:0.7rem;letter-spacing:0.2em;color:var(--accent);text-transform:uppercase;margin-bottom:1.5rem;">✦ Beschikbaar voor projecten</p>
      <h1 style="font-family:${f.h};font-size:clamp(3rem,8vw,6rem);font-weight:700;line-height:1;letter-spacing:-0.03em;margin-bottom:1rem;">
        ${voornaam}<br/><span style="color:var(--accent)">${achternaam}.</span>
      </h1>
      <p style="font-size:1rem;color:${c.muted};max-width:420px;margin:1.5rem auto 2.5rem;">Ik maak digitale ervaringen die mensen bijblijven.</p>
      <a style="background:var(--accent);color:#fff;padding:0.9rem 2.5rem;font-size:0.85rem;font-weight:500;text-decoration:none;letter-spacing:0.05em;">Bekijk mijn werk →</a>
    </section>`;

  if (heroStijl === 'minimal') return `
    <section style="padding:6rem 3rem 4rem;border-bottom:1px solid ${c.border};">
      <p style="font-family:${f.mo};font-size:0.7rem;letter-spacing:0.2em;color:${c.muted};text-transform:uppercase;margin-bottom:3rem;">Available for new projects — ${YEAR}</p>
      <h1 style="font-family:${f.h};font-size:clamp(2.5rem,6vw,5rem);font-weight:700;line-height:1.05;letter-spacing:-0.03em;max-width:700px;">
        ${n} — ${TAGLINE}.
      </h1>
      <div style="margin-top:3rem;">
        <a style="border:1px solid ${c.text};color:${c.text};padding:0.8rem 2rem;font-size:0.85rem;text-decoration:none;">View work →</a>
      </div>
    </section>`;

  // split (default)
  return `
    <section style="min-height:88vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 3rem 4rem;border-bottom:1px solid ${c.border};">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem 0;border-bottom:1px solid ${c.border};margin-bottom:3rem;">
        <span style="font-family:${f.mo};font-size:0.7rem;color:${c.muted};display:flex;align-items:center;gap:0.5rem;">
          <span style="width:6px;height:6px;border-radius:50%;background:#22C55E;display:inline-block;"></span>
          Available for new projects
        </span>
        <span style="font-family:${f.mo};font-size:0.7rem;color:${c.muted};">${YEAR} — ${TAGLINE}</span>
      </div>
      <h1 style="font-family:${f.h};font-size:clamp(3rem,8vw,6.5rem);font-weight:700;line-height:1;letter-spacing:-0.03em;margin-bottom:2.5rem;">
        ${voornaam}<br/><span style="color:var(--accent)">${achternaam}.</span>
      </h1>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;flex-wrap:wrap;">
        <p style="font-size:1rem;color:${c.muted};max-width:400px;line-height:1.7;">Ik maak digitale ervaringen die mensen bijblijven. Van concept tot lancering.</p>
        <div style="display:flex;gap:0.75rem;">
          <a style="background:${c.text};color:${c.bg};padding:0.85rem 2rem;font-size:0.8rem;font-weight:500;text-decoration:none;letter-spacing:0.05em;">View work →</a>
          <a style="border:1px solid ${c.border};color:${c.text};padding:0.85rem 2rem;font-size:0.8rem;text-decoration:none;letter-spacing:0.05em;">Contact</a>
        </div>
      </div>
    </section>`;
}

export function projects({ c, f, projStijl }) {
  if (projStijl === 'grid') {
    const cards = PROJECTS.map(p => `
      <div style="border:1px solid ${c.border};overflow:hidden;">
        <div style="height:140px;background:linear-gradient(135deg,var(--accent-22),var(--accent-44));display:flex;align-items:center;justify-content:center;font-family:${f.h};font-size:2.5rem;font-weight:700;color:var(--accent);">
          ${p.title[0]}
        </div>
        <div style="padding:1.25rem;">
          <p style="font-family:${f.mo};font-size:0.6rem;color:var(--accent);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:0.4rem;">${p.cat}</p>
          <h3 style="font-family:${f.h};font-size:1rem;font-weight:600;margin-bottom:0.5rem;">${p.title}</h3>
          <p style="font-size:0.8rem;color:${c.muted};">${p.desc}</p>
        </div>
      </div>`).join('');

    return `
      <section style="padding:4rem 3rem;border-bottom:1px solid ${c.border};">
        <p style="font-family:${f.mo};font-size:0.7rem;color:var(--accent);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1rem;">02 — Projecten</p>
        <h2 style="font-family:${f.h};font-size:2rem;font-weight:700;margin-bottom:2.5rem;">Recent werk.</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;">${cards}</div>
      </section>`;
  }

  // lijst (default)
  const rows = PROJECTS.map(p => `
    <div style="display:grid;grid-template-columns:3rem 1fr auto;gap:1.5rem;align-items:center;padding:1.5rem 0;border-top:1px solid ${c.border};">
      <span style="font-family:${f.mo};font-size:0.7rem;color:${c.muted};">${p.num}</span>
      <div>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.3rem;">
          <h3 style="font-size:1rem;font-weight:600;">${p.title}</h3>
          <span style="font-family:${f.mo};font-size:0.55rem;background:var(--accent);color:#fff;padding:0.15rem 0.5rem;text-transform:uppercase;letter-spacing:0.1em;">${p.cat}</span>
        </div>
        <p style="font-size:0.8rem;color:${c.muted};">${p.desc}</p>
      </div>
      <div style="display:flex;gap:0.35rem;flex-wrap:wrap;justify-content:flex-end;">
        ${p.tags.map(t => `<span style="font-family:${f.mo};font-size:0.6rem;border:1px solid ${c.border};color:${c.muted};padding:0.15rem 0.4rem;">${t}</span>`).join('')}
      </div>
    </div>`).join('');

  return `
    <section style="padding:4rem 3rem;border-bottom:1px solid ${c.border};">
      <p style="font-family:${f.mo};font-size:0.7rem;color:var(--accent);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1rem;">02 — Projecten</p>
      <h2 style="font-family:${f.h};font-size:2rem;font-weight:700;margin-bottom:2rem;">Recent werk.</h2>
      ${rows}
      <div style="border-top:1px solid ${c.border};"></div>
    </section>`;
}
