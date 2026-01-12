export interface Note {
    id: string;
    title: string;
    content: string | null;
    created_at: Date;
    updated_at: Date | null;
}

export interface NoteResponse {
    id: string;
    title: string;
    content: string | null;
    createdAt: Date;
    updatedAt: Date | null;
}

export interface NotesListResponse {
    data: Note[];
    total: number;
}

export interface CreateNoteInput {
    title: string;
    content: string;
}

export interface UpdateNoteInput {
    title?: string;
    content?: string;
}
