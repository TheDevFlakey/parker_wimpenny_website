/** @format */

import { useState } from "react";

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
}

export const CreateQuoteModal = ({
    isOpen,
    onClose,
    onCreate,
}: {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (newQuote: Quote) => void;
}) => {
    if (!isOpen) return null;

    const [newQuoteForm, setNewQuoteForm] = useState<Quote>({
        id: 0,
        name: "",
        email: "",
        phone_number: "",
        message: "",
        createdAt: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setNewQuoteForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-accent border border-primary/20 p-6 rounded-lg w-full container mx-auto">
                <h2 className="text-xl font-bold mb-4 text-primary">Create Quote</h2>

                <ul>
                    <li>
                        <label className="block text-sm font-medium text-primary mb-1">Name</label>
                        <input
                            type="text"
                            value={newQuoteForm.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Email</label>
                        <input
                            type="email"
                            value={newQuoteForm.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Phone Number</label>
                        <input
                            type="text"
                            value={newQuoteForm.phone_number}
                            onChange={(e) => handleInputChange("phone_number", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Message</label>
                        <textarea
                            value={newQuoteForm.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                </ul>

                <div className="flex mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 cursor-pointer py-2 bg-secondary rounded mr-2 hover:scale-105 transition-transform duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onCreate(newQuoteForm)}
                        className="px-4 cursor-pointer py-2 bg-green-500 text-white rounded hover:scale-105 transition-transform duration-200"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};
