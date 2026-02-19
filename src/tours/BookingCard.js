"use client";

import { useState } from "react";
import {
    Calendar,
    Minus,
    Plus,
    CheckCircle,
    ChevronDown,
    Users,
    Moon,
    Sun,
    Baby,
    UserCog,
    Globe,
    Shield,
    CreditCard,
    Clock,
    CalendarRange,
    AlertCircle,
    Info
} from "lucide-react";

export default function BookingCard({ tour }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [flexible, setFlexible] = useState(true);
    const [activeSection, setActiveSection] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [currency, setCurrency] = useState("USD");
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

    const [travellers, setTravellers] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        seniors: 0,
    });

    const currencies = [
        { code: "USD", symbol: "$", name: "US Dollar" },
        { code: "EUR", symbol: "€", name: "Euro" },
        { code: "GBP", symbol: "£", name: "British Pound" },
        { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    ];

    const updateCount = (type, delta) => {
        setTravellers((prev) => ({
            ...prev,
            [type]: Math.max(0, prev[type] + delta),
        }));
    };

    const getTotalTravellers = () => {
        return Object.values(travellers).reduce((a, b) => a + b, 0);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "Select date";
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Calculate estimated price (mock calculation)
    const basePrice = 2499;
    const totalPrice = basePrice * getTotalTravellers();
    const discount = getTotalTravellers() >= 4 ? 0.1 : 0;
    const finalPrice = totalPrice * (1 - discount);

    return (
        <div className="sticky top-24 space-y-6">
            {/* Main Booking Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/5 p-6 backdrop-blur-xl">
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />

                {/* Premium Badge - You had this commented out */}
                <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 px-3 py-1 text-xs font-medium text-amber-300 border border-amber-500/30">
                        ⚡ Limited Availability
                    </span>
                    <button className="text-white/40 hover:text-white/60 transition-colors">
                        <Info className="h-4 w-4" />
                    </button>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                    {discount > 0 && (
                        <div className="mt-1 flex items-center gap-2">
                            <span className="text-sm line-through text-white/30">
                                ${totalPrice.toLocaleString()}
                            </span>
                            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
                                Save 10%
                            </span>
                        </div>
                    )}
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Select Date Range
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setShowDatePicker(true)}
                            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-left transition hover:bg-white/10"
                        >
                            <Calendar className="h-4 w-4 text-white/40" />
                            <div>
                                <div className="text-xs text-white/40">From</div>
                                <div className="text-sm">{formatDate(startDate)}</div>
                            </div>
                        </button>
                        <button
                            onClick={() => setShowDatePicker(true)}
                            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-left transition hover:bg-white/10"
                        >
                            <Calendar className="h-4 w-4 text-white/40" />
                            <div>
                                <div className="text-xs text-white/40">To</div>
                                <div className="text-sm">{formatDate(endDate)}</div>
                            </div>
                        </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="flexible"
                            checked={flexible}
                            onChange={(e) => setFlexible(e.target.checked)}
                            className="rounded border-white/20 bg-white/5"
                        />
                        <label htmlFor="flexible" className="text-xs text-white/60">
                            I'm flexible with dates
                        </label>
                    </div>
                </div>

                {/* Travellers Selection */}
                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Number of Travellers
                    </label>
                    <div className="space-y-3">
                        {Object.entries(travellers).map(([type, count]) => (
                            <div key={type} className="flex items-center justify-between">
                                <span className="text-sm capitalize text-white/70">
                                    {type}
                                </span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateCount(type, -1)}
                                        className="rounded-full bg-white/10 p-1 transition hover:bg-white/20 disabled:opacity-50"
                                        disabled={count === 0}
                                    >
                                        <Minus className="h-3 w-3" />
                                    </button>
                                    <span className="w-6 text-center text-sm">{count}</span>
                                    <button
                                        onClick={() => updateCount(type, 1)}
                                        className="rounded-full bg-white/10 p-1 transition hover:bg-white/20"
                                    >
                                        <Plus className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 text-xs text-white/40">
                        Total: {getTotalTravellers()} travellers
                    </div>
                </div>

                {/* Currency Selection */}
                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-white/80">
                        Currency
                    </label>
                    <div className="relative">
                        <button
                            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                            className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 transition hover:bg-white/10"
                        >
                            <span className="text-sm">
                                {currencies.find(c => c.code === currency)?.name} ({currency})
                            </span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showCurrencyDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-white/10 bg-slate-900 py-1 shadow-xl z-10">
                                {currencies.map((c) => (
                                    <button
                                        key={c.code}
                                        onClick={() => {
                                            setCurrency(c.code);
                                            setShowCurrencyDropdown(false);
                                        }}
                                        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-white/10 transition"
                                    >
                                        <span>{c.symbol}</span>
                                        <span>{c.name}</span>
                                        {c.code === currency && (
                                            <CheckCircle className="ml-auto h-4 w-4 text-cyan-400" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                        Book This Tour
                    </button>
                    <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 font-medium text-white/90 transition hover:bg-white/10">
                        Enquire Now
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-4 text-xs text-white/40">
                    <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CreditCard className="h-3 w-3" />
                        <span>Best Price</span>
                    </div>
                </div>
            </div>
        </div>
    );
}