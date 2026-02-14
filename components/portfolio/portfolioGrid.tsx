/** @format */

import { PortfolioItem } from "./portfolioItem";

type PortfolioItemType = {
    title: string;
    description: string;
    image: string;
};

type PortfolioGridProps = {
    items: PortfolioItemType[];
};

export const PortfolioGrid = ({ items }: PortfolioGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <PortfolioItem key={index} title={item.title} description={item.description} image={item.image} />
            ))}
        </div>
    );
};
