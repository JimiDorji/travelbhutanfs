'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* -------------------- CONFIG -------------------- */

const BACKGROUNDS = [
    'https://amen-api.flamingoitstudio.net/media/carousel/Discover%20the%20Bhutan.jpg',
];

const STATS = [
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Curated Tours' },
    { value: '4.9★', label: 'Average Rating' },
];

const CRYPTO_ICONS = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: '₿',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        shadow: 'hover:shadow-amber-500/20',
        ping: 'bg-orange-400',
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'Ξ',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        shadow: 'hover:shadow-indigo-500/20',
        ping: 'bg-blue-400',
    },
    {
        name: 'BNB',
        symbol: 'BNB',
        icon: '⚡',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400',
        shadow: 'hover:shadow-yellow-500/20',
        ping: 'bg-yellow-400',
    },
    {
        name: 'USDT',
        symbol: 'USDT',
        icon: '💵',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        shadow: 'hover:shadow-emerald-500/20',
        ping: 'bg-green-400',
    },
];

/* -------------------- COMPONENT -------------------- */

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    /* Auto slideshow */
    useEffect(() => {
        if (BACKGROUNDS.length <= 1) return;

        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
        }, 6000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section
            id="home"
            role="banner"
            aria-label="Hero section showcasing Bhutan travel experiences"
            className="relative min-h-[100svh] overflow-hidden"
        >
            {/* -------------------- Background Slideshow -------------------- */}
            <div className="absolute inset-0" aria-live="polite">
                {BACKGROUNDS.map((src, index) => (
                    <Image
                        key={src}
                        src={src}
                        alt="Scenic landscape of Bhutan mountains and monasteries"
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className={`object-cover transition-opacity duration-1000 will-change-[opacity] ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}

                {/* Layered Overlays */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-blue-950/60 to-indigo-950/70" />
            </div>

            {/* -------------------- Content -------------------- */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex min-h-[100svh] items-center">
                    <div className="max-w-2xl py-20">
                        {/* Brand Line */}
                        <div className="mb-4 flex items-center gap-3 text-sm tracking-widest text-white/60">
                            <span>Alpine</span>
                            <span className="text-cyan-400">●</span>
                            <span>Odyssey</span>
                            <span className="text-cyan-400">●</span>
                            <span>Bhutan</span>
                        </div>

                        {/* Eyebrow */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="text-xs tracking-widest text-white/70">
                                BHUTAN • TOURS • TREKKINGS • FESTIVALS
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="mb-6 leading-tight">
                            <span className="block text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                                Discover Bhutan
                            </span>
                            <span className="block text-4xl font-light text-cyan-300 sm:text-5xl lg:text-6xl">
                                The Land of the Thunder Dragon
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                            Immerse yourself in ancient Himalayan culture, breathtaking
                            landscapes, sacred monasteries, and authentic spiritual journeys
                            across Bhutan’s most iconic destinations.
                        </p>

                        {/* -------------------- Crypto Payment Section -------------------- */}
                        <div className="mb-12">
                            {/* Trust Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <span className="text-xs font-medium tracking-wide text-emerald-200">
                                    CRYPTO & BINANCE PAY ACCEPTED
                                </span>
                            </div>

                            {/* Professional Payment Icons */}
                            <div className="flex flex-wrap items-center gap-3">
                                {[
                                    { name: "Bitcoin", symbol: "BTC", src: "/icons/crypto/bitcoin.svg" },
                                    { name: "Ethereum", symbol: "ETH", src: "/icons/crypto/ethereum.svg" },
                                    { name: "BNB", symbol: "BNB", src: "/icons/crypto/bnb.svg" },
                                    { name: "USDT", symbol: "USDT", src: "/icons/crypto/usdt.svg" },
                                ].map((coin) => (
                                    <div
                                        key={coin.symbol}
                                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                                    >
                                        <img
                                            src={coin.src}
                                            alt={`${coin.name} logo`}
                                            className="h-5 w-5 object-contain"
                                        />
                                        <span className="text-sm font-medium text-white/90">
                                            {coin.symbol}
                                        </span>
                                    </div>
                                ))}

                                {/* Divider */}
                                <div className="mx-1 h-6 w-px bg-white/10" />

                                {/* Binance Pay Highlight */}
                                <div className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-yellow-500/20 hover:shadow-lg">
                                    <img
                                        src="/icons/crypto/binance.svg"
                                        alt="Binance Pay logo"
                                        className="h-5 w-5 object-contain"
                                    />
                                    <span className="text-sm font-semibold tracking-wide text-yellow-400">
                                        BINANCE PAY
                                    </span>
                                </div>

                                <span className="ml-2 text-xs text-white/40">
                                    Supports 100+ cryptocurrencies
                                </span>
                            </div>
                        </div>


                        {/* -------------------- CTA Buttons -------------------- */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/plan-trip"
                                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                            >
                                <span className="relative z-10">Plan Your Bhutan Journey</span>
                                <span className="relative z-10 ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
                            </Link>

                            <button
                                aria-label="Watch Bhutan travel story video"
                                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
                            >
                                <span className="relative z-10">Watch Travel Story</span>
                                <span className="relative z-10 ml-2">▶</span>
                            </button>
                        </div>

                        {/* -------------------- Stats -------------------- */}
                        <div className="mt-14 grid grid-cols-2 gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="text-center group">
                                    <div className="text-2xl font-semibold text-white sm:text-3xl transition-transform group-hover:scale-110">
                                        {stat.value}
                                    </div>
                                    <p className="mt-1 text-xs text-white/60 sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="mt-12 flex items-center gap-2 text-xs tracking-wider text-white/50">
                            <span className="animate-bounce motion-reduce:animate-none">
                                ↓
                            </span>
                            Scroll to explore
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
