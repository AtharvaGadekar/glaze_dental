'use client';

import { useState, useEffect } from 'react';

const FloatingReviews = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-6 z-40 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
        >
            <div className="bg-white rounded-xl shadow-2xl p-4 flex items-center gap-4 border border-gray-100 max-w-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                {/* Google G Logo */}
                <a
                    href="https://www.google.com/search?sca_esv=34fb7e70802b3bda&rlz=1C5GCEM_enIN1179IN1179&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0B4Jrm5QfKMuHQ0Nomk_Iz9eNIR8-0ACs0k-1wOEQGECGokKEGYNS5XXyk_B3Cq-sNwK92wUvKcXj8PBMC1ZEB0FLbfalCMnOCQ5jzBNyHMf5x-OdK0tBmn-4e9aKy6DffDdvQvQW6kh87EhZvhwABx5cBShAmFgB4AajYzXJ1_xuaKZg%3D%3D&q=Glaze+Dental+Clinic+-+Speciality+Dental+Clinic+and+Implant+Centre+Reviews&sa=X&biw=1710&bih=981&dpr=2&zx=1765592295987&no_sw_cr=1&dlnr=1&ved=2ahUKEwjDmKXsv7mRAxU12TgGHdYEJNUQl6ENegQICRAH#scso=_7sw8aZ3yOuqq4-EP_8zK2QM_85:0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                    </div>
                </a>

                {/* Text Content */}
                <div>
                    <div className="flex items-center gap-1 mb-0.5">
                        <span className="font-bold text-gray-900 text-lg">5.0</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className="w-4 h-4 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">
                        Based on <span className="underline decoration-gray-300">55 reviews</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FloatingReviews;
