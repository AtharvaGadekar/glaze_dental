import { Metadata } from 'next';
import Link from 'next/link';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Home Denture Service in Hadapsar, Pune | At-Home Denture Care',
    description: 'Denture care at your doorstep. Glaze Dental brings consultation, fitting & adjustments to your home in Hadapsar, Magarpatta & nearby. Book home denture service.',
    keywords: 'home denture service hadapsar, denture care at home pune, mobile dentist hadapsar, doorstep denture fitting magarpatta, at home dental hadapsar',
    openGraph: {
        title: 'Home Denture Service in Hadapsar, Pune | At-Home Denture Care',
        description: 'Denture care at your doorstep. Consultation, fitting & adjustments at home. Hadapsar, Magarpatta & nearby.',
        url: getCanonicalUrl('/services/home-denture-service'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Home Denture Service at Glaze Dental',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Denture Service in Hadapsar, Pune | At-Home Denture Care',
        description: 'Denture care at your doorstep. Consultation, fitting & adjustments at home.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/services/home-denture-service'),
    },
};

export default function HomeDentureServicePage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Home Denture Service', url: `${SITE_URL}/services/home-denture-service` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-indigo-300">Home Denture</span> Service
                    </h1>
                    <p className="text-lg text-indigo-50 max-w-2xl mb-8">
                        Complete denture care without leaving your home. From consultation to fitting and adjustments, we bring professional service to your doorstep in Hadapsar, Magarpatta, and nearby areas.
                    </p>
                    <a
                        href="tel:+919623989689"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                    >
                        Call to Book Home Visit
                    </a>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">Who is home denture service for?</h2>
                    <p>
                        Our home denture service is ideal for seniors, people with limited mobility, or anyone who finds it difficult to visit the clinic. We come to you for consultations, new denture fittings, adjustments, and routine denture care—so you get the same quality of care in the comfort of your home.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900">What we offer at home</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Initial consultation and assessment</li>
                        <li>Impressions and measurements for new dentures</li>
                        <li>Fitting and adjustments</li>
                        <li>Advice on care and maintenance</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900">Areas we serve</h2>
                    <p>
                        We provide home denture service in Hadapsar, Magarpatta, Kharadi, Amanora Park Town, and surrounding localities in Pune. Contact us to confirm availability for your area.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Book a home visit</h3>
                        <p className="mb-6 opacity-80">Call us to schedule a denture consultation at your home.</p>
                        <a href="tel:+919623989689" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Call +91 96239 89689
                        </a>
                    </div>

                    <p className="text-gray-600 pt-6">
                        For fixed tooth replacement, see our <Link href="/services/dental-implants" className="text-cyan-600 font-medium hover:underline">Dental Implants</Link> service. View <Link href="/services" className="text-cyan-600 font-medium hover:underline">all services</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
