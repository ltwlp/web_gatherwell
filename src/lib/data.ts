import categoriesData from '@/data/categories.json'
import productsData from '@/data/products.json'
import { Category, Product } from '@/types'

export async function getCategories(): Promise<Category[]> {
  return categoriesData.categories
}

export async function getCategory(id: string): Promise<Category | undefined> {
  return categoriesData.categories.find(category => category.id === id)
}

export async function getProducts(category?: string): Promise<Product[]> {
  if (category) {
    return productsData.products.filter(product => product.categoryId === category)
  }
  return productsData.products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return productsData.products.find(product => product.id === id)
}