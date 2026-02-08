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
    title: "Parker Wimpenny",
    description:
        "Parker Wimpenny is a skilled bricklaying and landscaping company based in Huddersfield, offering a wide range of services including building, repairs, pointing, paving, walling, landscaping, fencing, and painting. With a commitment to quality craftsmanship and customer satisfaction, Parker Wimpenny transforms outdoor spaces into beautiful and functional areas that enhance the overall appeal of properties.",
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
