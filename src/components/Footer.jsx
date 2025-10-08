import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Footer() {
    const { lang } = useContext(LanguageContext);
    const { footer, username } = content[lang];

    return (
        <footer className="py-8 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
                <p>
                    © {new Date().getFullYear()} {username}
                </p>
                <p className="mt-2">
                    {footer} <span className="text-red-500">❤️</span> React &
                    Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
