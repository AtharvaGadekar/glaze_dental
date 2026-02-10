import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { services } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bestdentistinhadapsar.com';

    const staticPages = [
        { route: '', priority: 1.0, changeFreq: 'weekly' as const },
        { route: '/about', priority: 0.9, changeFreq: 'monthly' as const },
        { route: '/services', priority: 0.9, changeFreq: 'weekly' as const },
        { route: '/testimonials', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/gallery', priority: 0.8, changeFreq: 'monthly' as const },
        { route: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
    ].map(({ route, priority, changeFreq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: priority,
    }));

    const servicePages = services
        .filter((s): s is typeof s & { slug: string } => Boolean(s.slug) && s.slug.startsWith('/services/'))
        .map((s) => ({
            url: `${baseUrl}${s.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        }));

    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...blogPages];
}
