/** @format */

"use client";

import { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (/\S+@\S+\.\S+/.test(email)) {
            setMessage("✅ Thank you for subscribing!");
            setIsError(false);
            setEmail("");
            setTimeout(() => setMessage(""), 2500);
        } else {
            setMessage("⚠️ Please enter a valid email address.");
            setIsError(true);
            setTimeout(() => setMessage(""), 2500);
        }
    };

    return (
        <div className="rounded-xl hover:shadow-primary/15 relative">
            <form className="flex flex-col md:flex-row w-full md:w-auto">
                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <div className="flex">
                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Your email address"
                        className="bg-accent border border-primary/20 rounded-l-xl px-4 py-2 w-full md:w-64 focus:outline-none focus:border-primary/50 text-white"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div onClick={handleSubmit}>
                        <Button
                            colorPalette="orange"
                            variant="solid"
                            className="rounded-l-none h-full border-primary/20 border-l-transparent select-none rounded-r-xl bg-accent hover:bg-primary text-primary hover:text-white transition-colors duration-300"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </form>
            {message && (
                <p
                    className={`absolute -top-6 z-50 text-sm transition-opacity duration-300 ${
                        isError ? "text-red-400" : "text-green-400"
                    }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}
