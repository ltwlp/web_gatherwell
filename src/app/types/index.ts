export interface Category {
  id: string
  name: string
  image: string
}

export interface Product {
  id: string
  categoryId: string
  name: string
  images: string[]
  description: string
  features: string[]
  specifications: {
    [key: string]: string
  }
}