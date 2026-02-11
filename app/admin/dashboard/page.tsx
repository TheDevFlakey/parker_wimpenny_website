/** @format */

"use client";

import { Hero } from "@/components/shared/hero";
import { useSession } from "next-auth/react";
import { FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuotesSection } from "@/components/admin/quotesSection";
import { MessagesSection } from "@/components/admin/messagesSection";
import { NewsletterSection } from "@/components/admin/newsletterSection";
import { EditQuoteModal } from "@/components/admin/quotes/editModal";
import { CreateQuoteModal } from "@/components/admin/quotes/createModal";

interface Material {
    id: number;
    name: string;
    purchased: boolean;
}

interface Quote {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    message: string;
    createdAt: string;
    materials: Material[];
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
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingQuote, setEditingQuote] = useState<Quote>({
        id: 0,
        name: "",
        email: "",
        phone_number: "",
        message: "",
        createdAt: "",
        materials: [],
    });
    const [isCreateQuoteModalOpen, setIsCreateQuoteModalOpen] = useState(false);

    const router = useRouter();

    const fetchQuotes = async () => {
        if (status === "unauthenticated") {
            router.push("/");
            return;
        }

        if (status === "authenticated") {
            const res = await fetch("/api/quotes");
            const result = await res.json();
            setQuotes(result || []);
        }
    };

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
            setSubscribers(result);
        }
    };

    useEffect(() => {
        fetchMessages();
        fetchNewsletterSubscribers();
        fetchQuotes();
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

    const deleteQuote = async (id: number) => {
        const res = await fetch("/api/quotes/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            setQuotes((prev) => prev.filter((q) => q.id !== id));
        }
    };

    const editQuote = (id: number) => {
        const quoteToEdit = quotes.find((q) => q.id === id);
        if (quoteToEdit) {
            setEditingQuote(quoteToEdit);
            setIsEditModalOpen(true);
        }
    };

    const updateQuote = async (updatedQuote: Quote) => {
        const res = await fetch("/api/quotes/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedQuote),
        });

        if (res.ok) {
            const updatedQuoteWithDate = { ...updatedQuote, createdAt: new Date().toISOString() };
            setQuotes((prev) => prev.map((q) => (q.id === updatedQuoteWithDate.id ? updatedQuoteWithDate : q)));

            setIsEditModalOpen(false);
        }
    };

    const createQuote = async (newQuote: Quote) => {
        const res = await fetch("/api/quotes/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newQuote),
        });

        if (res.ok) {
            fetchQuotes();
            setIsCreateQuoteModalOpen(false);
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

            <EditQuoteModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                editingQuote={editingQuote}
                onSave={updateQuote}
            />

            <CreateQuoteModal
                isOpen={isCreateQuoteModalOpen}
                onClose={() => setIsCreateQuoteModalOpen(false)}
                onCreate={createQuote}
            />

            <QuotesSection
                quotes={quotes}
                isOpen={sectionsOpen.quotes}
                onToggle={() => setSectionsOpen((prev) => ({ ...prev, quotes: !prev.quotes }))}
                onDelete={deleteQuote}
                onEdit={editQuote}
                onCreate={() => setIsCreateQuoteModalOpen(true)}
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
