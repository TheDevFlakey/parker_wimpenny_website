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

interface EditQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    editingQuote?: Quote | null;
    onSave: (updatedQuote: Quote) => void;
}

export const EditQuoteModal = ({ isOpen, onClose, editingQuote, onSave }: EditQuoteModalProps) => {
    if (!isOpen) return null;

    const [editedQuote, setEditedQuote] = useState<Quote>({
        id: editingQuote?.id || 0,
        name: editingQuote?.name || "",
        email: editingQuote?.email || "",
        phone_number: editingQuote?.phone_number || "",
        message: editingQuote?.message || "",
        createdAt: editingQuote?.createdAt || "",
    });

    const handleInputChange = (field: keyof Quote, value: string) => {
        setEditedQuote((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-accent border border-primary/20 p-6 rounded-lg w-full container mx-auto">
                <h2 className="text-xl font-bold mb-4 text-primary">Edit Quote</h2>

                <ul>
                    <li>
                        <label className="block text-sm font-medium text-primary mb-1">Name</label>
                        <input
                            type="text"
                            value={editedQuote.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Email</label>
                        <input
                            type="email"
                            value={editedQuote.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Phone Number</label>
                        <input
                            type="text"
                            value={editedQuote.phone_number}
                            onChange={(e) => handleInputChange("phone_number", e.target.value)}
                            className="w-full px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                    <li className="mt-4">
                        <label className="block text-sm font-medium text-primary mb-1">Message</label>
                        <textarea
                            value={editedQuote.message}
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
                        onClick={() => onSave(editedQuote)}
                        className="px-4 cursor-pointer py-2 bg-green-500 text-white rounded hover:scale-105 transition-transform duration-200"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
