import Image from 'next/image'
import Link from 'next/link'
import { Product, Category } from '@/types'

export default function ProductGrid({
  products,
  category
}: {
  products: Product[]
  category?: Category
}) {
  if (!category) return null

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${category.id}/${product.id}`}
            className="bg-white backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 p-6 group h-[400px] flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-left truncate">
              {product.name}
            </h3>
            <div className="relative flex-1">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}