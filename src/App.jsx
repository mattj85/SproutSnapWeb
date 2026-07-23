import { Container, Row, Col } from 'reactstrap'
import SiteNav from './components/SiteNav.jsx'
import CompareSlider from './components/CompareSlider.jsx'
import useReveal from './useReveal.js'
import appIcon from './assets/app-icon.png'
import {
  Apple,
  ArrowRight,
  Camera,
  Slider,
  Drop,
  Cloud,
  Lock,
  Import,
  Note,
  Images,
  Play,
  Infinity as InfinityIcon,
  Sparkle,
  Leaf
} from './components/Icons.jsx'

/* A reusable App Store download button. Point href at the real listing
   once the app is live on the App Store. */
function AppStoreBadge({ href = '#download' }) {
  return (
    <a className="appstore-badge" href={href} aria-label="Download on the App Store">
      <Apple />
      <span>
        <span className="small">Download on the</span>
        <br />
        <span className="big">App Store</span>
      </span>
    </a>
  )
}

const PLANTS = [
  'Pothos',
  'Monstera',
  'Philodendron',
  'Fiddle-leaf fig',
  'String of pearls',
  'Snake plant',
  'Rubber plant',
  'Tradescantia',
  'Spider plant',
  'ZZ plant'
]

const FEATURES = [
  {
    wide: true,
    icon: <Slider />,
    title: 'Scrub the timeline',
    body: 'Drag one slider across any plant to melt today’s growth back to day one — the reveal you actually want to show people. Export a Day 1 vs latest image in a tap.'
  },
  {
    icon: <Camera />,
    title: 'Capture, lined up',
    body: 'Every shot is cropped to a clean 3:4 and kept in order. Your day-one photo ghosts in over the camera, so each new frame lines up with where you started.'
  },
  {
    icon: <Import />,
    title: 'Back-fill from your roll',
    body: 'Already have progress photos? Import them from your library — SproutSnap reads each shot’s original date and slots it into the timeline in the right place.'
  },
  {
    icon: <Note />,
    title: 'Notes on any frame',
    body: 'Jot what you changed — new water, a fresh node, first root — against any photo, so the story isn’t just pictures.'
  },
  {
    icon: <Drop />,
    title: 'Fresh-water reminders',
    body: 'Set an interval per plant and get a gentle nudge when it’s time to swap the water. Manage every plant’s schedule from one Fresh Water tab.'
  },
  {
    icon: <Images />,
    title: 'A copy in your Photos',
    body: 'Flip on one switch and every capture is also saved to a dedicated SproutSnap album in Photos — backed up right alongside your other shots.'
  },
  {
    icon: <Cloud />,
    title: 'On every device',
    body: 'Your greenhouse follows you from iPhone to iPad over iCloud. Nothing to export, nothing to lose.'
  },
  {
    icon: <Lock />,
    title: 'Private by default',
    body: 'Lock your timelines behind Face ID. Photos live on your devices and your iCloud — no accounts, no feeds.'
  }
]

const STEPS = [
  {
    day: 'Day one',
    title: 'Start a plant',
    body: 'Add a cutting, give it a name, and take the first photo. That frame becomes day one of its story.'
  },
  {
    day: 'Every few days',
    title: 'Snap the progress',
    body: 'Open the camera and shoot. Your first photo fades in as a guide, so the framing stays consistent shot to shot.'
  },
  {
    day: 'Anytime',
    title: 'Slide to compare',
    body: 'Drag across the timeline to watch roots reach down and leaves unfurl — then export the Day 1 vs latest image to share.'
  },
  {
    day: 'When you’re ready',
    title: 'Play it back',
    body: 'Stitch the whole timeline into a smooth time-lapse video — weeks of growth in a few seconds.'
  }
]

/* Formerly the "Pro" upgrades — now included for everyone, free. */
const INCLUDED = [
  {
    icon: <Play />,
    title: 'Time-lapse videos',
    body: 'Turn any plant’s photos into a shareable growth video — no unlock required.'
  },
  {
    icon: <InfinityIcon />,
    title: 'Unlimited plants',
    body: 'Track your whole collection. There’s no five-plant cap, and never was a fee.'
  },
  {
    icon: <Sparkle />,
    title: 'Watermark-free exports',
    body: 'Every comparison image and video exports clean — share it your way.'
  }
]

export default function App() {
  useReveal()

  return (
    <div id="top">
      <SiteNav />

      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <Container fluid className="wrap">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow">Propagation, on a timeline</span>
              <h1 className="display">
                Watch it <span className="accent">root.</span>
              </h1>
              <p className="lede hero-sub">
                SproutSnap turns a windowsill full of cuttings into one quiet photo
                timeline. Snap today’s shot, scrub back to day one, and see every
                root and leaf fill in.
              </p>
              <div className="hero-actions">
                <AppStoreBadge />
                <a className="btn-ghost" href="#how">
                  See how it works <ArrowRight style={{ width: 18, height: 18 }} />
                </a>
              </div>
              <div className="hero-meta">
                <div className="stat">
                  <span className="num">Free</span>
                  <span className="lbl">to download &amp; start growing</span>
                </div>
                <div className="divider" />
                <div className="stat">
                  <span className="num">iCloud</span>
                  <span className="lbl">synced across your devices</span>
                </div>
                <div className="divider" />
                <div className="stat">
                  <span className="num">No paywall</span>
                  <span className="lbl">every feature, free — no Pro, no ads</span>
                </div>
              </div>
            </div>

            <div className="reveal">
              <CompareSlider />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Plant strip ---------------- */}
      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...PLANTS, ...PLANTS].map((p, i) => (
            <span className="strip-item" key={i}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ---------------- Features ---------------- */}
      <section id="features" className="section-pad">
        <Container fluid className="wrap">
          <div className="features-head reveal">
            <div>
              <span className="eyebrow">Everything in the free app</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem' }}>
                A grower’s tool, not
                <br />
                another photo dump.
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: '42ch' }}>
              SproutSnap is built around one idea: the same plant, framed the same
              way, over time. Everything here serves that.
            </p>
          </div>

          <div className="feature-grid">
            {FEATURES.map((f) => (
              <article
                className={`feature-card reveal ${f.wide ? 'wide' : ''}`}
                key={f.title}
              >
                <div>
                  <span className="icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                </div>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how" className="how section-pad">
        <Container fluid className="wrap">
          <Row className="g-4">
            <Col lg={5} className="reveal">
              <span className="eyebrow">How it works</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem' }}>
                Four steps,
                <br />
                then just show up.
              </h2>
              <p className="lede" style={{ marginTop: '1.4rem' }}>
                The whole loop takes seconds. The plant does the rest — you just keep
                showing up with the camera.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a className="btn-sprout" href="#download">
                  <Apple style={{ width: 18, height: 18 }} /> Get SproutSnap
                </a>
              </div>
            </Col>

            <Col lg={7}>
              <div className="timeline">
                {STEPS.map((s, i) => (
                  <div className="step reveal" key={s.title}>
                    <div className="step-node">{String(i + 1).padStart(2, '0')}</div>
                    <div className="step-body">
                      <span className="step-day">{s.day}</span>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ---------------- Free / no paywall ---------------- */}
      <section id="free" className="section-pad">
        <Container fluid className="wrap">
          <div className="pro-card reveal">
            <div className="pro-grid">
              <div>
                <span className="eyebrow">No paywall</span>
                <h2>
                  The whole greenhouse.
                  <br />
                  Free.
                </h2>
                <p style={{ color: 'rgba(234,243,230,0.78)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '40ch' }}>
                  Every feature is included from the first launch. No Pro tier, no
                  subscription, no in-app purchases, no plant tax — just room to grow.
                </p>
                <div className="pro-price-tag">
                  <span className="amount">£0</span>
                  <span className="note">· nothing to unlock, ever</span>
                </div>
                <div>
                  <a className="btn-chartreuse" href="#download">
                    Get SproutSnap <ArrowRight style={{ width: 18, height: 18 }} />
                  </a>
                </div>
              </div>

              <ul className="pro-list">
                {INCLUDED.map((p) => (
                  <li key={p.title}>
                    <span className="tick">{p.icon}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Download ---------------- */}
      <section id="download" className="section-pad download">
        <Container fluid className="wrap">
          <div className="download-inner reveal">
            <div className="frame" style={{ display: 'inline-block' }}>
              <span className="frame-corners" aria-hidden="true" />
              <img className="app-mark" src={appIcon} alt="SproutSnap app icon" />
            </div>
            <h2 className="display">Your windowsill deserves a timeline.</h2>
            <p>
              SproutSnap is free on iPhone — every feature, no in-app purchases. Start
              with your trickiest cutting and watch what happens over the next few weeks.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <AppStoreBadge />
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '1.4rem', color: 'var(--ink-soft)' }}>
              Requires iPhone on iOS 17 or later.
            </p>
          </div>
        </Container>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <Container fluid className="wrap">
          <div className="footer-inner">
            <a className="brand" href="#top">
              <img src={appIcon} alt="" />
              <span className="wordmark">
                Sprout<span className="snap">Snap</span>
              </span>
            </a>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#how">How it works</a>
              <a href="#free">Free</a>
              <a href="#download">Download</a>
            </div>
          </div>
          <div className="footer-note">
            <span>© 2026 SproutSnap · made for plant people.</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Leaf style={{ width: 16, height: 16, color: 'var(--sprout)' }} /> Grown on a
              windowsill.
            </span>
          </div>
        </Container>
      </footer>
    </div>
  )
}
