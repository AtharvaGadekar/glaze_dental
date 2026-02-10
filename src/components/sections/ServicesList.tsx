'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { services } from '@/data/services';

const ServicesList = ({ limit, compact = false }: { limit?: number, compact?: boolean }) => {
    const displayedServices = limit ? services.slice(0, limit) : services;
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleService = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className={`relative ${compact ? 'py-16' : 'py-20 md:py-32'} z-10`} id="services">
            {!compact && (
                <div className="absolute inset-0 bg-slate-50">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {compact && (
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-cyan-600">Services</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive dental care tailored to your needs. Tap on a service to learn more.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedServices.map((service, index) => {
                        const isExpanded = expandedIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => toggleService(index)}
                                className={`cursor-pointer group relative flex flex-col bg-white rounded-2xl transition-all duration-300 border border-gray-100 overflow-hidden ${isExpanded
                                    ? 'shadow-xl ring-2 ring-cyan-500/20 md:-translate-y-1'
                                    : 'shadow-md hover:shadow-lg'
                                    }`}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <span className={`text-4xl font-black transition-colors duration-300 ${isExpanded ? 'text-cyan-500' : 'text-gray-100 group-hover:text-gray-200'
                                            }`}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-50 text-gray-400'}`}>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isExpanded ? 'text-cyan-700' : 'text-gray-900'
                                        }`}>
                                        {service.slug ? (
                                            <Link href={service.slug} onClick={(e) => e.stopPropagation()} className="hover:underline focus:outline-none">
                                                {service.title}
                                            </Link>
                                        ) : (
                                            service.title
                                        )}
                                    </h3>

                                    {/* Collapsible Content */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                                        }`}>
                                        <div className="overflow-hidden">
                                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                                {service.description}
                                            </p>
                                            {service.relatedLink && (
                                                <p className="text-sm text-cyan-600 mb-4">
                                                    See also: <Link href={service.relatedLink.href} onClick={(e) => e.stopPropagation()} className="font-medium hover:underline">{service.relatedLink.label}</Link>
                                                </p>
                                            )}

                                            <div className="space-y-4">
                                                {service.duration && (
                                                    <div className="flex items-center text-xs font-medium text-gray-500">
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {service.duration} • {service.price}
                                                    </div>
                                                )}

                                                <a
                                                    href="https://calendar.app.google/tb25Ktz9esZRHsdt6"
                                                    onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking button
                                                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-cyan-600 text-white font-semibold text-sm hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/20"
                                                >
                                                    Book Now
                                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {!isExpanded && (
                                        <p className="text-xs text-gray-400 font-medium mt-2">Tap to view details...</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {compact && (
                    <div className="text-center mt-10">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                        >
                            View all services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesList;
