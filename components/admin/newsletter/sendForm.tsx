/** @format */

export const SendForm = () => {
    return (
        <div className="mb-4">
            <p className="text-secondary mb-2 text-sm">Write a message to send to all newsletter subscribers.</p>
            <input
                type="text"
                className="w-full p-3 text-sm border border-primary/20 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors mb-4"
                placeholder="Newsletter Subject"
            />
            <textarea
                className="w-full text-sm p-3 border border-primary/20 min-h-14.5 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                rows={4}
                placeholder="Write your newsletter message here..."
            ></textarea>
            <button
                className="cursor-pointer mt-2 flex items-center justify-center gap-2 px-5 py-1 bg-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-black rounded-lg transition-all duration-500 hover:scale-105"
                style={{ backgroundSize: "200% 100%" }}
            >
                <span className="font-medium">Coming Soon</span>
            </button>
        </div>
    );
};
