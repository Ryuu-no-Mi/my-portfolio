import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Contact() {
    const { lang } = useContext(LanguageContext);
    const { contact } = content[lang];

    return (
        <section className="text-center py-10">
            <h2 className="text-3xl font-semibold text-blue-400 mb-6">
                {contact.title}
            </h2>
            <ul className="space-y-2 text-lg">
                <li>
                    {contact.email}:{" "}
                    <a
                        href="mailto:andres@email.com"
                        className="text-blue-400 hover:underline"
                    >
                        andres@email.com
                    </a>
                </li>
                <li>
                    {contact.linkedin}:{" "}
                    <a
                        href="https://linkedin.com/in/andresmonserrate"
                        className="text-blue-400 hover:underline"
                    >
                        linkedin.com/in/andresmonserrate
                    </a>
                </li>
                <li>
                    {contact.github}:{" "}
                    <a
                        href="https://github.com/tuusuario"
                        className="text-blue-400 hover:underline"
                    >
                        github.com/tuusuario
                    </a>
                </li>
            </ul>
        </section>
    );
}
