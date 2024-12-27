'use client'

import Link from 'next/link'
import { Category } from '@/types'

export default function CategoryNav({
  categories,
  currentCategoryId
}: {
  categories: Category[]
  currentCategoryId: string
}) {
  return (
    <div className="w-[320px]">
      <div className="pt-10">
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className={`block w-full py-3 px-4 text-base transition-all rounded-lg ${
                  category.id === currentCategoryId
                    ? 'bg-[#4263EB] text-white shadow-sm transform -translate-x-1'
                    : 'hover:bg-gray-50 hover:shadow-sm hover:transform hover:-translate-x-1 text-gray-900'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}