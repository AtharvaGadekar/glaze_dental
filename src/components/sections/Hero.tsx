import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { heroData } from '../../data/hero';

const Hero = () => {
    // Helper to render description with highlighted words
    const renderDescription = (text: string, highlights: string[]) => {
        let parts: React.ReactNode[] = [text];
        highlights.forEach(highlight => {
            const newParts: React.ReactNode[] = [];
            parts.forEach(part => {
                if (typeof part === 'string') {
                    const split = part.split(highlight);
                    split.forEach((s, i) => {
                        if (s) newParts.push(s);
                        if (i < split.length - 1) {
                            newParts.push(<strong key={`${highlight}-${i}`}>{highlight}</strong>);
                        }
                    });
                } else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });
        return parts;
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                            {heroData.headline.prefix} <span className="text-cyan-600">{heroData.headline.highlight}</span> {heroData.headline.suffix}
                            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent block mt-2">
                                {heroData.headline.gradientText}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {renderDescription(heroData.description.text, heroData.description.highlightedWords)}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <a
                                href={`tel:${heroData.cta.callButton.phoneNumber}`}
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="relative z-10">{heroData.cta.callButton.text}</span>
                            </a>

                            <a
                                href={heroData.cta.scheduleButton.link}
                                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full shadow-lg border-2 border-cyan-100 hover:border-cyan-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{heroData.cta.scheduleButton.text}</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>15+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>10,000+ Happy Patients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Modern Technology</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Hero Visual */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-2xl aspect-square">
                            {/* Decorative Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 to-teal-300 rounded-full blur-3xl opacity-20 animate-pulse" />

                            <div className="relative w-full h-full transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src={heroData.image.src}
                                    alt={heroData.image.alt}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 24C240 74 480 74 720 49C960 24 1200 24 1440 49V74H0V24Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
