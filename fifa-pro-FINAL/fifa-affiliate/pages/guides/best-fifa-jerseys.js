import Head from 'next/head'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../lib/products'

const products = getProducts(['jersey', 'ball', 'firestick4k', 'hdmi'])

export default function JerseyGuide() {
  return (
    <>
      <Head>
        <title>Best FIFA World Cup 2026 Official Jerseys — Buy on Amazon</title>
        <meta name="description" content="Buy official FIFA World Cup 2026 jerseys on Amazon. All teams available with fast delivery. Adidas official kits, authentic quality." />
        <link rel="canonical" href="https://fifa-pro-nine.vercel.app/guides/best-fifa-jerseys" />
      </Head>
      <Nav />
      <div style={{ background: '#006400', padding: '2.5rem 1.25rem', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>Official FIFA 2026 Jerseys</h1>
        <p style={{ opacity: 0.88 }}>Authentic kits, all teams — fast Amazon delivery.</p>
      </div>
      <div className="container">
        <div className="guide-content section">
          <h2>Why Buy Official FIFA Jerseys on Amazon</h2>
          <p>
            Amazon carries official Adidas and Nike FIFA World Cup 2026 jerseys with fast 
            delivery worldwide. You get guaranteed authentic quality — not replicas — with 
            Amazon's return policy protection.
          </p>
          <h2>How to Choose the Right Jersey</h2>
          <p>
            For watching matches, a replica jersey is perfect. For training or playing, 
            opt for the authentic player version with moisture-wicking technology. Both 
            are available on Amazon — check the product description for the version.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">Shop Official FIFA 2026 Jerseys</h2>
          <p className="disclosure">As an Amazon Associate we earn from qualifying purchases.</p>
          <div className="product-grid">
            {products.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Are FIFA jerseys on Amazon official?</h3>
            <p>Yes — Amazon sells official Adidas and Nike licensed FIFA jerseys. Always check the seller is "Amazon.com" or a verified official brand store.</p>
          </div>
          <div className="faq-item">
            <h3>How fast is Amazon jersey delivery?</h3>
            <p>Prime members get free 2-day delivery on most jerseys. Order before your team's match and it arrives in time.</p>
          </div>
          <div className="faq-item">
            <h3>Can I return a FIFA jersey on Amazon?</h3>
            <p>Yes — Amazon's 30-day return policy applies. Wrong size? No problem.</p>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>© 2026 FIFA Pro · As an Amazon Associate we earn from qualifying purchases.</p>
      </footer>
    </>
  )
}
