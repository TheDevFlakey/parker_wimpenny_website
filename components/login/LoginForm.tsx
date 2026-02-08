/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { UsernameInput } from "./usernameInput";
import { PasswordSection } from "./PasswordSection";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

type Errors = {
    username?: string;
    password?: string;
    general?: string;
};

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            console.log("User signed in (client):", session.user.name);
        }
    }, [session]);

    const validate = (): boolean => {
        const newErrors: Errors = {};

        if (!formData.username) {
            newErrors.username = "Username is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const FormSubmitted = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        if (!validate()) return;

        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            username: formData.username,
            password: formData.password,
        });

        setLoading(false);

        if (res?.error) {
            setErrors({
                general: "Invalid username or password",
            });
            return;
        }

        window.location.href = "/admin/dashboard";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col w-full sm:w-92.5 m-auto p-6 rounded-xl border border-primary/10 bg-black/40 backdrop-blur-xl shadow-2xl"
        >
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/20" />

            <div className="relative z-10 flex flex-col">
                <Image src="/images/logo.webp" alt="Logo" width={70} height={70} className="mx-auto mt-4" />

                <h1 className="mx-auto mt-6 text-3xl font-semibold bg-linear-to-r y text-primary">Admin Login</h1>

                <p className="mx-auto mt-2 text-xs text-gray-400">Sign in to your account</p>

                <UsernameInput
                    label="Username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                {errors.username && <span className="mt-1 text-xs text-red-400">{errors.username}</span>}

                <PasswordSection
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {errors.password && <span className="mt-1 text-xs text-red-400">{errors.password}</span>}

                {errors.general && (
                    <div className="mt-4 rounded-md border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                        {errors.general}
                    </div>
                )}

                <button
                    onClick={FormSubmitted}
                    disabled={loading}
                    className="cursor-pointer mt-6 flex items-center justify-center gap-2 px-8 py-3 bg-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-lg transition-all duration-500 shadow-lg shadow-primary/30 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    style={{ backgroundSize: "200% 100%" }}
                >
                    <FiLogIn size={18} />
                    <span className="font-medium">{loading ? "Signing in..." : "Sign In"}</span>
                </button>

                <div className="my-5 flex items-center gap-3 text-xs text-gray-500">
                    <div className="h-px flex-1 bg-white/10" />
                    OR
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <Link href="/" className="text-center text-xs text-gray-500 hover:text-gray-400 transition">
                    ← Back to Home
                </Link>
            </div>
        </motion.div>
    );
};
