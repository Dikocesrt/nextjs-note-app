import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="py-32 text-center"
                style={{ background: "var(--gradient-hero)" }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    {/* Badge */}
                    <div className="inline-block bg-white px-5 py-2 rounded-full text-sm font-semibold text-blue-600 mb-6 shadow-sm">
                        Welcome to NoteApp
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                        Simpan Ide & Pikiran
                        <br />
                        Kamu dengan Mudah
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        NoteApp membantu kamu menyimpan catatan, ide, dan
                        pikiran dengan cara yang simpel dan terorganisir. Mulai
                        tulis sekarang!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/notes"
                            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all"
                        >
                            Lihat Catatan
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all"
                        >
                            Pelajari Lebih Lanjut
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Kenapa NoteApp?
                    </h2>
                    <p className="text-center text-gray-600 mb-16 text-lg">
                        Fitur-fitur yang membuat pencatatan menjadi lebih
                        menyenangkan
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                ⚡
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Cepat & Simpel
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tulis catatan dalam hitungan detik. Tanpa fitur
                                yang rumit, langsung ke inti.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                🔒
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Aman & Terpercaya
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Catatan kamu tersimpan dengan aman. Privasi
                                adalah prioritas utama kami.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                📱
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Akses Dimana Saja
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Responsive design memastikan kamu bisa akses
                                catatan dari perangkat apapun.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
