"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronLeft,
    Calendar,
    Users,
    Star,
    Check,
    X,
    ChevronRight,
    Bookmark,
    MapPin,
    Clock,
    Award,
    Shield,
    Share2,
    Download,
    Maximize2,
    Heart,
    Sparkles,
    Coffee,
    Camera,
    Wifi,
    Car,
    Home,
    Utensils,
    Languages,
    HelpCircle,
    ChevronDown
} from "lucide-react";
import BookingCard from "./BookingCard";

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function TourDetailsPage({ tour }) {
    const [activeTab, setActiveTab] = useState("itinerary");
    const [isSaved, setIsSaved] = useState(false);
    const [openDay, setOpenDay] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const [showAllHighlights, setShowAllHighlights] = useState(false);

    const sectionRefs = useRef({});
    const headerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);


    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);

            // progress calculation (safe here)
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);

            // Active section detection
            const sections = ['overview', 'itinerary', 'includes', 'location', 'reviews'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        handleScroll(); // initialize once
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: tour.title,
                    text: `Check out this amazing tour: ${tour.title}`,
                    url: window.location.href,
                });
            } catch (err) {
                setShowShareTooltip(true);
                setTimeout(() => setShowShareTooltip(false), 2000);
            }
        } else {
            // Fallback
            navigator.clipboard.writeText(window.location.href);
            setShowShareTooltip(true);
            setTimeout(() => setShowShareTooltip(false), 2000);
        }
    }, [tour.title]);

    if (!tour) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#070b14] to-[#0a0f1a]">
                <div className="text-center space-y-4">
                    <div className="relative mx-auto h-32 w-32">
                        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20" />
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                            <span className="text-5xl">🏔️</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white">Tour Not Found</h2>
                    <p className="text-white/60">The tour you're looking for doesn't exist.</p>
                    <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Back to Tours
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#070b14] to-[#0a0f1a] text-white">
            {/* Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-[60] transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Sticky Header */}
            <header
                ref={headerRef}
                className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur-xl"
            >
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/tours"
                                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-white/60 transition-all hover:bg-white/10 hover:text-cyan-400"
                            >
                                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                <span className="text-sm font-medium">Back</span>
                            </Link>

                            {/* Breadcrumb */}
                            <nav className="hidden md:flex items-center gap-2 text-sm">
                                <Link href="/" className="text-white/40 hover:text-white/60">Home</Link>
                                <ChevronRight className="h-3 w-3 text-white/20" />
                                <Link href="/tours" className="text-white/40 hover:text-white/60">Tours</Link>
                                <ChevronRight className="h-3 w-3 text-white/20" />
                                <span className="text-white/80">{tour.title}</span>
                            </nav>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Share Button */}
                            <div className="relative">
                                <button
                                    onClick={handleShare}
                                    className="relative rounded-full p-2 hover:bg-white/10 transition-colors group"
                                    aria-label="Share tour"
                                >
                                    <Share2 className="h-5 w-5 text-white/60 group-hover:text-cyan-400" />
                                </button>
                                {showShareTooltip && (
                                    <div className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-xs text-white shadow-xl animate-in fade-in slide-in-from-top-2">
                                        Link copied to clipboard!
                                    </div>
                                )}
                            </div>

                            {/* Save Button */}
                            <button
                                onClick={() => setIsSaved(!isSaved)}
                                className="group relative rounded-full p-2 hover:bg-white/10 transition-colors"
                                aria-label={isSaved ? "Remove from saved" : "Save tour"}
                            >
                                <Heart
                                    className={`h-5 w-5 transition-all ${isSaved
                                        ? "fill-red-500 text-red-500 scale-110"
                                        : "text-white/60 group-hover:text-red-400"
                                        }`}
                                />
                                {isSaved && (
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Quick Navigation Tabs */}
                    <div className="mt-4 flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
                        {['overview', 'itinerary', 'includes', 'location', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab === 'overview' ? 'itinerary' : tab);
                                    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className={`whitespace-nowrap pb-2 text-sm font-medium capitalize transition-all relative ${activeSection === tab
                                    ? 'text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-400'
                                    : 'text-white/40 hover:text-white/60'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="mx-auto max-w-7xl px-6 pt-8">
                <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/10 group">
                    <Image
                        src={tour.image || "/placeholder.jpg"}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-10000 group-hover:scale-110"
                        priority
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                        <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                            ⚡ Best Seller
                        </span>
                        <span className="rounded-full bg-emerald-500/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white shadow-lg">
                            {tour.days} Days • {tour.days - 1} Nights
                        </span>
                    </div>

                    {/* Image Controls */}
                    <div className="absolute bottom-6 right-6 flex gap-2">
                        <button
                            onClick={() => setIsImageModalOpen(true)}
                            className="rounded-full bg-black/50 p-3 backdrop-blur-sm hover:bg-black/70 transition-colors"
                            aria-label="View fullscreen"
                        >
                            <Maximize2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview Section */}
                        <section id="overview" className="scroll-mt-24">
                            {/* Title and Meta */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-sm text-cyan-400 mb-3">
                                    <MapPin className="h-4 w-4" />
                                    <span>Bhutan • {tour.category}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                    {tour.title}
                                </h1>

                                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-1">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#070b14]" />
                                            ))}
                                        </div>
                                        <span className="text-white/60">100+ booked this month</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-white/60">
                                            {tour.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Highlights */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Clock, label: 'Duration', value: tour.duration },
                                    { icon: Users, label: 'Group Size', value: tour.travelers },
                                    { icon: Award, label: 'Difficulty', value: 'Moderate' },
                                    { icon: Shield, label: 'Guaranteed', value: 'Departure' },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                            <Icon className="h-5 w-5 text-cyan-400 mb-2" />
                                            <p className="text-xs text-white/40">{item.label}</p>
                                            <p className="font-semibold">{item.value}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Description */}
                            <div className="prose prose-invert max-w-none mb-8">
                                <p className="text-lg leading-relaxed text-white/80">
                                    Experience the magic of Bhutan with this carefully curated journey.
                                    From sacred monasteries to breathtaking Himalayan vistas, immerse yourself
                                    in the last great Himalayan kingdom.
                                </p>
                            </div>

                            {/* Tour Highlights */}
                            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 p-6 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-cyan-400" />
                                    Tour Highlights
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {tour.highlights?.slice(0, showAllHighlights ? undefined : 4).map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                                            <span className="text-white/80">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                                {tour.highlights?.length > 4 && (
                                    <button
                                        onClick={() => setShowAllHighlights(!showAllHighlights)}
                                        className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        {showAllHighlights ? 'Show less' : `Show ${tour.highlights.length - 4} more highlights`}
                                    </button>
                                )}
                            </div>
                        </section>

                        {/* Itinerary Section */}
                        <section id="itinerary" className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-cyan-400" />
                                Detailed Itinerary
                            </h2>

                            <div className="space-y-4">
                                {tour.itinerary?.map((day, index) => {
                                    const isOpen = openDay === index;

                                    return (
                                        <div
                                            key={index}
                                            className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                                        >
                                            {/* Day Header */}
                                            <button
                                                onClick={() => setOpenDay(isOpen ? null : index)}
                                                className="w-full"
                                            >
                                                <div className="flex items-center justify-between p-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-lg">
                                                            {day.day}
                                                        </div>
                                                        <div className="text-left">
                                                            <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                                                                {day.title}
                                                            </h3>
                                                            <p className="text-sm text-cyan-400">
                                                                {day.location || "Bhutan"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-4">
                                                        <span className="text-sm text-white/40">
                                                            {day.activities?.length || 0} activities
                                                        </span>
                                                        <ChevronDown
                                                            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-white/40'
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                            </button>

                                            {/* Day Details */}
                                            <div
                                                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="px-6 pb-6">
                                                    <div className="relative space-y-4">
                                                        {/* Timeline Line */}
                                                        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-20" />

                                                        {day.activities?.map((act, i) => (
                                                            <div key={i} className="relative flex gap-4">
                                                                <div className="relative z-10 flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white/5 border border-white/10">
                                                                    <Clock className="h-5 w-5 text-cyan-400 mb-1" />
                                                                    <span className="text-xs font-medium text-white/60">
                                                                        {act.time}
                                                                    </span>
                                                                </div>
                                                                <div className="flex-1 rounded-lg bg-white/5 p-4 border border-white/10">
                                                                    <p className="text-sm text-white/80 leading-relaxed">
                                                                        {act.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <div id="includes" className="scroll-mt-24">
                            <h2 className="text-2xl font-semibold mb-6">What's Included</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Inclusions */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-emerald-400">
                                        <Check className="h-5 w-5" />
                                        Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.includes?.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-white/70">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exclusions */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
                                        <X className="h-5 w-5" />
                                        Not Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.excludes?.map((exc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm">
                                                <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-white/70">{exc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { icon: Wifi, label: 'Free WiFi' },
                                { icon: Coffee, label: 'Meals Included' },
                                { icon: Camera, label: 'Photo Stops' },
                                { icon: Car, label: 'Transport' },
                                { icon: Home, label: 'Accommodation' },
                                { icon: Utensils, label: 'Local Cuisine' },
                                { icon: Languages, label: 'English Guide' },
                                { icon: HelpCircle, label: '24/7 Support' },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                                        <Icon className="h-5 w-5 text-cyan-400" />
                                        <span className="text-xs text-white/60">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <BookingCard tour={tour} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-white shadow-lg hover:scale-110 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                    aria-label="Scroll to top"
                >
                    <ChevronRight className="h-5 w-5 -rotate-90" />
                </button>
            )}

            {/* Image Modal */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative h-[90vh] w-full max-w-6xl">
                        <Image
                            src={tour.image}
                            alt={tour.title}
                            fill
                            className="object-contain"
                            priority
                        />
                        <button
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}