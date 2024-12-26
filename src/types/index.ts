export interface Category {
  id: string
  name: string
}

export interface Product {
  id: string
  categoryId: string
  name: string
  images: string[]
  description: string
}

export interface Banner {
    id: string
    title: string
    description: string
    image: string
    link: string
    alt: string
  }
export interface ProductData {
  categories: Category[]
}