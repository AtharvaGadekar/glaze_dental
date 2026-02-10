import { Metadata } from 'next';
import Image from 'next/image';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'About Dr. Ashish Gadekar | Top Dentist in Hadapsar',
    description: 'Meet Dr. Ashish Gadekar and the expert team at Glaze Dental. Committed to providing the best dental care and implant services in Hadapsar, Pune.',
    keywords: 'dr ashish gadekar, best dentist hadapsar, dental clinic hadapsar, implant specialist pune, experienced dentist hadapsar',
    openGraph: {
        title: 'About Dr. Ashish Gadekar | Top Dentist in Hadapsar',
        description: 'Meet Dr. Ashish Gadekar and the expert team at Glaze Dental. Committed to providing the best dental care and implant services in Hadapsar, Pune.',
        url: getCanonicalUrl('/about'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/clinic.png'),
                width: 1200,
                height: 630,
                alt: 'Dr. Ashish Gadekar - Glaze Dental Clinic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Dr. Ashish Gadekar | Top Dentist in Hadapsar',
        description: 'Meet Dr. Ashish Gadekar and the expert team at Glaze Dental.',
        images: [getOgImageUrl('/logo/clinic.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/about'),
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Glaze Dental</h1>
                    <p className="text-cyan-200 text-lg max-w-2xl mx-auto">
                        Experience the perfect blend of expertise, technology, and compassion.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Welcome to <span className="text-cyan-600">Glaze Dental Clinic</span>
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-6">
                                <p>
                                    Glaze Dental Clinic – Speciality Dental Clinic & Implant Centre in Hadapsar,
                                    led by dentist <strong>Dr. Ashish Gadekar</strong>, offers advanced dental care including
                                    dental implants, root canals, laser dentistry, smile makeovers, and Invisalign®.
                                </p>
                                <p>
                                    If you're searching for a dentist near me or the best dental clinic in Hadapsar,
                                    we provide pain-free, high-tech treatments in a clean, modern setup.
                                </p>
                                <p>
                                    Visit Glaze Dental Clinic for trusted, affordable care and a confident smile.
                                    Book your appointment today!
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid sm:grid-cols-2 gap-6 mt-10">
                                <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                                    <a href="tel:+9109623989689" className="text-cyan-600 hover:underline mt-1 block">
                                        +91 096239 89689
                                    </a>
                                </div>

                                <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                                    <a href="mailto:glazedental16@gmail.com" className="text-teal-600 hover:underline mt-1 block">
                                        glazedental16@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="order-1 lg:order-2">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 mix-blend-overlay z-10" />
                                {/* Reusing hero image for now but centered */}
                                <Image
                                    src="/logo/clinic.png"
                                    alt="Dr. Ashish Gadekar - Glaze Dental"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
