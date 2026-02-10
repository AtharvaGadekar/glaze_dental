import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: [
            'https://bestdentistinhadapsar.com/sitemap.xml',
            'https://bestdentistinhadapsar.com/sitemap-images.xml',
        ],
    };
}
