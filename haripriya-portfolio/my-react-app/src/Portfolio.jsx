import { useState, useEffect, useCallback } from "react";
import photo from "./photo"; // photo.js must be in the same folder

/* ============ EDIT THIS SECTION ============ */
const ME = {
  name: "Konda Haripriya",
  role: "MERN stack developer",
  photo, // comes from photo.js
  about:
    "I'm a first-year B.Tech student in Computer Science Engineering (AI & ML) at ACE Engineering College, with a CGPA of 9.2. I build web apps with HTML, CSS, JavaScript and React, and I'm learning the MERN stack. I'm looking for an internship where I can learn from a team and contribute to real projects.",
  tag: "Open to internships",
  email: "kondaharipriya115@gmail.com",
  github: "https://github.com/kondaharipriya",
  linkedin: "https://www.linkedin.com/in/haripriya-konda-083093380/",
  education: [
    { title: "B.Tech, Computer Science Engineering (AI & ML)", place: "ACE Engineering College", when: "2025 - 2029", score: "CGPA 9.2 (current)" },
    { title: "Intermediate, MPC", place: "Sri Chaitanya Junior Kalasala, DD Colony", when: "2023 - 2025", score: "96.5%" },
    { title: "Class 10, ICSE", place: "Sri Sai Public School, Habsiguda", when: "Completed 2023", score: "91%" },
  ],
  certificates: [
    { name: "Introduction to JavaScript II", by: "Saylor University", when: "Oct 2026", link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1791016629/7891631306HK.pdf" },
    { name: "MTA: Introduction to Programming Using JavaScript", by: "Saylor University", when: "Oct 2026", link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1790950524/3153267114HK.pdf" },
    { name: "HTML Course", by: "Codeliber", when: "Sep 2026", link: "https://codeliber.com/certificates/mukq12sxysa8i" },
    { name: "Introduction to HTML and CSS", by: "IBM", when: "Aug 2026", link: "https://skills.yourlearning.ibm.com/certificate/share/9444f694ebewogICJvYmplY3RJZCIgOiAiQUxNLUNPVVJTRV80MDU4OTM5IiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiLAogICJsZWFybmVyQ05VTSIgOiAiODAzOTY1N1JFRyIKfQd46786b617-10" },
    { name: "Introduction to HTML and CSS", by: "Saylor University", when: "Aug 2026", link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1787388203/8596933845HK.pdf" },
    { name: "Python course", by: "Codeliber", when: "Jul 2026", link: "https://codeliber.com/certificates/mr2yv4i428jph" },
    { name: "QuizOff 2026: India's Biggest AI Quiz", by: "CampusCrew on Unstop", when: "Jul 2026", link: "/certificates/quizoff-2026.png" },
    { name: "Responsible AI: Principles, Practices, and Applications", by: "Udemy", when: "Aug 2026", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1934e559-03ca-44b2-a57e-1c38ba8d7300.pdf" },
    { name: "Claude AI Pro: The Ultimate Course", by: "Udemy", when: "Aug 2026", link: "" },
    { name: "Claude for Project Management", by: "Udemy", when: "Aug 2026", link: "" },
    { name: "Intro to Claude 3 & 3.5 Sonnet: Business Applications & API", by: "Udemy", when: "Aug 2026", link: "" },
    { name: "ChatGPT for Data Science and Machine Learning", by: "Udemy", when: "Jun 2026", link: "" },
  ],
  skills: ["React", "Node.js", "Express", "Java", "JavaScript", "HTML", "CSS", "Python"],
  languages: ["English (fluent)", "Telugu (native)", "Hindi (conversational)"],
  projects: [
    { title: "College Ebook Website", stack: "HTML, CSS, JavaScript, React", text: "A multi-page ebook store with index, sample page, login, register, catalogue and cart pages.", live: "" },
    { title: "Weather App", stack: "HTML, CSS, JavaScript, React", text: "Search any city and see its current weather using a weather API.", live: "" },
    { title: "To-Do App", stack: "HTML, CSS, JavaScript, React", text: "A simple task manager to add and track daily tasks.", live: "" },
    { title: "Weather Graph", stack: "HTML, CSS, JavaScript, React", text: "Shows weather data fetched from an API as a graph.", live: "" },
  ],
};
/* ============================================ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=EB+Garamond:wght@400;500&display=swap');
.sl{--bg:#f5efe3;--ink:#2b211c;--muted:#6f6258;--line:#d8cbb3;--accent:#6b1f2a;--gold:#b08d4a;
 background:var(--bg);color:var(--ink);font-family:'EB Garamond',Georgia,serif;font-size:1.15rem;line-height:1.65;
 height:100dvh;display:flex;flex-direction:column;overflow:hidden;padding:.75rem}
.sl *{box-sizing:border-box}
.sl a{color:var(--accent);text-underline-offset:4px;text-decoration-color:var(--gold)}
.sl :focus-visible{outline:2px solid var(--accent);outline-offset:3px}
.sl .frame{flex:1;display:flex;flex-direction:column;min-height:0;border:1px solid var(--gold);outline:1px solid var(--gold);outline-offset:5px;margin:5px;background:radial-gradient(ellipse at top,#fbf7ee,var(--bg) 70%)}
.sl .top{display:flex;justify-content:space-between;padding:1rem 1.75rem;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.2rem;color:var(--muted)}
.sl .stage{flex:1;overflow-y:auto;padding:0 1.75rem}
.sl .slide{max-width:940px;margin:0 auto;padding:.5rem 0 2rem}
.sl .eyebrow{font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--gold);font-size:1.25rem;letter-spacing:.08em;margin:0 0 .25rem}
.sl h1,.sl h2{font-family:'Cormorant Garamond',serif;font-weight:700;line-height:1.02;margin:0 0 1rem;color:var(--accent)}
.sl h1{font-size:clamp(2.6rem,7vw,4.6rem);letter-spacing:-.01em;overflow-wrap:break-word}
.sl h2{font-size:clamp(2.2rem,6vw,3.6rem)}
.sl h2::after,.sl .orn::after{content:"";display:block;width:90px;height:1px;background:var(--gold);margin-top:.9rem}
.sl .role{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.7rem;color:var(--ink);margin:0 0 1rem}
.sl .muted{color:var(--muted)}
.sl .about{display:grid;grid-template-columns:260px minmax(0,1fr);gap:3rem;align-items:center;text-align:left}
.sl .photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:50% 20%;border-radius:999px 999px 6px 6px;border:1px solid var(--gold);padding:8px;background:var(--bg);outline:1px solid var(--gold);outline-offset:6px;margin:6px}
.sl .tag{display:inline-block;margin-top:.5rem;padding:.25rem 1.1rem;border:1px solid var(--gold);color:var(--accent);font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.2rem}
.sl .row{border-top:1px solid var(--line);padding:1.1rem 0;display:grid;grid-template-columns:1fr auto;gap:.15rem 1rem}
.sl .row:last-of-type{border-bottom:1px solid var(--line)}
.sl .row b{font-family:'Cormorant Garamond',serif;font-weight:700;font-size:1.45rem;line-height:1.2}
.sl .when{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.2rem;text-align:right;color:var(--accent)}
.sl .certs{display:grid;grid-template-columns:1fr 1fr;gap:0 2.5rem}
.sl .cert{border-top:1px solid var(--line);padding:.75rem 0}
.sl .cert a,.sl .cert b{font-family:'Cormorant Garamond',serif;font-weight:700;font-size:1.25rem;line-height:1.25;display:block}
.sl .cert small{color:var(--muted);font-style:italic}
.sl h3{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;color:var(--gold);margin:1.75rem 0 .75rem;font-size:1.5rem}
.sl .chips{display:flex;flex-wrap:wrap;gap:.6rem;list-style:none;padding:0;margin:0}
.sl .chips li{border:1px solid var(--gold);padding:.2rem 1rem;font-family:'Cormorant Garamond',serif;font-weight:700;font-size:1.2rem}
.sl .mail{font-family:'Cormorant Garamond',serif;font-weight:700;font-style:italic;font-size:clamp(1.5rem,5vw,2.6rem);word-break:break-all}
.sl .links{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.5rem}
.sl .btn{font-family:'Cormorant Garamond',serif;font-weight:700;font-size:1.15rem;letter-spacing:.04em;padding:.55rem 1.4rem;border:1px solid var(--accent);color:var(--accent);text-decoration:none;background:transparent;cursor:pointer}
.sl .btn.primary{background:var(--accent);color:var(--bg)}
.sl .btn:hover:not(:disabled){background:var(--gold);border-color:var(--gold);color:#fff}
.sl .btn:disabled{opacity:.35;cursor:default}
.sl .bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.75rem}
.sl .dots{display:flex;gap:.7rem;flex-wrap:wrap;justify-content:center}
.sl .dot{width:.8rem;height:.8rem;transform:rotate(45deg);border:1px solid var(--accent);background:transparent;padding:0;cursor:pointer}
.sl .dot[aria-current=true]{background:var(--accent)}
@media (max-width:700px){.sl .about,.sl .certs{grid-template-columns:1fr;gap:1.5rem}.sl .photo{max-width:220px}.sl{padding:.25rem}}
@media (prefers-reduced-motion:no-preference){.sl .slide{animation:in .5s ease}@keyframes in{from{opacity:0}}.sl .btn{transition:background .2s,color .2s}}
`;

function Link({ href, children }) {
  return /^https?:/.test(href) ? (
    <a href={href} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <a href={href} target="_blank" rel="noreferrer">{children}</a>
  );
}

const slides = [
  { id: "About", render: () => (
    <div className="about">
      <img className="photo" src={ME.photo} alt={ME.name} />
      <div>
        <h1>{ME.name}</h1>
        <p className="role">{ME.role}</p>
        <p>{ME.about}</p>
        <span className="tag">{ME.tag}</span>
      </div>
    </div>
  )},
  { id: "Education", render: () => (
    <>
      <h2>Education</h2>
      {ME.education.map((e) => (
        <div className="row" key={e.title}>
          <b>{e.title}</b><span className="when">{e.when}</span>
          <span className="muted">{e.place}</span><span className="when">{e.score}</span>
        </div>
      ))}
    </>
  )},
  { id: "Certificates", render: () => (
    <>
      <h2>Certificates</h2>
      <div className="certs">
        {ME.certificates.map((c, i) => (
          <div className="cert" key={i}>
            {c.link ? <Link href={c.link}>{c.name}</Link> : <b>{c.name}</b>}
            <small>{c.by} · {c.when}</small>
          </div>
        ))}
      </div>
    </>
  )},
  { id: "Skills", render: () => (
    <>
      <h2>Skills &amp; Languages</h2>
      <h3>Skills</h3>
      <ul className="chips">{ME.skills.map((s) => <li key={s}>{s}</li>)}</ul>
      <h3>Languages</h3>
      <ul className="chips">{ME.languages.map((s) => <li key={s}>{s}</li>)}</ul>
    </>
  )},
  { id: "Projects", render: () => (
    <>
      <h2>Projects</h2>
      {ME.projects.map((p) => (
        <div className="row" key={p.title}>
          <b>{p.title}</b>
          <span className="when">{p.live ? <Link href={p.live}>Live demo</Link> : null}</span>
          <span>{p.text}</span>
          <span />
          <span className="muted">{p.stack}</span>
        </div>
      ))}
      <p><Link href={ME.github}>See all my code on GitHub</Link></p>
    </>
  )},
  { id: "Contact", render: () => (
    <>
      <h2>Let's talk</h2>
      <p>I'm looking for an internship. Send me a message.</p>
      <a className="mail" href={`mailto:${ME.email}`}>{ME.email}</a>
      <div className="links">
        <a className="btn primary" href={`mailto:${ME.email}`}>Email me</a>
        <a className="btn" href={ME.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </>
  )},
];

export default function Portfolio() {
  const [i, setI] = useState(0);
  const go = useCallback((n) => setI(Math.max(0, Math.min(slides.length - 1, n))), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  return (
    <div className="sl">
      <style>{css}</style>
      <div className="frame">
      <div className="top">
        <span>{ME.name}</span>
        <span>{i + 1} / {slides.length}</span>
      </div>
      <main className="stage">
        <div className="slide" key={i}>
          <p className="eyebrow">{["I","II","III","IV","V","VI"][i]}. {slides[i].id}</p>
          {slides[i].render()}
        </div>
      </main>
      <div className="bar">
        <button className="btn" onClick={() => go(i - 1)} disabled={i === 0}>Back</button>
        <div className="dots" role="tablist" aria-label="Slides">
          {slides.map((s, n) => (
            <button key={s.id} className="dot" aria-label={s.id} aria-current={n === i} onClick={() => go(n)} />
          ))}
        </div>
        <button className="btn primary" onClick={() => go(i + 1)} disabled={i === slides.length - 1}>Next</button>
      </div>
      </div>
    </div>
  );
}
