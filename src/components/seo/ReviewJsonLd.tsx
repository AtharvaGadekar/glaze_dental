import { testimonials } from '@/data/testimonials';

const ReviewJsonLd = () => {
    // Calculate average rating (assuming all are 5 stars based on the testimonials)
    const averageRating = 5.0;
    const reviewCount = testimonials.length;

    const reviews = testimonials.map((testimonial) => ({
        '@type': 'Review',
        author: {
            '@type': 'Person',
            name: testimonial.author,
        },
        reviewRating: {
            '@type': 'Rating',
            ratingValue: 5,
            bestRating: 5,
        },
        reviewBody: testimonial.content,
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://bestdentistinhadapsar.com',
        name: 'Glaze Dental Clinic',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: averageRating,
            reviewCount: reviewCount,
            bestRating: 5,
            worstRating: 1,
        },
        review: reviews,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default ReviewJsonLd;
