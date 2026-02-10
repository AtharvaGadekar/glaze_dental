import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getCanonicalUrl, SITE_URL } from '@/lib/seo';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

interface Props {
    params: Promise<{
        slug: string;
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const imageUrl = post.image.startsWith('http') 
        ? post.image 
        : `https://bestdentistinhadapsar.com${post.image}`;

    return {
        title: `${post.title}`,
        description: post.excerpt,
        keywords: post.category ? `${post.category}, dental blog, oral health, ${post.title.toLowerCase()}` : 'dental blog, oral health',
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: getCanonicalUrl(`/blog/${slug}`),
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            siteName: 'Glaze Dental Clinic',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
        alternates: {
            canonical: getCanonicalUrl(`/blog/${slug}`),
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

import ArticleJsonLd from "@/components/seo/ArticleJsonLd";

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url: getCanonicalUrl(`/blog/${slug}`) },
    ];

    return (
        <article className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ArticleJsonLd post={post} />
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-slate-900">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-cyan-300 hover:text-white mb-6 transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-4 text-sm text-cyan-100 mb-4">
                            <span className="bg-cyan-600/80 backdrop-blur-sm px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">{post.category}</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <div
                    className="prose prose-lg md:prose-xl prose-cyan mx-auto text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Author Box */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-2xl">
                        👨‍⚕️
                    </div>
                    <div>
                        <div className="text-gray-900 font-bold text-lg">{post.author}</div>
                        <div className="text-cyan-600 text-sm font-medium">Lead Dentist, Glaze Dental Clinic</div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-50 border-t border-gray-200 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have questions about your dental health?</h2>
                    <p className="text-gray-600 mb-8">Dr. Ashish Gadekar is here to help. Schedule a consultation today.</p>
                    <a
                        href="tel:+919623989689"
                        className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Call +91 96239 89689
                    </a>
                </div>
            </div>
        </article>
    );
}
