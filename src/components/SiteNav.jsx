import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { Apple, Menu } from './Icons.jsx'
import appIcon from '../assets/app-icon.png'

const links = [
  ['Features', '#features'],
  ['How it works', '#how'],
  ['Free', '#free']
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-shell ${scrolled ? 'scrolled' : ''} ${open ? 'mobile-open' : ''}`}>
      <Container fluid className="wrap">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <img src={appIcon} alt="" />
            <span className="wordmark">
              Sprout<span className="snap">Snap</span>
            </span>
          </a>

          <nav>
            <ul className="nav-links">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <a className="btn-sprout" href="#download">
              <Apple style={{ width: 18, height: 18 }} />
              Download
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <Menu style={{ width: 26, height: 26 }} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
