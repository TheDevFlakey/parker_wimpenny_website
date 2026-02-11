/** @format */

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
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

interface EditQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    editingQuote?: Quote | null;
    onSave: (updatedQuote: Quote) => void;
}

export const EditQuoteModal = ({ isOpen, onClose, editingQuote, onSave }: EditQuoteModalProps) => {
    const [newMaterial, setNewMaterial] = useState("");

    const [editedQuote, setEditedQuote] = useState<Quote>({
        id: 0,
        name: "",
        email: "",
        phone_number: "",
        message: "",
        createdAt: "",
        materials: [],
    });

    useEffect(() => {
        if (editingQuote) {
            setEditedQuote(editingQuote);
        }
    }, [editingQuote]);

    if (!isOpen || !editingQuote) return null;

    const handleInputChange = (field: keyof Quote, value: string) => {
        setEditedQuote((prev) => ({ ...prev, [field]: value }));
    };

    const addMaterial = () => {
        if (!newMaterial.trim()) return;

        const material: Material = {
            id: Date.now(),
            name: newMaterial,
            purchased: false,
        };

        setEditedQuote((prev) => ({
            ...prev,
            materials: [...prev.materials, material],
        }));

        setNewMaterial("");
    };

    const togglePurchased = (id: number) => {
        setEditedQuote((prev) => ({
            ...prev,
            materials: prev.materials.map((mat) => (mat.id === id ? { ...mat, purchased: !mat.purchased } : mat)),
        }));
    };

    const removeMaterial = (id: number) => {
        setEditedQuote((prev) => ({
            ...prev,
            materials: prev.materials.filter((mat) => mat.id !== id),
        }));
    };

    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
            <div className="bg-accent border border-primary/20 p-6 rounded-lg w-full container mx-auto">
                <h2 className="text-xl font-bold mb-4 text-primary">Edit Quote</h2>

                <ul>
                    <li>
                        <label className="block text-xs md:text-sm font-medium text-primary mb-1">Name</label>
                        <input
                            type="text"
                            value={editedQuote.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="w-full text-xs md:text-sm px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>

                    <li className="mt-2 md:mt-4">
                        <label className="block text-xs md:text-sm font-medium text-primary mb-1">Email</label>
                        <input
                            type="email"
                            value={editedQuote.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full text-xs md:text-sm px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>

                    <li className="mt-2 md:mt-4">
                        <label className="block text-xs md:text-sm font-medium text-primary mb-1">Phone Number</label>
                        <input
                            type="text"
                            value={editedQuote.phone_number}
                            onChange={(e) => handleInputChange("phone_number", e.target.value)}
                            className="w-full text-xs md:text-sm px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>

                    <li className="mt-2 md:mt-4">
                        <label className="block text-xs md:text-sm font-medium text-primary mb-1">Message</label>
                        <textarea
                            value={editedQuote.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className="w-full text-xs md:text-sm px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </li>
                </ul>

                <div className="mt-2 md:mt-4">
                    <h3 className="text-xs md:text-sm text-primary mb-2">Materials Checklist</h3>

                    <div className="flex gap-2 mb-3">
                        <input
                            type="text"
                            value={newMaterial}
                            onChange={(e) => setNewMaterial(e.target.value)}
                            placeholder="Add material..."
                            className="flex-1 text-xs md:text-sm px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            onClick={addMaterial}
                            className="px-4 py-2 bg-primary text-white rounded hover:scale-105 transition-transform"
                        >
                            Add
                        </button>
                    </div>

                    <ul
                        className={`space-y-2 overflow-y-scroll max-h-40 ${editedQuote.materials.length > 3 ? "pr-4" : ""}`}
                    >
                        {editedQuote.materials.map((material) => (
                            <li key={material.id} className="flex items-center justify-between bg-black/30 p-2 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 md:w-5 md:h-5 relative">
                                        <input
                                            type="checkbox"
                                            checked={material.purchased}
                                            onChange={() => togglePurchased(material.id)}
                                            className="cursor-pointer w-full h-full"
                                            style={{
                                                appearance: "none",
                                                backgroundColor: material.purchased ? "#34D399" : "#fff",
                                                borderRadius: "4px",
                                                position: "relative",
                                            }}
                                        />
                                        <FaCheck className="absolute top-1/2 left-1/2 -translate-1/2 text-white pointer-events-none text-xs md:text-sm" />
                                    </div>
                                    <span
                                        className={`${material.purchased ? "text-green-400" : "text-white"} text-xs md:text-base`}
                                    >
                                        {material.name}
                                    </span>
                                </div>

                                <button
                                    onClick={() => removeMaterial(material.id)}
                                    className="text-red-400 hover:text-red-600 p-1 text-md md:text-xl cursor-pointer"
                                >
                                    <FaTimes />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex mt-6">
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
