import { BlogPost } from '@/data/blogPosts';

const ArticleJsonLd = ({ post }: { post: BlogPost }) => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        image: [`https://bestdentistinhadapsar.com${post.image}`],
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: [{
            '@type': 'Person',
            name: post.author || 'Dr. Ashish Gadekar',
        }],
        publisher: {
            '@type': 'Organization',
            name: 'Glaze Dental Clinic',
            logo: {
                '@type': 'ImageObject',
                url: 'https://bestdentistinhadapsar.com/logo/logo.png'
            }
        },
        description: post.excerpt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://bestdentistinhadapsar.com/blog/${post.slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default ArticleJsonLd;
