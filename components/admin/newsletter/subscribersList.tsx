/** @format */

import { SubscriberCard } from "./subscriberCard";

interface Subscriber {
    id: number;
    email: string;
    createdAt: string;
}

interface SubscribersListProps {
    subscribers: Subscriber[];
}

export const SubscribersList = ({ subscribers }: SubscribersListProps) => {
    return (
        <ul className={`space-y-4 max-h-120 ${subscribers.length > 2 ? "pr-4 overflow-y-scroll" : ""}`}>
            {[...subscribers].reverse().map((subscriber) => (
                <SubscriberCard key={subscriber.id} subscriber={subscriber} />
            ))}
        </ul>
    );
};
