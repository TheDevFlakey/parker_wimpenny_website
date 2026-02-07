/** @format */
"use client";

import { useState } from "react";
import { Hero } from "@/components/shared/hero";
import { FaImage } from "react-icons/fa6";
import { ContactForm } from "@/components/shared/contact-form";

const ITEMS_PER_PAGE = 6;

const PortfolioPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

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
            description:
                "A brick fireplace restoration that added warmth and charm to a living room, creating a cozy focal point.",
            image: "/images/portfolio/1.webp",
        },
        {
            title: "Restored Patio",
            description:
                "A patio restoration that brought new life to an old outdoor space, combining functionality with aesthetic appeal.",
            image: "/images/portfolio/3.webp",
        },
        {
            title: "Seating Area",
            description:
                "Once a neglected corner of the garden, this new seating area was created with a mix of indian sandstone flags, providing a perfect spot to relax and enjoy the outdoors.",
            image: "/images/portfolio/6.webp",
        },
    ];

    const totalPages = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = portfolioItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen flex flex-col pt-20 bg-background container mx-auto">
            <Hero
                icon={<FaImage className="text-4xl text-primary" />}
                title="Our Portfolio"
                description="Take a look at some of our recent projects and see the quality of our work for yourself."
                className="py-10"
            />

            <div className="container mx-auto p-4 bg-accent rounded-lg mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {currentItems.map((item, index) => (
                        <PortfolioItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="cursor-pointer px-4 py-2 rounded-md bg-primary/90 hover:bg-primary text-white disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span className="text-sm text-secondary">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer px-4 py-2 rounded-md bg-primary/90 hover:bg-primary text-white disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

const PortfolioItem = ({ title, description, image }: { title: string; description: string; image: string }) => (
    <div className="bg-background rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-78 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-sm text-secondary mt-2">{description}</p>
        </div>
    </div>
);

export default PortfolioPage;
