/** @format */

import { MessagesList } from "./contactFormMessages/messagesList";
import { CollapsibleSection } from "./collapsibleSection";

interface Message {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    responded: boolean;
    createdAt: string;
}

interface Props {
    messages: Message[];
    isOpen: boolean;
    onToggle: () => void;
    onRespond: (id: number, responded: boolean) => void;
}

export const MessagesSection = ({ messages, isOpen, onToggle, onRespond }: Props) => {
    if (messages.length === 0) {
        return (
            <div className="container rounded-lg border border-primary/20 bg-accent mx-auto p-4 mt-10 text-center">
                <h2 className="text-2xl font-bold text-primary">Contact Form Messages</h2>
                <p className="text-secondary">There are no contact form messages to display.</p>
            </div>
        );
    }

    return (
        <CollapsibleSection title="Contact Form Messages" isOpen={isOpen} onToggle={onToggle}>
            <MessagesList messages={messages} onRespond={onRespond} />
        </CollapsibleSection>
    );
};
