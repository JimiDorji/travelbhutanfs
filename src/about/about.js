"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import {
    Award,
    Users,
    Globe,
    Leaf,
    Heart,
    Shield,
    ChevronRight,
    X,
    ExternalLink,
    Quote,
    Compass,
    Mountain,
    Camera,
    Calendar
} from "lucide-react";

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

const scaleOnHover = {
    hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export default function About() {
    const [particles, setParticles] = useState([]);
    const [activeTab, setActiveTab] = useState("about");
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [hoveredHighlight, setHoveredHighlight] = useState(null);
    const sectionRef = useRef(null);

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

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge spanning generations.",
            stat: "15+ Years",
            color: "from-cyan-500 to-blue-500",
            icon: Compass,
            gradient: "from-cyan-400 to-blue-400"
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-negative journeys that protect Bhutan's pristine environment and support local communities.",
            stat: "100% Offset",
            color: "from-emerald-500 to-green-500",
            icon: Leaf,
            gradient: "from-emerald-400 to-green-400"
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests, pace, and desire for authentic experiences.",
            stat: "Personalized",
            color: "from-purple-500 to-pink-500",
            icon: Heart,
            gradient: "from-purple-400 to-pink-400"
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities in 25+ remote villages beyond typical tourist paths.",
            stat: "25+ Villages",
            color: "from-amber-500 to-orange-500",
            icon: Camera,
            gradient: "from-amber-400 to-orange-400"
        },
        {
            title: "Expert Guides",
            text: "Certified naturalist and cultural guides with decades of combined Himalayan experience.",
            stat: "20+ Guides",
            color: "from-indigo-500 to-violet-500",
            icon: Mountain,
            gradient: "from-indigo-400 to-violet-400"
        },
        {
            title: "Responsible Tourism",
            text: "Certified B-Corp committed to fair wages, community development, and cultural preservation.",
            stat: "Certified",
            color: "from-rose-500 to-red-500",
            icon: Shield,
            gradient: "from-rose-400 to-red-400"
        }
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction", icon: Award },
        { value: "2,500+", label: "Travelers Guided", icon: Users },
        { value: "50+", label: "Local Partnerships", icon: Globe },
        { value: "10", label: "Industry Awards", icon: Award }
    ];

    const team = [
        {
            name: "Jigme Dorji",
            role: "Founder & Lead Guide",
            bio: "With over 15 years of Himalayan exploration, Jigme has led countless expeditions across Bhutan's most remote valleys.",
            image: "/team/img/jigme.jpeg",
            expertise: ["Cultural Heritage", "Expedition Leadership", "Conservation"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            name: "Dechen Wangmo",
            role: "Senior Cultural Guide",
            bio: "A master storyteller and historian, Dechen brings Bhutan's living traditions to life through immersive cultural experiences.",
            image: "/team/img/dechen.jpeg",
            expertise: ["Buddhist Traditions", "Art History", "Local Customs"],
            color: "from-emerald-500 to-green-500"
        },
        {
            name: "Pema Cheki",
            role: "Operations Director",
            bio: "Pema ensures every journey runs flawlessly, coordinating logistics with precision and care for over a decade.",
            image: "/team/img/pema.jpeg",
            expertise: ["Logistics", "Guest Relations", "Safety"],
            color: "from-purple-500 to-pink-500"
        }
    ];

    const legalDocs = [
        {
            title: "Tourism License",
            src: "/legal/img/licence.jpg",
            desc: "Official tourism operator license issued by the Ministry of Industry, Commerce, and Employment.",
            number: "LIC-2024-0123"
        },
        {
            title: "Company Certification",
            src: "/legal/img/certificate.jpg",
            desc: "Verified registration and compliance certificate for legal tourism operations in Bhutan.",
            number: "CERT-2024-0456"
        }
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        >
            {/* Elegant Particle System */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-sm"
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

                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="mx-auto mb-20 max-w-4xl text-center"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium tracking-wider text-cyan-200 backdrop-blur-sm"
                    >
                        <Award className="h-4 w-4" />
                        SINCE 2010
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        <span className="text-white">Crafting </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Himalayan Dreams
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80"
                    >
                        We are Bhutan's premier travel curator, dedicated to revealing the kingdom's soul
                        through authentic, sustainable, and transformative experiences that honor tradition
                        while embracing the future.
                    </motion.p>

                    {/* Elegant Tab Navigation */}
                    <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
                        <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl">
                            {[
                                { id: "about", label: "Our Story", icon: Heart },
                                { id: "team", label: "The Team", icon: Users },
                                { id: "legal", label: "Credentials", icon: Shield },
                            ].map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;

                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="relative px-6 py-2.5"
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className={`relative z-10 flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 hover:text-white/90"
                                            }`}>
                                            <Icon className="h-4 w-4" />
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Dynamic Content with AnimatePresence */}
                <AnimatePresence mode="wait">
                    {/* ABOUT TAB */}
                    {activeTab === "about" && (
                        <motion.div
                            key="about"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={staggerContainer}
                            className="space-y-20"
                        >
                            {/* Story Section */}
                            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                                <motion.div variants={fadeInUp} className="space-y-6">
                                    <h3 className="text-3xl font-bold text-white">
                                        A Journey Rooted in
                                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                            Himalayan Wisdom
                                        </span>
                                    </h3>

                                    <div className="space-y-4 text-lg leading-relaxed text-blue-100/80">
                                        <p>
                                            Founded in the heart of the Himalayas, Alpine Odyssey emerged from a
                                            passion to share Bhutan's extraordinary beauty while preserving its
                                            timeless traditions. Our locally-born guides have explored every valley,
                                            monastery, and mountain pass for over a decade.
                                        </p>
                                        <p>
                                            We believe travel should enrich both visitor and host. Through
                                            responsible tourism, we support local communities, preserve cultural
                                            heritage, and maintain Bhutan's carbon-negative legacy for generations
                                            to come.
                                        </p>
                                    </div>

                                    {/* Philosophy Card */}
                                    <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm">
                                        <Quote className="absolute right-4 top-4 h-12 w-12 text-white/5" />
                                        <h4 className="text-xl font-semibold text-white">Our Philosophy</h4>
                                        <p className="mt-2 text-blue-100/80">
                                            "Travel is not just about places visited, but connections made.
                                            We create bridges between cultures, fostering understanding and
                                            respect through every journey."
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                                            <span>— Jigme Dorji, Founder</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Highlights Grid */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid gap-6 sm:grid-cols-2"
                                >
                                    {highlights.map((item, index) => {
                                        const Icon = item.icon;
                                        const isHovered = hoveredHighlight === index;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={fadeInUp}
                                                onHoverStart={() => setHoveredHighlight(index)}
                                                onHoverEnd={() => setHoveredHighlight(null)}
                                                className="group relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
                                                whileHover={{ y: -4 }}
                                            >
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                                                />

                                                <div className="relative z-10">
                                                    <div className="mb-4 flex items-start justify-between">
                                                        <div className={`rounded-xl bg-gradient-to-r ${item.gradient} p-2.5`}>
                                                            <Icon className="h-5 w-5 text-white" />
                                                        </div>
                                                        <span className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                                                            {item.stat}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-lg font-bold text-gray-900">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                                        {item.text}
                                                    </p>

                                                    {/* Animated Line */}
                                                    <motion.div
                                                        className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${item.color}`}
                                                        animate={{ width: isHovered ? "100%" : "0%" }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                            {/* Stats Section */}
                            <motion.div
                                variants={fadeInUp}
                                className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-12 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
                            >
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={stat.label} className="text-center">
                                            <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3">
                                                <Icon className="h-6 w-6 text-cyan-400" />
                                            </div>
                                            <div className="mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                                                {stat.value}
                                            </div>
                                            <p className="mt-2 text-sm font-medium text-blue-100/80">
                                                {stat.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}

                    {/* TEAM TAB */}
                    {activeTab === "team" && (
                        <motion.div
                            key="team"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={staggerContainer}
                            className="mt-10"
                        >
                            <div className="grid gap-8 lg:grid-cols-3">
                                {team.map((member, index) => {
                                    const gradient = member.color;

                                    return (
                                        <motion.div
                                            key={member.name}
                                            variants={fadeInUp}
                                            whileHover="hover"
                                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm border border-white/10"
                                        >
                                            {/* Background Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                            {/* Decorative Elements */}
                                            <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 translate-y--16">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-20`} />
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center text-center">
                                                {/* Image with Glow Effect */}
                                                <div className="relative mb-6">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                                                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                    </div>
                                                </div>

                                                <h4 className="text-2xl font-bold text-white">
                                                    {member.name}
                                                </h4>

                                                <p className={`mt-2 bg-gradient-to-r ${gradient} bg-clip-text font-medium text-transparent`}>
                                                    {member.role}
                                                </p>

                                                <p className="mt-4 text-sm text-blue-200/70 leading-relaxed">
                                                    {member.bio}
                                                </p>

                                                {/* Expertise Tags */}
                                                <div className="mt-6 flex flex-wrap justify-center gap-2">
                                                    {member.expertise.map((exp) => (
                                                        <span
                                                            key={exp}
                                                            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 border border-white/10"
                                                        >
                                                            {exp}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Experience Badge */}
                                                <div className="mt-6 w-full border-t border-white/10 pt-4">
                                                    <div className="flex items-center justify-center gap-2 text-sm">
                                                        <Calendar className="h-4 w-4 text-cyan-400" />
                                                        <span className="text-white/60">15+ Years Experience</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* LEGAL DOCUMENTS TAB */}
                    {activeTab === "legal" && (
                        <motion.div
                            key="legal"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={staggerContainer}
                            className="mt-10"
                        >
                            <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
                                <h3 className="text-3xl font-bold text-white">
                                    Verified Credentials
                                </h3>
                                <p className="mt-3 text-lg text-blue-100/80">
                                    Our company operates with official authorization and complies with
                                    Bhutan's tourism regulations to ensure safe and trusted travel services.
                                </p>
                            </motion.div>

                            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                                {legalDocs.map((doc, idx) => (
                                    <motion.div
                                        key={doc.src}
                                        variants={fadeInUp}
                                        whileHover={{ y: -8 }}
                                        className="group cursor-pointer"
                                        onClick={() => setSelectedDoc(idx)}
                                    >
                                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                                            {/* Document Preview */}
                                            <div className="relative h-64 overflow-hidden rounded-2xl bg-white/5">
                                                <Image
                                                    src={doc.src}
                                                    alt={doc.title}
                                                    fill
                                                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* Overlay with View Button */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm">
                                                        View Document
                                                        <ExternalLink className="h-4 w-4" />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Document Info */}
                                            <div className="mt-6">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="text-xl font-semibold text-white">
                                                            {doc.title}
                                                        </h4>
                                                        <p className="mt-2 text-sm text-blue-200/70">
                                                            {doc.desc}
                                                        </p>
                                                    </div>
                                                    <ChevronRight className="h-5 w-5 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                                </div>

                                                {/* Document Number */}
                                                <div className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-white/60 border border-white/10">
                                                    {doc.number}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* TESTIMONIALS TAB */}

                </AnimatePresence>

                {/* FULLSCREEN DOCUMENT VIEWER MODAL */}
                <AnimatePresence>
                    {selectedDoc !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
                            onClick={() => setSelectedDoc(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="relative max-w-5xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {/* Document Viewer */}
                                <div className="rounded-3xl bg-white p-2 shadow-2xl">
                                    <div className="relative flex items-center justify-center rounded-2xl bg-gray-50 p-4">
                                        <Image
                                            src={legalDocs[selectedDoc].src}
                                            alt={legalDocs[selectedDoc].title}
                                            width={1200}
                                            height={800}
                                            className="max-h-[80vh] w-auto object-contain"
                                        />
                                    </div>

                                    <div className="mt-4 px-4 pb-4">
                                        <h4 className="text-xl font-bold text-gray-900">
                                            {legalDocs[selectedDoc].title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {legalDocs[selectedDoc].desc}
                                        </p>
                                        <p className="mt-2 text-xs font-mono text-gray-500">
                                            {legalDocs[selectedDoc].number}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}