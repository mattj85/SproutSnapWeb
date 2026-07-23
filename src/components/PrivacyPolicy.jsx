import { useEffect } from 'react'
import { Container } from 'reactstrap'
import appIcon from '../assets/app-icon.png'
import { ArrowRight, Leaf, Lock, Cloud, Camera, Images, Drop } from './Icons.jsx'

/* Standalone Privacy Policy page for the App Store listing.
   Rendered by App.jsx when the path is /privacy. Everything here is
   styled with the shared design tokens in index.css (.legal-* classes).

   The facts below mirror the SproutSnap iOS app (../SproutSnap):
   SwiftData on-device store, sync only to the user's own private
   iCloud (CloudKit), opt-in Photos album, local water reminders,
   optional Face ID lock — and no accounts, analytics, ads, in-app
   purchases, third-party SDKs, or tracking of any kind. */

const LAST_UPDATED = '23 July 2026'
const CONTACT_EMAIL = 'mattjon@icloud.com'

export default function PrivacyPolicy({ onNavigate = () => {} }) {
  useEffect(() => {
    document.title = 'Privacy Policy — SproutSnap'
    return () => {
      document.title = 'SproutSnap — watch it root'
    }
  }, [])

  const goHome = (e) => {
    e.preventDefault()
    onNavigate('/')
  }

  return (
    <div id="top" className="legal-page">
      {/* ---------- Minimal top bar ---------- */}
      <header className="legal-top">
        <Container fluid className="wrap">
          <div className="legal-top-inner">
            <a className="brand" href="/" onClick={goHome}>
              <img src={appIcon} alt="" />
              <span className="wordmark">
                Sprout<span className="snap">Snap</span>
              </span>
            </a>
            <a className="btn-ghost" href="/" onClick={goHome}>
              Back to site <ArrowRight style={{ width: 18, height: 18 }} />
            </a>
          </div>
        </Container>
      </header>

      {/* ---------- Header ---------- */}
      <section className="legal-hero">
        <Container fluid className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 className="display legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated {LAST_UPDATED}</p>
          <p className="lede legal-lede">
            SproutSnap is built to keep your plant timelines yours. Your photos,
            notes, and reminders live on your device and sync only through your
            own private iCloud. We have no servers, no accounts, and no way to
            see your data.
          </p>
        </Container>
      </section>

      <Container fluid className="wrap">
        <div className="legal">
          {/* ---------- At a glance ---------- */}
          <div className="legal-summary">
            <h2>The short version</h2>
            <ul className="legal-summary-list">
              <li>
                <span className="tick"><Lock /></span>
                <div>
                  <strong>No accounts, no sign-up.</strong> You never create an
                  account or give us an email, name, or password.
                </div>
              </li>
              <li>
                <span className="tick"><Cloud /></span>
                <div>
                  <strong>Your data stays yours.</strong> Everything is stored on
                  your device and, if you enable it, synced through your personal
                  iCloud — which only you can access.
                </div>
              </li>
              <li>
                <span className="tick"><Leaf /></span>
                <div>
                  <strong>No tracking, no analytics, no ads.</strong> The app
                  contains no third-party SDKs, no advertising, and no usage
                  tracking of any kind.
                </div>
              </li>
              <li>
                <span className="tick"><Drop /></span>
                <div>
                  <strong>Nothing leaves your control.</strong> We operate no
                  servers and never receive, collect, or sell your information.
                </div>
              </li>
            </ul>
          </div>

          {/* ---------- Who we are ---------- */}
          <section className="legal-section">
            <h2>Who this policy covers</h2>
            <p>
              This Privacy Policy explains how the SproutSnap iOS app (“SproutSnap”,
              “the app”, “we”, “us”) handles your information. It applies to the app
              and to this website. By using SproutSnap you agree to the practices
              described here.
            </p>
          </section>

          {/* ---------- What the app stores ---------- */}
          <section className="legal-section">
            <h2>What SproutSnap stores</h2>
            <p>
              SproutSnap keeps a private record of the plants you track, entirely on
              your device. This can include:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Plant details</strong> — the names, start dates, and
                water-change schedules you enter.
              </li>
              <li>
                <strong>Progress photos</strong> — the images you capture or import
                for each plant’s timeline.
              </li>
              <li>
                <strong>Notes</strong> — any free-text notes you attach to a photo.
              </li>
              <li>
                <strong>App preferences</strong> — small settings such as your dark-mode,
                Face&nbsp;ID, and “save to Photos” choices.
              </li>
            </ul>
            <p>
              This information is stored locally using Apple’s on-device database.
              We do not have a copy of it and cannot access it.
            </p>
          </section>

          {/* ---------- iCloud ---------- */}
          <section className="legal-section">
            <h2>
              <span className="legal-ico"><Cloud /></span> iCloud sync
            </h2>
            <p>
              If you are signed in to iCloud, SproutSnap syncs your plants, photos,
              and notes across your own devices using Apple’s CloudKit in your
              <strong> private iCloud database</strong>. This data is tied to your
              Apple ID, governed by{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple’s Privacy Policy
              </a>
              , and accessible only to you. The developer of SproutSnap has no
              access to your iCloud data. If iCloud is unavailable, the app simply
              stores everything locally instead.
            </p>
          </section>

          {/* ---------- Photos ---------- */}
          <section className="legal-section">
            <h2>
              <span className="legal-ico"><Images /></span> Photos &amp; camera
            </h2>
            <p>
              SproutSnap uses your camera to capture progress photos, and can read
              from your photo library so you can import existing shots into a
              timeline. When you import a photo, the app reads its original capture
              date so it can be placed in the right spot on the timeline.
            </p>
            <p>
              If you turn on <strong>“Save to Photos”</strong> (off by default),
              captures are also saved to a dedicated “SproutSnap” album in your
              Photos library. The app requests add-only permission for this and
              cannot read the rest of your library. All camera and photo access is
              handled through iOS permission prompts that you control, and the
              resulting images are used only inside the app.
            </p>
          </section>

          {/* ---------- Notifications ---------- */}
          <section className="legal-section">
            <h2>
              <span className="legal-ico"><Drop /></span> Reminders &amp; notifications
            </h2>
            <p>
              Fresh-water reminders are scheduled as <strong>local notifications</strong>{' '}
              on your device. They are generated on-device based on the intervals you
              set — no reminder data is sent to us or to any server. You can disable
              them at any time in the app or in iOS Settings.
            </p>
          </section>

          {/* ---------- Face ID ---------- */}
          <section className="legal-section">
            <h2>
              <span className="legal-ico"><Lock /></span> Face ID &amp; app lock
            </h2>
            <p>
              You can optionally lock your timelines behind Face&nbsp;ID, Touch&nbsp;ID,
              or your device passcode. This authentication is handled entirely by
              iOS. SproutSnap never sees, collects, or stores your biometric data.
            </p>
          </section>

          {/* ---------- What we DON'T collect ---------- */}
          <section className="legal-section">
            <h2>What we don’t do</h2>
            <p>To be completely clear, SproutSnap does <strong>not</strong>:</p>
            <ul className="legal-list">
              <li>require an account, email address, or password;</li>
              <li>run any analytics, tracking, or advertising SDKs;</li>
              <li>include third-party libraries that collect data;</li>
              <li>collect device identifiers, contacts, or location;</li>
              <li>contain in-app purchases or subscriptions — the app is fully free;</li>
              <li>send your photos, notes, or plant data to us or anyone else.</li>
            </ul>
          </section>

          {/* ---------- Sharing ---------- */}
          <section className="legal-section">
            <h2>Sharing content you create</h2>
            <p>
              SproutSnap lets you export a Day&nbsp;1-vs-today comparison image or a
              time-lapse video and share it through the standard iOS share sheet.
              These files are created on your device, and any sharing is entirely
              initiated by you. Once you share content with another app or service,
              that service’s own privacy terms apply.
            </p>
          </section>

          {/* ---------- Your control ---------- */}
          <section className="legal-section">
            <h2>Your control over your data</h2>
            <p>
              Because your data lives on your device and in your own iCloud, you are
              always in control of it:
            </p>
            <ul className="legal-list">
              <li>Edit or delete any plant, photo, or note directly in the app.</li>
              <li>
                Delete the app to remove its on-device data; manage or remove its
                iCloud data from iOS Settings → your name → iCloud.
              </li>
              <li>
                Revoke camera, photos, or notification access anytime in iOS Settings.
              </li>
            </ul>
          </section>

          {/* ---------- Children ---------- */}
          <section className="legal-section">
            <h2>Children</h2>
            <p>
              SproutSnap is a general-audience app and does not knowingly collect any
              personal information from anyone, including children. Because the app
              collects no data for us, there is nothing for us to gather from a child
              or anyone else.
            </p>
          </section>

          {/* ---------- Website ---------- */}
          <section className="legal-section">
            <h2>This website</h2>
            <p>
              This marketing website uses a privacy-friendly, cookieless analytics
              tool (Umami) to count anonymous, aggregate visits. It does not use
              cookies, does not track you across sites, and does not collect
              personally identifying information. This is separate from the app,
              which contains no analytics at all.
            </p>
          </section>

          {/* ---------- Changes ---------- */}
          <section className="legal-section">
            <h2>Changes to this policy</h2>
            <p>
              If our practices change, we’ll update this page and revise the “last
              updated” date above. Significant changes will be reflected here before
              they take effect.
            </p>
          </section>

          {/* ---------- Contact ---------- */}
          <section className="legal-section">
            <h2>Contact</h2>
            <p>
              Questions about this policy or your privacy? Get in touch at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <div className="legal-cta">
            <a className="btn-sprout" href="/" onClick={goHome}>
              <Leaf style={{ width: 18, height: 18 }} /> Back to SproutSnap
            </a>
          </div>
        </div>
      </Container>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <Container fluid className="wrap">
          <div className="footer-note" style={{ marginTop: 0, borderTop: 'none', paddingTop: 0 }}>
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
