/** @format */

import { Hero } from "@/components/shared/hero";

const TermsOfServicePage = () => {
    return (
        <div className="container mx-auto px-4 pt-30 mb-10">
            <Hero
                title="Terms of Service"
                description="Read our terms of service to understand the rules and regulations for using our website."
            />
            <h1 className="text-3xl font-bold mb-4 text-primary">Terms of Service</h1>
            <p className="mb-4">
                Welcome to our website. By accessing or using our website, you agree to be bound by these terms of
                service. If you do not agree to these terms, please do not use our website.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Use of Our Website</h2>
            <p className="mb-4">
                You may use our website for lawful purposes only. You agree not to use our website in any way that may
                damage, disable, overburden, or impair our website or interfere with any other party's use and enjoyment
                of our website.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Intellectual Property</h2>
            <p className="mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of
                our company and is protected by copyright and other intellectual property laws. You may not use any
                content from our website without our express written permission.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Disclaimer of Warranties</h2>
            <p className="mb-4">
                Our website is provided on an "as is" and "as available" basis. We make no warranties, express or
                implied, regarding the operation of our website or the information, content, materials, or products
                included on our website. You expressly agree that your use of our website is at your sole risk.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Limitation of Liability</h2>
            <p className="mb-4">
                In no event shall our company be liable for any damages arising out of or in connection with your use of
                our website, including but not limited to direct, indirect, incidental, punitive, and consequential
                damages.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Changes to These Terms</h2>
            <p className="mb-4">
                We may update these terms of service from time to time. We will notify you of any changes by posting the
                new terms of service on this page. You are advised to review these terms periodically for any changes.
                Changes to these terms are effective when they are posted on this page.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-primary">Contact Us</h2>
            <p className="mb-4">
                If you have any questions about these terms of service, please contact us at{" "}
                <a href="mailto:test:@test.co.uk" target="_blank" className="text-blue-500">
                    test:@test.co.uk
                </a>
                .
            </p>
        </div>
    );
};

export default TermsOfServicePage;
