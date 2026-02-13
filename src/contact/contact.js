"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef(null);
    const sectionRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const [particles, setParticles] = useState([]);

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 14 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${i * 0.3}s`,
            duration: `${4 + Math.random() * 4}s`,
        }));
        setParticles(generated);
    }, []);

    const formatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        return date.toLocaleDateString("en-US");
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus(null);

        try {
            const formData = new FormData(formRef.current);

            const data = {
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                start_date: formatDate(formData.get("start_date")),
                end_date: formatDate(formData.get("end_date")),
                message: formData.get("message"),
                time: new Date().toLocaleString(),
                name: `${formData.get("first_name")} ${formData.get("last_name")}`,
            };

            // 1. Send email via SMTP API
            const emailResponse = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!emailResponse.ok) {
                throw new Error('Failed to send email');
            }

            // 2. Save to database via API
            await fetch('/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).catch(err => console.error('Database save failed:', err));

            setStatus("success");
            formRef.current.reset();
            setTimeout(() => setStatus(null), 5000);
        } catch (err) {
            console.error("Error:", err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-32"
        >
            {/* Background Particles */}
            <div className="pointer-events-none absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/30 animate-float"
                        style={{
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <header className="mx-auto mb-20 max-w-4xl text-center">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-widest text-cyan-200 backdrop-blur">
                        GET IN TOUCH
                    </span>

                    <h2 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Start Your Himalayan Journey
                    </h2>

                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
                        Connect with our Bhutan travel specialists for bespoke itineraries
                        and personalized service tailored to your interests.
                    </p>
                </header>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* FORM */}
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="rounded-3xl bg-gradient-to-b from-white/95 to-white/90 p-10 shadow-2xl backdrop-blur-xl"
                    >
                        <h3 className="mb-6 text-2xl font-bold text-slate-900">
                            Send Inquiry
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="first_name"
                                required
                                placeholder="First Name *"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                            />
                            <input
                                type="text"
                                name="last_name"
                                required
                                placeholder="Last Name *"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address *"
                            className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number (Optional)"
                            className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                        />

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <input
                                type="date"
                                name="start_date"
                                className="rounded-xl border border-gray-200 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                            />
                            <input
                                type="date"
                                name="end_date"
                                className="rounded-xl border border-gray-200 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                            />
                        </div>

                        <textarea
                            rows={4}
                            name="message"
                            required
                            placeholder="Tell us about your dream journey..."
                            className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none resize-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="group mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Inquiry →"}
                        </button>

                        {status === "success" && (
                            <p className="mt-4 text-center text-emerald-600 font-medium">
                                ✅ Inquiry sent successfully! We'll reply within 24 hours.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="mt-4 text-center text-red-500 font-medium">
                                ❌ Failed to send. Please try again or email us directly.
                            </p>
                        )}
                    </form>

                    {/* CONTACT INFO */}
                    <div className="space-y-8">
                        <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl border border-white/10">
                            <h4 className="text-xl font-semibold text-white mb-4">
                                Contact Information
                            </h4>

                            <ul className="space-y-4 text-slate-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="text-cyan-400">📍</span>
                                    Olakha, Thimphu, Bhutan
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-cyan-400">✉️</span>
                                    <a href="mailto:alpineodyssey.bt@gmail.com" className="hover:text-cyan-300 transition">
                                        alpineodyssey.bt@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-cyan-400">☎️</span>
                                    <a href="tel:+97577652012" className="hover:text-cyan-300 transition">
                                        +975 77652012
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-cyan-400">🕘</span>
                                    9:00 AM – 5:00 PM (BST)
                                </li>
                            </ul>
                        </div>

                        <iframe
                            title="Bhutan Office Map"
                            src="https://www.google.com/maps?q=Thimphu,Bhutan&output=embed"
                            className="h-80 w-full rounded-3xl border-0 shadow-xl"
                            loading="lazy"
                        />
                    </div>
                </div>

                <footer className="mt-20 text-center text-sm text-blue-300/60">
                    ✦ We respond to all inquiries within 24 hours ✦
                </footer>
            </div>
        </section>
    );
}