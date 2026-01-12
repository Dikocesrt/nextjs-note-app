import { NextResponse } from "next/server";
import { noteService } from "@/services/noteService";
import { Note } from "@/types/note";

// GET /api/notes
export async function GET() {
    try {
        const notes = await noteService.findAll();

        return NextResponse.json({
            success: true,
            data: notes,
            total: notes.length,
        });
    } catch (error) {
        console.error("Error fetching notes:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch notes" },
            { status: 500 }
        );
    }
}

// POST /api/notes
export async function POST(request: Request) {
    try {
        const { title, content } = await request.json();

        const note: Note = {
            id: crypto.randomUUID(),
            title,
            content,
            created_at: new Date(),
            updated_at: new Date(),
        };

        const success = await noteService.create(note);
        if (success) {
            return NextResponse.json({
                success: true,
                message: "Note created successfully",
            });
        } else {
            return NextResponse.json(
                { success: false, error: "Failed to create note" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error creating note:", error);
        return NextResponse.json(
            { success: false, error: "Failed to create note" },
            { status: 500 }
        );
    }
}
