import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function About() {
    const { lang } = useContext(LanguageContext);
    const { about, education } = content[lang];

    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {about.title}
                    </span>
                </h2>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {about.text}
                        <br />
                        {about.description}
                    </p>
                    <div className="pt-4 border-t border-gray-700/50">
                        <p className="text-gray-400 text-md">
                            🎓 {education.fp2}
                        </p>
                    </div>
                    <div className="pt-4 border-t border-gray-700/50">
                        <p className="text-gray-400 text-md">
                            🎓 {education.fp1}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
