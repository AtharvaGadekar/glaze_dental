import Link from "next/link";
import { Hero, ServicesList, AreaServed, TestimonialCarousel, FAQ } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <ServicesList limit={6} compact={true} />

      {/* Local area targeting: Magarpatta, Kharadi, Amanora */}
      <AreaServed />

      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-50 text-cyan-700 font-semibold hover:bg-cyan-100 transition-colors"
            >
              All dental services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
            >
              Read our blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <FAQ />
    </>
  );
}
