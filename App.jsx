import { Video as Youtube, Rss, Play, Mail, Film, Radio, ExternalLink, Mic2, Newspaper } from 'lucide-react'
import logo from './assets/myfive-logo.png'

const episodes = [
  {
    title: "Dan Vado's My Five Minutes Podcast Promotional Reel",
    date: 'March 23, 2026',
    duration: '1 min',
    type: 'Video-first promo reel',
    description:
      'A quick introduction to the tone, purpose, and pace of My Five Minutes — a short-form show about creativity, culture, and the people who keep making things anyway.',
    link: 'https://my-five-minutes-short.captivate.fm/episode/dan-vadosmy-five-minutes-podcast-promotional-reel',
  },
]

const listenLinks = [
  { label: 'Watch on YouTube', icon: Youtube, href: '#video', primary: true },
  { label: 'Apple Podcasts', icon: Radio, href: '#' },
  { label: 'Spotify', icon: Play, href: '#' },
  { label: 'RSS Feed', icon: Rss, href: 'https://feeds.captivate.fm/my-five-minutes-short/' },
]

function App() {
  return (
    <main>
      <section className="hero">
        <div className="shape shape-orange" />
        <div className="shape shape-yellow" />
        <div className="shape slash-one" />
        <div className="shape slash-two" />

        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="My Five Minutes logo" />
            <div>
              <p>Dan Vado&apos;s</p>
              <h1>My Five Minutes</h1>
            </div>
          </div>
          <a className="button yellow desktop-only" href="#video">Watch First</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="kicker"><Mic2 size={18} /> Video-forward podcast</div>
            <h2>Short thoughts. Big creative nerve.</h2>
            <p className="lead">
              Short, sharp episodes about creativity, culture, publishing, music, comics, and the stubborn belief that making things still matters.
            </p>
            <div className="actions">
              <a className="button orange" href="#video"><Youtube size={20} /> Watch the video podcast</a>
              <a className="button outline" href="#listen">Listen instead <ExternalLink size={16} /></a>
            </div>
          </div>

          <div className="poster-card">
            <img src={logo} alt="My Five Minutes with Dan Vado" />
          </div>
        </div>
      </section>

      <section id="video" className="section two-col">
        <div className="callout yellow-card">
          <Film size={44} />
          <h2>Start with the video.</h2>
          <p>
            Some ideas work better when you can see the person saying them. Watch the video version for the full delivery, or listen anywhere you get podcasts when you only have five minutes to spare.
          </p>
          <a className="button black" href="#">Open YouTube</a>
        </div>

        <div>
          <p className="eyebrow">Actual feed episode</p>
          {episodes.map((episode) => (
            <article className="episode" key={episode.title}>
              <div className="episode-icon"><Youtube size={52} /></div>
              <div>
                <div className="episode-meta">
                  <span>{episode.date}</span><span>•</span><span>{episode.duration}</span><span>•</span><span>{episode.type}</span>
                </div>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <a className="button cream" href={episode.link}>Play episode <ExternalLink size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="section about-grid">
          <div>
            <p className="eyebrow red">The show</p>
            <h2>Five minutes is enough.</h2>
          </div>
          <div className="about-text">
            <p>
              My Five Minutes is built for people who like their creative talk direct, personal, and over before it wears out its welcome. Each episode starts with one idea and follows it for five focused minutes.
            </p>
            <p>
              Expect thoughts on making things, getting things wrong, publishing, comics, music, culture, small business, and the useful trouble that comes from living a creative life in public.
            </p>
          </div>
        </div>
      </section>

      <section id="listen" className="section link-grid">
        {listenLinks.map((item) => {
          const Icon = item.icon
          return (
            <a href={item.href} className={item.primary ? 'listen-card primary' : 'listen-card'} key={item.label}>
              <Icon size={34} />
              <h3>{item.label}</h3>
              <p>Subscribe / follow</p>
            </a>
          )
        })}
      </section>

      <section className="section bottom-grid">
        <div className="info-card cream-card">
          <Newspaper size={38} />
          <h2>About Dan</h2>
          <p>
            Dan Vado is the founder of SLG Publishing and Art Boutiki, and has spent decades around comics, books, music, small business, and independent culture. My Five Minutes is where those stories, opinions, mistakes, and creative lessons get boiled down to one idea at a time.
          </p>
        </div>
        <div className="info-card yellow-card">
          <Mail size={38} />
          <h2>Get the next five minutes.</h2>
          <p>
            Get new episodes, video links, SLG Publishing notes, Art Boutiki updates, and occasional creative dispatches without having to depend on an algorithm.
          </p>
          <form className="signup" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Email address" />
            <button>Sign up</button>
          </form>
        </div>
      </section>

      <footer>
        © 2026 My Five Minutes • An SLG Publishing podcast • Video-first, audio-friendly
      </footer>
    </main>
  )
}

export default App
