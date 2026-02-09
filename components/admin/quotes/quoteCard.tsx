/** @format */

import { formatDate } from "@/utils/formatDate";

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
}

export const QuoteCard = ({
    quote,
    onDelete,
    onEdit,
}: {
    quote: Quote;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}) => {
    return (
        <li key={quote.id} className="p-4 border border-primary/20 rounded-lg shadow-sm w-full bg-primary/10">
            <div className="space-y-2">
                <div className="text-primary text-sm">{formatDate(quote.createdAt)}</div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <p className="text-sm text-secondary">
                        Name
                        <span className="block text-base text-white font-medium">{quote.name}</span>
                    </p>
                    <p className="text-sm text-secondary">
                        Email
                        <a
                            href={`mailto:${quote.email}`}
                            target="_blank"
                            className="block text-base text-white font-medium hover:text-primary transition-colors"
                        >
                            {quote.email}
                        </a>
                    </p>
                    <p className="text-sm text-secondary">
                        Phone
                        <span className="block text-base text-white font-medium">{quote.phone_number}</span>
                    </p>
                </div>
                <p className="text-sm text-secondary">
                    Details
                    <span className="block mt-1 text-white leading-relaxed">{quote.message}</span>
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(quote.id)}
                        className={`bg-secondary text-accent cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 hover:scale-105`}
                        style={{ backgroundSize: "200% 100%" }}
                    >
                        <span className="font-medium">Edit</span>
                    </button>
                    <button
                        onClick={() => onDelete(quote.id)}
                        className={`bg-red-500 cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-lg transition-all duration-500 hover:scale-105`}
                        style={{ backgroundSize: "200% 100%" }}
                    >
                        <span className="font-medium">Delete</span>
                    </button>
                </div>
            </div>
        </li>
    );
};
