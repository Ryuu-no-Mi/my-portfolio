import { useContext } from "react";
import { Briefcase } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Experience() {
    const { lang } = useContext(LanguageContext);
    const { experience } = content[lang];

    return (
        <section id="experience" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {experience.title}
                    </span>
                </h2>

                <div className="space-y-8">
                    {experience.jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="flex items-start gap-3 mb-3 md:mb-0">
                                    <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                                        <Briefcase className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-100">
                                            {job.company}
                                        </h3>
                                        <p className="text-blue-400 font-medium">
                                            {job.role}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {job.type}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full whitespace-nowrap">
                                    {job.period}
                                </span>
                            </div>

                            <ul className="space-y-2 mb-4">
                                {job.achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-300 text-sm flex items-start gap-2"
                                    >
                                        <span className="text-blue-400 ">
                                            ▹
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-3 border-t border-gray-700/50">
                                <p className="text-xs text-gray-500">
                                    <strong className="text-gray-400">
                                        Stack:
                                    </strong>{" "}
                                    {job.tech}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
