/** @format */

"use client";

import { useState } from "react";
import { PortfolioGrid } from "./portfolioGrid";

const ITEMS_PER_PAGE = 6;

type PortfolioItemType = {
    title: string;
    description: string;
    image: string;
};

type PortfolioPaginationProps = {
    items: PortfolioItemType[];
};

export const PortfolioPagination = ({ items }: PortfolioPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <PortfolioGrid items={currentItems} />

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
        </>
    );
};
