"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    noteId: string | null;
}

export default function DeleteModal({
    isOpen,
    onClose,
    noteId,
}: DeleteModalProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const response = await fetch(`/api/notes/${noteId}`, {
                method: "DELETE",
            });
            const result = await response.json();
            if (result.success) {
                onClose();
                router.refresh(); // Refresh halaman untuk update list
            } else {
                alert("Gagal menghapus catatan");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan");
        } finally {
            setIsDeleting(false);
        }
    };

    if (!isOpen || !noteId) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal Container */}
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button (X) */}
                <div className="flex justify-end p-4 pb-0">
                    <button
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xl transition-colors"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="px-6 pb-6 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                        🗑️
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Hapus Catatan?
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                        Apakah kamu yakin ingin menghapus catatan ini? Tindakan
                        ini tidak dapat dibatalkan.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 justify-center">
                        <button
                            className="px-6 py-3 text-gray-600 hover:text-black font-medium transition-colors border border-gray-200 rounded-xl hover:bg-gray-50"
                            onClick={onClose}
                        >
                            Tutup
                        </button>
                        <button
                            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-red-500/30"
                            onClick={handleDelete}
                            disabled={isDeleting}
                        >
                            {isDeleting ? "Menghapus..." : "Hapus"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
