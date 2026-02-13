"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function TestimonialForm() {
    const [formData, setFormData] = useState({
        name: "",
        country: "",
        quote: "",
        rating: 5,
        avatar: "",
        stay: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRatingClick = (rating) => {
        setFormData(prev => ({ ...prev, rating }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setStatus('success');
            setFormData({
                name: "",
                country: "",
                quote: "",
                rating: 5,
                avatar: "",
                stay: "",
            });

            // Reset form after 3 seconds
            setTimeout(() => setStatus(null), 3000);
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Share Your Bhutan Experience
                    </h2>
                    <p className="text-slate-300">
                        We'd love to hear about your journey with us!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Country */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Sarah Thompson"
                                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Country *
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                placeholder="e.g., United Kingdom"
                                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                            />
                        </div>
                    </div>

                    {/* Tour Package */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Tour Package (Optional)
                        </label>
                        <input
                            type="text"
                            name="stay"
                            value={formData.stay}
                            onChange={handleChange}
                            placeholder="e.g., 12-Day Cultural Journey"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Your Rating *
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleRatingClick(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="focus:outline-none"
                                >
                                    <Star
                                        className={`w-8 h-8 transition-all ${star <= (hoveredRating || formData.rating)
                                            ? 'fill-yellow-400 text-yellow-400 scale-110'
                                            : 'text-slate-600'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Your Testimonial *
                        </label>
                        <textarea
                            name="quote"
                            value={formData.quote}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Share your experience with us..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none resize-none"
                        />
                    </div>

                    {/* Avatar URL (Optional) */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Avatar Image URL (Optional)
                        </label>
                        <input
                            type="url"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                        />
                        <p className="mt-1 text-xs text-slate-500">
                            Leave empty to use default avatar
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition hover:scale-[1.02] hover:shadow-xl disabled:opacity-50"
                    >
                        {loading ? 'Submitting...' : 'Share Your Experience →'}
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-center">
                            ✅ Thank you! Your testimonial has been submitted for review.
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center">
                            ❌ Failed to submit. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}