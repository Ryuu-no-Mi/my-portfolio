import { useState, useEffect, useContext } from "react";
import { Menu, X } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Header() {
    const { lang, toggleLang } = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = content[lang];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Ryuu_no_mi
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {Object.entries(t.nav).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => scrollToSection(key)}
                            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                        >
                            {value}
                        </button>
                    ))}
                </div>

                <button
                    onClick={toggleLang}
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all text-blue-400 font-medium"
                >
                    <span className="text-lg">🌐</span>
                    <span>{lang === "es" ? "EN" : "ES"}</span>
                </button>

                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="px-6 py-4 space-y-4">
                        {Object.entries(t.nav).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => scrollToSection(key)}
                                className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                {value}
                            </button>
                        ))}
                        <button
                            onClick={toggleLang}
                            className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all text-blue-400 font-medium flex items-center justify-center gap-2"
                        >
                            <span className="text-lg">🌐</span>
                            <span>{lang === "es" ? "English" : "Español"}</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
