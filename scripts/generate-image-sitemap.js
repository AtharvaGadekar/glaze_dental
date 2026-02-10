const fs = require('fs');
const path = require('path');

// Gallery images
const galleryImages = [
    '/gallery-images/2025-09-11.png',
    '/gallery-images/2025-10-14.jpg',
    '/gallery-images/2025-11-06.jpg',
    '/gallery-images/2025-11-15.jpg',
    '/gallery-images/2025-11-24.jpg',
];

// Blog posts (imported from data)
const blogPosts = [
    {
        slug: 'dental-implants-hadapsar-step-by-step-guide',
        title: 'Dental Implants in Hadapsar: Step-by-Step Guide | Glaze Dental',
        excerpt: 'Are you considering dental implants? Discover the complete step-by-step procedure, costs, and why Glaze Dental is the best choice for dental implants in Pune and Hadapsar.',
        image: '/logo/hero_illustration_v1.png',
    },
    {
        slug: 'oral-health-affects-overall-health-magarpatta-hadapsar',
        title: 'Your Oral Health Affects Your Overall Health | Glaze Dental',
        excerpt: 'Did you know that poor dental health can lead to serious health issues like gum disease, tooth loss, bad breath, and even increase the risk of heart problems and diabetes?',
        image: '/gallery-images/best dentist in hadapsar.jpg',
    },
    {
        slug: 'root-canal-treatment-hadapsar-cost-recovery',
        title: 'Painless Root Canal in Hadapsar: Cost & Recovery | Glaze Dental',
        excerpt: 'Afraid of Root Canals? Learn how single-sitting RCTs at Glaze Dental in Hadapsar are painless, affordable, and the best way to save your natural tooth.',
        image: '/logo/hero_illustration_v1.png',
    },
    {
        slug: 'how-to-choose-best-dental-clinic-hadapsar',
        title: 'How to Choose the Best Dental Clinic in Hadapsar | Glaze Dental',
        excerpt: 'Finding the best dentist can be overwhelming. Here are 5 key factors to consider when choosing a dental clinic in Hadapsar for your family.',
        image: '/logo/clinic.png',
    },
    {
        slug: 'wisdom-tooth-extraction-hadapsar-glaze-dental',
        title: 'Wisdom Tooth Extraction in Hadapsar | Painless & Safe at Glaze Dental',
        excerpt: 'Impacted wisdom tooth causing pain? Understand the extraction process, costs, and aftercare tips for a smooth recovery at Glaze Dental in Hadapsar.',
        image: '/logo/teeth_3d_illustration_v1.png',
    },
];

// Helper function to escape XML
function escapeXml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Helper function to get full image URL
function getImageUrl(imagePath, baseUrl) {
    return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
}

function generateImageSitemap() {
    const baseUrl = 'https://bestdentistinhadapsar.com';
    const now = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    // Gallery page with all gallery images
    xml += `  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
`;
    galleryImages.forEach((img, index) => {
        const imageUrl = getImageUrl(img, baseUrl);
        xml += `    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(`Dental Treatment Result ${index + 1} - Glaze Dental Clinic`)}</image:title>
      <image:caption>${escapeXml(`Before and after dental treatment transformation at Glaze Dental Clinic Hadapsar - Patient success story ${index + 1}`)}</image:caption>
    </image:image>
`;
    });
    xml += `  </url>
`;

    // Blog posts with their images
    blogPosts.forEach((post) => {
        const postUrl = `${baseUrl}/blog/${post.slug}`;
        const imageUrl = getImageUrl(post.image, baseUrl);
        xml += `  <url>
    <loc>${escapeXml(postUrl)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
      <image:caption>${escapeXml(post.excerpt)}</image:caption>
    </image:image>
  </url>
`;
    });

    // Service pages with their images
    const servicePages = [
        {
            url: `${baseUrl}/services/dental-implants`,
            image: '/logo/hero_illustration_v1.png',
            title: 'Dental Implants at Glaze Dental',
            caption: 'Permanent teeth replacement with dental implants in Hadapsar',
        },
        {
            url: `${baseUrl}/services/root-canal-treatment`,
            image: '/logo/hero_illustration_v1.png',
            title: 'Painless Root Canal at Glaze Dental',
            caption: 'Single-sitting root canal treatment in Hadapsar',
        },
        {
            url: `${baseUrl}/services/orthodontics-braces`,
            image: '/logo/hero_illustration_v1.png',
            title: 'Orthodontics at Glaze Dental',
            caption: 'Braces and Invisalign treatment in Hadapsar',
        },
        {
            url: `${baseUrl}/services`,
            image: '/logo/hero_illustration_v1.png',
            title: 'Dental Services at Glaze Dental Clinic',
            caption: 'Comprehensive dental care services in Hadapsar',
        },
        {
            url: `${baseUrl}/about`,
            image: '/logo/clinic.png',
            title: 'Dr. Ashish Gadekar - Glaze Dental Clinic',
            caption: 'Glaze Dental Clinic in Hadapsar, Pune',
        },
    ];

    servicePages.forEach((page) => {
        const imageUrl = getImageUrl(page.image, baseUrl);
        xml += `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(page.title)}</image:title>
      <image:caption>${escapeXml(page.caption)}</image:caption>
    </image:image>
  </url>
`;
    });

    xml += `</urlset>`;

    // Write to public folder
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), xml, 'utf8');
    console.log('✅ Image sitemap generated: public/sitemap-images.xml');
}

generateImageSitemap();
