/** @format */

import { ReactNode } from "react";

interface HeroProps {
    icon?: ReactNode;
    title: string;
    description: ReactNode;
    children?: ReactNode;
    className?: string;
}

export const Hero = ({ icon, title, description = [], children, className = "" }: HeroProps) => (
    <div className={`relative ${className}`}>
        <div className="container mx-auto px-4 text-center">
            {icon && <div className="mb-4 flex justify-center">{icon}</div>}
            <h1 className="text-2xl md:text-4xl mb-3">
                <span className="text-primary">{title}</span>
            </h1>
            <div className="text-secondary text-sm md:text-lg max-w-2xl mx-auto mb-8">{description}</div>
            {children}
        </div>
    </div>
);
