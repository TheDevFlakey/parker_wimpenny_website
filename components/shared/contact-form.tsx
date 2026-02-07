/** @format */
"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { Hero } from "./hero";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number";
        }

        if (!formData.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // TEMPORARY submit logic
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);

        setIsSubmitting(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <Hero
            className="py-10"
            icon={<FaEnvelope className="text-4xl text-primary" />}
            title="Get in Touch"
            description="Want a quote or have a question? Fill out the form below and we'll get back to you as soon as possible."
        >
            <div className="container p-4 mx-auto flex flex-col gap-4 text-sm bg-accent rounded-lg border border-primary/20">
                {errors.name && <span className="text-xs text-red-400 mr-auto pl-1">{errors.name}</span>}
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />

                {errors.email && <span className="text-xs text-red-400 mr-auto pl-1">{errors.email}</span>}
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />

                {errors.phone && <span className="text-xs text-red-400 mr-auto pl-1">{errors.phone}</span>}
                <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />

                {errors.message && <span className="text-xs text-red-400 mr-auto pl-1">{errors.message}</span>}
                <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-secondary resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="
                        mt-2 w-fit rounded-lg bg-primary px-6 py-2.5
                        font-medium text-white transition cursor-pointer
                        disabled:opacity-60 disabled:cursor-not-allowed
                    "
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
            </div>
        </Hero>
    );
};
