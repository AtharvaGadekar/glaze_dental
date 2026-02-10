import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { Metadata } from 'next';
import { getCanonicalUrl, getOgImageUrl } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Dental Tips & Insights | Expert Dentist Hadapsar',
    description: 'Expert dental advice, treatment guides, and oral health tips from Dr. Ashish Gadekar. Stay informed with Glaze Dental.',
    keywords: 'dental blog, oral health tips, dental care advice, dentist blog hadapsar, dental health articles, oral hygiene tips',
    openGraph: {
        title: 'Dental Tips & Insights | Expert Dentist Hadapsar',
        description: 'Expert dental advice, treatment guides, and oral health tips from Dr. Ashish Gadekar. Stay informed with Glaze Dental.',
        url: getCanonicalUrl('/blog'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/logo.png'),
                width: 1200,
                height: 630,
                alt: 'Glaze Dental Blog - Expert Dental Tips',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dental Tips & Insights | Expert Dentist Hadapsar',
        description: 'Expert dental advice, treatment guides, and oral health tips from Dr. Ashish Gadekar.',
        images: [getOgImageUrl('/logo/logo.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/blog'),
    },
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
                        Insights, tips, and updates from the world of modern dentistry.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-cyan-700 text-xs font-bold uppercase tracking-wide rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-cyan-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-cyan-600 font-semibold text-sm hover:text-cyan-700 transition-colors mt-auto"
                                    >
                                        Read Article
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
