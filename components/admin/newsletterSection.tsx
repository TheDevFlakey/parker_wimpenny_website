/** @format */

import { CollapsibleSection } from "./collapsibleSection";
import { SendForm } from "./newsletter/sendForm";
import { SubscribersList } from "./newsletter/subscribersList";

interface Subscriber {
    id: number;
    email: string;
    createdAt: string;
}

interface Props {
    subscribers: Subscriber[];
    isOpen: boolean;
    onToggle: () => void;
}

export const NewsletterSection = ({ subscribers, isOpen, onToggle }: Props) => {
    if (subscribers.length === 0) {
        return (
            <div className="container rounded-lg border border-primary/20 bg-accent mx-auto p-4 mt-10 text-center">
                <h2 className="text-2xl font-bold text-primary">Newsletter Subscribers</h2>
                <p className="text-secondary">There are no newsletter subscribers to display.</p>
            </div>
        );
    }

    return (
        <CollapsibleSection title="Send Newsletter" isOpen={isOpen} onToggle={onToggle}>
            <SendForm />
            <h2 className="text-2xl font-bold mb-4 text-primary mt-6">Newsletter Subscribers</h2>
            <SubscribersList subscribers={subscribers} />
        </CollapsibleSection>
    );
};
