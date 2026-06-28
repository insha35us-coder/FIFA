import Head from 'next/head'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../lib/products'

const products = getProducts(['ps5pad', 'headset', 'firestick4k', 'smarttv'])

export default function GamingGuide() {
  return (
    <>
      <Head>
        <title>Ultimate FIFA 26 Gaming Setup 2026 — PS5, Controller & Headset</title>
        <meta name="description" content="Build the ultimate FIFA 26 gaming setup. Best PS5 controller, gaming headset, and TV for FIFA — all available on Amazon with fast delivery." />
        <link rel="canonical" href="https://fifa-pro-nine.vercel.app/guides/fifa-gaming-setup" />
      </Head>
      <Nav />
      <div style={{ background: '#006400', padding: '2.5rem 1.25rem', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>Ultimate FIFA Gaming Setup</h1>
        <p style={{ opacity: 0.88 }}>PS5, controllers, headsets — everything to dominate FIFA 26.</p>
      </div>
      <div className="container">
        <div className="guide-content section">
          <h2>The FIFA 26 Gaming Setup Tier List</h2>
          <p>
            To play FIFA 26 at its best, you need three things: a responsive controller, 
            immersive audio from a gaming headset, and a low-latency 4K TV or monitor. 
            All three are available on Amazon — and they make a massive difference in 
            how you feel and perform.
          </p>
          <h2>Why the PS5 DualSense Controller Wins for FIFA</h2>
          <p>
            The haptic feedback triggers give you a physical sensation when you shoot, tackle, 
            or make a powerful pass. It makes FIFA 26 feel completely different from older controllers. 
            If you're serious about FIFA, this is the controller to have.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">Shop FIFA Gaming Gear</h2>
          <p className="disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          <div className="product-grid">
            {products.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>© 2026 FIFA Pro · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
