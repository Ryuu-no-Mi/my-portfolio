import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";
import esFlag from "../assets/esFlag.png";
import enFlag from "../assets/enFlag.png";

export default function Header() {
    const { lang, toggleLang } = useContext(LanguageContext);
    const t = content[lang];

    return (
        <header className="text-center py-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg relative">
            <button
                onClick={toggleLang}
                className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition"
            >
                <img
                    src={lang === "es" ? enFlag : esFlag}
                    alt={lang === "es" ? "English" : "Español"}
                    className="w-6 h-6 rounded-full"
                />
            </button>

            <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
                {t.name}
            </h1>
            <p className="text-lg opacity-90">{t.role}</p>
        </header>
    );
}
