import React, { useState, useEffect, useRef } from 'react';
import './LandingPage.css';

/* ---- Scroll-triggered fade-up hook ---- */
function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ---- NAV ---- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo">DH<span>.</span></div>
        <ul className="nav-links">
          {[['about', 'About'], ['projects', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']].map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
          ))}
        </ul>
        <a
          href="C:\Users\Dwhen\Downloads\FullStackPortfolio\Landing Page\public\Dwight_Hendricks_Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          ↓ Resume
        </a>
        <button className="nav-mobile-btn" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}

/* ---- HERO ---- */
function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-inner">
        {/* Left copy */}
        <div>
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            MBA · Veteran · Fintech Builder
          </div>

          <h1 className="hero-name">Dwight<br />Hendricks II</h1>
          <p className="hero-title">
            Fintech Builder
            <span className="hero-title-sep">·</span>
            Full-Stack Developer
            <span className="hero-title-sep">·</span>
            Finance Operations
          </p>
          <p className="hero-desc">
            I bring an MBA, Wells Fargo trust & wealth operations experience, and Marine Corps
            leadership to full-stack fintech development. I don't just write code — I understand
            the financial systems the code is supposed to serve.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View Projects →
            </button>
            <a
              href="/Dwight_Hendricks_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              ↓ Download Resume
            </a>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">5+</div>
              <div className="hero-stat-label">Fintech Products Built</div>
            </div>
            <div>
              <div className="hero-stat-value">MBA</div>
              <div className="hero-stat-label">Finance Background</div>
            </div>
            <div>
              <div className="hero-stat-value">USMC</div>
              <div className="hero-stat-label">Veteran Leader</div>
            </div>
          </div>
        </div>

        {/* Right cards */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon blue">💰</div>
            <div>
              <div className="hero-card-title">MindsBudget</div>
              <div className="hero-card-sub">AI Financial Intelligence Platform</div>
            </div>
            <div className="hero-card-badge live">● Live</div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon gold">📊</div>
            <div>
              <div className="hero-card-title">TradeMirror</div>
              <div className="hero-card-sub">Trader Execution Analytics SaaS</div>
            </div>
            <div className="hero-card-badge built">Built</div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon green">🧠</div>
            <div>
              <div className="hero-card-title">Research System</div>
              <div className="hero-card-sub">Market Intelligence Engine</div>
            </div>
            <div className="hero-card-badge built">Python · ML</div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon blue">🤖</div>
            <div>
              <div className="hero-card-title">GoBot V3</div>
              <div className="hero-card-sub">RL-Powered Trading Automation</div>
            </div>
            <div className="hero-card-badge built">RL · Algo</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- ABOUT ---- */
function About() {
  const ref = useFadeUp();
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-header fade-up" ref={ref}>
          <div className="section-label">● About</div>
          <h2 className="section-title">Finance expertise meets<br /><span>engineering execution</span></h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {[
            {
              icon: '🎓', bg: '',
              title: 'Finance Professional',
              desc: 'MBA + BBA in Trust & Wealth Management. Wells Fargo trust operations, compliance monitoring, client account servicing, and estate administration. I understand what\'s actually at stake when financial systems break.'
            },
            {
              icon: '🎖️', bg: 'gold-bg',
              title: 'Veteran Leader',
              desc: 'U.S. Marine Corps — trained to execute under pressure, lead teams in ambiguous situations, and deliver results without excuses. That discipline transfers directly into shipping reliable software.'
            },
            {
              icon: '⚡', bg: 'green-bg',
              title: 'Full-Stack Builder',
              desc: 'React, Node.js, Express, PostgreSQL, Python, JWT auth, REST APIs, ML pipelines. Not a tutorial-follower — I\'ve deployed real products solving real financial problems.'
            }
          ].map(({ icon, bg, title, desc }) => (
            <div className="about-pillar" key={title}>
              <div className={`pillar-icon ${bg}`}>{icon}</div>
              <div className="pillar-title">{title}</div>
              <p className="pillar-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="about-summary">
          <div>
            <p className="about-summary-text">
              I'm a <strong>Charlotte, NC–based fintech builder</strong> with an unusual combination: deep
              knowledge of how financial institutions actually work (Wells Fargo trust ops, compliance,
              client management) paired with the engineering skills to build the software those institutions
              run on. My MBA isn't just a credential — it shaped how I think about product decisions,
              financial risk, and what users actually need from financial tools.
            </p>
            <div className="about-tags">
              {['React', 'Node.js', 'PostgreSQL', 'Python', 'REST APIs', 'JWT Auth', 'SQL', 'Trust Operations', 'Compliance', 'Financial Analysis', 'Machine Learning', 'SaaS'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="about-profile-area">
            <div className="profile-img-wrap">
              <div className="profile-img-inner">
                <img
                  src={`${process.env.PUBLIC_URL}/Resize.png`}
                  alt="Dwight Hendricks II"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
            <div className="profile-name">Dwight Hendricks II</div>
            <div className="profile-title">Charlotte, NC</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- PROJECTS ---- */
const PROJECTS = [
  {
    icon: '💰',
    title: 'MindsBudget',
    badges: [{ label: '● Live', cls: 'live' }, { label: 'SaaS', cls: 'saas' }],
    problem: 'Problem solved',
    desc: 'People can\'t easily understand where their money goes from raw bank statements. MindsBudget ingests PDFs and CSVs from Wells Fargo, Chase, and Bank of America, automatically classifies transactions, detects recurring charges, and surfaces spending intelligence.',
    why: '<strong>Why employers care:</strong> Custom multi-bank PDF parsers, 159 automated tests (100% pass), JWT auth system, full-stack ownership from ingestion to UI. Financial domain knowledge + real engineering depth.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'PDF Parsing', 'CSV/Excel'],
    links: [{ label: '↗ Live Site', href: 'https://mindsbudget.com', cls: 'primary' }, { label: 'GitHub', href: 'https://github.com/hadvisory', cls: '' }],
    featured: true,
  },
  {
    icon: '📊',
    title: 'TradeMirror',
    badges: [{ label: 'SaaS', cls: 'saas' }, { label: 'Full-Stack', cls: 'saas' }],
    problem: 'Problem solved',
    desc: 'Traders lose money due to emotional and disciplined execution failures — not bad strategies. TradeMirror tracks execution quality across 18 trade fields, scores behavioral discipline using a 4-component weighted algorithm, and surfaces analytics that reveal execution patterns.',
    why: '<strong>Why employers care:</strong> Complete SaaS lifecycle — JWT auth, freemium tiers, Stripe-ready billing, behavioral analytics engine. Shows product thinking, not just coding.',
    stack: ['React 18', 'Vite', 'Tailwind', 'Node.js', 'SQLite', 'JWT', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/hadvisory', cls: '' }],
    featured: true,
  },
  {
    icon: '🧠',
    title: 'Research System',
    badges: [{ label: 'Python', cls: 'python' }, { label: 'ML', cls: 'ml' }],
    problem: 'Problem solved',
    desc: 'Individual investors lack institutional-grade market intelligence. This Python pipeline scans macro indicators, ETF flows, options activity, and dividend signals — generating automated daily scorecards and research briefs across multiple asset classes.',
    why: '<strong>Why employers care:</strong> Data engineering, financial signal analysis, automated reporting pipeline. Directly relevant for financial analyst, portfolio analytics, and fintech infrastructure roles.',
    stack: ['Python', 'PostgreSQL', 'pandas', 'ML Signals', 'Automated Reporting', 'ETF/Options'],
    links: [{ label: 'GitHub', href: 'https://github.com/hadvisory', cls: '' }],
    featured: false,
  },
  {
    icon: '🤖',
    title: 'GoBot V3',
    badges: [{ label: 'RL / ML', cls: 'ml' }, { label: 'Algo', cls: 'python' }],
    problem: 'Problem solved',
    desc: 'Manual trading execution is slow and emotionally inconsistent. GoBot V3 uses reinforcement learning to develop a trading agent — custom reward functions, trained on historical market data, with risk guardrails and position management logic.',
    why: '<strong>Why employers care:</strong> Quantitative thinking, machine learning applied to real financial decisions, algorithmic trading architecture. Signals comfort with probabilistic systems and risk.',
    stack: ['Python', 'Reinforcement Learning', 'ML', 'Algo Trading', 'Risk Management'],
    links: [{ label: 'GitHub', href: 'https://github.com/hadvisory', cls: '' }],
    featured: false,
  },
];

function Projects() {
  const ref = useFadeUp();
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <div className="fade-up" ref={ref}>
            <div className="section-label">● Projects</div>
            <h2 className="section-title">Products I've <span>shipped</span></h2>
            <p className="section-sub">Real financial tools solving real problems — not tutorial projects.</p>
          </div>
          <a href="https://github.com/hadvisory" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View All on GitHub →
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  const ref = useFadeUp();
  return (
    <div className={`project-card fade-up ${p.featured ? 'featured' : ''}`} ref={ref}>
      <div className="project-card-header">
        <div className="project-icon">{p.icon}</div>
        <div className="project-badges">
          {p.badges.map(b => (
            <span key={b.label} className={`badge ${b.cls}`}>{b.label}</span>
          ))}
        </div>
      </div>

      <div className="project-problem">{p.problem}</div>
      <div className="project-title">{p.title}</div>
      <p className="project-desc">{p.desc}</p>

      <div className="project-why" dangerouslySetInnerHTML={{ __html: p.why }} />

      <div className="project-stack">
        {p.stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
      </div>

      <div className="project-links">
        {p.links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={`project-link ${l.cls}`}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ---- FINTECH VALUE ---- */
const VALUE_CARDS = [
  { icon: '🏦', name: 'Banking Systems', detail: 'Understand how financial institutions process, store, and audit transactions' },
  { icon: '📊', name: 'Financial Analysis', detail: 'Built tools that analyze spending, risk, market signals, and portfolio performance' },
  { icon: '🗄️', name: 'SQL + Databases', detail: 'PostgreSQL, SQLite — schema design, complex queries, data integrity' },
  { icon: '🔌', name: 'API Development', detail: 'REST APIs, third-party integrations, Stripe, financial data pipelines' },
  { icon: '⚙️', name: 'Workflow Automation', detail: 'Python pipelines, scheduled jobs, automated reporting, ML signal generation' },
  { icon: '🛡️', name: 'Compliance Mindset', detail: 'Wells Fargo compliance monitoring background; understand regulatory constraints in code' },
  { icon: '🤝', name: 'Client Communication', detail: 'Trust operations client servicing — translate complex financial concepts clearly' },
  { icon: '📐', name: 'Product Thinking', detail: 'MBA-trained product intuition — build for user need, not engineering elegance' },
];

const VALUE_CHECKS = [
  '✔ AI-Powered Budgeting Systems',
  '✔ Financial Data Analysis & Reporting',
  '✔ Trust & Wealth Operations Knowledge',
  '✔ SQL + Database Design',
  '✔ REST API Integration',
  '✔ Workflow Automation',
  '✔ Compliance & Audit Mindset',
  '✔ Customer-Facing Experience',
  '✔ Algorithmic Trading Systems',
  '✔ Market Intelligence Pipelines',
  '✔ SaaS Product Architecture',
  '✔ Veteran Leadership Discipline',
];

function FintechValue() {
  const ref = useFadeUp();
  return (
    <section className="value" id="skills">
      <div className="value-inner">
        <div className="value-header fade-up" ref={ref}>
          <div className="section-label">● Fintech Value</div>
          <h2 className="section-title">What I bring to a<br /><span>fintech team</span></h2>
          <div className="section-divider" />
          <p className="section-sub">The overlap of finance domain knowledge, engineering skills, and real product delivery.</p>
        </div>

        <div className="value-grid">
          {VALUE_CARDS.map(v => (
            <ValueCard key={v.name} {...v} />
          ))}
        </div>

        <div className="value-checklist">
          {VALUE_CHECKS.map(c => (
            <div className="value-check" key={c}>
              <div className="check-mark">✓</div>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, name, detail }) {
  const ref = useFadeUp();
  return (
    <div className="value-card fade-up" ref={ref}>
      <span className="value-icon">{icon}</span>
      <div className="value-name">{name}</div>
      <p className="value-detail">{detail}</p>
    </div>
  );
}

/* ---- EXPERIENCE ---- */
const TIMELINE = [
  {
    dot: '',
    date: '2022 – 2024',
    dateClass: '',
    company: 'Wells Fargo · Charlotte, NC',
    role: 'Trust & Estate Operations Specialist',
    points: [
      'Managed trust account administration, compliance monitoring, and client servicing for high-net-worth estate and trust portfolios',
      'Processed complex financial transactions, coordinated with legal and investment teams on regulatory requirements',
      'Identified workflow inefficiencies and proposed process improvements — the same problem-solving mindset now applied to engineering',
      'Client-facing communication: translated complex financial structures into clear guidance for clients and beneficiaries',
    ],
    skills: ['Trust Operations', 'Compliance', 'Client Management', 'Estate Administration', 'Financial Workflows', 'Risk Monitoring'],
  },
  {
    dot: 'gold',
    date: '2015 – 2019',
    dateClass: 'gold',
    company: 'United States Marine Corps',
    role: 'Non-Commissioned Officer · Leadership & Operations',
    points: [
      'Led teams under high-pressure, ambiguous conditions — trained to execute when the plan breaks',
      'Managed personnel, logistics, and mission execution; accountable for outcomes, not just effort',
      'Cross-functional coordination across units, building communication habits that transfer directly to engineering teams',
      'Discipline, precision, and ownership: the foundation of every product I build',
    ],
    skills: ['Team Leadership', 'Operations Management', 'Decision-Making Under Pressure', 'Accountability', 'Cross-functional Coordination'],
  },
  {
    dot: 'green',
    date: '2023 – Present',
    dateClass: '',
    company: 'HEND Advisory · Independent',
    role: 'Fintech Developer & Product Builder',
    points: [
      'Built MindsBudget: multi-bank PDF parsing, 159 automated tests, deployed to production (mindsbudget.com)',
      'Built TradeMirror: full SaaS with JWT auth, behavioral discipline scoring engine, freemium model',
      'Built Research System: Python market intelligence pipeline (macro, ETF, options, dividend signals)',
      'Built GoBot V3: reinforcement learning trading agent with risk management logic',
    ],
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'SaaS Architecture', 'ML', 'Product Strategy'],
  },
];

function Experience() {
  const ref = useFadeUp();
  return (
    <section className="experience" id="experience">
      <div className="experience-inner">
        <div className="experience-header fade-up" ref={ref}>
          <div className="section-label">● Experience</div>
          <h2 className="section-title">Finance professional.<br /><span>Military leader. Builder.</span></h2>
          <div className="section-divider" />
          <p className="section-sub">Three distinct backgrounds that all reinforce the same thing: ownership, execution, and results.</p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <TimelineItem key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  const ref = useFadeUp();
  return (
    <div className="timeline-item fade-up" ref={ref}>
      <div className={`timeline-dot ${item.dot}`}>
        {item.dot === 'gold' ? '🎖' : item.dot === 'green' ? '⚡' : '🏦'}
      </div>
      <div className="timeline-card">
        <div className="timeline-meta">
          <span className={`timeline-date ${item.dateClass}`}>{item.date}</span>
          <span className="timeline-company">{item.company}</span>
        </div>
        <div className="timeline-role">{item.role}</div>
        <ul className="timeline-points">
          {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
        <div className="timeline-skills">
          {item.skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ---- CONTACT ---- */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useFadeUp();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xldnalne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          {/* Left */}
          <div className="fade-up" ref={ref}>
            <div className="section-label">● Contact</div>
            <h2 className="contact-info-title">Let's talk fintech.</h2>
            <p className="contact-info-sub">
              Open to fintech product roles, analyst positions, developer opportunities, and
              solution engineering. Charlotte, NC — open to remote and hybrid.
            </p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/dwighthendricks"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon">💼</div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/dwighthendricks</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>

              <a
                href="https://github.com/hadvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon">⚡</div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/hadvisory</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>

              <a
                href="mailto:hendricks.advisory@gmail.com"
                className="contact-link-item"
              >
                <div className="contact-link-icon">✉️</div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">hendricks.advisory@gmail.com</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon">📅</div>
                <div>
                  <div className="contact-link-label">Book a Call</div>
                  <div className="contact-link-value">Schedule 30 minutes</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form">
            <div className="form-title">Send a message</div>
            <p className="form-sub">Response within 24 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or opportunity..."
                  required
                />
              </div>
              <button className="form-submit" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
              <p className={`form-status ${status === 'ok' ? 'ok' : status === 'err' ? 'err' : ''}`}>
                {status === 'ok' && 'Message sent! I\'ll be in touch soon.'}
                {status === 'err' && 'Something went wrong. Email me directly.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- FOOTER ---- */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2026 <span>Dwight Hendricks II</span> · Charlotte, NC ·{' '}
        <a href="https://mindsbudget.com" target="_blank" rel="noopener noreferrer">MindsBudget</a>{' '}
        · <a href="https://github.com/hadvisory" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
}

/* ---- ROOT ---- */
export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <FintechValue />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
