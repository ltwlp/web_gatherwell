'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/types'

const productData: { categories: Category[] } = {
  categories: [
    {
      id: 'limited-use',
      name: 'Limited-use Industrial Protective Clothing',
    },
    {
      id: 'chemical-protective',
      name: 'Chemical Protective Clothing',
    },
    {
      id: 'workwear',
      name: 'Workwear',
    },
    {
      id: 'safety-shoes',
      name: 'Safety Shoes',
    },
    {
      id: 'reflective-workwear',
      name: 'Reflective Workwear',
    },
    {
      id: 'safety-gloves',
      name: 'Safety Gloves',
    },
    {
      id: 'accessories',
      name: 'Accessories',
    },
  ]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [showMobileProducts, setShowMobileProducts] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(false)
    setShowMobileProducts(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo-m.jpg" alt="Logo" width={40} height={40} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-gray-900 hover:text-blue-600">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className="text-gray-900 hover:text-blue-600 py-2">
                Products
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white shadow-lg rounded-lg py-2 mt-1 transition-all duration-200 ${
                  showProducts
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {productData.categories.map((category: Category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.id}`}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-blue-600 whitespace-normal"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-gray-900 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50"
              onClick={handleCloseMenu}
            >
              Home
            </Link>

            {/* Mobile Products Menu */}
            <div>
              <button
                onClick={() => setShowMobileProducts(!showMobileProducts)}
                className="flex justify-between items-center w-full px-3 py-2 text-gray-900 hover:bg-gray-50"
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMobileProducts ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Products Submenu */}
              <div
                className={`transition-all duration-200 ${
                  showMobileProducts
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {productData.categories.map((category: Category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.id}`}
                    className="block px-6 py-2 text-gray-900 hover:bg-gray-50"
                    onClick={handleCloseMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50"
              onClick={handleCloseMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}