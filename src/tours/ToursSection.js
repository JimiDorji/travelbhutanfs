"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Star,
    Users,
    Calendar,
    ChevronRight,
    Sparkles,
    Compass,
    MapPin,
    Clock,
    TrendingUp,
    Mountain,
    Camera
} from "lucide-react";
import Image from "next/image";
import toursData from "@/data/data";

const categoryGradients = {
    all: "from-blue-600 to-cyan-500",
    cultural: "from-amber-500 to-orange-500",
    nature: "from-emerald-500 to-teal-500",
    luxury: "from-purple-500 to-pink-500",
    adventure: "from-red-500 to-orange-500",
    spiritual: "from-indigo-500 to-violet-500",
    festival: "from-fuchsia-500 to-pink-500",
};

export default function ToursSection({
    sectionId = "tours",
    category = "all",
    title = "Explore Bhutan",
    showFilters = true,
    initialLimit = 6,
}) {
    const [visibleCount, setVisibleCount] = useState(initialLimit);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeFilter, setActiveFilter] = useState(category);
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);

    // Filter categories (if showing filters)
    const categories = [
        { id: "all", label: "All Journeys", icon: Compass, color: "blue" },
        { id: "cultural", label: "Cultural", icon: Camera, color: "amber" },
        { id: "nature", label: "Nature", icon: Mountain, color: "emerald" },
        { id: "luxury", label: "Luxury", icon: Sparkles, color: "purple" },
        { id: "adventure", label: "Adventure", icon: TrendingUp, color: "red" },
        { id: "spiritual", label: "Spiritual", icon: MapPin, color: "indigo" },
        { id: "festival", label: "Festival", icon: Clock, color: "fuchsia" },
    ];

    /* Filter tours by category */
    const filteredTours = useMemo(() => {
        if (activeFilter === "all") return toursData;
        return toursData.filter((tour) => tour.category === activeFilter);
    }, [activeFilter]);

    const visibleTours = filteredTours.slice(0, visibleCount);

    // Intersection Observer for animations - MOVED AFTER visibleTours declaration
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.tour-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [visibleTours]); // Now visibleTours is defined before this useEffect

    const handleFilterChange = (filterId) => {
        setIsAnimating(true);
        setActiveFilter(filterId);
        setVisibleCount(initialLimit);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const getCategoryGradient = (cat) => {
        return categoryGradients[cat] || categoryGradients.all;
    };

    return (
        <section
            id={sectionId}
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
        >
            {/* Modern Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1.5 text-white shadow-lg shadow-blue-600/20">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="text-xs font-semibold tracking-wider uppercase">
                            Discover Your Adventure
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Embark on unforgettable journeys through Bhutan's pristine landscapes,
                        rich culture, and ancient traditions.
                    </p>

                    {/* Stats Bar */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-2">
                                <Mountain className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">50+</span> Treks
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-2">
                                <Users className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">10k+</span> Happy Travelers
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-purple-100 p-2">
                                <Star className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">4.9</span> Rating
                            </span>
                        </div>
                    </div>
                </header>

                {/* Category Filters */}
                {showFilters && (
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeFilter === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleFilterChange(cat.id)}
                                    className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r ${getCategoryGradient(cat.id)} text-white shadow-lg shadow-${cat.color}-500/30 scale-105`
                                        : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm hover:shadow"
                                        }`}
                                >
                                    <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-gray-500"
                                        }`} />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Empty State */}
                {visibleTours.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="rounded-full bg-gray-100 p-4">
                            <Compass className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">No journeys found</h3>
                        <p className="mt-2 text-gray-600">Try adjusting your filters to find the perfect adventure.</p>
                    </div>
                )}

                {/* Tours Grid */}
                {visibleTours.length > 0 && (
                    <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"
                        }`}>
                        {visibleTours.map((tour, index) => {
                            const isHovered = hoveredCard === tour.slug;
                            const gradient = getCategoryGradient(tour.category);

                            return (
                                <article
                                    key={tour.slug}
                                    onMouseEnter={() => setHoveredCard(tour.slug)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="tour-card group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={tour.image}
                                            alt={tour.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                        {/* Category Badge */}
                                        <div className="absolute left-4 top-4">
                                            <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${gradient} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                                                {tour.category}
                                            </span>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="absolute right-4 top-4">
                                            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
                                                <Clock className="h-3 w-3" />
                                                {tour.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                                            {tour.title}
                                        </h3>

                                        {/* Quick Info */}
                                        <div className="mb-4 flex items-center gap-4 text-sm">
                                            <div className="flex items-center gap-1.5">
                                                <div className="rounded-full bg-amber-100 p-1">
                                                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                                                </div>
                                                <span className="font-medium text-gray-900">{tour.rating}</span>
                                                <span className="text-gray-500">({tour.reviews || 0})</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="rounded-full bg-blue-100 p-1">
                                                    <Users className="h-3 w-3 text-blue-600" />
                                                </div>
                                                <span className="text-gray-600">{tour.travelers}</span>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        {tour.highlights && tour.highlights.length > 0 && (
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {tour.highlights.slice(0, 3).map((h, i) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                                                    >
                                                        {h}
                                                    </span>
                                                ))}
                                                {tour.highlights.length > 3 && (
                                                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                                        +{tour.highlights.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        {/* Price & CTA */}
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                            <div>
                                                <p className="text-xs text-gray-500">Start Booking</p>
                                            </div>

                                            <Link
                                                href={`/tours/${tour.slug}`}
                                                className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${gradient} px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105`}
                                            >
                                                View Details
                                                <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                                                    }`} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${isHovered ? `border-${tour.category}-500/50` : ""
                                        }`} />
                                </article>
                            );
                        })}
                    </div>
                )}

                {/* View More Button */}
                {visibleCount < filteredTours.length && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-105"
                        >
                            <span className="relative z-10">Load More Adventures</span>
                            <ChevronRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>
                    </div>
                )}

                {/* Bottom Decoration */}
                <div className="mt-20 flex justify-center">
                    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                </div>
            </div>

            {/* Add animation styles */}
        </section>
    );
}