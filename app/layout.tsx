/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/components/authProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://yourdomain.co.uk"),

    title: {
        default: "Parker Wimpenny | Construction & Landscaping",
        template: "%s | Parker Wimpenny Construction & Landscaping",
    },

    description:
        "Parker Wimpenny is a professional construction and landscaping company based in Huddersfield, West Yorkshire. We provide high-quality construction, garden walls, patios, pointing, paving, fencing and full landscaping services. Reliable workmanship and free quotes available.",

    keywords: [
        "Construction Huddersfield",
        "Landscaping Huddersfield",
        "Construction West Yorkshire",
        "Garden Walls Huddersfield",
        "Patio Installation Huddersfield",
        "Pointing Specialist",
        "Groundwork Contractor",
        "Fencing Services Huddersfield",
        "Local Construction Company Near Me",
        "Professional Landscaper Huddersfield",
        "Bricklayer Huddersfield",
        "Paving Services Huddersfield",
        "Subcontract Bricklayer",
        "Professional Bricklayer Near Me",
        "Construction Company Huddersfield",
        "Landscaping Services Huddersfield",
        "Brickwork Huddersfield",
        "Garden Walls Huddersfield",
        "Patio Installation Huddersfield",
        "Pointing Specialist Huddersfield",
        "Paving Services Huddersfield",
        "Fencing Services Huddersfield",
        "Professional Landscaper Huddersfield",
    ],

    authors: [{ name: "Parker Wimpenny" }],
    creator: "Parker Wimpenny",
    publisher: "Parker Wimpenny",

    openGraph: {
        title: "Parker Wimpenny | Professional Construction Services in Huddersfield",
        description:
            "Trusted construction and landscaping services in Huddersfield. Garden walls, patios, pointing, paving and more. Contact us today for a free quote.",
        url: "https://yourdomain.co.uk",
        siteName: "Parker Wimpenny Construction & Landscaping",
        locale: "en_GB",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Parker Wimpenny | Construction & Landscaping Huddersfield",
        description: "Professional construction and landscaping services in Huddersfield, West Yorkshire.",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "/",
    },

    category: "construction",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AuthProvider>
                    <Provider>
                        <Header />
                        {children}
                        <Footer />
                    </Provider>
                    <Analytics />
                </AuthProvider>
            </body>
        </html>
    );
}
