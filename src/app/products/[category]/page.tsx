import { getCategories, getProducts, getCategory } from '@/lib/data'
import ProductGrid from '@/components/ProductGrid'
import CategoryNav from '@/components/CategoryNav'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    category: category.id,
  }))
}

type PageProps = {
  params: Promise<{ category: string }>
}

export default async function ProductsPage({ params }: PageProps) {
  const resolvedParams = await params
  const categoryId = resolvedParams.category
  
  const [categories, currentCategory, products] = await Promise.all([
    getCategories(),
    getCategory(categoryId),
    getProducts(categoryId)
  ])

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-64px)] ">
          <div className="hidden md:block">
            <CategoryNav 
              categories={categories} 
              currentCategoryId={categoryId} 
            />
          </div>
          <div className="flex-1">
            <ProductGrid 
              products={products} 
              category={currentCategory} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}