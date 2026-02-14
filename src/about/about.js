"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    const [particles, setParticles] = useState([]);
    const [activeTab, setActiveTab] = useState("about");
    const sectionRef = useRef(null);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [hoveredHighlight, setHoveredHighlight] = useState(null);

    useEffect(() => {
        const generated = Array.from({ length: 20 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${8 + Math.random() * 6}s`,
            delay: `${i * 0.2}s`,
            size: `${2 + Math.random() * 4}px`,
            opacity: 0.1 + Math.random() * 0.2,
        }));
        setParticles(generated);
    }, []);

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            stat: "15+ Years",
            color: "from-cyan-500 to-blue-500",
            icon: "🏔️",
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            stat: "100% Offset",
            color: "from-emerald-500 to-green-500",
            icon: "🌿",
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests and travel pace.",
            stat: "Personalized",
            color: "from-purple-500 to-pink-500",
            icon: "✨",
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            stat: "25+ Villages",
            color: "from-amber-500 to-orange-500",
            icon: "🏘️",
        },
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction", icon: "⭐" },
        { value: "2,500+", label: "Travelers Guided", icon: "🧭" },
        { value: "50+", label: "Local Partnerships", icon: "🤝" },
        { value: "10", label: "Awards Won", icon: "🏆" },
    ];

    const team = [
        {
            name: "Jigme Dorji",
            role: "Founder & Lead",
            bio: "Supports client platforms, CRM workflows, and online service systems to maintain efficient and reliable travel operations.",
            image: "/team/img/jigme.jpeg",
            expertise: ["Strategic Planning", "Client Relations", "Operations"],
        },
        {
            name: "Dechen Dorji",
            role: "Senior Cultural Guide",
            bio: "Expert in Bhutanese history, traditions, and sacred heritage, guiding guests through meaningful cultural and spiritual encounters.",
            image: "/team/img/dechen.jpeg",
            expertise: ["Cultural Heritage", "Sacred Sites", "Local Traditions"],
        },
        {
            name: "Pema Cheki",
            role: "Administrative Officer – Tour Operations",
            bio: "Oversees tour administration, coordinating logistics, schedules, and operational execution to ensure seamless travel experiences.",
            image: "/team/img/pema.jpeg",
            expertise: ["Logistics", "Scheduling", "Operations"],
        },
    ];

    const legalDocs = [
        {
            title: "Tourism License",
            description: "Officially authorized tourism operator license issued by the Bhutan tourism authority.",
            image: "/legal/img/licence.jpg",
            gradient: "from-cyan-500 via-blue-500 to-indigo-500",
            id: "licence",
        },
        {
            title: "Company Certification",
            description: "Verified registration and compliance certificate for legal tourism operations.",
            image: "/legal/img/certificate.jpg",
            gradient: "from-amber-500 via-orange-500 to-yellow-500",
            id: "certificate",
        },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        >
            {/* Animated Particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-400/20"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: parseFloat(p.duration),
                            delay: parseFloat(p.delay),
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Background Gradient Orbs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="mx-auto mb-16 max-w-4xl text-center"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs tracking-widest text-cyan-200 backdrop-blur-sm"
                    >
                        ✦ OUR STORY & MISSION ✦
                    </motion.span>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        <span className="text-white">Crafting Himalayan </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Journeys
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-blue-100/80"
                    >
                        We are Bhutan's premier travel curator, revealing the kingdom's soul
                        through authentic, sustainable, and transformative experiences.
                    </motion.p>

                    {/* Tabs with enhanced styling */}
                    <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
                        <div className="flex rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
                            {["about", "team", "legal"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-8 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${activeTab === tab
                                        ? "text-slate-900"
                                        : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 rounded-xl bg-white"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {tab === "about"
                                            ? "About Us"
                                            : tab === "team"
                                                ? "Our Team"
                                                : "Legal Documents"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content Sections with AnimatePresence */}
                <AnimatePresence mode="wait">
                    {/* ABOUT TAB */}
                    {activeTab === "about" && (
                        <motion.div
                            key="about"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-16"
                        >
                            <div className="grid gap-12 lg:grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-6 text-blue-100/90">
                                        <p className="text-lg leading-relaxed">
                                            Founded in the heart of the Himalayas,{" "}
                                            <span className="font-semibold text-white">
                                                Alpine Odyssey
                                            </span>{" "}
                                            emerged from a passion to share Bhutan's extraordinary beauty
                                            while preserving its timeless traditions.
                                        </p>

                                        <p className="text-lg leading-relaxed">
                                            Our locally-born guides and travel experts have explored every
                                            valley, monastery, and mountain pass, creating journeys that
                                            reveal Bhutan's living culture with authenticity and respect.
                                        </p>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                                        <h3 className="mb-3 text-xl font-semibold text-white flex items-center gap-2">
                                            <span className="text-cyan-400">✦</span>
                                            Our Philosophy
                                        </h3>
                                        <p className="text-blue-100/90">
                                            Travel should enrich both visitor and host. Through
                                            responsible tourism, we support local communities, preserve
                                            cultural heritage, and maintain Bhutan's carbon-negative
                                            legacy.
                                        </p>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={staggerContainer}
                                    initial="initial"
                                    animate="animate"
                                    className="grid gap-6 sm:grid-cols-2"
                                >
                                    {highlights.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            variants={fadeInUp}
                                            onHoverStart={() => setHoveredHighlight(index)}
                                            onHoverEnd={() => setHoveredHighlight(null)}
                                            whileHover={{ y: -5 }}
                                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 ${hoveredHighlight === index ? "opacity-10" : ""
                                                    }`}
                                            />
                                            <div className="relative z-10">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <span className="text-2xl">{item.icon}</span>
                                                    <span
                                                        className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                                                    >
                                                        {item.stat}
                                                    </span>
                                                </div>
                                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Stats Section with Enhanced Design */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                                <div className="relative grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="text-center group"
                                        >
                                            <div className="relative">
                                                <span className="text-3xl mb-2 block opacity-50 group-hover:opacity-100 transition-opacity">
                                                    {stat.icon}
                                                </span>
                                                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                                                    {stat.value}
                                                </div>
                                            </div>
                                            <p className="mt-2 text-sm text-blue-100/80">
                                                {stat.label}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* TEAM TAB */}
                    {activeTab === "team" && (
                        <motion.div
                            key="team"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {team.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 rounded-2xl transition-all duration-300 group-hover:from-cyan-500/10 group-hover:to-blue-500/10" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                                            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-lg">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-semibold text-white">
                                            {member.name}
                                        </h4>

                                        <p className="mt-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                                            {member.role}
                                        </p>

                                        <p className="mt-3 text-sm text-blue-200/70">
                                            {member.bio}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                            {member.expertise.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-blue-200/70"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* LEGAL DOCUMENTS TAB */}
                    {activeTab === "legal" && (
                        <motion.div
                            key="legal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <h3 className="text-3xl font-bold text-white">
                                    Verified Legal Credentials
                                </h3>
                                <p className="mt-3 text-blue-100/80">
                                    Our company operates with official authorization and complies with
                                    Bhutan's tourism regulations to ensure safe and trusted travel services.
                                </p>
                            </div>

                            <div className="grid gap-8 lg:grid-cols-2">
                                {legalDocs.map((doc, index) => (
                                    <motion.div
                                        key={doc.id}
                                        initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        whileHover={{ y: -8 }}
                                        className="group cursor-pointer"
                                        onClick={() => setSelectedDoc(doc.image)}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-1">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${doc.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                            <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl p-4">
                                                <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <img
                                                        src={doc.image}
                                                        alt={doc.title}
                                                        className="h-64 w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <h4 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${doc.gradient}`} />
                                                {doc.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-blue-200/70">
                                                {doc.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Modal with Animation */}
                <AnimatePresence>
                    {selectedDoc && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                            onClick={() => setSelectedDoc(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="relative max-h-[90vh] max-w-5xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:rotate-90"
                                >
                                    ✕
                                </button>

                                {/* Image Container */}
                                <div className="rounded-2xl bg-white p-2 shadow-2xl">
                                    <img
                                        src={selectedDoc}
                                        alt="Legal Document"
                                        className="max-h-[85vh] w-auto rounded-xl object-contain"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}