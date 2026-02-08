/** @format */

interface RespondButtonProps {
    onClick: () => void;
    responded: boolean;
}

export const RespondButton = ({ onClick, responded }: RespondButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${responded ? "bg-red-500 text-white" : "bg-green-500 text-black"} cursor-pointer mt-4 flex items-center justify-center gap-2 px-5 py-1 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg transition-all duration-500 hover:scale-105`}
            style={{ backgroundSize: "200% 100%" }}
        >
            <span className="font-medium">{responded ? "Unresponded" : "Respond"}</span>
        </button>
    );
};
