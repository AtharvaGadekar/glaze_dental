import { Metadata } from 'next';
import Link from 'next/link';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Dental Checkup in Hadapsar, Pune | Complete Oral Examination',
    description: 'Complete dental checkup in Hadapsar at Glaze Dental. Gum health, cavity detection & personalised care plan. Affordable ₹200 checkup. Book today.',
    keywords: 'dental checkup hadapsar, complete oral examination pune, cavity detection hadapsar, gum health check pune, dentist hadapsar, preventive dentistry',
    openGraph: {
        title: 'Dental Checkup in Hadapsar, Pune | Complete Oral Examination',
        description: 'Complete dental checkup at Glaze Dental. Gum health, cavity detection & personalised care. Affordable. Hadapsar & nearby.',
        url: getCanonicalUrl('/services/dental-checkup'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Dental Checkup at Glaze Dental',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dental Checkup in Hadapsar, Pune | Complete Oral Examination',
        description: 'Complete dental checkup at Glaze Dental. Gum health, cavity detection & personalised care.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/services/dental-checkup'),
    },
};

export default function DentalCheckupPage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Dental Checkup', url: `${SITE_URL}/services/dental-checkup` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Complete <span className="text-emerald-300">Dental Checkup</span>
                    </h1>
                    <p className="text-lg text-emerald-50 max-w-2xl mb-8">
                        Detailed oral health examination: gum health, cavity detection, and a personalised care plan. Essential for long-term oral hygiene.
                    </p>
                    <a
                        href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                    >
                        Book Checkup (₹200)
                    </a>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">What does a complete checkup include?</h2>
                    <p>
                        Our dental checkup at Glaze Dental covers a thorough examination of your teeth, gums, and mouth. We check for cavities, gum disease, oral cancer signs, and build a personalised plan to keep your smile healthy.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                            <h3 className="font-bold text-emerald-800 text-xl mb-3">Gum health check</h3>
                            <p>Assessment of gums for bleeding, recession, or early signs of gum disease.</p>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                            <h3 className="font-bold text-teal-800 text-xl mb-3">Cavity detection</h3>
                            <p>Visual and, when needed, X-ray based detection of decay and hidden cavities.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Why regular checkups matter</h2>
                    <p>
                        Regular dental checkups help catch problems early, when they are easier and cheaper to treat. They also keep your gums healthy and support overall wellness. We recommend a checkup at least every six months.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900">Cost</h2>
                    <p>
                        A complete checkup at Glaze Dental is <strong>₹200</strong>. It is one of the most affordable ways to protect your smile and catch issues before they become serious.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Book your dental checkup today</h3>
                        <p className="mb-6 opacity-80">Hadapsar, Magarpatta, Kharadi & nearby. We’re here to help.</p>
                        <a
                            href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            Book Checkup
                        </a>
                    </div>

                    <p className="text-gray-600 pt-6">
                        You may also need: <Link href="/services/root-canal-treatment" className="text-cyan-600 font-medium hover:underline">Root Canal</Link>, <Link href="/services/dental-implants" className="text-cyan-600 font-medium hover:underline">Dental Implants</Link>, <Link href="/services" className="text-cyan-600 font-medium hover:underline">all services</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
