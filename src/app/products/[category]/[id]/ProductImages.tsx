'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductImages({ images, name }: { images: string[], name: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* 主图容器 - 正方形 */}
      <div className="relative w-full aspect-square max-w-[480px] mx-auto bg-white rounded-lg overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* 缩略图容器 - 3列布局并居中 */}
      <div className="max-w-[360px] mx-auto"> {/* 容器居中 */}
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`
                relative h-[60px] rounded-md overflow-hidden
                ${currentImage === index 
                  ? 'ring-2 ring-blue-500 ring-offset-1' 
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'
                }
                transition-all duration-200
              `}
            >
              <Image
                src={image}
                alt={`${name} ${index + 1}`}
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}