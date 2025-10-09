import { useContext } from "react";
import { Code, ChevronDown } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Hero() {
    const { lang } = useContext(LanguageContext);
    const t = content[lang];

    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="text-center space-y-6 animate-fade-in">
                <div className="flex justify-center">
                    <img
                        src={`${import.meta.env.BASE_URL}assets/Orla.jpg`}
                        alt="Jaime Andrés"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top  border-4 border-blue-500/40 shadow-lg shadow-blue-500/20 mb-6"
                    />
                </div>

                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4">
                    <Code className="inline w-4 h-4 mr-2" />
                    {t.role}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-gray-400">{t.hero.greeting}</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Jaime Andrés
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    {t.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 justify-center pt-6">
                    <button
                        onClick={() =>
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all transform hover:scale-105"
                    >
                        {t.hero.cta}
                    </button>
                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-8 py-3 border border-blue-500/50 hover:bg-blue-500/10 rounded-lg font-medium transition-all"
                    >
                        {t.hero.contact}
                    </button>
                </div>

                <div className="pt-12 animate-bounce">
                    <ChevronDown className="w-6 h-6 mx-auto text-gray-500" />
                </div>
            </div>
        </section>
    );
}
