import Link from "next/link";

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="py-24 text-center"
                style={{ background: "var(--gradient-hero)" }}
            >
                <div className="max-w-4xl mx-auto px-6">
                    {/* Badge */}
                    <div className="inline-block bg-white px-5 py-2 rounded-full text-sm font-semibold text-blue-600 mb-6 shadow-sm">
                        Tentang Kami
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                        Apa itu NoteApp?
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        NoteApp adalah aplikasi catatan sederhana yang membantu
                        kamu menyimpan ide, pikiran, dan catatan penting dengan
                        cara yang mudah dan terorganisir.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg shadow-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            📖 Cerita di Balik NoteApp
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                NoteApp lahir dari kebutuhan sederhana: sebuah
                                tempat untuk menyimpan catatan tanpa kerumitan.
                                Di era digital ini, kita sering kali membutuhkan
                                tempat cepat untuk menuliskan ide yang muncul
                                tiba-tiba.
                            </p>
                            <p>
                                Project ini dibuat sebagai sarana pembelajaran
                                Next.js, framework React modern yang powerful
                                untuk membangun aplikasi web full-stack. Dengan
                                NoteApp, kita belajar konsep-konsep penting
                                seperti routing, component, state management,
                                dan masih banyak lagi.
                            </p>
                            <p>
                                Meskipun sederhana, NoteApp dirancang dengan
                                best practices dan design pattern modern,
                                sehingga bisa menjadi fondasi yang kuat untuk
                                pengembangan lebih lanjut.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-blue-50/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        🛠️ Tech Stack
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Teknologi modern yang digunakan dalam project ini
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Next.js */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                N
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">
                                Next.js 15
                            </h3>
                            <p className="text-sm text-gray-500">
                                React Framework
                            </p>
                        </div>

                        {/* React */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                                ⚛️
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">
                                React 19
                            </h3>
                            <p className="text-sm text-gray-500">UI Library</p>
                        </div>

                        {/* TypeScript */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                TS
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">
                                TypeScript
                            </h3>
                            <p className="text-sm text-gray-500">Type Safety</p>
                        </div>

                        {/* Tailwind */}
                        <div className="bg-white p-8 rounded-2xl shadow-md shadow-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                                🎨
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">
                                Tailwind CSS
                            </h3>
                            <p className="text-sm text-gray-500">Styling</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Detail Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        ✨ Fitur Utama
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Apa saja yang bisa kamu lakukan dengan NoteApp?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-md shadow-gray-100">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                ✏️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Buat Catatan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Tulis catatan baru dengan mudah. Cukup
                                    masukkan judul dan isi, catatan kamu akan
                                    langsung tersimpan.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-md shadow-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                📋
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Lihat Semua Catatan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Lihat semua catatan yang sudah kamu buat
                                    dalam tampilan card yang rapi dan mudah
                                    dibaca.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-md shadow-gray-100">
                            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                ✂️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Edit Catatan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Perlu mengubah sesuatu? Edit catatan yang
                                    sudah ada dengan mudah kapan saja.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex gap-6 bg-white p-8 rounded-2xl shadow-md shadow-gray-100">
                            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                🗑️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Hapus Catatan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Catatan sudah tidak diperlukan? Hapus dengan
                                    satu klik dan jaga koleksi catatanmu tetap
                                    rapi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Section */}
            <section className="py-20 bg-blue-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        👨‍💻 Developer
                    </h2>

                    <div className="bg-white rounded-3xl p-10 shadow-lg shadow-gray-100 text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                            👤
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Diko Cesartista
                        </h3>
                        <p className="text-blue-600 font-medium mb-4">
                            Backend Engineer & Freelancer
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">
                            Seorang backend engineer dan freelancer fullstack
                            developer.
                        </p>
                        <div className="flex justify-center gap-4">
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                Go
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                Laravel
                            </span>
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                Next.js
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                TypeScript
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Siap untuk Mencoba?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Mulai catat ide dan pikiranmu sekarang juga!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/notes"
                            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all"
                        >
                            Lihat Catatan
                        </Link>
                        <Link
                            href="/"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all"
                        >
                            Kembali ke Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
