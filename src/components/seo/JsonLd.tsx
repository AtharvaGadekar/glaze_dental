const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'DentalClinic',
        '@id': 'https://bestdentistinhadapsar.com',
        name: 'Glaze Dental Clinic',
        alternateName: 'Glaze Dental Clinic & Implant Centre',
        image: 'https://bestdentistinhadapsar.com/logo/logo.png',
        url: 'https://bestdentistinhadapsar.com',
        telephone: '+919623989689',
        email: 'glazedental16@gmail.com',
        priceRange: '₹₹',
        description: 'Dental clinic in Hadapsar, Pune. Root canal treatment, dental implants, braces, smile designing. Serving Hadapsar, Magarpatta, Amanora Park Town, Kharadi and nearby. Expert care by Dr. Ashish Gadekar.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Shop 7, Gandharv Serenity, near Villoo Poonawala Hospital, Bhosale Nagar, Hadapsar',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            postalCode: '411028',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 18.5038516,
            longitude: 73.9271523,
        },
        areaServed: [
            { '@type': 'City', name: 'Hadapsar' },
            { '@type': 'City', name: 'Pune' },
            { '@type': 'Place', name: 'Magarpatta' },
            { '@type': 'Place', name: 'Amanora Park Town' },
            { '@type': 'Place', name: 'Kharadi' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Dental Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Dental Implants',
                        description: 'Permanent tooth replacement with dental implants',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Root Canal Treatment',
                        description: 'Painless single-sitting root canal treatment',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Orthodontics & Braces',
                        description: 'Teeth straightening with braces and Invisalign',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Cosmetic Dentistry',
                        description: 'Teeth whitening, smile makeovers, and cosmetic procedures',
                    },
                },
            ],
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '10:00',
                closes: '14:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '17:00',
                closes: '22:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '10:00',
                closes: '22:00',
            },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 5.0,
            reviewCount: 55,
            bestRating: 5,
            worstRating: 1,
        },
        sameAs: [
            'https://maps.app.goo.gl/X5q6KeT2ehpUyyZh7',
            'https://www.facebook.com/profile.php?id=61584589980455',
            'https://x.com/glazedental16',
            'https://www.youtube.com/@GlazeDental16'
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
