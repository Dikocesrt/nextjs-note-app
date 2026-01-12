import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-blue-200 pt-12 pb-6 mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-4">
                            NoteApp
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Aplikasi catatan sederhana untuk menyimpan ide dan
                            pikiran kamu. Dibuat dengan ❤️ menggunakan Next.js.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/notes"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Notes
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-3 text-gray-600">
                            <span>📧 dikocesrt@gmail.com</span>
                            <span>📱 082231703500</span>
                            <span>📍 Yogyakarta, Indonesia</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-blue-200 pt-6 text-center text-gray-500">
                    © 2026 NoteApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
