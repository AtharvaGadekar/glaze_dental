export interface HeroData {
    headline: {
        prefix: string;
        highlight: string;
        suffix: string;
        gradientText: string;
    };
    description: {
        text: string;
        highlightedWords: string[];
    };
    cta: {
        callButton: {
            text: string;
            phoneNumber: string;
        };
        scheduleButton: {
            text: string;
            link: string;
        };
    };
    image: {
        src: string;
        alt: string;
    };
}

export const heroData: HeroData = {
    headline: {
        prefix: "Dental Clinic in",
        highlight: "Hadapsar",
        suffix: ",",
        gradientText: "Pune | Expert Care & Smile Makeovers"
    },
    description: {
        text: "Glaze Dental Clinic in Hadapsar offers root canal treatment, dental implants, braces, and smile designing. Painless procedures and modern technology. We also serve patients from Magarpatta, Kharadi and nearby areas.",
        highlightedWords: ["root canal treatment", "dental implants", "Magarpatta"]
    },
    cta: {
        callButton: {
            text: "Call Now",
            phoneNumber: "+919623989689"
        },
        scheduleButton: {
            text: "Schedule Appointment",
            link: "https://calendar.app.google/tb25Ktz9esZRHsdt6"
        }
    },
    image: {
        src: "/logo/glaze_dental_logo.png",
        alt: "Glaze Dental Clinic - Best Dentist in Hadapsar"
    }
};
