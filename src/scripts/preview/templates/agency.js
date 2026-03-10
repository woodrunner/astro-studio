import { NAAM, YEAR, PROJECTS } from '../config.js';

const BG = '#0A0A0A';
const TEXT = '#FFFFFF';

export function nav() {
  const initialen = NAAM.split(' ').map(w => w[0]).join('');
  const links = ['Work', 'Studio', 'Contact'];

  return `
    <nav style="position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:1rem 3rem;background:${BG};">
      <a style="font-family:'Barlow Condensed',sans-serif;font-size:1.5rem;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;color:${TEXT};text-decoration:none;">
        ${initialen}<span style="color:var(--accent)">.</span>
      </a>
      <ul style="display:flex;gap:2.5rem;list-style:none;align-items:center;">
        ${links.map(l => `
          <li><a style="font-family:'Barlow Condensed',sans-serif;font-size:0.9rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.5);text-decoration:none;">${l}</a></li>
        `).join('')}
        <li>
          <a style="font-family:'Barlow Condensed',sans-serif;font-size:0.8rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;background:var(--accent);color:#fff;padding:0.6rem 1.5rem;text-decoration:none;">
            Start project
          </a>
        </li>
      </ul>
    </nav>`;
}

export function hero() {
  return `
    <section style="min-height:92vh;background:${BG};display:grid;grid-template-columns:1fr 280px;overflow:hidden;position:relative;">

      <div style="padding:4rem 3rem;display:flex;flex-direction:column;justify-content:space-between;">
        <p style="font-family:'Barlow Condensed',sans-serif;font-size:0.65rem;letter-spacing:0.25em;color:var(--accent);text-transform:uppercase;">
          ✦ Available for projects — ${YEAR}
        </p>
        <div>
          <h1 style="font-family:'Barlow Condensed',sans-serif;font-size:clamp(4rem,10vw,9rem);font-weight:900;line-height:0.9;letter-spacing:-0.01em;text-transform:uppercase;color:${TEXT};">
            WE<br/>
            <span style="color:var(--accent)">BUILD</span><br/>
            DIGITAL<br/>
            <span style="color:rgba(255,255,255,0.12)">THINGS.</span>
          </h1>
          <div style="display:flex;gap:1rem;margin-top:3rem;">
            <a style="font-family:'Barlow Condensed',sans-serif;font-size:0.85rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;background:var(--accent);color:#fff;padding:1rem 2.5rem;text-decoration:none;">
              View our work →
            </a>
            <a style="font-family:'Barlow Condensed',sans-serif;font-size:0.85rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.6);padding:1rem 2rem;text-decoration:none;">
              About us
            </a>
          </div>
        </div>
      </div>

      <div style="background:var(--accent);display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-2rem;right:-2rem;width:180px;height:180px;border-radius:50%;border:40px solid rgba(0,0,0,0.15);"></div>
        <p style="font-family:'Barlow Condensed',sans-serif;font-size:3rem;font-weight:900;line-height:1;color:rgba(0,0,0,0.2);text-transform:uppercase;letter-spacing:-0.02em;">
          ${YEAR}
        </p>
        <p style="font-size:0.75rem;color:rgba(0,0,0,0.5);margin-top:0.5rem;">Based in Belgium</p>
      </div>

    </section>`;
}

export function projects() {
  const rows = PROJECTS.map((p, i) => `
    <div style="display:grid;grid-template-columns:6rem 1fr 8rem;align-items:center;gap:2rem;padding:2rem 3rem;border-top:1px solid rgba(255,255,255,0.08);">
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:4rem;font-weight:900;color:rgba(255,255,255,0.06);line-height:1;">0${i + 1}</span>
      <div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:1.6rem;font-weight:800;text-transform:uppercase;letter-spacing:0.02em;color:${TEXT};margin-bottom:0.35rem;">${p.title}</h3>
        <p style="font-size:0.8rem;color:rgba(255,255,255,0.4);">${p.desc}</p>
      </div>
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:0.65rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;background:var(--accent-22);color:var(--accent);padding:0.35rem 0.75rem;text-align:center;">${p.cat}</span>
    </div>`).join('');

  return `
    <section style="background:${BG};padding:4rem 0;border-top:1px solid rgba(255,255,255,0.08);">
      <div style="padding:0 3rem 2rem;display:flex;justify-content:space-between;align-items:flex-end;">
        <h2 style="font-family:'Barlow Condensed',sans-serif;font-size:3rem;font-weight:900;text-transform:uppercase;color:${TEXT};">
          Selected<br/><span style="color:var(--accent)">Work</span>
        </h2>
        <a style="font-family:'Barlow Condensed',sans-serif;font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--accent);text-decoration:none;">All projects →</a>
      </div>
      ${rows}
      <div style="border-top:1px solid rgba(255,255,255,0.08);"></div>
    </section>`;
}
