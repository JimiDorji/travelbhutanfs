"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    Calendar,
    User,
    MessageSquare,
    Sparkles,
    Globe,
    Shield,
    Heart
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

export default function Contact() {
    const formRef = useRef(null);
    const sectionRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [particles, setParticles] = useState([]);
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        start_date: '',
        end_date: '',
        message: ''
    });

    /* Hydration-safe particles */
    useEffect(() => {
        const generated = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 4 + 2}px`,
            delay: `${Math.random() * 5}s`,
            duration: `${6 + Math.random() * 6}s`,
            opacity: Math.random() * 0.3 + 0.1
        }));
        setParticles(generated);
    }, []);

    const formatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        return date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

            // Send email (agency + auto-reply handled in API)
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

            // Save inquiry to database
            await fetch('/api/inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).catch(err => console.error('Database save failed:', err));

            setStatus("success");
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                start_date: '',
                end_date: '',
                message: ''
            });

            setTimeout(() => setStatus(null), 5000);
        } catch (err) {
            console.error("Error:", err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: "Visit Us",
            value: "Olakha, Thimphu, Bhutan",
            link: "https://maps.google.com/?q=Thimphu,Bhutan",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: Mail,
            label: "Email Us",
            value: "alpineodyssey.bt@gmail.com",
            link: "mailto:alpineodyssey.bt@gmail.com",
            color: "from-emerald-500 to-green-500"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+975 77652012",
            link: "tel:+97577652012",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Clock,
            label: "Office Hours",
            value: "9:00 AM – 5:00 PM (BST)",
            color: "from-amber-500 to-orange-500"
        }
    ];

    const features = [
        {
            icon: Heart,
            title: "Personalized Service",
            description: "Tailored itineraries crafted just for you"
        },
        {
            icon: Shield,
            title: "Secure Booking",
            description: "100% protected payments and data"
        },
        {
            icon: Globe,
            title: "Local Expertise",
            description: "Guided by Bhutanese professionals"
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-32"
        >
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
                        <Sparkles className="h-4 w-4" />
                        CONNECT WITH US
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        <span className="text-white">Start Your </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Himalayan Journey
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-lg leading-relaxed text-blue-100/80 max-w-2xl mx-auto"
                    >
                        Connect with our Bhutan travel specialists for bespoke itineraries
                        and personalized service tailored to your interests and dreams.
                    </motion.p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* FORM SECTION */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                    >
                        <motion.form
                            ref={formRef}
                            onSubmit={sendEmail}
                            variants={fadeInUp}
                            className="relative overflow-hidden rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-xl border border-white/20"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl" />

                            <div className="relative z-10">
                                <h3 className="mb-8 text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <Send className="h-6 w-6 text-cyan-600" />
                                    Send Your Inquiry
                                </h3>

                                {/* Name Fields */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('first_name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            placeholder="John"
                                        />
                                        {focusedField === 'first_name' && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            />
                                        )}
                                    </div>

                                    <div className="relative">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('last_name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            placeholder="Doe"
                                        />
                                        {focusedField === 'last_name' && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative mt-4">
                                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    {focusedField === 'email' && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div className="relative mt-4">
                                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Phone Number (Optional)
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            placeholder="+975 7765 2012"
                                        />
                                    </div>
                                    {focusedField === 'phone' && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    )}
                                </div>

                                {/* Date Fields */}
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            Start Date
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="date"
                                                name="start_date"
                                                value={formData.start_date}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('start_date')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            />
                                        </div>
                                        {focusedField === 'start_date' && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            />
                                        )}
                                    </div>

                                    <div className="relative">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                            End Date
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="date"
                                                name="end_date"
                                                value={formData.end_date}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('end_date')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                            />
                                        </div>
                                        {focusedField === 'end_date' && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative mt-4">
                                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                        Your Message *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3.5 text-gray-900 transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 outline-none resize-none"
                                            placeholder="Tell us about your dream journey to Bhutan..."
                                        />
                                    </div>
                                    {focusedField === 'message' && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.a
                                    key={item.label}
                                    href={item.link}
                                    target={item.link ? "_blank" : undefined}
                                    rel={item.link ? "noopener noreferrer" : undefined}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}  // ✅ Use direct hover animation
                                    className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Inquiry
                                                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-800 opacity-0 transition-opacity group-hover:opacity-100" />
                                </motion.button>

                                {/* Status Messages */}
                                <AnimatePresence>
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-emerald-700"
                                        >
                                            <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                            <p className="text-sm font-medium">
                                                ✅ Inquiry sent successfully! We'll reply within 24 hours.
                                            </p>
                                        </motion.div>
                                    )}

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-700"
                                        >
                                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                            <p className="text-sm font-medium">
                                                ❌ Failed to send. Please try again or email us directly.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.form>
                    </motion.div>

                    {/* CONTACT INFO SECTION */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.link}
                                        target={item.link ? "_blank" : undefined}
                                        rel={item.link ? "noopener noreferrer" : undefined}
                                        variants={fadeInUp}
                                        whileHover="hover"
                                        variants={scaleOnHover}
                                        className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            <div className={`inline-flex rounded-xl bg-gradient-to-br ${item.color} p-2.5`}>
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>

                                            <p className="mt-3 text-sm font-medium text-white/60">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-base font-semibold text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </motion.div>

                        {/* Map */}
                        {/* Contact Cards - Fixed */}
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
                                        whileHover={{ y: -4, scale: 1.02 }}
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

                        {/* Features */}
                        <motion.div
                            variants={staggerContainer}
                            className="grid gap-4 sm:grid-cols-3"
                        >
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={fadeInUp}
                                        className="text-center"
                                    >
                                        <div className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-2.5">
                                            <Icon className="h-5 w-5 text-cyan-400" />
                                        </div>
                                        <h4 className="mt-2 text-sm font-semibold text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="mt-1 text-xs text-white/60">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-6 py-3 backdrop-blur-sm border border-white/10">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-white/80">
                            We respond to all inquiries within 24 hours
                        </span>
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                    </div>

                    <p className="mt-6 text-xs text-white/40">
                        © {new Date().getFullYear()} Alpine Odyssey Bhutan. All rights reserved.
                    </p>
                </motion.footer>
            </div>
        </section>
    );
}