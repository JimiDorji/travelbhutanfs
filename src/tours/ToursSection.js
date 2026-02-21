"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Star,
    Users,
    ChevronRight,
    Sparkles,
    Compass,
    MapPin,
    Clock,
    TrendingUp,
    Mountain,
    Camera,
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

const borderColors = {
    cultural: "border-amber-500/50",
    nature: "border-emerald-500/50",
    luxury: "border-purple-500/50",
    adventure: "border-red-500/50",
    spiritual: "border-indigo-500/50",
    festival: "border-fuchsia-500/50",
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

    const categories = [
        { id: "all", label: "All Journeys", icon: Compass },
        { id: "cultural", label: "Cultural", icon: Camera },
        { id: "nature", label: "Nature", icon: Mountain },
        { id: "luxury", label: "Luxury", icon: Sparkles },
        { id: "adventure", label: "Adventure", icon: TrendingUp },
        { id: "spiritual", label: "Spiritual", icon: MapPin },
        { id: "festival", label: "Festival", icon: Clock },
    ];

    const filteredTours = useMemo(() => {
        if (activeFilter === "all") return toursData;
        return toursData.filter((tour) => tour.category === activeFilter);
    }, [activeFilter]);

    const visibleTours = filteredTours.slice(0, visibleCount);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeInUp");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll(".tour-card");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [visibleTours]);

    const handleFilterChange = (filterId) => {
        setIsAnimating(true);
        setActiveFilter(filterId);
        setVisibleCount(initialLimit);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const getCategoryGradient = (cat) =>
        categoryGradients[cat] || categoryGradients.all;

    return (
        <section
            id={sectionId}
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
        >
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <header className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1.5 text-white shadow-lg">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="text-xs font-semibold uppercase">
                            Discover Your Adventure
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Embark on unforgettable journeys through Bhutan's pristine landscapes.
                    </p>
                </header>

                {/* Filters */}
                {showFilters && (
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeFilter === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleFilterChange(cat.id)}
                                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r ${getCategoryGradient(cat.id)} text-white scale-105`
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Tours Grid */}
                {visibleTours.length > 0 && (
                    <div
                        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"
                            }`}
                    >
                        {visibleTours.map((tour, index) => {
                            const isHovered = hoveredCard === tour.slug;
                            const gradient = getCategoryGradient(tour.category);

                            return (
                                <article
                                    key={tour.slug}
                                    onMouseEnter={() => setHoveredCard(tour.slug)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="tour-card group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    {/* Image */}
                                    <div className="relative h-64">
                                        <Image
                                            src={tour.image}
                                            alt={tour.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Hover Border (safe) */}
                                        <div
                                            className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${isHovered ? borderColors[tour.category] : ""
                                                }`}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                                            {tour.title}
                                        </h3>

                                        <div className="mb-4 flex items-center gap-4 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                                                <span className="font-medium">{tour.rating}</span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-blue-600" />
                                                <span>{tour.travelers}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between border-t pt-4">
                                            <Link
                                                href={`/tours/${tour.slug}`}
                                                className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${gradient} px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105`}
                                            >
                                                View Details
                                                <ChevronRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

                {/* Load More */}
                {visibleCount < filteredTours.length && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white hover:scale-105 transition"
                        >
                            Load More Adventures
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}