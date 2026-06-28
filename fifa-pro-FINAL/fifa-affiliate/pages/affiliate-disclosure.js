import Head from 'next/head'
import Nav from '../components/Nav'

export default function Disclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure — FIFA Pro</title>
      </Head>
      <Nav />
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Affiliate Disclosure</h1>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          FIFA Pro is a participant in the Amazon Services LLC Associates Program, an affiliate 
          advertising program designed to provide a means for sites to earn advertising fees by 
          advertising and linking to Amazon.com.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
          When you click on links to Amazon products on this site and make a purchase, we may 
          earn a small commission. This comes at no additional cost to you.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.8 }}>
          We only recommend products we believe are genuinely useful for FIFA fans. Our editorial 
          opinions are not influenced by affiliate relationships.
        </p>
      </div>
      <footer className="footer">
        <p>© 2026 FIFA Pro</p>
      </footer>
    </>
  )
}
