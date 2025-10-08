import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Footer() {
    const { lang } = useContext(LanguageContext);
    const { name } = content[lang];

    return (
        <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-700">
            © {new Date().getFullYear()} {name} — Built with React & TailwindCSS
            💙
        </footer>
    );
}
