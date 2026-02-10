'use client';

import { useState, useRef, useEffect } from 'react';

import { testimonials } from '@/data/testimonials';

const TestimonialCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-teal-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Patient <span className="text-cyan-600">Stories</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl">
                            Don't just take our word for it. Here's what our happy patients have to say about their experience at Glaze Dental.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-3 rounded-full border border-gray-200 transition-all ${canScrollLeft
                                ? 'bg-white text-gray-800 hover:bg-cyan-50 hover:border-cyan-200 shadow-sm'
                                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                }`}
                            aria-label="Scroll left"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-3 rounded-full border border-gray-200 transition-all ${canScrollRight
                                ? 'bg-white text-gray-800 hover:bg-cyan-50 hover:border-cyan-200 shadow-sm'
                                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                                }`}
                            aria-label="Scroll right"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 snap-x hide-scrollbar"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-[400px] snap-center"
                        >
                            <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center text-cyan-600 font-bold text-lg">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{testimonial.author}</h3>
                                        <div className="flex text-yellow-400 text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex-grow">
                                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-gray-100 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8v8h6v10h-10v-10h4v-8h16v8h-4v10h10v-10h-6v-8h-16z"></path>
                                    </svg>
                                    <p className="text-gray-600 relative z-10 leading-relaxed text-sm">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
