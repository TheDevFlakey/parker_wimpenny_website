/** @format */

import { formatDate } from "@/utils/formatDate";
import { FaCheck } from "react-icons/fa6";

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

export const QuoteCard = ({
    quote,
    onDelete,
    onEdit,
}: {
    quote: Quote;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}) => {
    const purchasedCount = quote.materials?.filter((m) => m.purchased).length || 0;
    const totalMaterials = quote.materials?.length || 0;
    const progress = totalMaterials > 0 ? Math.round((purchasedCount / totalMaterials) * 100) : 0;

    return (
        <li className="p-4 border border-primary/20 rounded-lg shadow-sm w-full bg-primary/10">
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

                {totalMaterials > 0 && (
                    <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm text-secondary">Materials</h3>
                            <span className="text-xs text-secondary">
                                {purchasedCount}/{totalMaterials} Purchased ({progress}%)
                            </span>
                        </div>

                        <div className="w-full h-2 bg-black/40 rounded mb-3">
                            <div
                                className="h-2 bg-green-500 rounded transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <ul className="space-y-2 overflow-y-scroll max-h-48 pr-4">
                            {quote.materials.map((material) => (
                                <li key={material.id} className="flex items-center gap-3 bg-black/30 p-2 rounded">
                                    <div className="w-5 h-5 relative">
                                        <input
                                            readOnly
                                            type="checkbox"
                                            checked={material.purchased}
                                            className="w-full h-full"
                                            style={{
                                                appearance: "none",
                                                backgroundColor: material.purchased ? "#34D399" : "#fff",
                                                borderRadius: "4px",
                                                position: "relative",
                                            }}
                                        />
                                        <FaCheck className="absolute top-1/2 left-1/2 -translate-1/2 text-white pointer-events-none text-sm" />
                                    </div>
                                    <span className={`text-sm ${material.purchased ? "text-green-400" : "text-white"}`}>
                                        {material.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(quote.id)}
                        className="bg-secondary text-accent cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 rounded-lg transition-all duration-500 hover:scale-105"
                    >
                        <span className="font-medium">Edit</span>
                    </button>

                    <button
                        onClick={() => onDelete(quote.id)}
                        className="bg-red-500 cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 text-white rounded-lg transition-all duration-500 hover:scale-105"
                    >
                        <span className="font-medium">Delete</span>
                    </button>
                </div>
            </div>
        </li>
    );
};
