// src/app/contact/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - GatherWell',
  description: 'Get in touch with GatherWell for inquiries about our safety protection products and solutions.'
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
            Contact Us
          </h1>
          <p className="text-center mt-6 text-lg max-w-2xl mx-auto text-blue-100">
            We're here to help and answer any questions you might have about our safety protection solutions.
          </p>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Get In Touch</h2>
            <p className="text-gray-500 mb-12 leading-relaxed">
              Have questions about our products? We'd love to hear from you. Contact us through any of the following channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Address</h3>
                  <p className="text-gray-500 mt-1">123 Safety Street, Industrial Zone</p>
                  <p className="text-gray-500">Shanghai, China</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                  <p className="text-gray-500 mt-1">info@gatherwell.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
                  <p className="text-gray-500 mt-1">+86 123 4567 8900</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Business Hours</h3>
                  <p className="text-gray-500 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-500">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}