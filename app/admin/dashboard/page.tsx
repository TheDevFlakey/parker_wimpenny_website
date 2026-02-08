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
    const [sectionsOpen, setSectionsOpen] = useState({ messages: false, newsletter: false });

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
        <div className="min-h-screen flex flex-col pt-30 pb-10 px-4 container mx-auto">
            <Hero
                icon={<FaShieldAlt className="text-4xl text-primary" />}
                title="Admin Dashboard"
                description="Welcome to the admin dashboard. Here you can manage your contact form messages and send newsletters."
            />

            {messages.length > 0 ? (
                <div className="container bg-accent rounded-lg border border-primary/20 mx-auto p-4">
                    <h2 className="md:text-2xl font-bold text-primary flex justify-between items-center">
                        Contact Form Messages
                        {sectionsOpen.messages ? (
                            <FaChevronUp
                                onClick={() => {
                                    setSectionsOpen((prev) => ({ ...prev, messages: !prev.messages }));
                                }}
                                className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                            />
                        ) : (
                            <FaChevronDown
                                onClick={() => {
                                    setSectionsOpen((prev) => ({ ...prev, messages: !prev.messages }));
                                }}
                                className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                            />
                        )}
                    </h2>

                    {sectionsOpen.messages && <MessagesList messages={messages} onRespond={markAsResponded} />}
                </div>
            ) : (
                <div className="container rounded-lg border border-primary/20 bg-accent mx-auto p-4 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Contact Form Messages</h2>
                    <p className="text-secondary">There are no contact form messages to display.</p>
                </div>
            )}

            {subscribers.length > 0 ? (
                <div className="container bg-accent rounded-lg border border-primary/20 mx-auto p-4 mt-10">
                    <h3 className="md:text-2xl font-bold mb-1 text-primary flex justify-between items-center">
                        Send Newsletter
                        {sectionsOpen.newsletter ? (
                            <FaChevronUp
                                onClick={() => {
                                    setSectionsOpen((prev) => ({ ...prev, newsletter: !prev.newsletter }));
                                }}
                                className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                            />
                        ) : (
                            <FaChevronDown
                                onClick={() => {
                                    setSectionsOpen((prev) => ({ ...prev, newsletter: !prev.newsletter }));
                                }}
                                className="text-primary text-xl md:text-2xl p-1 rounded-full border border-primary cursor-pointer"
                            />
                        )}
                    </h3>
                    {sectionsOpen.newsletter && (
                        <>
                            <SendForm />
                            <h2 className="text-2xl font-bold mb-4 text-primary">Newsletter Subscribers</h2>
                            <SubscribersList subscribers={subscribers} />
                        </>
                    )}
                </div>
            ) : (
                <div className="container rounded-lg border border-primary/20 bg-accent mx-auto p-4 mt-10 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Newsletter Subscribers</h2>
                    <p className="text-secondary">There are no newsletter subscribers to display.</p>
                </div>
            )}
        </div>
    );
};

export default AdminDashboardPage;
