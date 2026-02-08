/** @format */

import { FaMagnifyingGlass } from "react-icons/fa6";
import { MessageCard } from "./messageCard";
import { useState } from "react";

interface Message {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    responded: boolean;
    createdAt: string;
}

interface MessagesListProps {
    messages: Message[];
    onRespond: (id: number, responded: boolean) => void;
}

export const MessagesList = ({ messages, onRespond }: MessagesListProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredMessages = messages.filter((message) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
            message.name.toLowerCase().includes(lowerSearchTerm) ||
            message.email.toLowerCase().includes(lowerSearchTerm) ||
            message.phone_number.toLowerCase().includes(lowerSearchTerm)
        );
    });

    return (
        <>
            <div className="flex gap-2 border border-primary/20 rounded-lg px-3 mb-4 items-center">
                <FaMagnifyingGlass className="text-secondary" />
                <input
                    type="text"
                    className="w-full py-3 text-sm bg-transparent text-white focus:outline-none transition-colors"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <ul className={`space-y-4 max-h-120 ${messages.length > 2 ? "pr-4 overflow-y-scroll" : ""}`}>
                {[...filteredMessages].reverse().map((message) => (
                    <MessageCard key={message.id} message={message} onRespond={onRespond} />
                ))}
                {filteredMessages.length === 0 && (
                    <li className="text-center text-secondary py-10">
                        No messages found matching "<span className="text-white">{searchTerm}</span>"
                    </li>
                )}
            </ul>
        </>
    );
};
