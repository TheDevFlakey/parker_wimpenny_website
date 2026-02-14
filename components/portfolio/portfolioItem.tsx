/** @format */

type PortfolioItemProps = {
    title: string;
    description: string;
    image: string;
};

export const PortfolioItem = ({ title, description, image }: PortfolioItemProps) => {
    return (
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-78 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="text-sm text-secondary mt-2">{description}</p>
            </div>
        </div>
    );
};
