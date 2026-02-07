/** @format */

import { FaHome } from "react-icons/fa";
import { FaPaintRoller, FaTrowel, FaTrowelBricks } from "react-icons/fa6";
import { GiBrickWall } from "react-icons/gi";
import { LuFence } from "react-icons/lu";

export const WhatWeOffer = () => {
    const services = [
        {
            icon: <FaHome />,
            title: "Building & Repairs",
            description:
                "We offer reliable general building services, delivering quality workmanship for everything from home improvements to full renovations.",
        },
        {
            icon: <GiBrickWall />,
            title: "Pointing",
            description:
                "Our expert pointing services enhance the durability and appearance of your property, ensuring long-lasting protection against the elements.",
        },
        {
            icon: <FaTrowel />,
            title: "Paving & Flagging",
            description:
                "We provide professional paving and flagging services, creating beautiful and durable outdoor spaces that enhance the appeal of your property.",
        },
        {
            icon: <FaTrowelBricks />,
            title: "Walling & Repairs",
            description:
                "Our expert bricklaying services combine craftsmanship and quality materials to create durable and visually appealing structures that stand the test of time.",
        },
        {
            icon: <LuFence />,
            title: "Landscaping & Fencing",
            description:
                "We offer comprehensive landscaping and fencing services, transforming your outdoor space into a beautiful and functional area that enhances the overall appeal of your property.",
        },
        {
            icon: <FaPaintRoller />,
            title: "Painting",
            description:
                "Our professional painting services provide a fresh and vibrant look to your property, enhancing its aesthetic appeal and protecting surfaces for years to come.",
        },
    ];

    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
        </div>
    );
};

const ServiceItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
    return (
        <div className="bg-background border border-primary/20 rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="text-primary text-[50px] sm:text-[50px] lg:text-[70px] my-auto">{icon}</div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl text-primary font-bold">{title}</h3>
                <p className="text-secondary text-sm sm:text-base">{description}</p>
            </div>
        </div>
    );
};
