"use client";

import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NoteFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    note: Note | null; // null = create, Note = edit
}

export default function NoteFormModal({
    isOpen,
    onClose,
    note,
}: NoteFormModalProps) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Tentukan mode: create atau edit
    const isEditMode = note !== null;

    // Reset/Pre-fill form saat modal dibuka
    useEffect(() => {
        if (isOpen) {
            if (note) {
                // Edit mode: pre-fill dengan data note
                setTitle(note.title);
                setContent(note.content || "");
            } else {
                // Create mode: reset form
                setTitle("");
                setContent("");
            }
        }
    }, [isOpen, note]);

    // Handler untuk submit (create atau update)
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const url = isEditMode ? `/api/notes/${note.id}` : "/api/notes";
            const method = isEditMode ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });

            const result = await response.json();

            if (result.success) {
                onClose();
                router.refresh();
            } else {
                alert(
                    isEditMode
                        ? "Gagal memperbarui catatan"
                        : "Gagal membuat catatan"
                );
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header - Dinamis */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-white">
                            {isEditMode ? "Edit Catatan" : "Buat Catatan Baru"}
                        </h2>
                        <button
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white text-xl transition-colors"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Modal Body - Form */}
                <form
                    className="p-6 space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(); // ← Satu handler untuk create & update
                    }}
                >
                    {/* Title Input */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Judul
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Masukkan judul catatan..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    {/* Content Textarea */}
                    <div>
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Isi Catatan
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows={6}
                            placeholder="Tulis isi catatan kamu di sini..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    {/* Modal Footer - Buttons */}
                    <div className="flex gap-3 justify-end pt-4">
                        <button
                            type="button"
                            className="px-6 py-3 text-gray-600 hover:text-black font-medium transition-colors border border-gray-200 rounded-xl hover:bg-gray-50"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading
                                ? "Menyimpan..."
                                : isEditMode
                                ? "Update"
                                : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
