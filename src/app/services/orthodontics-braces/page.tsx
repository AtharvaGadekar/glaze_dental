import { Metadata } from 'next';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Braces & Invisalign in Hadapsar | Orthodontist Pune',
    description: 'Get the perfect smile with Metal, Ceramic, or Invisible Braces (Invisalign) in Hadapsar. Expert Orthodontic treatment for kids and adults at Glaze Dental.',
    keywords: 'braces hadapsar, invisalign pune, orthodontist hadapsar, teeth straightening hadapsar, clear aligners pune, metal braces cost hadapsar',
    openGraph: {
        title: 'Braces & Invisalign in Hadapsar | Orthodontist Pune',
        description: 'Get straight teeth with Metal, Ceramic, or Invisible Braces (Invisalign) in Hadapsar. Expert Orthodontic care.',
        url: getCanonicalUrl('/services/orthodontics-braces'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Orthodontics at Glaze Dental'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Braces & Invisalign in Hadapsar | Orthodontist Pune',
        description: 'Get straight teeth with Metal, Ceramic, or Invisible Braces (Invisalign) in Hadapsar. Expert Orthodontic care.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')]
    },
    alternates: {
        canonical: getCanonicalUrl('/services/orthodontics-braces'),
    },
};

export default function OrthodonticsPage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Orthodontics & Braces', url: `${SITE_URL}/services/orthodontics-braces` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Advanced <span className="text-purple-400">Orthodontics</span>
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mb-8">
                        Straighten your teeth with confidence. Choose from Metal, Ceramic, or Invisible Aligners.
                    </p>
                    <a href="https://calendar.app.google/tb25Ktz9esZRHsdt6" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold transition-all">
                        Get Smile Assessment
                    </a>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">Types of Braces Available</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Metal Braces</h3>
                            <p className="text-sm">Traditional, effective, and most affordable option for aligning teeth.</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="font-bold text-gray-900 text-xl mb-2">Ceramic Braces</h3>
                            <p className="text-sm">Tooth-colored brackets that blend with your teeth for a less visible look.</p>
                        </div>
                        <div className="border border-purple-100 bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="font-bold text-purple-900 text-xl mb-2">Invisalign (Aligners)</h3>
                            <p className="text-sm">Clear, removable trays that straighten teeth invisibly. No wires, no metal.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">Why straighten your teeth?</h2>
                    <p>
                        Orthodontic treatment isn't just about looks. Straight teeth are easier to clean, reducing the risk of decay and gum disease. Correcting your bite also prevents jaw pain and TMJ issues later in life.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900">Cost of Braces in Pune</h2>
                    <p>
                        Orthodontic treatment at Glaze Dental starts from <strong>₹25,000</strong> for metal braces. Clear Aligners (Invisalign/Invisible braces) cost varies based on the complexity of the alignment needed. We offer flexible monthly payment plans to fit your budget.
                    </p>

                    <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                        <strong>Best Age for Braces:</strong> While childhood (age 10-14) is ideal, it is never too late! We treat many adults who want to improve their smile confidence.
                    </div>
                </div>
            </section>
        </div>
    );
}
