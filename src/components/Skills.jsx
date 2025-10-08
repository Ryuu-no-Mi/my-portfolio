import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content, skillsData } from "../data/content";

export default function Skills() {
    const { lang } = useContext(LanguageContext);
    const { skills } = content[lang];

    const categories = [
        {
            key: "backend",
            title: skills.backend,
            items: skillsData.backend,
            color: "from-blue-500 to-cyan-500",
        },
        {
            key: "frontend",
            title: skills.frontend,
            items: skillsData.frontend,
            color: "from-purple-500 to-pink-500",
        },
        {
            key: "database",
            title: skills.database,
            items: skillsData.database,
            color: "from-green-500 to-emerald-500",
        },
        {
            key: "tools",
            title: skills.tools,
            items: skillsData.tools,
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {skills.title}
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.key}
                            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all"
                        >
                            <h3
                                className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                            >
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
