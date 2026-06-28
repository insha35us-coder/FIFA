import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../lib/products'
import { MATCHES } from '../../lib/matches'

const matchProducts = getProducts(['firestick4k', 'jersey', 'ball', 'hdmi'])

export async function getStaticPaths() {
  return {
    paths: MATCHES.map(m => ({ params: { slug: m.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const match = MATCHES.find(m => m.slug === params.slug)
  if (!match) return { notFound: true }
  return { props: { match } }
}

export default function MatchPage({ match }) {
  const { home, away, date, time, competition, slug } = match
  const canonical = `https://fifa-pro-nine.vercel.app/match/${slug}`

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": `${home} vs ${away}`,
    "startDate": date,
    "location": { "@type": "Place", "name": competition },
    "competitor": [
      { "@type": "SportsTeam", "name": home },
      { "@type": "SportsTeam", "name": away }
    ]
  })

  return (
    <>
      <Head>
        <title>{home} vs {away} Live — Watch, Buy Jersey & Gear | {competition}</title>
        <meta name="description" content={`Watch ${home} vs ${away} live on ${date}. Stream in 4K, buy official jerseys and football gear. Fast Amazon delivery.`} />
        <meta name="keywords" content={`${home} vs ${away}, ${home} jersey, ${away} jersey, watch ${competition} live, FIFA streaming`} />
        <meta property="og:title" content={`${home} vs ${away} — ${competition}`} />
        <meta property="og:description" content={`Watch ${home} vs ${away} live on ${date}. Official jerseys, streaming devices and gear on Amazon.`} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      </Head>

      <Nav />

      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> › <Link href="/matches">Matches</Link> › {home} vs {away}
        </div>

        <div className="match-header">
          <div className="competition-tag">{competition}</div>
          <h1 className="match-title">{home} vs {away}</h1>
          <div className="match-when">{date} · {time}</div>
        </div>

        <section className="section">
          <h2 className="section-title">How to Watch {home} vs {away} Live</h2>
          <div className="guide-content">
            <p>
              Don't miss a second of {home} vs {away}. The easiest way to stream this {competition} match 
              live is with an Amazon Fire TV Stick — plug it in, open your streaming app, and watch in 
              4K Ultra HD from your couch.
            </p>
            <p>
              The match kicks off on <strong>{date} at {time}</strong>. Set a reminder and make sure 
              your streaming device is ready before kick-off.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Get Ready — Recommended Gear</h2>
          <p className="disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          <div className="product-grid">
            {matchProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>When does {home} vs {away} start?</h3>
            <p>The match kicks off on {date} at {time}.</p>
          </div>
          <div className="faq-item">
            <h3>How can I watch {home} vs {away} live online?</h3>
            <p>Use an Amazon Fire TV Stick 4K Max to stream the match in 4K Ultra HD. Connect to your TV via HDMI and open your streaming subscription app.</p>
          </div>
          <div className="faq-item">
            <h3>Where can I buy {home} or {away} official jersey?</h3>
            <p>Official FIFA World Cup 2026 jerseys are available on Amazon with fast delivery. See our picks above.</p>
          </div>
          <div className="faq-item">
            <h3>What TV is best for watching FIFA 2026?</h3>
            <p>Any 4K Smart TV with HDR support gives you the best experience. The Amazon Fire TV 43-inch 4K is an excellent value option with built-in streaming.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">More Matches</h2>
          <div className="match-grid">
            {MATCHES.filter(m => m.slug !== slug).slice(0, 3).map(m => (
              <Link key={m.slug} href={`/match/${m.slug}`} className="match-card">
                <div className="match-competition">{m.competition}</div>
                <div className="match-teams">{m.home} vs {m.away}</div>
                <div className="match-date">{m.date}</div>
                <div className="match-arrow">Watch guide →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2026 FIFA Pro · <a href="/affiliate-disclosure">Affiliate Disclosure</a> · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
