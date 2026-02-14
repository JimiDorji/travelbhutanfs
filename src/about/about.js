"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
    const [particles, setParticles] = useState([]);
    const [activeTab, setActiveTab] = useState("about");
    const sectionRef = useRef(null);
    const [selectedDoc, setSelectedDoc] = useState(null);


    useEffect(() => {
        const generated = Array.from({ length: 10 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${6 + Math.random() * 4}s`,
            delay: `${i * 0.3}s`,
        }));
        setParticles(generated);
    }, []);

    const highlights = [
        {
            title: "Local Expertise",
            text: "Guided by Bhutanese professionals with deep cultural and historical knowledge.",
            stat: "15+ Years",
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Sustainable Travel",
            text: "Carbon-neutral journeys that protect Bhutan's pristine environment and traditions.",
            stat: "100% Offset",
            color: "from-emerald-500 to-green-500",
        },
        {
            title: "Custom Journeys",
            text: "Tailor-made itineraries crafted around your interests and travel pace.",
            stat: "Personalized",
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Authentic Experiences",
            text: "Genuine encounters with local communities beyond typical tourist paths.",
            stat: "25+ Villages",
            color: "from-amber-500 to-orange-500",
        },
    ];

    const stats = [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "2,500+", label: "Travelers Guided" },
        { value: "50+", label: "Local Partnerships" },
        { value: "10", label: "Awards Won" },
    ];

    const team = [
        {
            name: "Jigme Dorji",
            role: "Founder & Lead",
            bio: "Supports client platforms, CRM workflows, and online service systems to maintain efficient and reliable travel operations.",
            image: "/team/img/jigme.jpeg",
        },
        {
            name: "Dechen Dorji",
            role: "Senior Cultural Guide",
            bio: "Expert in Bhutanese history, traditions, and sacred heritage, guiding guests through meaningful cultural and spiritual encounters.",
            image: "/team/img/dechen.jpeg",
        },
        {
            name: "Pema Cheki",
            role: "Administrative Officer – Tour Operations",
            bio: "Oversees tour administration, coordinating logistics, schedules, and operational execution to ensure seamless travel experiences.",
            image: "/team/img/pema.jpeg",
        },
    ];

    const legalDocs = [
        {
            title: "Tourism License",
            src: "/legal/img/licence.jpg",
            desc: "Officially authorized tourism operator license issued by the MOICE.",
        },
        {
            title: "Company Certification",
            src: "/legal/img/certificate.jpg",
            desc: "Verified registration and compliance certificate for legal tourism operations.",
        },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
        >
            {/* Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-cyan-400/20 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs tracking-widest text-cyan-200">
                        OUR STORY & MISSION
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="text-white">Crafting Himalayan </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Journeys
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-blue-100/80">
                        We are Bhutan’s premier travel curator, revealing the kingdom’s soul
                        through authentic, sustainable, and transformative experiences.
                    </p>

                    {/* Tabs */}
                    <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
                        <div className="flex rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-inner shadow-black/20">
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
                                        {tab === "about" ? "About Us" : tab === "team" ? "Our Team" : "Legal Documents"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ABOUT TAB */}
                {activeTab === "about" && (
                    <>
                        <div className="grid gap-16 lg:grid-cols-2">
                            <div className="space-y-6 text-blue-100/90">
                                <p className="text-lg leading-relaxed">
                                    Founded in the heart of the Himalayas,{" "}
                                    <span className="font-semibold text-white">
                                        Alpine Odyssey
                                    </span>{" "}
                                    emerged from a passion to share Bhutan’s extraordinary beauty
                                    while preserving its timeless traditions.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Our locally-born guides and travel experts have explored every
                                    valley, monastery, and mountain pass, creating journeys that
                                    reveal Bhutan’s living culture with authenticity and respect.
                                </p>

                                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm">
                                    <h3 className="mb-3 text-xl font-semibold text-white">
                                        Our Philosophy
                                    </h3>
                                    <p className="text-blue-100/90">
                                        Travel should enrich both visitor and host. Through
                                        responsible tourism, we support local communities, preserve
                                        cultural heritage, and maintain Bhutan’s carbon-negative
                                        legacy.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                {highlights.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/90 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition`}
                                        />
                                        <div className="relative z-10">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {item.title}
                                                </h3>
                                                <span
                                                    className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold text-white`}
                                                >
                                                    {item.stat}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-24 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                                        {stat.value}
                                    </div>
                                    <p className="mt-2 text-sm text-blue-100/80">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* TEAM TAB */}
                {activeTab === "team" && (
                    <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm transition hover:scale-[1.02] hover:shadow-xl"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-full w-full object-cover"
                                        />
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
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* LEGAL DOCUMENTS TAB */}
                {activeTab === "legal" && (
                    <div className="mt-14">
                        <div className="mx-auto max-w-3xl text-center">
                            <h3 className="text-3xl font-bold text-white">
                                Verified Legal Credentials
                            </h3>
                            <p className="mt-3 text-blue-100/80">
                                Our company operates with official authorization and complies with
                                Bhutan’s tourism regulations to ensure safe and trusted travel services.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {legalDocs.map((doc, idx) => (
                                <motion.div
                                    key={doc.src}
                                    className="group relative cursor-pointer rounded-3xl p-1"
                                    initial="hidden"
                                    animate="show"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setSelectedDoc(idx)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") setSelectedDoc(idx);
                                        }}
                                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 backdrop-blur-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                                        aria-label={`${doc.title} - view document`}
                                    >
                                        <div className="rounded-2xl bg-white/5 p-3">
                                            <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-white">
                                                <img
                                                    src={doc.src}
                                                    alt={doc.title}
                                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                                />
                                            </div>

                                            <div className="mt-4 flex items-start justify-between gap-3">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">
                                                        {doc.title}
                                                    </h4>
                                                    <p className="mt-1 text-sm text-blue-200/70">
                                                        {doc.desc}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    <button
                                                        onClick={() => setSelectedDoc(idx)}
                                                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
                                                    >
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FULLSCREEN DOCUMENT VIEWER MODAL */}
                {selectedDoc !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedDoc(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={legalDocs[selectedDoc].title}
                    >
                        {/* Control Bar */}
                        <div className="pointer-events-none absolute top-6 right-6 flex gap-3">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedDoc(null)}
                                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Document Container */}
                        <div
                            className="relative max-h-[92vh] max-w-4xl px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="rounded-2xl bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                                <div className="mb-3 flex items-center justify-center">
                                    <h4 className="text-lg font-semibold text-slate-900 text-center">
                                        {legalDocs[selectedDoc].title}
                                    </h4>
                                </div>

                                <div className="flex items-center justify-center">
                                    <img
                                        src={legalDocs[selectedDoc].src}
                                        alt={legalDocs[selectedDoc].title}
                                        className="max-h-[78vh] w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}




