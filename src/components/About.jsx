import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function About() {
    const { lang } = useContext(LanguageContext);
    const { about } = content[lang];

    return (
        <section className="text-center py-8">
            <h2 className="text-3xl font-semibold text-blue-400 mb-3">
                {about.title}
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
                {about.text}
            </p>
        </section>
    );
}
