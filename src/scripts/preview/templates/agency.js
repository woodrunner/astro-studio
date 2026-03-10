import { NAAM, YEAR, PROJECTS } from '../config.js';

export function nav({ c, f, naam }) {
  const initialen = (naam || NAAM).split(' ').map(w => w[0]).join('');
  return `
    <nav style="position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:1rem 3rem;background:${c.bg};border-bottom:1px solid ${c.border};">
      <a style="font-family:${f.h};font-size:1.5rem;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;color:${c.text};text-decoration:none;">
        ${initialen}<span style="color:var(--accent)">.</span>
      </a>
      <ul style="display:flex;gap:2.5rem;list-style:none;align-items:center;">
        ${['Work','Studio','Contact'].map(l => `
          <li><a style="font-family:${f.h};font-size:0.9rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${c.muted};text-decoration:none;">${l}</a></li>
        `).join('')}
        <li>
          <a style="font-family:${f.h};font-size:0.8rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;background:var(--accent);color:#fff;padding:0.6rem 1.5rem;text-decoration:none;">Start project</a>
        </li>
      </ul>
    </nav>`;
}

export function hero({ c, f, heroStijl, naam }) {
  const mutedFade = `${c.text}18`;

  if (heroStijl === 'centered') return `
    <section style="min-height:92vh;background:${c.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:4rem 3rem;overflow:hidden;position:relative;">
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;">
        <span style="font-family:${f.h};font-size:22vw;font-weight:900;text-transform:uppercase;color:${mutedFade};line-height:1;letter-spacing:-0.04em;white-space:nowrap;">STUDIO</span>
      </div>
      <div style="position:relative;">
        <p style="font-family:${f.mo};font-size:0.65rem;letter-spacing:0.25em;color:var(--accent);text-transform:uppercase;margin-bottom:2rem;">✦ Available for projects — ${YEAR}</p>
        <h1 style="font-family:${f.h};font-size:clamp(3.5rem,9vw,8rem);font-weight:900;line-height:0.9;letter-spacing:-0.02em;text-transform:uppercase;color:${c.text};">
          WE BUILD<br/><span style="color:var(--accent)">DIGITAL</span><br/>THINGS.
        </h1>
        <div style="display:flex;gap:1rem;margin-top:3rem;justify-content:center;">
          <a style="font-family:${f.h};font-size:0.85rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;background:var(--accent);color:#fff;padding:1rem 2.5rem;text-decoration:none;">View our work →</a>
        </div>
      </div>
    </section>`;

  if (heroStijl === 'minimal') return `
    <section style="min-height:92vh;background:${c.bg};display:flex;flex-direction:column;justify-content:flex-end;padding:4rem 3rem;">
      <p style="font-family:${f.mo};font-size:0.65rem;letter-spacing:0.25em;color:var(--accent);text-transform:uppercase;margin-bottom:4rem;">✦ Available for projects — ${YEAR}</p>
      <h1 style="font-family:${f.h};font-size:clamp(4rem,11vw,10rem);font-weight:900;line-height:0.88;letter-spacing:-0.03em;text-transform:uppercase;color:${c.text};">
        WE<br/><span style="color:var(--accent)">BUILD</span><br/>THINGS.
      </h1>
      <div style="display:flex;justify-content:flex-end;margin-top:3rem;">
        <a style="font-family:${f.h};font-size:0.85rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;border:2px solid ${c.text};color:${c.text};padding:1rem 2.5rem;text-decoration:none;">View work →</a>
      </div>
    </section>`;

  // split (default)
  return `
    <section style="min-height:92vh;background:${c.bg};display:grid;grid-template-columns:1fr 280px;overflow:hidden;position:relative;">
      <div style="padding:4rem 3rem;display:flex;flex-direction:column;justify-content:space-between;">
        <p style="font-family:${f.mo};font-size:0.65rem;letter-spacing:0.25em;color:var(--accent);text-transform:uppercase;">✦ Available for projects — ${YEAR}</p>
        <div>
          <h1 style="font-family:${f.h};font-size:clamp(4rem,10vw,9rem);font-weight:900;line-height:0.9;letter-spacing:-0.01em;text-transform:uppercase;color:${c.text};">
            WE<br/><span style="color:var(--accent)">BUILD</span><br/>DIGITAL<br/><span style="color:${mutedFade}">THINGS.</span>
          </h1>
          <div style="display:flex;gap:1rem;margin-top:3rem;">
            <a style="font-family:${f.h};font-size:0.85rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;background:var(--accent);color:#fff;padding:1rem 2.5rem;text-decoration:none;">View our work →</a>
            <a style="font-family:${f.h};font-size:0.85rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border:1px solid ${c.border};color:${c.muted};padding:1rem 2rem;text-decoration:none;">About us</a>
          </div>
        </div>
      </div>
      <div style="background:var(--accent);display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-2rem;right:-2rem;width:180px;height:180px;border-radius:50%;border:40px solid rgba(0,0,0,0.15);"></div>
        <p style="font-family:${f.h};font-size:3rem;font-weight:900;line-height:1;color:rgba(0,0,0,0.2);text-transform:uppercase;letter-spacing:-0.02em;">${YEAR}</p>
        <p style="font-family:${f.b};font-size:0.75rem;color:rgba(0,0,0,0.5);margin-top:0.5rem;">Based in Belgium</p>
      </div>
    </section>`;
}

export function projects({ c, f, projStijl }) {
  if (projStijl === 'grid') {
    const cards = PROJECTS.map((p, i) => `
      <div style="background:${c.surface};border:1px solid ${c.border};overflow:hidden;position:relative;">
        <div style="height:160px;background:linear-gradient(135deg,var(--accent-22),var(--accent-44));display:flex;align-items:center;justify-content:center;">
          <span style="font-family:${f.h};font-size:5rem;font-weight:900;color:var(--accent);opacity:0.3;line-height:1;">0${i+1}</span>
        </div>
        <div style="padding:1.5rem;">
          <h3 style="font-family:${f.h};font-size:1.2rem;font-weight:800;text-transform:uppercase;letter-spacing:0.02em;color:${c.text};margin-bottom:0.4rem;">${p.title}</h3>
          <p style="font-size:0.8rem;color:${c.muted};margin-bottom:0.75rem;">${p.desc}</p>
          <span style="font-family:${f.h};font-size:0.6rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;background:var(--accent-22);color:var(--accent);padding:0.25rem 0.6rem;">${p.cat}</span>
        </div>
      </div>`).join('');
    return `
      <section style="background:${c.bg};padding:4rem 3rem;border-top:1px solid ${c.border};">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:2.5rem;">
          <h2 style="font-family:${f.h};font-size:3rem;font-weight:900;text-transform:uppercase;color:${c.text};">Selected<br/><span style="color:var(--accent)">Work</span></h2>
          <a style="font-family:${f.h};font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);text-decoration:none;">All projects →</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;">${cards}</div>
      </section>`;
  }

  // lijst (default)
  const rows = PROJECTS.map((p, i) => `
    <div style="display:grid;grid-template-columns:6rem 1fr 8rem;align-items:center;gap:2rem;padding:2rem 3rem;border-top:1px solid ${c.border};">
      <span style="font-family:${f.h};font-size:4rem;font-weight:900;color:${c.border};line-height:1;">0${i+1}</span>
      <div>
        <h3 style="font-family:${f.h};font-size:1.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.02em;color:${c.text};margin-bottom:0.35rem;">${p.title}</h3>
        <p style="font-family:${f.b};font-size:0.8rem;color:${c.muted};">${p.desc}</p>
      </div>
      <span style="font-family:${f.h};font-size:0.65rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;background:var(--accent-22);color:var(--accent);padding:0.35rem 0.75rem;text-align:center;">${p.cat}</span>
    </div>`).join('');
  return `
    <section style="background:${c.bg};padding:4rem 0;border-top:1px solid ${c.border};">
      <div style="padding:0 3rem 2rem;display:flex;justify-content:space-between;align-items:flex-end;">
        <h2 style="font-family:${f.h};font-size:3rem;font-weight:900;text-transform:uppercase;color:${c.text};">Selected<br/><span style="color:var(--accent)">Work</span></h2>
        <a style="font-family:${f.h};font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);text-decoration:none;">All projects →</a>
      </div>
      ${rows}
      <div style="border-top:1px solid ${c.border};"></div>
    </section>`;
}
