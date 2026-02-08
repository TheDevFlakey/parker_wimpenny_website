/** @format */
"use client";

import { Hero } from "@/components/shared/hero";
import { useSession } from "next-auth/react";
import { FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Message {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    responded: boolean;
}

const AdminDashboardPage = () => {
    const { data: session, status } = useSession();
    const [messages, setMessages] = useState<Message[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchMessages = async () => {
            if (status === "unauthenticated") {
                router.push("/");
            }

            if (status === "authenticated") {
                const res = await fetch("/api/contactForm", {});

                const result = await res.json();

                console.log(result);
                setMessages(result);
            }
        };

        fetchMessages();
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Loading...</h1>
            </div>
        );
    }

    const MarkAsResponded = async (messageId: number) => {
        try {
            const res = await fetch(`/api/contactForm/respond`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: messageId }),
            });

            if (res.ok) {
                setMessages((prevMessages) =>
                    prevMessages.map((message) =>
                        message.id === messageId ? { ...message, responded: true } : message,
                    ),
                );
            } else {
                console.error("Failed to mark message as responded");
            }
        } catch (error) {
            console.error("Error marking message as responded:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col pt-30 pb-10 px-4 container mx-auto">
            <Hero
                icon={<FaShieldAlt className="text-4xl text-primary" />}
                title="Admin Dashboard"
                description="Welcome to the admin dashboard. Here you can manage your contact form messages and send newsletters."
            />
            {messages.length > 0 ? (
                <div className="container bg-accent rounded-lg border border-primary/20 mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Contact Form Messages</h2>
                    <ul className="space-y-4 overflow-y-scroll max-h-120 pr-4">
                        {messages.map((message: Message) => (
                            <li
                                key={message.id}
                                className={`p-4 border border-primary/20 rounded-lg shadow-sm w-full ${message.responded ? "bg-green-500/10" : "bg-red-500/10"}`}
                            >
                                <div className="space-y-2">
                                    <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                                        <p className="text-sm text-secondary">
                                            Name
                                            <span className="block text-base text-white font-medium">
                                                {message.name}
                                            </span>
                                        </p>
                                        <p className="text-sm text-secondary">
                                            Email
                                            <span className="block text-base text-white font-medium">
                                                {message.email}
                                            </span>
                                        </p>
                                        <p className="text-sm text-secondary">
                                            Phone
                                            <span className="block text-base text-white font-medium">
                                                {message.phone_number}
                                            </span>
                                        </p>
                                    </div>
                                    <p className="text-sm text-secondary">
                                        Message
                                        <span className="block mt-1 text-white leading-relaxed">{message.message}</span>
                                    </p>
                                </div>

                                {!message.responded && (
                                    <button
                                        className="cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 bg-green-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-lg transition-all duration-500 hover:scale-105"
                                        style={{ backgroundSize: "200% 100%" }}
                                        onClick={() => MarkAsResponded(message.id)}
                                    >
                                        <span className="font-medium">Respond</span>
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="container rounded-lg border border-primary/20 bg-accent mx-auto p-4 justify-center items-center flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-primary">No messages found</h2>
                    <p className="text-secondary">There are no contact form messages to display.</p>
                </div>
            )}
        </div>
    );
};

export default AdminDashboardPage;
