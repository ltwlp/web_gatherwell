// src/components/Categories.tsx
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Limited-use Industrial Protective Clothing',
    image: '/images/categories/limited-use.png',
    slug: 'limited-use'
  },
  {
    id: 2,
    name: 'Chemical Protective Clothing',
    image: '/images/categories/chemical-protective.png',
    slug: 'chemical-protective'
  },
  {
    id: 3,
    name: 'Workwear',
    image: '/images/categories/workwear.png',
    slug: 'workwear'
  }
]

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Hot Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center"
            >
              {/* 圆形图片区域 */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gray-100 mb-6 relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover rounded-full"  // 添加 rounded-full 使图片变圆
                />
              </div>

              {/* 分类名称 */}
              <h3 className="ttext-2xl font-bold text-gray-800 mb-3 text-center min-h-[4em] line-clamp-2 flex items-center justify-center px-4">{category.name}</h3>
              {/* 按钮 */}
              <Link
                href={`/products/${category.slug}`}
                className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
              >
                View Products →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}