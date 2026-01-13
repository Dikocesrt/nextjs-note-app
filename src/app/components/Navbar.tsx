"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    NoteApp
                </Link>

                {/* Hamburger Button - Hanya tampil di mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMenuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>

                {/* Desktop Navigation - Hidden di mobile */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/notes"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    >
                        Notes
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/notes"
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all"
                    >
                        Create Note
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation - Muncul saat hamburger diklik */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-80 border-t border-gray-200" : "max-h-0"
                }`}
            >
                <div className="px-6 py-4 flex flex-col gap-4 bg-white">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                    >
                        Home
                    </Link>
                    <Link
                        href="/notes"
                        onClick={closeMenu}
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                    >
                        Notes
                    </Link>
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                    >
                        About
                    </Link>
                    <Link
                        href="/notes"
                        onClick={closeMenu}
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg shadow-blue-500/40 transition-all"
                    >
                        Create Note
                    </Link>
                </div>
            </div>
        </nav>
    );
}
