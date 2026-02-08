/** @format */

interface UsernameInputProps {
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UsernameInput = ({ label, placeholder, type = "text", value, onChange }: UsernameInputProps) => {
    return (
        <div className="mt-6">
            <label className="mb-1 block text-xs text-gray-400">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/40"
            />
        </div>
    );
};
