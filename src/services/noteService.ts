import { prisma } from "@/lib/prisma";
import { Note } from "@/types/note";

export const noteService = {
    async findAll(): Promise<Note[]> {
        const notes = await prisma.notes.findMany({
            orderBy: {
                created_at: "desc",
            },
        });
        return notes as Note[];
    },

    async delete(id: string): Promise<boolean> {
        try {
            await prisma.notes.delete({
                where: { id },
            });
            return true;
        } catch {
            return false;
        }
    },

    async create(note: Note): Promise<boolean> {
        try {
            await prisma.notes.create({
                data: note,
            });
            return true;
        } catch {
            return false;
        }
    },

    async update(
        id: string,
        data: { title: string; content: string }
    ): Promise<boolean> {
        try {
            await prisma.notes.update({
                where: { id },
                data: {
                    title: data.title,
                    content: data.content,
                    updated_at: new Date(),
                },
            });
            return true;
        } catch {
            return false;
        }
    },
};
