export interface Service {
    title: string;
    slug?: string;
    duration?: string;
    price?: string;
    description?: string;
    relatedLink?: { label: string; href: string };
    icon?: string;
    isHomeService?: boolean;
}

export const services: Service[] = [
    {
        title: "Orthodontic Braces",
        slug: "/services/orthodontics-braces",
        duration: "45 mins",
        price: "Free Consultation",
        description: "Orthodontic braces are devices used to align and straighten teeth and correct jaw issues by applying steady pressure over time to shift them into a more desirable position. They consist of brackets, wires, and bands, and are available in different types, such as traditional metal, ceramic, lingual (on the back of teeth), and self-ligating braces.",
        relatedLink: { label: "Smile designing & cosmetic dentistry", href: "/services" },
    },
    {
        title: "Root Canal Treatment",
        slug: "/services/root-canal-treatment",
        duration: "1 hr",
        price: "Starts @ ₹4,000",
        description: "Root canal treatment is a dental procedure to remove infected or inflamed pulp from a tooth to relieve pain and save the tooth from extraction. The process involves numbing the area, making an opening to clean and shape the inside of the tooth and root canals, and then filling and sealing the space to prevent future infection.",
        relatedLink: { label: "Dental implants", href: "/services/dental-implants" },
    },
    {
        title: "Dental Implants",
        slug: "/services/dental-implants",
        duration: "1 hr",
        price: "Free Consultation",
        description: "Dental implants are artificial tooth roots, usually made of titanium, that are surgically placed into your jawbone to provide a stable and permanent foundation for replacement teeth. They are the closest restorative option to natural teeth in terms of look, feel, and function.",
        relatedLink: { label: "Root canal treatment", href: "/services/root-canal-treatment" },
    },
    {
        title: "Professional Whitening",
        slug: "/services/teeth-whitening",
        duration: "45 mins",
        price: "Free Consultation",
        description: "Teeth whitening designed to lighten the color of teeth and remove stains, using bleaching agents like hydrogen peroxide. The best method depends on the type and severity of stains, desired results, budget, and existing dental health.",
        relatedLink: { label: "All services", href: "/services" },
    },
    {
        title: "Complete Checkup",
        slug: "/services/dental-checkup",
        duration: "20 mins",
        price: "₹200",
        description: "Detailed oral health examination including gum health check, cavity detection, and personalized care plan. Essential for maintaining long-term oral hygiene.",
        relatedLink: { label: "Root canal & implants", href: "/services" },
    },
    {
        title: "Home Denture Service",
        slug: "/services/home-denture-service",
        description: "Experience complete denture care without leaving your home. From consultation to fitting, we bring professional service to your doorstep.",
        isHomeService: true,
        relatedLink: { label: "Dental implants", href: "/services/dental-implants" },
    }
];
