"use client";
import { useState, useEffect } from "react";
import ToursSection from "./ToursSection";

export default function Tours() {
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const handler = (e) => setActiveCategory(e.detail);
        window.addEventListener("tourCategory", handler);
        return () => window.removeEventListener("tourCategory", handler);
    }, []);

    return (
        <ToursSection
            sectionId="tours"
            category={activeCategory}
            title={
                activeCategory === "all"
                    ? "All Tours"
                    : activeCategory === "adventure"
                        ? "Trekkings"
                        : "Festival Tours"
            }
        />
    );
}
