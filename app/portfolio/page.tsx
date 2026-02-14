/** @format */

import { Hero } from "@/components/shared/hero";
import { FaImage } from "react-icons/fa6";
import { ContactForm } from "@/components/shared/contact-form";
import { PortfolioPagination } from "@/components/portfolio/portfolioPagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Portfolio | Parker Wimpenny Construction & Landscaping",
    description:
        "Explore the portfolio of Parker Wimpenny, showcasing our recent construction and landscaping projects in Huddersfield. See the quality of our work for yourself.",
    alternates: {
        canonical: "https://yourdomain.co.uk/portfolio",
    },
};

const portfolioItems = [
    {
        title: "Porcelain Patio",
        description:
            "A stunning porcelain patio installation that transformed a garden into a luxurious outdoor living space.",
        image: "/images/portfolio/2.webp",
    },
    {
        title: "Garden Transformation",
        description: "A complete garden transformation featuring new paving, artificial grass, and a new fence.",
        image: "/images/portfolio/4.webp",
    },
    {
        title: "Garden Wall",
        description: "A small garden wall for a bin store, built with the same stone as the house to match.",
        image: "/images/portfolio/7.webp",
    },
    {
        title: "Patio",
        description:
            "A patio installation that enhanced the outdoor living space with elegant design and durable materials.",
        image: "/images/portfolio/9.webp",
    },
    {
        title: "Fence Installation",
        description:
            "A new wrap around fence installation that provided privacy and security while complementing the home's exterior.",
        image: "/images/portfolio/8.webp",
    },
    {
        title: "Steps",
        description:
            "Some indian sandstone steps that were installed to replace the old concrete ones, giving the entrance a fresh new look.",
        image: "/images/portfolio/10.webp",
    },
    {
        title: "Brick Fireplace",
        description: "A brick fireplace restoration that added warmth and charm to a living room.",
        image: "/images/portfolio/1.webp",
    },
    {
        title: "Restored Patio",
        description: "A patio restoration that brought new life to an old outdoor space.",
        image: "/images/portfolio/3.webp",
    },
    {
        title: "Seating Area",
        description: "A new seating area created with indian sandstone flags.",
        image: "/images/portfolio/6.webp",
    },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-background container mx-auto">
            <Hero
                icon={<FaImage className="text-4xl text-primary" />}
                title="Our Portfolio"
                description="Take a look at some of our recent projects and see the quality of our work for yourself."
                className="py-10"
            />

            <div className="container mx-auto p-4 bg-accent rounded-lg mb-10">
                <PortfolioPagination items={portfolioItems} />
            </div>

            <ContactForm />
        </div>
    );
}
