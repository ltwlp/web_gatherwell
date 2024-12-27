import { getProduct } from '@/lib/data'
import ProductImages from './ProductImages'

type PageProps = {
  params: Promise<{
    category: string
    id: string
  }>
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params
  const product = await getProduct(resolvedParams.id)

  if (!product) return null

  return (
    <main className="flex-1 pt-6">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImages images={product.images} name={product.name} />
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}