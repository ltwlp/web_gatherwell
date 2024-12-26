// src/components/About.tsx
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/placeholder/about.jpg"
              alt="About GatherWell"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About GatherWell</h2>
            <div className="space-y-4 text-gray-500 mb-6">
              <p>
                Qingdao GatherWell Co., Ltd. is a company that focuses on providing customers with safety protection solutions from head to toe.
              </p>
              <p>
                The main products include: a variety of limited-use protective clothing, chemical protective clothing, flame-retardant work clothes, clean room clothing, safety gloves, safety shoes, reflective vests, work clothes, etc.
              </p>
              <p>
                GatherWell provides customers with high-quality products by insisting on continuous product research and development and technological innovation. The products comply with GB standards, CE European standards, etc., to provide users with the best protection.
              </p>
              <p>
                Over the years, GatherWell's products have been exported to more than 30 countries and regions including Europe, Japan, South Korea, Singapore, Thailand, the United States, Canada, and South America, etc. It is deeply loved by users.
              </p>
              <p>
                In the future, we will continue to provide users with better safety protection with our products with excellent quality, professional team, and meticulous service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}