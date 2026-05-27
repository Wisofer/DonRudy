export interface Product {
  id: string
  name: string
  price: number
  priceOriginal: number
  description: string
  iconType: 'book' | 'spreadsheet' | 'users' | 'pdf' | 'video'
  tag?: string
  benefits: string[]
}

export interface ChatMessage {
  id: string
  sender: 'user' | 'rudy'
  text: string
  timestamp: string
}

export interface Video {
  id: string
  title: string
  description: string
  views: string
  likes: string
  duration: string
  relatedProduct: string
  gradientClass: string
  videoUrl: string
}
