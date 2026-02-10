import { services } from '@/data/services';

const ServiceJsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization', // Or Dentist, but we are listing services
        name: 'Glaze Dental Clinic', // Re-iterating context
        url: 'https://dentalclinicinhadapsar.com',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Dental Services',
            itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: service.title,
                    description: service.description,
                },
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: service.price?.replace(/[^0-9]/g, '') || '0',
                    priceCurrency: 'INR',
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default ServiceJsonLd;
