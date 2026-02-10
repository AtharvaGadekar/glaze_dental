import { Metadata } from 'next';
import Link from 'next/link';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Teeth Whitening in Hadapsar, Pune | Professional Whitening',
    description: 'Professional teeth whitening in Hadapsar & near Magarpatta. Safe, effective whitening at Glaze Dental Clinic. Free consultation. Book today.',
    keywords: 'teeth whitening hadapsar, professional whitening pune, dental whitening magarpatta, stain removal hadapsar, smile brightening pune, cosmetic dentistry',
    openGraph: {
        title: 'Teeth Whitening in Hadapsar, Pune | Professional Whitening',
        description: 'Professional teeth whitening at Glaze Dental. Safe, effective treatment for a brighter smile. Hadapsar & Magarpatta.',
        url: getCanonicalUrl('/services/teeth-whitening'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Teeth Whitening at Glaze Dental',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Teeth Whitening in Hadapsar, Pune | Professional Whitening',
        description: 'Professional teeth whitening at Glaze Dental. Safe, effective treatment for a brighter smile.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/services/teeth-whitening'),
    },
};

export default function TeethWhiteningPage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Teeth Whitening', url: `${SITE_URL}/services/teeth-whitening` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-amber-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Professional <span className="text-amber-300">Teeth Whitening</span>
                    </h1>
                    <p className="text-lg text-amber-50 max-w-2xl mb-8">
                        Safe, effective whitening to lighten stains and brighten your smile. Tailored to your teeth and goals.
                    </p>
                    <a
                        href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                    >
                        Book Whitening Consultation
                    </a>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">What is professional teeth whitening?</h2>
                    <p>
                        Teeth whitening uses bleaching agents (such as hydrogen peroxide) to lighten the colour of your teeth and remove surface and deeper stains. At Glaze Dental we choose the best method based on the type and severity of stains, your desired result, and your oral health.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900">Why choose in-clinic whitening?</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Faster, more predictable results than at-home kits</li>
                        <li>Supervised by our dentist for safety and comfort</li>
                        <li>Customised to your sensitivity and goals</li>
                        <li>Longer-lasting shine with good oral care</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900">Who is it for?</h2>
                    <p>
                        Whitening works best on natural teeth with yellow or brown staining. It may not be suitable for grey teeth or restorations (crowns, fillings). Our team will advise you during a free consultation.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready for a brighter smile?</h3>
                        <p className="mb-6 opacity-80">Book your teeth whitening consultation in Hadapsar today.</p>
                        <a
                            href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            Book Appointment
                        </a>
                    </div>

                    <p className="text-gray-600 pt-6">
                        Explore our other services: <Link href="/services/dental-implants" className="text-cyan-600 font-medium hover:underline">Dental Implants</Link>, <Link href="/services/root-canal-treatment" className="text-cyan-600 font-medium hover:underline">Root Canal</Link>, <Link href="/services" className="text-cyan-600 font-medium hover:underline">all services</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
