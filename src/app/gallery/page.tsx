import { Metadata } from 'next';
import Image from 'next/image';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Smile Transformations | Best Dental Results in Hadapsar',
    description: 'See the amazing before and after transformation results. Glaze Dental Clinic creates the beautiful smiles you deserve in Hadapsar.',
    keywords: 'dental before after, smile transformation hadapsar, dental results, cosmetic dentistry results, dental gallery hadapsar',
    openGraph: {
        title: 'Smile Transformations | Best Dental Results in Hadapsar',
        description: 'See the amazing before and after transformation results. Glaze Dental Clinic creates the beautiful smiles you deserve in Hadapsar.',
        url: getCanonicalUrl('/gallery'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/gallery-images/2025-09-11.png'),
                width: 1200,
                height: 630,
                alt: 'Dental Transformation Gallery - Glaze Dental Clinic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Smile Transformations | Best Dental Results in Hadapsar',
        description: 'See the amazing before and after transformation results. Glaze Dental Clinic creates the beautiful smiles you deserve.',
        images: [getOgImageUrl('/gallery-images/2025-09-11.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/gallery'),
    },
};

const galleryImages = [
    '/gallery-images/2025-09-11.png',
    '/gallery-images/2025-10-14.jpg',
    '/gallery-images/2025-11-06.jpg',
    '/gallery-images/2025-11-15.jpg',
    '/gallery-images/2025-11-24.jpg',
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Patient Success Stories from the Best Dental Clinic in Hadapsar</h1>
                    <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
                        Witness the transformations at Glaze Dental. From complex root canals and dental implants to complete smile makeovers, see why we are the top-rated dental clinic in Hadapsar. Real patients, real smiles, real results.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((src, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                            >
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                    <div>
                                        <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 block">
                                            Successful Treatment
                                        </span>
                                        <span className="text-cyan-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 block">
                                            Glaze Dental Clinic
                                        </span>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Image
                                        src={src}
                                        alt={`Before and after dental treatment result at Glaze Dental Clinic Hadapsar - Patient transformation ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for your transformation?</h3>
                            <p className="text-gray-600 mb-8">
                                Join our list of happy patients. Schedule your consultation today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:+919623989689" className="px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/30">
                                    Call Now: +91 96239 89689
                                </a>
                                <a href="https://calendar.app.google/tb25Ktz9esZRHsdt6" className="px-8 py-3 bg-white text-cyan-600 border-2 border-cyan-100 rounded-full font-semibold hover:border-cyan-600 transition-colors">
                                    Book Online
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
