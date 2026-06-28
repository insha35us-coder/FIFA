const TAG = 'timevalue0e2-20'

export function affLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}&linkCode=ogi&th=1&psc=1`
}

export default function ProductCard({ asin, title, price, badge }) {
  return (
    <a
      href={affLink(asin)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="product-card"
    >
      {badge && <div className="product-badge">{badge}</div>}
      <div className="product-title">{title}</div>
      <div className="product-price">{price}</div>
      <div className="product-btn">Buy on Amazon →</div>
    </a>
  )
}
