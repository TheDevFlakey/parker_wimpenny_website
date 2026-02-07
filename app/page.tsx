/** @format */
import Image from "next/image";
import { WhatWeOffer } from "@/components/home/what-we-offer";
import { Hero } from "@/components/shared/hero";
import { FaList } from "react-icons/fa6";
import Link from "next/link";
import { ContactForm } from "@/components/shared/contact-form";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="relative flex flex-col h-screen w-full justify-center px-6 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `
                linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
                url('/images/background.webp')
            `,
                    }}
                />

                <div className="relative z-10 container mx-auto px-4">
                    <h2 className="text-center md:text-left text-primary text-lg sm:text-2xl font-semibold flex gap-2 items-center justify-center md:justify-start">
                        <div className="w-4 h-0.5 bg-primary hidden sm:block"></div>Parker Wimpenny
                    </h2>
                    <h1 className="text-2xl mt-2 text-center md:text-left md:text-6xl max-w-6xl font-bold text-white leading-tight">
                        Reliable Construction & Property Services <span className="text-primary">You Can Trust</span>
                    </h1>

                    <p className="mt-6 text-center md:text-left text-sm md:text-xl text-secondary">
                        From brickwork and pointing to paving, landscaping, and repairs — Done the Yorkshire way.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 text-sm sm:text-lg">
                        <Link
                            href="/contact"
                            className="mx-auto sm:mx-0 px-8 w-fit py-3 rounded-lg border bg-primary text-accent font-semibold hover:bg-accent hover:text-primary border-primary transition"
                        >
                            Get a Free Quote
                        </Link>

                        <Link
                            href="/portfolio"
                            className="mx-auto sm:mx-0 px-8 w-fit py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-accent transition"
                        >
                            View Our Portfolio
                        </Link>
                    </div>
                </div>
            </div>

            <Hero
                icon={<FaList className="text-4xl text-primary" />}
                title="Our Services"
                description="Discover our amazing services and offerings."
                className="py-10 bg-accent"
            >
                <WhatWeOffer />
            </Hero>

            <ContactForm />
        </div>
    );
}
