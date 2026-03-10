import { NAAM, PROJECTS } from '../config.js';

export function nav({ c, f, naam }) {
  const _naam = naam || NAAM;
  return `
    <nav style="background:${c.surface};border-bottom:1px solid ${c.border};">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 3rem;">
        <a style="font-family:${f.h};font-size:1.2rem;font-weight:600;font-style:italic;color:${c.text};text-decoration:none;">${_naam}</a>
        <ul style="display:flex;gap:2rem;list-style:none;">
          ${['Home','Diensten','Over mij','Contact'].map(l => `
            <li><a style="font-family:${f.b};font-size:0.85rem;color:${c.muted};text-decoration:none;">${l}</a></li>
          `).join('')}
        </ul>
        <a style="background:var(--accent);color:#fff;padding:0.55rem 1.25rem;font-size:0.8rem;border-radius:999px;text-decoration:none;font-weight:500;">Contacteer mij</a>
      </div>
    </nav>`;
}

export function hero({ c, f, heroStijl, naam }) {
  const _naam = naam || NAAM;
  const [voornaam, ...rest] = _naam.split(' ');
  const achternaam = rest.join(' ');
  const initialen = _naam.split(' ').map(w => w[0]).join('');

  if (heroStijl === 'centered') return `
    <section style="background:${c.bg};padding:6rem 3rem;text-align:center;">
      <div style="max-width:600px;margin:0 auto;">
        <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--accent-33),var(--accent-88));display:flex;align-items:center;justify-content:center;margin:0 auto 2rem;">
          <span style="font-family:${f.h};font-size:2rem;font-weight:600;font-style:italic;color:var(--accent);">${initialen}</span>
        </div>
        <p style="font-family:'Space Mono',monospace;font-size:0.7rem;color:var(--accent);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:1rem;">Hallo, ik ben</p>
        <h1 style="font-family:${f.h};font-size:clamp(2.5rem,5vw,3.5rem);font-weight:600;line-height:1.15;color:${c.text};margin-bottom:1.25rem;">
          ${voornaam} <span style="font-style:italic;color:var(--accent)">${achternaam}.</span>
        </h1>
        <p style="font-size:1rem;color:${c.muted};line-height:1.8;margin-bottom:2rem;">Ik geloof in eenvoud, warmte en vakmanschap. Elk project krijgt de aandacht het verdient.</p>
        <a style="background:var(--accent);color:#fff;padding:0.85rem 2.5rem;border-radius:999px;font-size:0.85rem;font-weight:500;text-decoration:none;">Bekijk mijn werk</a>
      </div>
    </section>`;

  if (heroStijl === 'minimal') return `
    <section style="background:${c.bg};padding:6rem 3rem 4rem;border-bottom:1px solid ${c.border};">
      <p style="font-family:'Space Mono',monospace;font-size:0.7rem;color:var(--accent);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:1.5rem;">Hallo, ik ben</p>
      <h1 style="font-family:${f.h};font-size:clamp(2.5rem,6vw,4.5rem);font-weight:600;line-height:1.1;color:${c.text};margin-bottom:1.5rem;">
        ${voornaam}<br/><span style="font-style:italic;color:var(--accent)">${achternaam}.</span>
      </h1>
      <p style="font-size:1rem;color:${c.muted};max-width:480px;line-height:1.8;margin-bottom:2.5rem;">
        Ik geloof in eenvoud, warmte en vakmanschap. Elk project krijgt de aandacht het verdient.
      </p>
      <a style="background:var(--accent);color:#fff;padding:0.85rem 2rem;border-radius:999px;font-size:0.85rem;font-weight:500;text-decoration:none;">Bekijk mijn werk</a>
    </section>`;

  // split (default)
  return `
    <section style="background:${c.bg};padding:5rem 3rem 4rem;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;max-width:900px;margin:0 auto;">
        <div style="position:relative;">
          <div style="width:100%;aspect-ratio:3/4;background:linear-gradient(160deg,var(--accent-33),var(--accent-88));border-radius:16px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:${f.h};font-size:2.5rem;font-weight:600;font-style:italic;color:var(--accent);">${initialen}</span>
          </div>
          <div style="position:absolute;bottom:-1rem;right:-1rem;background:${c.surface};border:2px solid ${c.border};border-radius:12px;padding:0.75rem 1rem;">
            <p style="font-family:'Space Mono',monospace;font-size:0.6rem;color:${c.muted};letter-spacing:0.1em;text-transform:uppercase;">Beschikbaar</p>
            <p style="font-family:${f.h};font-size:0.85rem;font-weight:600;color:${c.text};">Voor projecten</p>
          </div>
        </div>
        <div>
          <p style="font-family:'Space Mono',monospace;font-size:0.7rem;color:var(--accent);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:1.5rem;">Hallo, ik ben</p>
          <h1 style="font-family:${f.h};font-size:clamp(2.5rem,5vw,3.5rem);font-weight:600;line-height:1.15;color:${c.text};margin-bottom:1.25rem;">
            ${voornaam}<br/><span style="font-style:italic;color:var(--accent)">${achternaam}.</span>
          </h1>
          <p style="font-size:1rem;color:${c.muted};line-height:1.8;margin-bottom:2rem;">Ik geloof in eenvoud, warmte en vakmanschap. Elk project krijgt de aandacht het verdient.</p>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <a style="background:var(--accent);color:#fff;padding:0.85rem 2rem;border-radius:999px;font-size:0.85rem;font-weight:500;text-decoration:none;">Bekijk mijn werk</a>
            <a style="border:1px solid ${c.border};color:${c.text};padding:0.85rem 2rem;border-radius:999px;font-size:0.85rem;text-decoration:none;">Over mij</a>
          </div>
        </div>
      </div>
    </section>`;
}

export function projects({ c, f, projStijl }) {
  if (projStijl === 'lijst') {
    const rows = PROJECTS.map(p => `
      <div style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem;background:${c.surface};border:1px solid ${c.border};border-radius:12px;">
        <div style="width:3rem;height:3rem;border-radius:10px;background:linear-gradient(135deg,var(--accent-22),var(--accent-44));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-family:${f.h};font-size:1.25rem;font-style:italic;color:var(--accent);">${p.title[0]}</span>
        </div>
        <div style="flex:1;">
          <h3 style="font-family:${f.h};font-size:1rem;font-weight:600;color:${c.text};margin-bottom:0.25rem;">${p.title}</h3>
          <p style="font-size:0.8rem;color:${c.muted};">${p.desc}</p>
        </div>
        <span style="font-size:0.65rem;background:var(--accent-22);color:var(--accent);padding:0.25rem 0.6rem;border-radius:999px;font-weight:500;white-space:nowrap;">${p.cat}</span>
      </div>`).join('');
    return `
      <section style="background:${c.bg};padding:4rem 3rem;">
        <div style="text-align:center;margin-bottom:2.5rem;">
          <p style="font-family:'Space Mono',monospace;font-size:0.7rem;color:var(--accent);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:0.75rem;">Mijn werk</p>
          <h2 style="font-family:${f.h};font-size:2rem;font-weight:600;font-style:italic;color:${c.text};">Recent afgewerkt.</h2>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">${rows}</div>
      </section>`;
  }

  // grid (default)
  const cards = PROJECTS.map(p => `
    <div style="background:${c.surface};border:1px solid ${c.border};border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);">
      <div style="height:130px;background:linear-gradient(135deg,var(--accent-22),var(--accent-55));display:flex;align-items:center;justify-content:center;">
        <span style="font-family:${f.h};font-size:2.5rem;font-style:italic;color:var(--accent);">${p.title[0]}</span>
      </div>
      <div style="padding:1.25rem;">
        <span style="font-size:0.65rem;background:var(--accent-22);color:var(--accent);padding:0.25rem 0.6rem;border-radius:999px;font-weight:500;">${p.cat}</span>
        <h3 style="font-family:${f.h};font-size:1rem;font-weight:600;margin:0.6rem 0 0.4rem;color:${c.text};">${p.title}</h3>
        <p style="font-size:0.8rem;color:${c.muted};line-height:1.6;">${p.desc}</p>
      </div>
    </div>`).join('');
  return `
    <section style="background:${c.bg};padding:4rem 3rem;">
      <div style="text-align:center;margin-bottom:2.5rem;">
        <p style="font-family:'Space Mono',monospace;font-size:0.7rem;color:var(--accent);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:0.75rem;">Mijn werk</p>
        <h2 style="font-family:${f.h};font-size:2rem;font-weight:600;font-style:italic;color:${c.text};">Recent afgewerkt.</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;">${cards}</div>
    </section>`;
}
