/** @format */

"use client";

import { Hero } from "@/components/shared/hero";
import { useSession } from "next-auth/react";
import { FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MessagesList } from "@/components/admin/contactFormMessages/messagesList";
import { sub } from "framer-motion/client";
import { formatDate } from "@/utils/formatDate";
import { SubscribersList } from "@/components/admin/newsletter/subscribersList";
import { SendForm } from "@/components/admin/newsletter/sendForm";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { QuotesSection } from "@/components/admin/quotesSection";
import { MessagesSection } from "@/components/admin/messagesSection";
import { NewsletterSection } from "@/components/admin/newsletterSection";

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
}

interface Message {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    responded: boolean;
    createdAt: string;
}

interface Subscriber {
    id: number;
    email: string;
    createdAt: string;
}

const AdminDashboardPage = () => {
    const { status } = useSession();
    const [messages, setMessages] = useState<Message[]>([]);
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [sectionsOpen, setSectionsOpen] = useState({ messages: false, newsletter: false, quotes: false });
    const [quotes, setQuotes] = useState<Quote[]>([
        {
            id: 1,
            name: "Adam Wimpenny",
            email: "adamwimps2@outlook.com",
            phone_number: "07545410930",
            message: "",
            createdAt: new Date().toISOString(),
        },
    ]);

    const router = useRouter();

    useEffect(() => {
        const fetchMessages = async () => {
            if (status === "unauthenticated") {
                router.push("/");
                return;
            }

            if (status === "authenticated") {
                const res = await fetch("/api/contactForm");
                const result = await res.json();
                setMessages(result);
            }
        };

        const fetchNewsletterSubscribers = async () => {
            if (status === "unauthenticated") {
                router.push("/");
                return;
            }

            if (status === "authenticated") {
                const res = await fetch("/api/newsletter");
                const result = await res.json();
                console.log("Newsletter Subscribers:", result);
                setSubscribers(result);
            }
        };

        fetchMessages();
        fetchNewsletterSubscribers();
    }, [status, router]);

    const markAsResponded = async (id: number, responded: boolean) => {
        const res = await fetch("/api/contactForm/respond", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, responded }),
        });

        if (res.ok) {
            setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, responded } : m)));
        }
    };

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col pt-30 pb-10 px-4 container mx-auto">
            <Hero
                icon={<FaShieldAlt className="text-4xl text-primary" />}
                title="Admin Dashboard"
                description="Welcome to the admin dashboard. Here you can manage your contact form messages and send newsletters."
            />

            <QuotesSection
                quotes={quotes}
                isOpen={sectionsOpen.quotes}
                onToggle={() => setSectionsOpen((prev) => ({ ...prev, quotes: !prev.quotes }))}
            />

            <MessagesSection
                messages={messages}
                isOpen={sectionsOpen.messages}
                onToggle={() => setSectionsOpen((prev) => ({ ...prev, messages: !prev.messages }))}
                onRespond={markAsResponded}
            />

            <NewsletterSection
                subscribers={subscribers}
                isOpen={sectionsOpen.newsletter}
                onToggle={() => setSectionsOpen((prev) => ({ ...prev, newsletter: !prev.newsletter }))}
            />
        </div>
    );
};

export default AdminDashboardPage;
