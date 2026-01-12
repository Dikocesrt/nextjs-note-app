import { noteService } from "@/services/noteService";
import { Note } from "@/types/note";
import { NextResponse } from "next/server";

// DELETE /api/notes/:id
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const success = await noteService.delete(id);
        if (success) {
            return NextResponse.json({
                success: true,
                message: "Note deleted successfully",
            });
        } else {
            return NextResponse.json(
                { success: false, error: "Note not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error deleting note:", error);
        return NextResponse.json(
            { success: false, error: "Failed to delete note" },
            { status: 500 }
        );
    }
}

// PUT /api/notes/:id
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { title, content } = await request.json();
        const success = await noteService.update(id, { title, content });
        if (success) {
            return NextResponse.json({
                success: true,
                message: "Note updated successfully",
            });
        } else {
            return NextResponse.json(
                { success: false, error: "Note not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error updating note:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update note" },
            { status: 500 }
        );
    }
}
