/** @format */

import { formatDate } from "@/utils/formatDate";

interface Subscriber {
    id: number;
    email: string;
    createdAt: string;
}

export const SubscriberCard = ({ subscriber }: { subscriber: Subscriber }) => {
    return (
        <li key={subscriber.id} className="p-4 border border-primary/20 rounded-lg shadow-sm w-full bg-primary/10">
            <div className="space-y-2">
                <div className="text-primary text-sm">{formatDate(subscriber.createdAt)}</div>
                <p className="text-sm text-secondary">
                    Email
                    <span className="block text-base text-white font-medium">{subscriber.email}</span>
                </p>
            </div>
        </li>
    );
};
