import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { getCanonicalUrl, getOgImageUrl, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Dental Implants in Hadapsar | Permanent Teeth Solution',
    description: 'Best Dental Implants in Hadapsar, Pune. Restore your smile with permanent, natural-looking tooth replacements at Glaze Dental Clinic. Affordable prices.',
    keywords: 'dental implants hadapsar, tooth implant pune, implant dentist hadapsar, dental implant cost hadapsar, best implantologist pune, permanent teeth replacement',
    openGraph: {
        title: 'Dental Implants in Hadapsar | Permanent Teeth Solution',
        description: 'Best Dental Implants in Hadapsar, Pune. Restore your smile with permanent, natural-looking tooth replacements at Glaze Dental Clinic.',
        url: getCanonicalUrl('/services/dental-implants'),
        type: 'website',
        images: [
            {
                url: getOgImageUrl('/logo/hero_illustration_v1.png'),
                width: 1200,
                height: 630,
                alt: 'Dental Implants at Glaze Dental'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dental Implants in Hadapsar | Permanent Teeth Solution',
        description: 'Best Dental Implants in Hadapsar, Pune. Restore your smile with permanent, natural-looking tooth replacements.',
        images: [getOgImageUrl('/logo/hero_illustration_v1.png')]
    },
    alternates: {
        canonical: getCanonicalUrl('/services/dental-implants'),
    },
};

export default function DentalImplantsPage() {
    const breadcrumbs = [
        { name: 'Home', url: SITE_URL },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Dental Implants', url: `${SITE_URL}/services/dental-implants` },
    ];

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd items={breadcrumbs} />
            <ServiceJsonLd />
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-cyan-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Dental Implants in <span className="text-cyan-400">Hadapsar</span>
                        </h1>
                        <p className="text-lg text-cyan-50 mb-8">
                            The gold standard for replacing missing teeth. Permanent, natural, and built to last a lifetime.
                        </p>
                        <div className="flex gap-4">
                            <a href="tel:+919623989689" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-cyan-500/30">
                                Get Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">Why choose Dental Implants?</h2>
                    <p>
                        A dental implant is a permanent fixture that anchors a replacement tooth. It is a popular and effective long-term solution for people who suffer from missing teeth, failing teeth, or chronic dental problems.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                            <h3 className="font-bold text-cyan-800 text-xl mb-3">Natural Look & Feel</h3>
                            <p>Implants function exactly like your own teeth, allowing you to eat your favorite foods with confidence.</p>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                            <h3 className="font-bold text-teal-800 text-xl mb-3">Permanent Solution</h3>
                            <p>With proper care, dental implants can last a lifetime, unlike dentures which may need frequent replacement.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">The Implant Process at Glaze Dental</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Consultation:</strong> Dr. Ashish Gadekar evaluates your jawbone health using advanced 3D imaging.</li>
                        <li><strong>Placement:</strong> The titanium implant is painlessly placed into the jawbone.</li>
                        <li><strong>Healing:</strong> A period of 3-6 months allows the bone to fuse with the implant.</li>
                        <li><strong>Restoration:</strong> A custom-made crown is attached, completing your new smile.</li>
                    </ol>

                    <h2 className="text-2xl font-bold text-gray-900">Cost of Dental Implants in Hadapsar</h2>
                    <p>
                        We offer affordable dental implant packages starting from <strong>₹20,000</strong>. Our pricing is transparent, and we offer EMI options to minimalize the financial burden. The exact cost depends on the brand of implant (Osstem, Nobel Biocare, Straumann) and the crown material.
                    </p>

                    <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to restore your smile?</h3>
                        <p className="mb-6 opacity-80">Book your appointment with the best implantologist in Pune today.</p>
                        <a href="https://calendar.app.google/tb25Ktz9esZRHsdt6" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Book Appointment Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
