/** @format */

import { FaMagnifyingGlass } from "react-icons/fa6";
import { CollapsibleSection } from "./collapsibleSection";
import { useState } from "react";
import { QuotesList } from "./quotes/quotesList";

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
}

interface Props {
    quotes: Quote[];
    isOpen: boolean;
    onToggle: () => void;
}

export const QuotesSection = ({ quotes, isOpen, onToggle }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredQuotes = quotes.filter((quote) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
            quote.name.toLowerCase().includes(lowerSearchTerm) ||
            quote.email.toLowerCase().includes(lowerSearchTerm) ||
            quote.phone_number.toLowerCase().includes(lowerSearchTerm) ||
            quote.message.toLowerCase().includes(lowerSearchTerm)
        );
    });

    const createQuote = () => {
        // Implement create quote functionality here
        console.log("Create new quote");
    };

    return (
        <CollapsibleSection title="Quotes" isOpen={isOpen} onToggle={onToggle}>
            {quotes.length > 0 && (
                <div className="flex gap-2 mt-4 border border-primary/20 rounded-lg px-3 mb-4 items-center">
                    <FaMagnifyingGlass className="text-secondary" />
                    <input
                        type="text"
                        className="w-full py-3 text-sm bg-transparent text-white focus:outline-none transition-colors"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            <button
                className={`bg-secondary mb-5 text-accent cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 hover:scale-105`}
                style={{ backgroundSize: "200% 100%" }}
                onClick={createQuote}
            >
                <span className="font-medium">Create Quote</span>
            </button>
            {quotes.length > 0 && (
                <>
                    <QuotesList quotes={filteredQuotes} />
                    {filteredQuotes.length === 0 && (
                        <div className="text-center text-secondary py-10">
                            No quotes found matching "<span className="text-white">{searchTerm}</span>"
                        </div>
                    )}
                </>
            )}
        </CollapsibleSection>
    );
};
