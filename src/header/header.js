"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search, Phone, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Tours", href: "#tours" },
    { label: "Trekkings", href: "#trekkings" },
    { label: "Festival", href: "#festival" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const headerRef = useRef(null);
    const searchInputRef = useRef(null);

    const scrollToSection = useCallback((e, href) => {
        e.preventDefault();
        const id = href.replace("#", "");

        // 🔥 dispatch category change event
        if (id === "trekkings") {
            window.dispatchEvent(new CustomEvent("tourCategory", { detail: "adventure" }));
        } else if (id === "festival") {
            window.dispatchEvent(new CustomEvent("tourCategory", { detail: "festival" }));
        } else if (id === "tours") {
            window.dispatchEvent(new CustomEvent("tourCategory", { detail: "all" }));
        }

        const element = document.getElementById("tours");
        if (!element) return;

        window.scrollTo({
            top: element.offsetTop - (isScrolled ? 72 : 88),
            behavior: "smooth",
        });

        setActiveSection(id);
    }, [isScrolled]);


    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 20);

        const headerHeight = scrollY > 20 ? 72 : 88;

        // Find the current active section
        for (const item of NAV_ITEMS) {
            const id = item.href.slice(1);
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();

            if (
                rect.top <= headerHeight + 60 &&
                rect.bottom >= headerHeight + 60
            ) {
                setActiveSection(id);
                break;
            }
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && headerRef.current && !headerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
            if (isSearchOpen && !e.target?.closest('.search-container')) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen, isSearchOpen]);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
                    : "bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between sm:h-20">
                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, "#home")}
                            className="flex items-center gap-3 group relative"
                            aria-label="Go to homepage"
                        >
                            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur border border-white/10">
                                    <Image
                                        src={logo}
                                        alt="Alpine Odyssey"
                                        fill
                                        className="object-contain p-1.5 transition-transform duration-700 group-hover:scale-110"
                                        priority
                                        sizes="(max-width: 768px) 40px, 48px"
                                    />
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <h1 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                                    }`}>
                                    Alpine{" "}
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        Odyssey
                                    </span>
                                </h1>
                                <p className={`text-[10px] sm:text-xs font-medium tracking-wider transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-gray-300"
                                    }`}>
                                    Bhutan • Tours • Trekkings
                                </p>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {NAV_ITEMS.map(({ label, href }) => {
                                const isActive = activeSection === href.slice(1);

                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => scrollToSection(e, href)}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${isScrolled
                                            ? isActive
                                                ? "text-cyan-600 bg-cyan-50"
                                                : "text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                                            : isActive
                                                ? "text-white bg-white/10"
                                                : "text-gray-200 hover:text-white hover:bg-white/10"
                                            }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                        )}
                                        {!isActive && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="relative search-container">
                                <button
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    aria-label="Toggle search"
                                    aria-expanded={isSearchOpen}
                                    className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                                        ? "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    <Search className="h-5 w-5" />
                                </button>

                                {isSearchOpen && (
                                    <div className="absolute right-0 top-12 w-72">
                                        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 animate-in slide-in-from-top-2 duration-200">
                                            <input
                                                ref={searchInputRef}
                                                type="text"
                                                placeholder="Search tours, trekkings..."
                                                className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                aria-label="Search"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a
                                href="tel:+97577652012"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${isScrolled
                                    ? "border-gray-200 bg-gray-50/50 text-gray-700 hover:bg-gray-100"
                                    : "border-white/20 bg-white/5 text-gray-200 hover:bg-white/10"
                                    }`}
                            >
                                <Phone className="h-4 w-4" />
                                <span className="text-sm font-medium">+97577652012</span>
                            </a>

                            <button
                                onClick={(e) => scrollToSection(e, "#contact")}
                                className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-100 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Contact Us</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <button
                                aria-label="Search"
                                className={`p-2 rounded-lg transition-colors ${isScrolled ? "text-gray-600" : "text-gray-300"
                                    }`}
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <button
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                                    ? "text-gray-600 hover:bg-gray-100"
                                    : "text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6 animate-in spin-in-90 duration-200" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
                            }`}
                        aria-hidden={!isOpen}
                    >
                        <div className="pt-4 pb-6 space-y-4">
                            <nav className="flex flex-col space-y-1">
                                {NAV_ITEMS.map(({ label, href }) => {
                                    const isActive = activeSection === href.slice(1);

                                    return (
                                        <a
                                            key={label}
                                            href={href}
                                            onClick={(e) => scrollToSection(e, href)}
                                            className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-between group ${isScrolled
                                                ? isActive
                                                    ? "bg-cyan-50 text-cyan-600"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                : isActive
                                                    ? "bg-white/10 text-white"
                                                    : "text-gray-200 hover:bg-white/10"
                                                }`}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {label}
                                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""
                                                }`} />
                                        </a>
                                    );
                                })}
                            </nav>

                            <div className={`pt-4 border-t ${isScrolled ? "border-gray-200" : "border-white/10"
                                }`}>
                                <div className={`flex items-center justify-between p-4 rounded-lg ${isScrolled ? "bg-gray-50" : "bg-white/5"
                                    }`}>
                                    <a
                                        href="tel:++97577652012"
                                        className="flex items-center gap-3"
                                    >
                                        <Phone className={`h-5 w-5 ${isScrolled ? "text-cyan-600" : "text-gray-300"
                                            }`} />
                                        <span className={`font-medium ${isScrolled ? "text-gray-700" : "text-gray-200"
                                            }`}>
                                            +975-77652012
                                        </span>
                                    </a>
                                    <button
                                        onClick={(e) => {
                                            scrollToSection(e, "#contact");
                                            setIsOpen(false);
                                        }}
                                        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg transition-all duration-300"
                                    >
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}