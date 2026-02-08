/** @format */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaTrowel, FaBars, FaXmark } from "react-icons/fa6";
import { useSession, signOut } from "next-auth/react";

export const Header = () => {
    const location = usePathname();
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <header className="bg-accent text-white fixed w-full z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/10 border border-primary/20 to-accent flex items-center justify-center">
                        <FaTrowel className="text-primary text-lg" />
                    </div>
                    <span className="text-lg font-bold tracking-widest group-hover:text-primary transition-colors">
                        Parker Wimpenny
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`font-semibold hover:text-primary transition-colors underline-offset-8 ${
                                location === item.href ? "underline text-primary" : "text-white"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {session ? (
                        <Link
                            href="/admin/dashboard"
                            onClick={() => setOpen(false)}
                            className={`font-semibold ${location === "/admin/dashboard" ? "text-primary" : "text-white"}`}
                        >
                            Dashboard
                        </Link>
                    ) : null}
                    <div className="h-8 w-px bg-primary" />
                    <Link
                        href="tel:07545410930"
                        className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
                    >
                        <FaPhone className="text-primary" />
                        <span className="font-semibold">07545 410930</span>
                    </Link>
                    {session ? (
                        <button
                            onClick={() => signOut()}
                            className="cursor-pointer flex items-center justify-center gap-2 px-5 py-1 bg-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-lg transition-all duration-500 shadow-lg shadow-primary/30 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            style={{ backgroundSize: "200% 100%" }}
                        >
                            <span className="font-medium">Logout</span>
                        </button>
                    ) : null}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {open ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-accent border-t border-primary/20">
                    <nav className="flex flex-col px-6 py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`font-semibold ${location === item.href ? "text-primary" : "text-white"}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {session ? (
                            <Link
                                href="/admin/dashboard"
                                onClick={() => setOpen(false)}
                                className={`font-semibold ${location === "/admin/dashboard" ? "text-primary" : "text-white"}`}
                            >
                                Dashboard
                            </Link>
                        ) : null}

                        <Link
                            href="tel:07545410930"
                            className="pt-4 border-t border-primary/20 flex items-center gap-2"
                        >
                            <FaPhone className="text-primary" />
                            <span className="font-semibold">07545 410930</span>
                        </Link>
                        {session ? (
                            <button
                                onClick={() => signOut()}
                                className="cursor-pointer flex items-center justify-center gap-2 px-5 py-1 bg-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-lg transition-all duration-500 shadow-lg shadow-primary/30 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                style={{ backgroundSize: "200% 100%" }}
                            >
                                <span className="font-medium">Logout</span>
                            </button>
                        ) : null}
                    </nav>
                </div>
            )}
        </header>
    );
};
