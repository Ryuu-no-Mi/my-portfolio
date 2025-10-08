import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Projects() {
    const { lang } = useContext(LanguageContext);
    const { projects } = content[lang];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-semibold text-blue-400 text-center mb-8">
                {projects.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.list.map((p, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all"
                    >
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">
                            {p.name}
                        </h3>
                        <p className="text-gray-300 mb-3">{p.desc}</p>
                        <p className="text-sm text-gray-400 mb-4">
                            <strong>Tech:</strong> {p.tech}
                        </p>
                        <a
                            href={p.link}
                            target="_blank"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            🔗 GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
