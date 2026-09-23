import {
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Compass,
  HardHat,
  Mail,
  Menu,
  MoveRight,
  Ruler,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    number: '01',
    icon: Ruler,
    title: 'Civil site design',
    text: 'Grading, drainage, utilities, and site plans that make the path from concept to construction clear.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Land development',
    text: 'Practical development strategies grounded in local requirements, project realities, and long-term value.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Infrastructure solutions',
    text: 'Resilient systems and thoughtful coordination for communities, owners, and the teams building them.',
  },
]

const principles = ['Precise by design', 'Clear in communication', 'Steady through delivery']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Itqan Solutions LLC home">
          <span className="brand-mark">I</span>
          <span className="brand-name">itqan <em>solutions</em></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Civil engineering, considered</p>
          <h1>Build what<br /><i>matters.</i></h1>
          <p className="hero-intro">Itqan Solutions brings thoughtful civil engineering to the places people live, work, and move through.</p>
          <a className="text-link" href="#contact">Tell us about your project <MoveRight size={19} /></a>
        </div>
        <div className="hero-side-note">
          <span className="vertical-label">ITQAN / 01</span>
          <div className="compass-wrap"><Compass size={45} strokeWidth={1} /></div>
        </div>
        <div className="hero-stamp"><span>EST.</span><strong>ITQAN</strong><span>SOLUTIONS LLC</span></div>
        <a className="scroll-cue" href="#approach"><span>Scroll to explore</span><ChevronDown size={16} /></a>
      </section>

      <section className="approach section" id="approach">
        <div className="section-label">Our approach <span>01 — 03</span></div>
        <div className="approach-content">
          <div>
            <p className="kicker">The work behind the work</p>
            <h2>Good engineering<br /><i>holds up.</i></h2>
          </div>
          <div className="approach-copy">
            <p>We believe the strongest solutions are the ones that feel inevitable: carefully considered, clearly communicated, and built to last.</p>
            <p>From the first sketch to the final detail, we bring rigor without the friction. Because a better process creates a better place.</p>
            <div className="principles">{principles.map((principle) => <span key={principle}><Check size={15} /> {principle}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-label">What we do <span>02 — 03</span></div>
        <div className="services-heading"><h2>Grounded in<br /><i>the details.</i></h2><p>Focused expertise for the conditions that shape every project.</p></div>
        <div className="service-list">{services.map(({ number, icon: Icon, title, text }) => (
          <article className="service-item" key={title}>
            <span className="service-number">{number}</span>
            <Icon className="service-icon" size={30} strokeWidth={1.25} />
            <div><h3>{title}</h3><p>{text}</p></div>
            <ArrowUpRight className="service-arrow" size={22} />
          </article>
        ))}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orbit"><div className="orbit-line" /><HardHat size={43} strokeWidth={1} /></div>
        <div className="section-label light-label">Let's talk <span>03 — 03</span></div>
        <div className="contact-content">
          <div><p className="kicker">Have a project in mind?</p><h2>Let's make<br /><i>solid ground.</i></h2></div>
          <div className="contact-form-wrap">
            <p>Share a few details and we’ll get back to you at <a href="mailto:business@itqansolutionsllc.com">business@itqansolutionsllc.com</a>.</p>
            <form action="mailto:business@itqansolutionsllc.com" method="post" encType="text/plain">
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@company.com" required /></label>
              <label>Tell us about the project<textarea name="message" rows="4" placeholder="A little context goes a long way..." required /></label>
              <button className="submit-button" type="submit">Send inquiry <Mail size={17} /></button>
            </form>
          </div>
        </div>
        <footer><span>© {new Date().getFullYear()} Itqan Solutions LLC</span><span>Thoughtful engineering for the built environment</span></footer>
      </section>
    </main>
  )
}

export default App
