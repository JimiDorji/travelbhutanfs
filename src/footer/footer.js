"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Twitter,
    ArrowRight,
    Heart,
    Shield,
    Globe,
    Sparkles
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [particles, setParticles] = useState([]);
    const [hoveredLink, setHoveredLink] = useState(null);

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

    const handleNewsletter = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setNewsletterStatus(null);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }

            setNewsletterStatus("success");
            setEmail("");
            setTimeout(() => setNewsletterStatus(null), 5000);
        } catch (error) {
            console.error('Newsletter error:', error);
            setNewsletterStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const quickLinks = [
        {
            title: "Company", links: [
                { name: "About Us", href: "/about" },
                { name: "Our Story", href: "/story" },
                { name: "Team", href: "/team" },
                { name: "Careers", href: "/careers" },
                { name: "Press", href: "/press" }
            ]
        },
        {
            title: "Experiences", links: [
                { name: "Cultural Tours", href: "/tours/cultural" },
                { name: "Trekking", href: "/trekkings" },
                { name: "Festivals", href: "/festivals" },
                { name: "Wellness Retreats", href: "/wellness" },
                { name: "Custom Travel", href: "/custom" }
            ]
        },
        {
            title: "Support", links: [
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "/faq" },
                { name: "Booking Guide", href: "/guide" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" }
            ]
        }
    ];

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "#", color: "from-pink-500 to-red-500" },
        { name: "Facebook", icon: Facebook, href: "#", color: "from-blue-600 to-indigo-600" },
        { name: "YouTube", icon: Youtube, href: "#", color: "from-red-600 to-rose-600" },
        { name: "LinkedIn", icon: Linkedin, href: "#", color: "from-blue-500 to-cyan-500" },
        { name: "Twitter", icon: Twitter, href: "#", color: "from-sky-400 to-blue-400" }
    ];

    const contactInfo = [
        { icon: Mail, label: "Email", value: "alpineodyssey.bt@gmail.com", href: "mailto:alpineodyssey.bt@gmail.com", color: "from-cyan-500 to-blue-500" },
        { icon: Phone, label: "Phone", value: "+975 77652012", href: "tel:+97577652012", color: "from-emerald-500 to-green-500" },
        { icon: MapPin, label: "Office", value: "Thimphu, Bhutan", sub: "Mon–Fri, 9AM–5PM BST", color: "from-purple-500 to-pink-500" }
    ];

    const badges = [
        { icon: Shield, text: "Licensed Operator", color: "from-cyan-500 to-blue-500" },
        { icon: Globe, text: "Sustainable Tourism", color: "from-emerald-500 to-green-500" },
        { icon: Heart, text: "Community First", color: "from-rose-500 to-red-500" }
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 text-slate-300">
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-[1px]"
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
                {/* Main Footer Content */}
                <div className="py-20">
                    {/* Top Section */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="grid gap-16 lg:grid-cols-2"
                    >
                        {/* Brand Section */}
                        <motion.div variants={fadeInUp} className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">
                                    <span className="text-white">Alpine </span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Odyssey
                                    </span>
                                </h2>
                                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                            </div>

                            <p className="max-w-md text-lg leading-relaxed text-blue-100/80">
                                We design immersive and responsible travel experiences in Bhutan,
                                blending cultural depth, natural beauty, and sustainable tourism
                                aligned with the Royal Government of Bhutan.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4">
                                {badges.map((badge) => {
                                    const Icon = badge.icon;
                                    return (
                                        <div
                                            key={badge.text}
                                            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10"
                                        >
                                            <div className={`rounded-full bg-gradient-to-r ${badge.color} p-1`}>
                                                <Icon className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-xs font-medium text-white/80">
                                                {badge.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Newsletter */}
                            <form onSubmit={handleNewsletter} className="max-w-md">
                                <label className="mb-3 block text-sm font-medium text-blue-200">
                                    Subscribe to our newsletter
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400/60" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-24 py-4 text-white placeholder-blue-300/50 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        ) : (
                                            <Send className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {newsletterStatus === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-3 flex items-center gap-2 text-sm text-emerald-400"
                                    >
                                        <CheckCircle className="h-4 w-4" />
                                        Thanks! Please check your email to confirm.
                                    </motion.p>
                                )}

                                {newsletterStatus === "error" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-3 flex items-center gap-2 text-sm text-red-400"
                                    >
                                        <AlertCircle className="h-4 w-4" />
                                        Something went wrong. Please try again.
                                    </motion.p>
                                )}

                                <p className="mt-3 flex items-center gap-1 text-xs text-blue-300/50">
                                    <Sparkles className="h-3 w-3" />
                                    No spam. Unsubscribe anytime.
                                </p>
                            </form>
                        </motion.div>

                        {/* Links Grid */}
                        <motion.div
                            variants={staggerContainer}
                            className="grid gap-10 sm:grid-cols-3"
                        >
                            {quickLinks.map((column) => (
                                <motion.div key={column.title} variants={fadeInUp}>
                                    <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-blue-200">
                                        {column.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {column.links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    onMouseEnter={() => setHoveredLink(link.name)}
                                                    onMouseLeave={() => setHoveredLink(null)}
                                                    className="group relative inline-flex items-center text-blue-200/70 transition-all duration-300 hover:text-white"
                                                >
                                                    <span className="relative">
                                                        {link.name}
                                                        <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${hoveredLink === link.name ? 'w-full' : 'w-0'
                                                            }`} />
                                                    </span>
                                                    <ArrowRight className={`ml-2 h-3 w-3 transition-all duration-300 ${hoveredLink === link.name ? 'translate-x-1 opacity-100' : 'opacity-0'
                                                        }`} />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Contact Cards */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mt-16 grid gap-4 sm:grid-cols-3"
                    >
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            const Wrapper = item.href ? 'a' : 'div';

                            return (
                                <motion.div
                                    key={item.label}
                                    variants={fadeInUp}
                                    whileHover={{ y: -4 }}
                                    className="group"
                                >
                                    <Wrapper
                                        href={item.href}
                                        className="relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-xl"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            <div className={`inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3`}>
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                            <p className="mt-3 text-xs font-medium text-blue-200/60">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-white">
                                                {item.value}
                                            </p>
                                            {item.sub && (
                                                <p className="mt-1 text-xs text-blue-200/40">
                                                    {item.sub}
                                                </p>
                                            )}
                                        </div>
                                    </Wrapper>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 px-4 text-xs text-blue-300/40">
                            ✦ Journey Beyond ✦
                        </span>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="py-12"
                >
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        {/* Copyright */}
                        <motion.p variants={fadeInUp} className="text-sm text-blue-200/40">
                            © {currentYear} Alpine Odyssey — Licensed Bhutan Tour Operator
                        </motion.p>

                        {/* Social Links */}
                        <motion.div variants={fadeInUp} className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="group relative"
                                    >
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 blur-lg transition-opacity group-hover:opacity-50`} />
                                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/20">
                                            <Icon className="h-4 w-4 text-white/80 transition-colors group-hover:text-white" />
                                        </div>
                                    </a>
                                );
                            })}
                        </motion.div>

                        {/* Back to Top */}
                        <motion.button
                            variants={fadeInUp}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                        >
                            <span>Back to top</span>
                            <ArrowRight className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:-translate-y-1" />
                        </motion.button>
                    </div>

                    {/* Compliance */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-8 text-center text-xs text-blue-200/30"
                    >
                        All travel operations comply with Bhutan's Sustainable Tourism Policy
                        and cultural preservation standards. Member of the Bhutan Tourism Council.
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
}