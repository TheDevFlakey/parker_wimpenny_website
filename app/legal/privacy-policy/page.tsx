/** @format */

import { Hero } from "@/components/shared/hero";

const PrivacyPolicyPage = () => {
    return (
        <div className="container mx-auto px-4 pt-30 mb-10">
            <Hero
                title="Privacy Policy"
                description="Learn about how we handle your personal information and protect your privacy."
            />
            <h1 className="text-3xl font-bold mb-4 text-primary">Privacy Policy</h1>
            <p className="mb-4">
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your
                personal information when you use our website.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information such as your name, email address, and any other information you
                provide when you contact us or sign up for our newsletter.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">How We Use Your Information</h2>
            <p className="mb-4">
                We use your information to respond to your inquiries, send you updates and promotional materials, and
                improve our website and services.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">How We Protect Your Information</h2>
            <p className="mb-4">
                We take reasonable measures to protect your personal information from unauthorized access, use, or
                disclosure. However, no method of transmission over the internet is completely secure.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new privacy policy on this page.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this privacy policy, please contact us at{" "}
                <a href="mailto:test@test.co.uk" className="text-blue-500">
                    test@test.co.uk
                </a>
                .
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
