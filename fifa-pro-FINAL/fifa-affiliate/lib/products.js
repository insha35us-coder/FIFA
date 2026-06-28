export const TAG = 'timevalue0e2-20'

export const PRODUCTS = [
  {
    id: 'firestick4k',
    asin: 'B0CFP7SLL8',
    title: 'Amazon Fire TV Stick 4K Max — Watch FIFA Live in 4K Ultra HD',
    price: '$59.99',
    badge: 'Best Seller',
    category: 'streaming',
  },
  {
    id: 'firestick',
    asin: 'B08C1W5N87',
    title: 'Fire TV Stick with Alexa Voice Remote — Stream FIFA Anywhere',
    price: '$39.99',
    badge: 'Budget Pick',
    category: 'streaming',
  },
  {
    id: 'jersey',
    asin: 'B0BQKQ5PXR',
    title: 'Adidas FIFA World Cup 2026 Official Jersey',
    price: '$89.99',
    badge: 'Official',
    category: 'apparel',
  },
  {
    id: 'smarttv',
    asin: 'B0BP9SNVH9',
    title: 'Amazon Fire TV 43-inch 4K Smart TV — The Ultimate FIFA Experience',
    price: '$299.99',
    badge: 'High Value',
    category: 'tv',
  },
  {
    id: 'ps5pad',
    asin: 'B08FC6C75Y',
    title: 'PlayStation 5 DualSense Controller — Play FIFA 26 in Style',
    price: '$69.99',
    badge: 'Top Rated',
    category: 'gaming',
  },
  {
    id: 'ball',
    asin: 'B09XCPXVYK',
    title: 'Adidas FIFA World Cup Official Match Football',
    price: '$44.99',
    badge: 'Official',
    category: 'gear',
  },
  {
    id: 'headset',
    asin: 'B094BHJ724',
    title: 'SteelSeries Arctis Nova 7 Gaming Headset — FIFA Immersive Sound',
    price: '$149.99',
    badge: 'Premium',
    category: 'gaming',
  },
  {
    id: 'hdmi',
    asin: 'B014I8SIJY',
    title: 'HDMI 2.1 Cable 10ft — 4K 120Hz for FIFA on Big Screen',
    price: '$12.99',
    badge: 'Bundle Pick',
    category: 'accessories',
  },
]

export function getProducts(ids) {
  return ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
}
