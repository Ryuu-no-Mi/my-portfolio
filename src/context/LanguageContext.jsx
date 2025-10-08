import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "es" ? "en" : "es";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}
