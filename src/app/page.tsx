// src/app/page.tsx
import Categories from '@/components/Categories'
import About from '@/components/About'
import banners from '@/data/banners.json'
import BannerSlider from '@/components/Banner'
export default function Home() {
  return (
    <div>
      <BannerSlider banners={banners.banners} />
      <Categories />
      <About />
    </div>
  )
}