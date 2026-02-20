'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback, memo } from 'react';

/* -------------------- CONFIG -------------------- */
const BACKGROUNDS = [
    {
        url: '/tour/img/DiscovertheBhutan.avif',
        alt: 'Scenic view of Paro Taktsang (Tiger\'s Nest Monastery) perched on a cliff in Bhutan'
    },
    // Add more backgrounds as needed
];

const STATS = [
    { value: '98%', label: 'Client Satisfaction', suffix: '+', prefix: '' },
    { value: '30', label: 'Curated Tours', suffix: '+', prefix: '' },
    { value: '4.9', label: 'Average Rating', suffix: '★', prefix: '' },
];

// Update your CRYPTO_COINS array to use SVG paths
const CRYPTO_COINS = [
    {
        symbol: 'BTC',
        icon: '/icons/crypto/bitcoin.svg', // Path to your SVG
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        shadow: 'shadow-orange-500/20',
        ping: 'bg-orange-400'
    },

    {
        symbol: 'BNB',
        icon: '/icons/crypto/bnb.svg',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
        shadow: 'shadow-yellow-500/20',
        ping: 'bg-yellow-400'
    },
    {
        symbol: 'USDT',
        icon: '/icons/crypto/usdt.svg',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        shadow: 'shadow-emerald-500/20',
        ping: 'bg-green-400'
    },
    {
        symbol: 'ETH',
        icon: '/icons/crypto/ethereum.svg',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        shadow: 'shadow-indigo-500/20',
        ping: 'bg-blue-400'
    },
];

// Animation variants
const animations = {
    fadeInUp: 'animate-[fadeInUp_0.6s_ease-out_forwards]',
    fadeIn: 'animate-[fadeIn_0.8s_ease-out_forwards]',
    scaleIn: 'animate-[scaleIn_0.5s_ease-out_forwards]',
};

/* -------------------- COMPONENT -------------------- */
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    /* Auto slideshow with cleanup */
    useEffect(() => {
        if (BACKGROUNDS.length <= 1) return;

        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 6000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleVideoOpen = useCallback(() => setIsVideoModalOpen(true), []);
    const handleVideoClose = useCallback(() => setIsVideoModalOpen(false), []);

    return (
        <>
            <section
                id="home"
                aria-label="Hero section showcasing Bhutan travel experiences"
                className="relative min-h-[100svh] overflow-hidden bg-slate-950"
            >
                {/* -------------------- Background Slideshow -------------------- */}
                <div className="absolute inset-0" aria-live="polite" aria-atomic="true">
                    {BACKGROUNDS.map((bg, index) => (
                        <div
                            key={bg.url}
                            className={`absolute inset-0 transition-opacity duration-1000 will-change-[opacity] ${currentSlide === index ? 'opacity-100' : 'opacity-0'
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
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                        </div>
                    ))}

                    {/* Enhanced Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/60 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent" />


                    {/* Animated Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.0)_1px,transparent_1px)] bg-[length:24px_24px]" />
                    </div>
                </div>

                {/* -------------------- Content -------------------- */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex min-h-[100svh] items-center">
                        <div className="w-full max-w-3xl py-20">
                            {/* Breadcrumb */}
                            <nav aria-label="Breadcrumb" className="mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                                <ol className="flex items-center gap-3 text-sm">
                                    <li className="flex items-center gap-3">
                                        <span className="text-white/40">Alpine</span>
                                        <span className="text-cyan-400" aria-hidden="true">●</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-white/40">Odyssey</span>
                                        <span className="text-cyan-400" aria-hidden="true">●</span>
                                    </li>
                                    <li className="text-white/60">Bhutan</li>
                                </ol>
                            </nav>

                            {/* Eyebrow */}
                            <div
                                className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]"
                                role="status"
                                aria-label="Services offered"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                </span>
                                <span className="text-xs font-medium tracking-wider text-white/90 sm:text-sm">
                                    LUXURY TRAVEL • CULTURAL TOURS • HIMALAYAN TREKS
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="mb-6 leading-tight opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
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
                            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                                Immerse yourself in ancient Buddhist culture, breathtaking
                                landscapes, and authentic Himalayan experiences. From sacred
                                monasteries to untouched mountain trails.
                            </p>

                            {/* Crypto Payment Section */}
                            <div className="mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                                {/* Trust Badge */}
                                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 px-5 py-2.5 backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                                    </span>
                                    <span className="text-xs font-medium tracking-wide text-emerald-200 sm:text-sm">
                                        CRYPTO & BINANCE PAY ACCEPTED
                                    </span>
                                </div>

                                {/* Payment Methods Grid */}
                                <div className="flex flex-wrap items-center gap-3">
                                    {CRYPTO_COINS.map((coin, index) => (
                                        <div
                                            key={coin.symbol}
                                            className={`group flex items-center gap-3 rounded-xl border ${coin.border} ${coin.bg} px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg ${coin.shadow}`}
                                            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                            role="img"
                                            aria-label={`${coin.name} payment accepted`}
                                        >
                                            <img
                                                src={coin.icon}
                                                alt={`${coin.name} logo`}
                                                className="w-5 h-5 object-contain"
                                            />
                                            <div className="flex flex-col">
                                                <span className={`text-sm font-semibold ${coin.text}`}>
                                                    {coin.symbol}
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Divider */}
                                    <div className="mx-2 h-8 w-px bg-white/10" aria-hidden="true" />

                                    {/* Binance Pay Highlight - Using SVG */}
                                    <div className="group flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
                                        <img
                                            src="/icons/crypto/binance.svg"
                                            alt="Binance Pay logo"
                                            className="w-5 h-5 object-contain"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-yellow-400">
                                                Binance Pay
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Support text */}
                                <p className="mt-4 text-xs text-white/40">
                                    ✦ Supports 100+ cryptocurrencies • Zero transaction fees
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                                <Link
                                    href="/plan-trip"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                                    aria-label="Start planning your Bhutan journey"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Plan Your Journey
                                        <svg
                                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
                                </Link>

                                <button
                                    onClick={handleVideoOpen}
                                    className="group flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    aria-label="Watch Bhutan travel story video"
                                >
                                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <span className="absolute inset-0 rounded-full animate-ping bg-white/20 opacity-75 group-hover:opacity-100"></span>
                                        <span className="relative text-white ml-0.5">▶</span>
                                    </span>
                                    <span>Watch Travel Story</span>
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
                                {STATS.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                        style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                                    >
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl transition-transform group-hover:scale-110">
                                                {stat.value}
                                                <span className="text-cyan-400 ml-0.5">{stat.suffix}</span>
                                            </div>
                                            <p className="mt-1 text-xs text-white/50 sm:text-sm">
                                                {stat.label}
                                            </p>
                                        </div>

                                        {/* Decorative corner */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/20 rounded-tl-xl" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/20 rounded-br-xl" />
                                    </div>
                                ))}
                            </div>

                            {/* Scroll Indicator */}
                            <div
                                className="mt-16 flex items-center gap-3 text-xs tracking-wider text-white/40 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"
                                aria-hidden="true"
                            >
                                <span className="relative flex h-8 w-5 items-start justify-center">
                                    <span className="absolute top-0 h-3 w-0.5 rounded-full bg-white/30"></span>
                                    <span className="absolute top-1 h-3 w-0.5 rounded-full bg-white/60 animate-[bounce_2s_ease-in-out_infinite]"></span>
                                </span>
                                <span>Scroll to explore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player"
                    onClick={handleVideoClose} // Close when clicking backdrop
                >
                    <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden">
                        {/* YouTube Embed */}
                        <iframe
                            src="https://www.youtube.com/embed/7icutzq-9iY?autoplay=1&mute=1&rel=0"
                            title="Bhutan in 30 Seconds - Promotional Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />

                        {/* Close button */}
                        <button
                            onClick={handleVideoClose}
                            className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                            aria-label="Close video"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default memo(Hero);