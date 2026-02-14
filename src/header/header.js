"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    const [particles, setParticles] = useState([]);
    const [activeTab, setActiveTab] = useState("about");
    const sectionRef = useRef(null);
    const [selectedDoc, setSelectedDoc] = useState(null);

    useEffect(() => {
        const generated = Array.from({ length: 8 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${10 + Math.random() * 6}s`,
            delay: `${i * 0.3}s`,
            size: `${2 + Math.random() * 3}px`,
            opacity: 0.05 + Math.random() * 0.1,
        }));
        setParticles(generated);
    }, []);

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            stat: "15+ Years",
            icon: "🏔️",
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            stat: "100% Offset",
            icon: "🌿",
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests and travel pace.",
            stat: "Personalized",
            icon: "✨",
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            stat: "25+ Villages",
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
            bio: "Expert in Bhutanese history, traditions, and sacred heritage, guiding guests through meaningful cultural encounters.",
            image: "/team/img/dechen.jpeg",
            expertise: ["Cultural Heritage", "Sacred Sites", "Traditions"],
        },
        {
            name: "Pema Cheki",
            role: "Administrative Officer – Tour Operations",
            bio: "Oversees tour administration, coordinating logistics and schedules to ensure seamless travel execution.",
            image: "/team/img/pema.jpeg",
            expertise: ["Logistics", "Scheduling", "Operations"],
        },
    ];

    const legalDocs = [
        {
            title: "Tourism License",
            description:
                "Officially authorized tourism operator license issued by the Bhutan tourism authority.",
            image: "/legal/img/licence.jpg",
        },
        {
            title: "Company Certification",
            description:
                "Verified registration and compliance certificate for legal tourism operations.",
            image: "/legal/img/certificate.jpg",
        },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
            {/* Subtle Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-400/20"
                        style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: parseFloat(p.duration),
                            delay: parseFloat(p.delay),
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-cyan-300">
                        OUR STORY & MISSION
                    </span>

                    <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
                        Crafting Himalayan{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Journeys
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100/70">
                        We are Bhutan's premier travel curator, revealing the kingdom's soul
                        through authentic, sustainable, and transformative experiences.
                    </p>

                    {/* Professional Tabs */}
                    <div className="mt-10 flex justify-center border-b border-white/10">
                        <div className="flex gap-10">
                            {["about", "team", "legal"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative pb-3 text-sm font-medium transition-colors ${activeTab === tab
                                        ? "text-white"
                                        : "text-blue-200/60 hover:text-white"
                                        }`}
                                >
                                    {tab === "about"
                                        ? "About Us"
                                        : tab === "team"
                                            ? "Our Team"
                                            : "Legal Documents"}

                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ABOUT TAB */}
                <AnimatePresence mode="wait">
                    {activeTab === "about" && (
                        <motion.div
                            key="about"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-16"
                        >
                            <div className="grid gap-12 lg:grid-cols-2">
                                {/* Text */}
                                <div className="space-y-6 text-blue-100/80">
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

                                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-md">
                                        <h3 className="mb-3 text-xl font-semibold text-white">
                                            Our Philosophy
                                        </h3>
                                        <p className="text-blue-100/80">
                                            Travel should enrich both visitor and host. Through responsible
                                            tourism, we support local communities, preserve cultural
                                            heritage, and maintain Bhutan's carbon-negative legacy.
                                        </p>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {highlights.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition hover:border-cyan-400/40"
                                        >
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-2xl">{item.icon}</span>
                                                <span className="text-xs font-semibold text-cyan-300">
                                                    {item.stat}
                                                </span>
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-blue-200/70">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid gap-8 rounded-2xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <span className="text-3xl opacity-70">{stat.icon}</span>
                                        <div className="mt-2 text-4xl font-bold text-cyan-400">
                                            {stat.value}
                                        </div>
                                        <p className="mt-1 text-sm text-blue-200/70">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* TEAM TAB */}
                    {activeTab === "team" && (
                        <motion.div
                            key="team"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-md transition hover:border-cyan-400/40"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-6 h-28 w-28 overflow-hidden rounded-full border border-white/10">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <h4 className="text-xl font-semibold text-white">
                                            {member.name}
                                        </h4>
                                        <p className="mt-1 text-cyan-400 font-medium">
                                            {member.role}
                                        </p>

                                        <p className="mt-3 text-sm text-blue-200/70">
                                            {member.bio}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                            {member.expertise.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 text-xs rounded-full border border-white/10 text-blue-200/70"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* LEGAL TAB */}
                    {activeTab === "legal" && (
                        <motion.div
                            key="legal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            <div className="mx-auto max-w-3xl text-center">
                                <h3 className="text-3xl font-semibold text-white">
                                    Verified Legal Credentials
                                </h3>
                                <p className="mt-3 text-blue-100/70">
                                    Our company operates with official authorization and complies
                                    with Bhutan's tourism regulations to ensure safe and trusted
                                    travel services.
                                </p>
                            </div>

                            <div className="grid gap-8 lg:grid-cols-2">
                                {legalDocs.map((doc) => (
                                    <div
                                        key={doc.title}
                                        className="cursor-pointer rounded-xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md transition hover:border-cyan-400/40"
                                        onClick={() => setSelectedDoc(doc.image)}
                                    >
                                        <div className="overflow-hidden rounded-lg bg-white p-6">
                                            <img
                                                src={doc.image}
                                                alt={doc.title}
                                                className="h-64 w-full object-contain"
                                            />
                                        </div>

                                        <div className="mt-4 text-center">
                                            <h4 className="text-lg font-semibold text-white">
                                                {doc.title}
                                            </h4>
                                            <p className="text-sm text-blue-200/70">
                                                {doc.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Modal */}
                <AnimatePresence>
                    {selectedDoc && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDoc(null)}
                        >
                            <motion.div
                                className="relative max-h-[90vh] max-w-5xl"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white/10 text-white border border-white/20"
                                >
                                    ✕
                                </button>

                                <div className="rounded-xl bg-white p-2 shadow-xl">
                                    <img
                                        src={selectedDoc}
                                        alt="Legal Document"
                                        className="max-h-[85vh] w-auto object-contain rounded-lg"
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
