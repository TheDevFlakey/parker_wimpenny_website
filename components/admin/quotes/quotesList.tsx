/** @format */

import { QuoteCard } from "./quoteCard";

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
}

export const QuotesList = ({ quotes }: { quotes: Quote[] }) => {
    return (
        <ul className={`space-y-4 max-h-120 ${quotes.length > 3 ? "pr-4 overflow-y-scroll" : ""}`}>
            {[...quotes].reverse().map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
            ))}
        </ul>
    );
};
