"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    Quote,
    Users,
    Award,
    Heart,
    Sparkles,
    MapPin,
    Calendar,
    ChevronRight,
    MessageCircle,
    ExternalLink
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const scaleOnHover = {
    hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export default function Testimonials() {
    const [particles, setParticles] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const sectionRef = useRef(null);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 4 + 2}px`,
            duration: `${8 + Math.random() * 8}s`,
            delay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.3 + 0.1
        }));
        setParticles(generated);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Thompson",
            country: "United Kingdom",
            location: "London, UK",
            quote: "Travel Bhutan exceeded every expectation. The guides were incredibly knowledgeable, and every detail was handled with care. From the moment we landed in Paro to our final goodbye, we felt like family.",
            shortQuote: "An extraordinary journey that exceeded every expectation.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            stay: "12-Day Cultural Journey",
            rating: 5,
            highlight: "Exceptional Guide",
            accent: "from-cyan-500 to-blue-500",
            date: "March 2024",
            tripType: "Cultural",
            featured: true
        },
        {
            id: 2,
            name: "Daniel Müller",
            country: "Germany",
            location: "Munich, Germany",
            quote: "From monasteries to mountain passes, the experience felt deeply personal and profoundly authentic. The team's attention to detail and genuine care made this trek unforgettable.",
            shortQuote: "Deeply personal and profoundly authentic.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            stay: "Himalayan Trek Adventure",
            rating: 5,
            highlight: "Life-Changing Trek",
            accent: "from-emerald-500 to-green-500",
            date: "February 2024",
            tripType: "Adventure",
            featured: true
        },
        {
            id: 3,
            name: "Aiko Tanaka",
            country: "Japan",
            location: "Tokyo, Japan",
            quote: "Every moment was calm, respectful, and beautifully paced. Bhutan felt sacred, not touristic. The spiritual connection to the land and people was beyond words.",
            shortQuote: "Bhutan felt sacred, not touristic.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            stay: "Spiritual Retreat",
            rating: 5,
            highlight: "Deeply Spiritual",
            accent: "from-purple-500 to-pink-500",
            date: "January 2024",
            tripType: "Spiritual",
            featured: true
        },
        {
            id: 4,
            name: "Michael Carter",
            country: "United States",
            location: "New York, USA",
            quote: "An extraordinary journey. Impeccable service, genuine warmth, and unforgettable landscapes. Every detail was thoughtfully curated, from luxury accommodations to authentic cultural encounters.",
            shortQuote: "Impeccable service and unforgettable landscapes.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            stay: "Luxury Heritage Tour",
            rating: 5,
            highlight: "Unforgettable Luxury",
            accent: "from-amber-500 to-orange-500",
            date: "December 2023",
            tripType: "Luxury",
            featured: true
        },
        {
            id: 5,
            name: "Emma Watson",
            country: "Australia",
            location: "Sydney, Australia",
            quote: "The perfect blend of adventure and culture. Our guide's knowledge of Bhutanese history and Buddhism added so much depth to our journey.",
            shortQuote: "Perfect blend of adventure and culture.",
            avatar: "https://images.unsplash.com/photo-1494790108777-8fd2e1d4e6f9?auto=format&fit=crop&w=200&q=80",
            stay: "Cultural Explorer",
            rating: 5,
            highlight: "Expert Guide",
            accent: "from-indigo-500 to-violet-500",
            date: "November 2023",
            tripType: "Cultural",
            featured: false
        },
        {
            id: 6,
            name: "Carlos Rodriguez",
            country: "Spain",
            location: "Barcelona, Spain",
            quote: "The Tiger's Nest trek at sunrise was magical. Thank you for organizing such a seamless and memorable adventure.",
            shortQuote: "Magical sunrise at Tiger's Nest.",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
            stay: "Highlights of Bhutan",
            rating: 5,
            highlight: "Bucket List Experience",
            accent: "from-rose-500 to-red-500",
            date: "October 2023",
            tripType: "Adventure",
            featured: false
        }
    ];

    const stats = [
        { value: "500+", label: "Happy Travelers", icon: Users, color: "from-cyan-500 to-blue-500" },
        { value: "4.9★", label: "Average Rating", icon: Star, color: "from-amber-500 to-orange-500" },
        { value: "98%", label: "Would Recommend", icon: Heart, color: "from-rose-500 to-red-500" },
        { value: "15+", label: "Years Experience", icon: Award, color: "from-purple-500 to-pink-500" }
    ];

    const tripTypes = [
        { id: "all", label: "All Experiences", icon: Sparkles },
        { id: "Cultural", label: "Cultural Tours", icon: MapPin },
        { id: "Adventure", label: "Adventure Treks", icon: Calendar },
        { id: "Spiritual", label: "Spiritual Retreats", icon: Heart },
        { id: "Luxury", label: "Luxury Journeys", icon: Award }
    ];

    const filteredTestimonials = activeFilter === "all"
        ? testimonials
        : testimonials.filter(t => t.tripType === activeFilter);

    const featuredTestimonials = filteredTestimonials.filter(t => t.featured);
    const regularTestimonials = filteredTestimonials.filter(t => !t.featured);

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-28"
        >
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-[1px]"
                            style={{
                                top: p.top,
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                opacity: p.opacity
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 20, 0],
                            }}
                            transition={{
                                duration: parseFloat(p.duration),
                                repeat: Infinity,
                                delay: parseFloat(p.delay),
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Geometric Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="mx-auto mb-20 max-w-4xl text-center"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-2 text-sm font-medium tracking-wider text-cyan-200 backdrop-blur-sm"
                    >
                        <Quote className="h-4 w-4" />
                        GUEST EXPERIENCES
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        <span className="text-white">Voices of </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Inspiration
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-lg leading-relaxed text-blue-100/80 max-w-2xl mx-auto"
                    >
                        Discover authentic stories from travelers who embarked on transformative
                        journeys through Bhutan's sacred landscapes and vibrant culture.
                    </motion.p>

                    {/* Trip Type Filters */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {tripTypes.map((type) => {
                            const Icon = type.icon;
                            const isActive = activeFilter === type.id;

                            return (
                                <button
                                    key={type.id}
                                    onClick={() => setActiveFilter(type.id)}
                                    className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-500 ${isActive
                                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
                                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {type.label}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.label}
                                variants={fadeInUp}
                                whileHover="hover"
                                variants={scaleOnHover}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className={`inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-2.5`}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-3xl font-bold text-white">
                                            {stat.value}
                                        </div>
                                        <p className="mt-1 text-sm text-white/60">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Featured Testimonials */}
                {featuredTestimonials.length > 0 && (
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mb-12"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="mb-8 text-2xl font-semibold text-white flex items-center gap-3"
                        >
                            <Sparkles className="h-5 w-5 text-cyan-400" />
                            Featured Stories
                        </motion.h3>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {featuredTestimonials.map((testimonial) => (
                                <motion.article
                                    key={testimonial.id}
                                    variants={fadeInUp}
                                    onHoverStart={() => setHoveredCard(testimonial.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    whileHover="hover"
                                    variants={scaleOnHover}
                                    onClick={() => setSelectedTestimonial(testimonial)}
                                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Quote Icon */}
                                    <Quote className="absolute right-6 top-6 h-12 w-12 text-white/5" />

                                    <div className="relative z-10">
                                        {/* Rating */}
                                        <div className="mb-4 flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < testimonial.rating
                                                        ? "fill-amber-400 text-amber-400"
                                                        : "text-white/20"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="mb-6 text-lg leading-relaxed text-white/90">
                                            "{testimonial.shortQuote}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-2 ring-white/20">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">
                                                    {testimonial.name}
                                                </h4>
                                                <div className="mt-1 flex items-center gap-3 text-sm">
                                                    <span className="flex items-center gap-1 text-white/60">
                                                        <MapPin className="h-3.5 w-3.5" />
                                                        {testimonial.country}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-white/60">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {testimonial.date}
                                                    </span>
                                                </div>
                                                <div className="mt-2">
                                                    <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${testimonial.accent} px-3 py-1 text-xs font-semibold text-white`}>
                                                        {testimonial.highlight}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Read More Indicator */}
                                        <div className="mt-4 flex items-center gap-1 text-sm text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            Read full story
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Regular Testimonials Grid */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {regularTestimonials.map((testimonial) => (
                        <motion.article
                            key={testimonial.id}
                            variants={fadeInUp}
                            whileHover="hover"
                            variants={scaleOnHover}
                            onClick={() => setSelectedTestimonial(testimonial)}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Accent Bar */}
                            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${testimonial.accent} opacity-50`} />

                            <div className="relative z-10">
                                {/* Rating */}
                                <div className="mb-3 flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating
                                                ? "fill-amber-400 text-amber-400"
                                                : "text-white/20"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="mb-4 text-sm leading-relaxed text-white/80 line-clamp-3">
                                    "{testimonial.quote}"
                                </p>

                                {/* Highlight Tag */}
                                <span className="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 border border-white/10">
                                    {testimonial.highlight}
                                </span>

                                {/* Author Row */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/20">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-white/50">
                                            {testimonial.country}
                                        </p>
                                        <p className="text-xs text-cyan-400/80 mt-0.5">
                                            {testimonial.stay}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeInUp}
                    className="mt-20 flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            <MessageCircle className="h-5 w-5" />
                            Read More Stories
                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>

                    <a
                        href="/share-experience"
                        className="group relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 bg-transparent px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-xl"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Heart className="h-5 w-5" />
                            Share Your Journey
                            <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-white/40 flex items-center justify-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Every story is verified from real travelers
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </p>
                </motion.div>
            </div>

            {/* Testimonial Modal */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
                        onClick={() => setSelectedTestimonial(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-3xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 p-8 shadow-2xl border border-white/10">
                                <div className="flex items-start gap-6">
                                    {/* Avatar */}
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl ring-4 ring-cyan-500/20">
                                        <Image
                                            src={selectedTestimonial.avatar}
                                            alt={selectedTestimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white">
                                            {selectedTestimonial.name}
                                        </h3>
                                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                                            <span className="flex items-center gap-1 text-white/60">
                                                <MapPin className="h-4 w-4" />
                                                {selectedTestimonial.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-white/60">
                                                <Calendar className="h-4 w-4" />
                                                {selectedTestimonial.date}
                                            </span>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-5 w-5 ${i < selectedTestimonial.rating
                                                            ? "fill-amber-400 text-amber-400"
                                                            : "text-white/20"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-white/40">
                                                {selectedTestimonial.rating}.0
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Full Quote */}
                                <div className="mt-8">
                                    <Quote className="h-8 w-8 text-cyan-500/30 mb-4" />
                                    <p className="text-xl leading-relaxed text-white/90">
                                        "{selectedTestimonial.quote}"
                                    </p>
                                </div>

                                {/* Trip Details */}
                                <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-white/10">
                                    <div className="rounded-xl bg-white/5 px-4 py-2">
                                        <p className="text-xs text-white/40">Journey</p>
                                        <p className="text-sm font-medium text-white">
                                            {selectedTestimonial.stay}
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-white/5 px-4 py-2">
                                        <p className="text-xs text-white/40">Experience</p>
                                        <p className="text-sm font-medium text-white">
                                            {selectedTestimonial.tripType}
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-white/5 px-4 py-2">
                                        <p className="text-xs text-white/40">Highlight</p>
                                        <p className="text-sm font-medium text-white">
                                            {selectedTestimonial.highlight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}