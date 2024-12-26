// src/components/Categories.tsx
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Industrial Equipment',
    description: 'High-quality industrial machinery and equipment',
    image: '/images/categories/industrial.svg',
    slug: 'industrial-equipment'
  },
  {
    id: 2,
    name: 'Precision Tools',
    description: 'Professional precision tools for various industries',
    image: '/images/categories/tools.svg',
    slug: 'precision-tools'
  },
  {
    id: 3,
    name: 'Safety Gear',
    description: 'Complete range of safety equipment',
    image: '/images/categories/safety.svg',
    slug: 'safety-gear'
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
              <div className="w-48 h-48 rounded-full bg-gray-100 mb-6 relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              
              {/* 分类名称 */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.name}</h3>
              
              {/* 描述文字 */}
              <p className="text-gray-500 text-center mb-6">{category.description}</p>
              
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