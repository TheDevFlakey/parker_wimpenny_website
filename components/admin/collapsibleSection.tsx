/** @format */

"use client";

import { ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface CollapsibleSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
}

export const CollapsibleSection = ({ title, isOpen, onToggle, children }: CollapsibleSectionProps) => {
    return (
        <div className="container bg-accent rounded-lg border border-primary/20 mx-auto p-4 mt-10">
            <h2 className="md:text-2xl font-bold text-primary flex justify-between items-center">
                {title}
                {isOpen ? (
                    <FaChevronUp
                        onClick={onToggle}
                        className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                    />
                ) : (
                    <FaChevronDown
                        onClick={onToggle}
                        className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                    />
                )}
            </h2>

            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
};
