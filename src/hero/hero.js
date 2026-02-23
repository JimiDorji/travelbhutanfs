'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback, memo } from 'react';

/* -------------------- CONFIG -------------------- */
const BACKGROUNDS = [
    {
        url: '/tour/img/DiscovertheBhutan.avif',
        alt: "Scenic view of Paro Taktsang (Tiger's Nest Monastery) perched on a cliff in Bhutan",
    },
];

const STATS = [
    { value: '98%', label: 'Client Satisfaction', suffix: '+' },
    { value: '30', label: 'Curated Tours', suffix: '+' },
    { value: '4.9', label: 'Average Rating', suffix: '★' },
];

const CRYPTO_COINS = [
    {
        symbol: 'BTC',
        icon: '/icons/crypto/bitcoin.svg',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        shadow: 'shadow-orange-500/20',
    },
    {
        symbol: 'BNB',
        icon: '/icons/crypto/bnb.svg',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
        shadow: 'shadow-yellow-500/20',
    },
    {
        symbol: 'USDT',
        icon: '/icons/crypto/usdt.svg',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        shadow: 'shadow-emerald-500/20',
    },
    {
        symbol: 'ETH',
        icon: '/icons/crypto/ethereum.svg',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        shadow: 'shadow-indigo-500/20',
    },
];

/* -------------------- COMPONENT -------------------- */
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const intervalRef = useRef(null);
    const handleVideoClose = useCallback(() => setIsVideoModalOpen(false), []);

    /* -------------------- Slideshow -------------------- */
    useEffect(() => {
        if (BACKGROUNDS.length <= 1) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) return;

        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 6000);

        return () => clearInterval(intervalRef.current);
    }, []);

    /* -------------------- Handlers -------------------- */
    const handleVideoOpen = useCallback(() => setIsVideoModalOpen(true), []);
    const stopPropagation = useCallback((e) => e.stopPropagation(), []);

    return (
        <>
            <section
                id="home"
                aria-label="Hero section showcasing Bhutan travel experiences"
                className="relative min-h-[100svh] overflow-hidden bg-slate-950"
            >
                {/* Background Slideshow */}
                <div className="absolute inset-0" aria-live="polite" aria-atomic="true">
                    {BACKGROUNDS.map((bg, index) => (
                        <div
                            key={bg.url}
                            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={bg.url}
                                alt={bg.alt}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                quality={90}
                                className="object-cover"
                            />
                        </div>
                    ))}

                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/60 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex min-h-[100svh] items-center">
                        <div className="w-full max-w-3xl py-20">
                            {/* Heading */}
                            <h1 className="mb-6 leading-tight">
                                <span className="block text-5xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                                    Discover
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-3">
                                        Bhutan
                                    </span>
                                </span>
                                <span className="block mt-2 text-2xl font-light text-white/80 sm:text-3xl lg:text-4xl">
                                    The Last Himalayan Kingdom
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
                                Immerse yourself in ancient Buddhist culture, breathtaking
                                landscapes, and authentic Himalayan experiences.
                            </p>

                            {/* Crypto Payments */}
                            <div className="mb-12">
                                <div className="flex flex-wrap items-center gap-3">
                                    {CRYPTO_COINS.map((coin) => (
                                        <div
                                            key={coin.symbol}
                                            className={`flex items-center gap-3 rounded-xl border ${coin.border} ${coin.bg} px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${coin.shadow}`}
                                            role="img"
                                            aria-label={`${coin.symbol} payment accepted`}
                                        >
                                            <img
                                                src={coin.icon}
                                                alt={`${coin.symbol} logo`}
                                                className="w-5 h-5 object-contain"
                                            />
                                            <span className={`text-sm font-semibold ${coin.text}`}>
                                                {coin.symbol}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                                <Link
                                    href="/plan-trip"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Plan Your Journey →
                                    </span>
                                </Link>

                                <button
                                    onClick={handleVideoOpen}
                                    className="group flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
                                    aria-label="Watch Bhutan travel story video"
                                >
                                    ▶ Watch Travel Story
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10"
                                    >
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                                                {stat.value}
                                                <span className="text-cyan-400 ml-0.5">
                                                    {stat.suffix}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-xs text-white/50 sm:text-sm">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player"
                    onClick={handleVideoClose} // backdrop click closes
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
                    >
                        <iframe
                            src="https://www.youtube.com/embed/7icutzq-9iY?autoplay=1&mute=1&rel=0"
                            title="Bhutan in 30 Seconds - Promotional Video"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />

                        {/* Close button */}
                        <button
                            onClick={handleVideoClose}
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                            aria-label="Close video"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(Hero);