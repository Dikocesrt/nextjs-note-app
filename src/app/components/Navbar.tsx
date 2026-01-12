import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    NoteApp
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
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
        </nav>
    );
}
