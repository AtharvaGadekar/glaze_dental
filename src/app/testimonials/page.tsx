import { Metadata } from 'next';
import { testimonials } from '@/data/testimonials';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/seo';
import ReviewJsonLd from '@/components/seo/ReviewJsonLd';

export const metadata: Metadata = {
    title: 'Patient Reviews | Best Rated Dentist in Hadapsar',
    description: 'See why 10,000+ patients trust Glaze Dental. Rated 5 stars for painless treatments, hygiene, and expert care in Hadapsar.',
    keywords: 'dental reviews hadapsar, patient testimonials, dentist reviews pune, best rated dentist hadapsar, dental clinic reviews',
    openGraph: {
        title: 'Patient Reviews | Best Rated Dentist in Hadapsar',
        description: 'See why 10,000+ patients trust Glaze Dental. Rated 5 stars for painless treatments, hygiene, and expert care in Hadapsar.',
        url: getCanonicalUrl('/testimonials'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/logo.png'),
                width: 1200,
                height: 630,
                alt: 'Patient Reviews - Glaze Dental Clinic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Patient Reviews | Best Rated Dentist in Hadapsar',
        description: 'See why 10,000+ patients trust Glaze Dental. Rated 5 stars for painless treatments.',
        images: [getOgImageUrl('/logo/logo.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/testimonials'),
    },
};

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <ReviewJsonLd />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Patient <span className="text-cyan-600">Stories</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Real experiences from our valued patients. We take pride in delivering smiles that change lives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-lg flex-shrink-0">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{testimonial.author}</h3>
                                    <div className="flex text-yellow-400 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex-grow">
                                <svg className="absolute -top-2 -left-2 w-8 h-8 text-gray-100 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8v8h6v10h-10v-10h4v-8h16v8h-4v10h10v-10h-6v-8h-16z"></path>
                                </svg>
                                <p className="text-gray-600 relative z-10 leading-relaxed text-sm">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
