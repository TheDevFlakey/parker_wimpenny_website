/** @format */

import { ContactForm } from "@/components/shared/contact-form";
import type { Metadata } from "next";
import { SubcontractingSection } from "@/components/shared/subcontractingSection";

export const metadata: Metadata = {
    title: "Contact Us | Parker Wimpenny Construction & Landscaping",
    description:
        "Get in touch with Parker Wimpenny, a trusted construction and landscaping company in Huddersfield. Contact us today for a free quote or to discuss your project.",
    alternates: {
        canonical: "https://yourdomain.co.uk/contact",
    },
};

const ContactPage = () => {
    return (
        <div className="bg-background pt-20">
            <ContactForm />
            <SubcontractingSection />
        </div>
    );
};

export default ContactPage;
