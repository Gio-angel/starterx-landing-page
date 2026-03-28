import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Play,
  Download,
  Layers,
  GripVertical,
  Timer,
  Terminal,
  Zap,
  Settings,
  Monitor,
  Menu,
  Volume2,
  VolumeX,
  PieChart,
  X,
  ShieldAlert,
  Send,
  Heart,
} from 'lucide-react'
import logo from './assets/starterx-logo.ico'
import bannerGif from './assets/banner-gif.gif'
import createGif from './assets/create-gif.gif'
import addAppsGif from './assets/addapps-gif.gif'
import runGif from './assets/run-gif.gif'
import './App.css'

const YOUTUBE_VIDEO_ID = 'qwNZsc8DGcs'
const DOWNLOAD_URL = 'https://github.com/Gio-angel/starterX-releases/releases/latest/download/starterX.Installer.exe'

// ── Replace with your Web3Forms access key (see setup steps below) ──
const WEB3FORMS_KEY = '8de851bc-4c55-4744-a875-063bad661710'

function App() {
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [feedbackError, setFeedbackError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [videoActive, setVideoActive] = useState(false)
  const [muted, setMuted] = useState(true)
  const previewRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVideoActive(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Load YouTube IFrame API and create player when video becomes active
  useEffect(() => {
    if (!videoActive) return

    function createPlayer() {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
      })
    }

    if (window.YT && window.YT.Player) {
      createPlayer()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      window.onYouTubeIframeAPIReady = createPlayer
    }
  }, [videoActive])

  const toggleMute = useCallback(() => {
    const p = playerRef.current
    if (!p) return
    if (muted) {
      p.unMute()
      p.setVolume(25)
    } else {
      p.mute()
    }
    setMuted(!muted)
  }, [muted])

  async function handleFeedback(e) {
    e.preventDefault()
    setSubmitting(true)
    setFeedbackError('')

    const form = e.target
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: 'starterX Landing Page Feedback',
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setFeedbackSent(true)
      } else {
        setFeedbackError('Something went wrong. Please try again.')
      }
    } catch {
      setFeedbackError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src={logo} alt="starterX logo" />
            <span className="brand-text">starter<span className="gradient-cycle">X</span></span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#feedback">Send Feedback</a></li>
            <li>
              <a href={DOWNLOAD_URL} onClick={(e) => { e.preventDefault(); setShowDownloadModal(true); window.open(DOWNLOAD_URL, '_blank'); }} className="nav-cta">
                Download
              </a>
            </li>
          </ul>

          <button className="nav-toggle" aria-label="Open menu">
            <Menu size={24} color="#334155" />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <img src={bannerGif} className="hero-bg-gif" alt="" aria-hidden="true" />
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Now available for Windows
        </div>

        <h1>
          Launch your entire workflow{' '}
          <span className="gradient-cycle">in one click</span>
        </h1>

        <p>
          Create app launching scenarios, block by block. The scenario is automatically saved and ready-to-launch whenever YOU want.
          One button press and your whole workstation fires up — every time.
        </p>

        <div className="hero-buttons">
          <a href={DOWNLOAD_URL} onClick={(e) => { e.preventDefault(); setShowDownloadModal(true); window.open(DOWNLOAD_URL, '_blank'); }} className="btn-primary">
            <Download size={18} />
            Download for Free
          </a>
          <a href="#how-it-works" className="btn-secondary">
            <Play size={18} />
            See How It Works
          </a>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section section-alt" id="features">
        <div className="section-label">
          <span className="gradient-text">Features</span>
        </div>
        <h2>Everything you need to automate your setup</h2>
        <p>
          Stop wasting the first 10 minutes of every session launching apps
          and typing commands.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Layers size={24} />
            </div>
            <h3>Custom Scenarios</h3>
            <p>
              Create different scenarios for work, gaming, streaming, or
              anything else — each with its own set of apps and commands.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <GripVertical size={24} />
            </div>
            <h3>Drag & Drop Apps</h3>
            <p>
              Simply drag application shortcuts into your scenario or browse
              and pick them manually from your system.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Timer size={24} />
            </div>
            <h3>Custom Delays</h3>
            <p>
              Add precise delays between app launches so heavier software
              has time to boot before the next one starts.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Terminal size={24} />
            </div>
            <h3>CMD Commands</h3>
            <p>
              Run terminal commands as part of your scenario — cd into a
              project, npm run dev, git pull, and more.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={24} />
            </div>
            <h3>One-Click Launch</h3>
            <p>
              Hit a single button and watch your entire workflow fire up
              automatically, in the right order, every time.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <PieChart size={24} />
            </div>
            <h3>Insights</h3>
            <p>
              See how you use your workflows with a visual pie chart —
              track which scenarios you launch most and spot your habits.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Settings size={24} />
            </div>
            <h3>Full Control</h3>
            <p>
              Reorder items, adjust delays, toggle entries on or off —
              fine-tune every scenario to match your exact needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" id="how-it-works">
        <div className="section-label">
          <span className="gradient-text">How It Works</span>
        </div>
        <h2>Up and running in 3 steps</h2>
        <p>No config files. No scripting knowledge. Just drag, drop, and go.</p>

        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-content">
              <div className="step-number">1</div>
              <h3>Create a Scenario</h3>
              <p>
                Name your new scenario — "Morning Dev", "Gaming Night", "Design
                Work" — whatever fits your routine. It is automatically saved and ready in the starterX app.
              </p>
            </div>
            <div className="step-media">
              <img src={createGif} alt="Creating a scenario in starterX" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-content">
              <div className="step-number">2</div>
              <h3>Add Apps & Commands</h3>
              <p>
                Drag in app shortcuts, add terminal commands, and set
                delays between them. Build the perfect launch sequence. You can edit a scenario whenever you want.
              </p>
            </div>
            <div className="step-media">
              <img src={addAppsGif} alt="Adding apps and commands in starterX" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-content">
              <div className="step-number">3</div>
              <h3>Hit Launch</h3>
              <p>
                One click and everything opens in sequence — apps, terminals,
                commands. Your workstation is ready in seconds.
              </p>
            </div>
            <div className="step-media">
              <img src={runGif} alt="Launching a scenario in starterX" />
            </div>
          </div>
        </div>
      </section>

      {/* ── APP PREVIEW / SCREENSHOT ── */}
      <div className="section-alt">
        <section className="preview-section">
          <div className="section-label">
            <span className="gradient-text">See It In Action</span>
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: 'var(--gray-900)', letterSpacing: -1, marginBottom: 16 }}>
            A clean interface built for speed
          </h2>
          <p style={{ fontSize: 18, color: 'var(--gray-500)', maxWidth: 550, margin: '0 auto' }}>
            Designed to stay out of your way — set it up once, launch forever.
          </p>

          <div className="preview-media" ref={previewRef}>
            {videoActive ? (
              <>
                <div id="yt-player" />
                <button
                  className="volume-toggle"
                  onClick={toggleMute}
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                >
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  {muted ? 'Unmute' : 'Mute'}
                </button>
              </>
            ) : (
              <div className="placeholder-label">
                <Monitor size={24} />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── USE CASES ── */}
      <section className="section" id="use-cases">
        <div className="section-label">
          <span className="gradient-text">Who It's For</span>
        </div>
        <h2>Built for anyone with a routine</h2>
        <p>
          Whether you write code, play games, or just want a faster start to
          your day.
        </p>

        <div className="usecases-grid">
          <div className="usecase-card">
            <div className="usecase-emoji">&#x1F468;&#x200D;&#x1F4BB;</div>
            <h3>Developers</h3>
            <p>
              Open VS Code, run your dev server, launch the browser, pull the
              latest changes — all in one click, every morning.
            </p>
          </div>

          <div className="usecase-card">
            <div className="usecase-emoji">&#x1F3AE;</div>
            <h3>Gamers</h3>
            <p>
              Launch Steam, Discord, your game launcher, performance overlay,
              and streaming software — ready to play instantly.
            </p>
          </div>

          <div className="usecase-card">
            <div className="usecase-emoji">&#x1F9D1;&#x200D;&#x1F3A8;</div>
            <h3>Creators & Everyday Users</h3>
            <p>
              Open Figma, Slack, Spotify, your browser tabs — set up your
              creative workspace or daily routine without thinking.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="download">
        <h2>
          Ready to launch{' '}
          <span className="gradient-text">smarter</span>?
        </h2>
        <p>
          Download starterX for free and take back the first 10 minutes of
          your day.
        </p>
        <div className="cta-buttons">
          <a href={DOWNLOAD_URL} onClick={(e) => { e.preventDefault(); setShowDownloadModal(true); window.open(DOWNLOAD_URL, '_blank'); }} className="btn-primary">
            <Download size={18} />
            Download for Windows
          </a>
          <a href="https://github.com/Gio-angel/starterX-releases" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View on GitHub
          </a>
        </div>
      </section>

      {/* ── FEEDBACK FORM ── */}
      <section className="feedback-section" id="feedback">
        <div className="feedback-inner">
          <div className="feedback-byline">
            <Heart size={14} />
            Made by developers, for developers
          </div>
          <h2>We genuinely need your feedback</h2>
          <p className="feedback-subtitle">
            starterX is built by a small team that values your time as much as you do.
            Whether you're a developer automating your morning routine or a gamer
            streamlining your setup — tell us how we can do better. Every response
            is read by a real person.
          </p>

          {feedbackSent ? (
            <div style={{ padding: 40, color: 'var(--blue-400)', fontSize: 18, fontWeight: 600 }}>
              Thank you for your feedback — it means a lot to us.
            </div>
          ) : (
            <form className="feedback-form" onSubmit={handleFeedback}>
              <div className="feedback-row">
                <div className="feedback-field">
                  <label htmlFor="fb-name">Name</label>
                  <input id="fb-name" name="name" type="text" placeholder="Your name" />
                </div>
                <div className="feedback-field">
                  <label htmlFor="fb-email">Email</label>
                  <input id="fb-email" name="email" type="email" placeholder="you@example.com" />
                </div>
              </div>

              <div className="feedback-field">
                <label htmlFor="fb-role">I am a...</label>
                <select id="fb-role" name="role" defaultValue="">
                  <option value="" disabled>Select your profile</option>
                  <option value="developer">Developer</option>
                  <option value="gamer">Gamer</option>
                  <option value="creator">Creator / Designer</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="feedback-field">
                <label htmlFor="fb-message">Your feedback</label>
                <textarea
                  id="fb-message"
                  name="message"
                  placeholder="What do you like? What's missing? What would make starterX better for you?"
                  required
                />
              </div>

              {feedbackError && (
                <p style={{ color: '#f87171', fontSize: 14, textAlign: 'center' }}>
                  {feedbackError}
                </p>
              )}

              <button type="submit" className="feedback-submit" disabled={submitting}>
                <Send size={16} />
                {submitting ? 'Sending...' : 'Send Feedback'}
              </button>

              <p className="feedback-note">
                No spam. No marketing emails. Just a genuine thank you from our team.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={logo} alt="starterX" />
            <span className="brand-text">starter<span className="gradient-cycle">X</span></span>
          </div>

          <span className="footer-text">
            &copy; {new Date().getFullYear()} starterX. All rights reserved.
          </span>

          <ul className="footer-links">
            <li><a href="https://github.com/Gio-angel/starterX-releases" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>

      {/* ── DOWNLOAD MODAL ── */}
      {showDownloadModal && (
        <div className="modal-overlay" onClick={() => setShowDownloadModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDownloadModal(false)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-icon">
              <Download size={28} />
            </div>
            <h3>Thank you for downloading starterX!</h3>
            <p>Your download should start automatically.</p>
            <div className="modal-warning">
              <ShieldAlert size={18} />
              <div>
                <strong>Windows SmartScreen notice</strong>
                <p>
                  Windows may show a "Windows protected your PC" warning because the app isn't code-signed yet.
                  Click <strong>"More info"</strong> then <strong>"Run anyway"</strong> to install safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
