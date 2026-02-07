/** @format */

import Link from "next/link";
import Image from "next/image";
import { FaTrowel } from "react-icons/fa6";

export default function FooterLogo() {
    return (
        <Link href="/" className="group flex items-center space-x-2 mb-6 w-fit">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary/10 border border-primary/20 to-accent flex items-center justify-center text-white font-bold text-xl transition-all">
                <FaTrowel className="m-auto text-primary text-xl" />
            </div>

            <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold text-white font-semplicita tracking-widest group-hover:text-primary transition-colors">
                    Parker Wimpenny
                </span>
            </div>
        </Link>
    );
}
