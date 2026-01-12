import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "NoteApp - Simpan Ide & Pikiran Kamu",
    description:
        "Aplikasi catatan sederhana untuk menyimpan ide dan pikiran kamu. Dibuat dengan Next.js.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen">
                <Navbar />
                <main className="min-h-[calc(100vh-200px)]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
