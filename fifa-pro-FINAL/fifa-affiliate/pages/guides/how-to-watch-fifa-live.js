import Head from 'next/head'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../lib/products'

const products = getProducts(['firestick4k', 'firestick', 'smarttv', 'hdmi'])

export default function WatchGuide() {
  return (
    <>
      <Head>
        <title>How to Watch FIFA World Cup 2026 Live Online — Complete Guide</title>
        <meta name="description" content="Watch every FIFA World Cup 2026 match live online. Best streaming devices, setup guide, and where to watch — updated for 2026." />
        <link rel="canonical" href="https://fifa-pro-nine.vercel.app/guides/how-to-watch-fifa-live" />
      </Head>
      <Nav />
      <div style={{ background: '#006400', padding: '2.5rem 1.25rem', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>How to Watch FIFA 2026 Live</h1>
        <p style={{ opacity: 0.88 }}>Best streaming devices, setup steps, and gear — all on Amazon.</p>
      </div>
      <div className="container">
        <div className="guide-content section">
          <h2>Step 1 — Get a Streaming Device</h2>
          <p>
            The Amazon Fire TV Stick 4K Max is the easiest, most affordable way to stream FIFA World Cup 2026 
            live from any TV. It supports 4K Ultra HD, HDR10+, and Dolby Vision. Setup takes 5 minutes — 
            plug into HDMI, connect to WiFi, open your streaming app.
          </p>

          <h2>Step 2 — Connect with a Quality HDMI Cable</h2>
          <p>
            For the best picture quality, use an HDMI 2.1 cable. This ensures your 4K stream reaches 
            your TV without signal loss — especially important during night matches with dark scenes.
          </p>

          <h2>Step 3 — Choose Your Streaming Service</h2>
          <p>
            Depending on your country, FIFA 2026 is available on Peacock, ESPN+, HBO Max, DAZN, and others. 
            Your Fire TV Stick gives access to all of them from one remote.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">Everything You Need (Amazon Fast Delivery)</h2>
          <p className="disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          <div className="product-grid">
            {products.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Is the Fire TV Stick 4K enough for FIFA in 4K?</h3>
            <p>Yes. The Fire TV Stick 4K Max supports 4K Ultra HD, HDR10+, and Dolby Vision — the best possible picture for FIFA matches.</p>
          </div>
          <div className="faq-item">
            <h3>Do I need a subscription to watch FIFA 2026?</h3>
            <p>Yes, a streaming subscription is required. Options vary by country. Your Fire TV Stick gives access to every major streaming service.</p>
          </div>
          <div className="faq-item">
            <h3>Can I watch FIFA 2026 on my phone?</h3>
            <p>Yes — but for the best experience, use a Fire TV Stick connected to a large TV. The difference is significant for live sports.</p>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>© 2026 FIFA Pro · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
