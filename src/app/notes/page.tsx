import { noteService } from "@/services/noteService";
import NotesList from "../components/NotesList";

// Ini tetap Server Component (fetch data)
export default async function Notes() {
    const notes = await noteService.findAll();
    return (
        <div>
            {/* Hero Section - tanpa button */}
            <section
                className="py-16 text-center"
                style={{ background: "var(--gradient-hero)" }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="inline-block bg-white px-5 py-2 rounded-full text-sm font-semibold text-blue-600 mb-6 shadow-sm">
                        Catatan Kamu
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                        Semua Catatan
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Kumpulan ide dan pikiran yang sudah kamu tulis
                    </p>
                    {/* Button dipindah ke NotesList */}
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <NotesList notes={notes} />
                </div>
            </section>
        </div>
    );
}
