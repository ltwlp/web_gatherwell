'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Banner } from '@/types'

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000) // 每5秒切换一次

    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link href={banner.link}>
            <div className="relative w-full h-full">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {banner.title}
                </h2>
                <p className="text-xl md:text-2xl">
                  {banner.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}