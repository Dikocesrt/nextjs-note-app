"use client"; // ← Ini memberitahu Next.js: ini Client Component!

import { Note } from "@/types/note";

interface NoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    note: Note | null;
}

export default function NoteModal({ isOpen, onClose, note }: NoteModalProps) {
    // Jika tidak terbuka atau tidak ada note, jangan render apapun
    if (!isOpen || !note) return null;

    return (
        // Backdrop (latar belakang gelap)
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose} // Klik di luar modal = tutup
        >
            {/* Modal Container */}
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-white/80 text-sm">
                                {new Date(note.created_at).toLocaleDateString(
                                    "id-ID",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                            <h2 className="text-2xl font-bold text-white mt-2">
                                {note.title}
                            </h2>
                        </div>
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white text-xl transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto max-h-[50vh]">
                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {note.content || "Tidak ada konten"}
                        </p>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-100 p-4 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-600 hover:text-black font-medium transition-colors border border-gray-200 rounded-xl hover:bg-gray-50"
                    >
                        Tutup
                    </button>
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
