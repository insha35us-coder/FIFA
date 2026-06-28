import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, getProducts } from '../lib/products'
import { MATCHES } from '../lib/matches'

const heroProducts = getProducts(['firestick4k', 'smarttv', 'jersey', 'ps5pad'])

export default function Home() {
  return (
    <>
      <Head>
        <title>FIFA World Cup 2026 — Live Streams, Official Jerseys & Gear</title>
        <meta name="description" content="Everything for FIFA World Cup 2026. Watch live, buy official jerseys, streaming devices, footballs, and gaming gear — fast Amazon delivery worldwide." />
        <meta name="keywords" content="FIFA World Cup 2026, watch FIFA live, official jersey, streaming device, FIFA gear" />
        <meta property="og:title" content="FIFA World Cup 2026 — Live, Gear & Jerseys" />
        <meta property="og:description" content="Stream every match. Buy official gear. Your #1 FIFA fan destination." />
        <link rel="canonical" href="https://fifa-pro-nine.vercel.app" />
      </Head>

      <Nav />

      <div className="hero">
        <h1>FIFA World Cup 2026 — Everything You Need</h1>
        <p>Watch every match live. Buy official jerseys, gear, and streaming devices with fast Amazon delivery.</p>
      </div>

      <div className="container">
        <section className="section">
          <h2 className="section-title">Top Picks for FIFA Fans</h2>
          <p className="disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          <div className="product-grid">
            {heroProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Upcoming Matches</h2>
          <div className="match-grid">
            {MATCHES.map(m => (
              <Link key={m.slug} href={`/match/${m.slug}`} className="match-card">
                <div className="match-competition">{m.competition}</div>
                <div className="match-teams">{m.home} vs {m.away}</div>
                <div className="match-date">{m.date} · {m.time}</div>
                <div className="match-arrow">Watch guide + gear →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Browse Guides</h2>
          <div className="match-grid">
            <Link href="/guides/how-to-watch-fifa-live" className="match-card">
              <div className="match-competition">Streaming Guide</div>
              <div className="match-teams">How to Watch FIFA Live</div>
              <div className="match-date">Fire Stick · Smart TV · 4K Setup</div>
              <div className="match-arrow">Read guide →</div>
            </Link>
            <Link href="/guides/best-fifa-jerseys" className="match-card">
              <div className="match-competition">Official Gear</div>
              <div className="match-teams">Best FIFA Jerseys 2026</div>
              <div className="match-date">Official · Fast Delivery · All Teams</div>
              <div className="match-arrow">Shop jerseys →</div>
            </Link>
            <Link href="/guides/fifa-gaming-setup" className="match-card">
              <div className="match-competition">Gaming Setup</div>
              <div className="match-teams">Ultimate FIFA Gaming Setup</div>
              <div className="match-date">PS5 · Xbox · Controllers · Headsets</div>
              <div className="match-arrow">Build your setup →</div>
            </Link>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2026 FIFA Pro · <a href="/affiliate-disclosure">Affiliate Disclosure</a> · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
