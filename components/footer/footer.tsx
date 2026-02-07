/** @format */

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import NewsletterSignup from "./NewsletterSignup";
import FooterLogo from "./FooterLogo";

export default function Footer() {
    return (
        <footer className="bg-accent py-16 border-t border-primary/20 relative overflow-hidden">
            <div className="container mx-auto px-4 z-20">
                <FooterLogo />
                <div className="bg-primary/10 w-full h-0.5"></div>
            </div>
            <div className="container mx-auto px-4 relative pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 md:gap-10 mb-16">
                    <div className="lg:col-span-2">
                        <div className="text-lg font-semibold mb-2">Stay Connected</div>
                        <p className="text-secondary mb-6">
                            Subscribe to our newsletter for the latest news, and exclusive offers.
                        </p>
                        <NewsletterSignup />
                        <SocialLinks />
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()}{" "}
                        <Link href="/" className="text-primary">
                            Parker Wimpenny
                        </Link>
                        . All rights reserved.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0">
                        <Link
                            href="/legal/terms-of-service"
                            className="text-text-muted hover:text-primary transition-colors text-sm w-fit"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/legal/privacy-policy"
                            className="text-text-muted hover:text-primary transition-colors text-sm w-fit"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
