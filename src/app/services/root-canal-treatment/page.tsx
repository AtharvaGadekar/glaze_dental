import { Metadata } from 'next';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Root Canal Treatment in Hadapsar | Painless RCT Cost',
    description: 'Painless Root Canal Treatment (RCT) in Hadapsar at Glaze Dental. Save your natural tooth with our advanced single-sitting RCT. Affordable cost starting ₹4000.',
    keywords: 'root canal treatment hadapsar, rct hadapsar, painless root canal pune, single sitting rct, root canal cost hadapsar, endodontist hadapsar',
    openGraph: {
        title: 'Root Canal Treatment in Hadapsar | Painless RCT Cost',
        description: 'Save your natural tooth with our advanced single-sitting RCT. Affordable and painless root canal treatment in Hadapsar.',
        url: getCanonicalUrl('/services/root-canal-treatment'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Painless Root Canal at Glaze Dental'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Root Canal Treatment in Hadapsar | Painless RCT Cost',
        description: 'Save your natural tooth with our advanced single-sitting RCT. Affordable and painless root canal treatment.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')]
    },
    alternates: {
        canonical: getCanonicalUrl('/services/root-canal-treatment'),
    },
};

export default function RootCanalPage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Root Canal Treatment', url: `${SITE_URL}/services/root-canal-treatment` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Painless <span className="text-teal-400">Root Canal Treatment</span>
                    </h1>
                    <p className="text-lg text-teal-50 max-w-2xl mb-8">
                        Save your infected tooth with our advanced, microscope-enhanced Root Canal therapy.
                        Comfortable, quick, and effective.
                    </p>
                    <a href="tel:+919623989689" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-bold transition-all">
                        Book Emergency Appointment
                    </a>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">What is Root Canal Treatment?</h2>
                    <p>
                        A Root Canal Treatment (RCT) is a procedure to remove infected or inflamed pulp (nerve) from inside the tooth. It is the best way to relieve severe tooth pain and save a tooth that would otherwise need to be extracted.
                    </p>

                    <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
                        <h3 className="text-red-800 font-bold text-lg mb-2">Signs you might need an RCT:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-red-700">
                            <li>Severe toothache while chewing</li>
                            <li>Prolonged sensitivity to hot or cold</li>
                            <li>Swelling or tenderness in the gums</li>
                            <li>Darkening of the tooth</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Single Sitting RCT at Glaze Dental</h2>
                    <p>
                        Gone are the days of multiple painful visits. At Glaze Dental, we use rotary endodontics to perform <strong>Single Sitting Root Canals</strong>. This advanced technique ensures:
                    </p>
                    <ul className="list-check space-y-2 pl-4">
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Completed in 45-60 minutes</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Minimal discomfort</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Higher success rate</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900">Root Canal Cost in Hadapsar</h2>
                    <p>
                        The cost of a Root Canal at Glaze Dental Clinic starts from <strong>₹4,000</strong>. The final price depends on the tooth involved (front vs. molar) and the severity of the infection. We ensure affordable dental care without compromising on hygiene or quality.
                    </p>
                </div>
            </section>
        </div>
    );
}
