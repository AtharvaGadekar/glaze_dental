import { ServicesList } from "@/components";
import { Metadata } from "next";
import { getCanonicalUrl, getOgImageUrl } from '@/lib/seo';

export const metadata: Metadata = {
    title: "Dental Services in Hadapsar | Root Canal, Implants & More",
    description: "Comprehensive dental care in Hadapsar. Specializing in Root Canal Treatment, Dental Implants, Teeth Whitening, and Braces. Affordable & Painless.",
    keywords: "dental services hadapsar, root canal treatment, dental implants, teeth whitening, braces hadapsar, cosmetic dentistry, dental checkup hadapsar",
    openGraph: {
        title: "Dental Services in Hadapsar | Root Canal, Implants & More",
        description: "Comprehensive dental care in Hadapsar. Specializing in Root Canal Treatment, Dental Implants, Teeth Whitening, and Braces. Affordable & Painless.",
        url: getCanonicalUrl('/services'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Dental Services at Glaze Dental Clinic',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Dental Services in Hadapsar | Root Canal, Implants & More",
        description: "Comprehensive dental care in Hadapsar. Specializing in Root Canal Treatment, Dental Implants, Teeth Whitening, and Braces.",
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')],
    },
    alternates: {
        canonical: getCanonicalUrl('/services'),
    },
};

import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <ServiceJsonLd />
            {/* Modern Hero Section */}
            <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
                    <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-cyan-100">World-Class Dental Care</span>
                    </div> */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Expert Dental Services<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                            Tailored For You
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        From routine checkups to advanced cosmetic procedures and home visits,
                        we combine technology with compassion to deliver the best care.
                    </p>
                </div>
            </section>

            {/* Services List Integration */}
            <div className="-mt-10 relative z-20">
                <ServicesList />
            </div>

            {/* CTA Section */}
            {/* <section className="py-20 bg-white border-t border-gray-100"> */}
            {/* <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-cyan-100 shadow-xl relative overflow-hidden">
                        {/* Decorative Circles */}
            {/* <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl" />

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
                            Need a Custom Treatment Plan?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg relative">
                            Every smile is unique. Book a personalized consultation today and let our experts guide you to your perfect smile.
                        </p>
                        <a
                            href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300 text-lg"
                        >
                            Schedule Consultation
                        </a>
                    </div> */}
            {/* </div> */}
            {/* </section> */}
        </div>
    );
}
