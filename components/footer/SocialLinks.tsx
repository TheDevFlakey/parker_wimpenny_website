/** @format */

import { FaFacebook, FaInstagram } from "react-icons/fa6";

type Social = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const socials: Social[] = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: <FaInstagram className="h-5 w-5" />,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: <FaFacebook className="h-5 w-5" />,
    },
];

export default function SocialLinks() {
    return (
        <div className="flex space-x-4 mt-6">
            {socials.map((s) => (
                <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-primary hover:text-primary bg-primary/5 hover:scale-110 transition-all duration-300 p-2 rounded-full border border-primary/10 hover:border-primary/30"
                >
                    <span className="sr-only">{s.label}</span>
                    {s.icon}
                </a>
            ))}
        </div>
    );
}
