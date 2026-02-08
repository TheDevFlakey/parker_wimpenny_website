/** @format */
"use client";

import { useState } from "react";
import { FaEye } from "react-icons/fa";

interface PasswordSectionProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordSection = ({ value, onChange }: PasswordSectionProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mt-4">
            <div className="mb-1 flex items-center justify-between">
                <label className="text-xs text-gray-400">Password</label>
            </div>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/40"
                />
                <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                />
            </div>
        </div>
    );
};
