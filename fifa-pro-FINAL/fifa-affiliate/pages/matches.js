import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import { MATCHES } from '../lib/matches'

export default function Matches() {
  return (
    <>
      <Head>
        <title>FIFA World Cup 2026 Match Schedule — All Fixtures & Live Guide</title>
        <meta name="description" content="Complete FIFA World Cup 2026 schedule. Click any match for live streaming guide, official jerseys, and gear — available on Amazon." />
      </Head>
      <Nav />
      <div style={{ background: '#006400', padding: '2rem 1.25rem', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>FIFA World Cup 2026 — Full Schedule</h1>
        <p style={{ opacity: 0.88, marginTop: '0.5rem' }}>Click any match for the live streaming guide and official gear.</p>
      </div>
      <div className="container">
        <section className="section">
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
      </div>
      <footer className="footer">
        <p>© 2026 FIFA Pro · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
