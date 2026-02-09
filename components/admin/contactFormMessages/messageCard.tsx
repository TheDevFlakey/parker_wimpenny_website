/** @format */

import { formatDate } from "@/utils/formatDate";
import { RespondButton } from "./respondButton";
import Link from "next/link";

interface Message {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    responded: boolean;
    createdAt: string;
}

interface MessageCardProps {
    message: Message;
    onRespond: (id: number, responded: boolean) => void;
}

export const MessageCard = ({ message, onRespond }: MessageCardProps) => {
    return (
        <li
            className={`p-4 border border-primary/20 rounded-lg shadow-sm w-full ${
                message.responded ? "bg-green-500/10" : "bg-red-500/10"
            }`}
        >
            <div className="space-y-2">
                <div className="text-primary text-sm">{formatDate(message.createdAt)}</div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <p className="text-sm text-secondary">
                        Name
                        <span className="block text-base text-white font-medium">{message.name}</span>
                    </p>

                    <p className="text-sm text-secondary">
                        Email
                        <Link
                            href={`mailto:${message.email}`}
                            target="_blank"
                            className="block text-base text-white font-medium hover:text-primary transition-colors"
                        >
                            {message.email}
                        </Link>
                    </p>

                    <p className="text-sm text-secondary">
                        Phone
                        <span className="block text-base text-white font-medium">{message.phone_number}</span>
                    </p>
                </div>

                <p className="text-sm text-secondary">
                    Message
                    <span className="block mt-1 text-white leading-relaxed">{message.message}</span>
                </p>
            </div>

            <RespondButton onClick={() => onRespond(message.id, !message.responded)} responded={message.responded} />
        </li>
    );
};
