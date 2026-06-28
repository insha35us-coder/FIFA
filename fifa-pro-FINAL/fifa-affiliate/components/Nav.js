import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">FIFA Pro 2026</Link>
      <Link href="/matches" className="nav-link">Matches</Link>
      <Link href="/guides/how-to-watch-fifa-live" className="nav-link">Watch Live</Link>
      <Link href="/guides/best-fifa-jerseys" className="nav-link">Jerseys</Link>
    </nav>
  )
}
