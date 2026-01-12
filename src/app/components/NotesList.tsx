"use client";

import { useState } from "react";
import NoteModal from "./NoteModal";
import { Note } from "@/types/note";
import DeleteModal from "./DeleteModal";
import NoteFormModal from "./NoteFormModal";

interface NotesListProps {
    notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
    // State untuk modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
    const [isNoteFormModalOpen, setIsNoteFormModalOpen] = useState(false);
    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null); // ← State terpisah untuk edit

    // Handler untuk membuka modal
    const handleOpenModal = (note: Note) => {
        setSelectedNote(note);
        setIsModalOpen(true);
    };

    // Handler untuk menutup modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedNote(null);
    };

    const handleOpenDeleteModal = (noteId: string) => {
        setSelectedNoteId(noteId);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedNoteId(null);
    };

    // Handler untuk form modal (create)
    const handleOpenNoteFormModal = () => {
        setNoteToEdit(null); // null = create mode
        setIsNoteFormModalOpen(true);
    };
    const handleCloseNoteFormModal = () => {
        setIsNoteFormModalOpen(false);
        setNoteToEdit(null);
    };
    // Handler untuk form modal (edit)
    const handleOpenEditModal = (note: Note) => {
        setNoteToEdit(note); // set note = edit mode
        setIsNoteFormModalOpen(true);
    };

    return (
        <>
            {/* Header dengan Button */}
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">
                    Menampilkan{" "}
                    <span className="font-semibold text-gray-900">
                        {notes.length}
                    </span>{" "}
                    catatan
                </p>
                <button
                    onClick={handleOpenNoteFormModal}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all"
                >
                    <span className="text-xl">+</span>
                    Buat Catatan Baru
                </button>
            </div>

            {/* Conditional Rendering */}
            {notes.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                        📝
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Belum ada catatan
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Mulai tulis catatan pertamamu sekarang!
                    </p>
                    <button
                        onClick={handleOpenNoteFormModal}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all"
                    >
                        <span className="text-xl">+</span>
                        Buat Catatan Baru
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <div
                            key={note.id}
                            className="bg-white rounded-2xl shadow-md shadow-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-blue-300 to-blue-400 p-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-white/80 text-sm">
                                        {new Date(
                                            note.created_at
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <div className="flex gap-2">
                                        <button
                                            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors"
                                            onClick={() =>
                                                handleOpenEditModal(note)
                                            }
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="w-8 h-8 bg-white/20 hover:bg-red-500/80 rounded-lg flex items-center justify-center text-white transition-colors"
                                            onClick={() =>
                                                handleOpenDeleteModal(note.id)
                                            }
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {note.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed line-clamp-3">
                                    {note.content || "Tidak ada konten"}
                                </p>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 pb-6">
                                <button
                                    onClick={() => handleOpenModal(note)}
                                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                                >
                                    Baca selengkapnya
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal Component */}
            <NoteModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                note={selectedNote}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                noteId={selectedNoteId}
            />

            <NoteFormModal
                isOpen={isNoteFormModalOpen}
                onClose={handleCloseNoteFormModal}
                note={noteToEdit}
            />
        </>
    );
}
