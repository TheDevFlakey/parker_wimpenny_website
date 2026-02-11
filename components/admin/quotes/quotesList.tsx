/** @format */

import { QuoteCard } from "./quoteCard";

interface Material {
    id: number;
    name: string;
    purchased: boolean;
}

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
    materials: Material[];
}

export const QuotesList = ({
    quotes,
    onDelete,
    onEdit,
}: {
    quotes: Quote[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}) => {
    return (
        <ul className={`space-y-4 max-h-150 ${quotes.length > 1 ? "pr-4 overflow-y-scroll" : ""}`}>
            {[...quotes].reverse().map((quote) => (
                <QuoteCard key={quote.id} quote={quote} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </ul>
    );
};
