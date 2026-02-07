/** @format */

import { ContactForm } from "@/components/shared/contact-form";
import { FaTrowel } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div className="bg-background pt-20">
            <ContactForm />
            <div className="w-full bg-accent flex flex-col py-10 mb-10 px-4 border-t border-primary/20 border-b">
                <FaTrowel className="text-4xl md:text-6xl text-primary mx-auto" />
                <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mt-4">Sub Contracting</h2>
                <p className="text-sm md:text-lg text-secondary text-center mt-2 mb-10">
                    We work with a number of local builders and landscapers on all kinds of projects.
                    <br />
                    If you need an extra pair of hands on a project, please contact us to discuss how we can help.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
