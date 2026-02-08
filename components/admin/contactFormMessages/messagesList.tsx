/** @format */

import { MessageCard } from "./messageCard";

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
    return (
        <ul className={`space-y-4 max-h-120 ${messages.length > 2 ? "pr-4 overflow-y-scroll" : ""}`}>
            {[...messages].reverse().map((message) => (
                <MessageCard key={message.id} message={message} onRespond={onRespond} />
            ))}
        </ul>
    );
};
